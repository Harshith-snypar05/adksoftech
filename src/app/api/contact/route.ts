import { SITE } from '@/lib/site'

export const runtime = 'nodejs'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const clip = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max)

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY
  if (!key) return Response.json({ error: 'Email service not configured.' }, { status: 500 })

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: bots fill the hidden field. Pretend success.
  if (clip(body.website, 200)) return Response.json({ ok: true })

  const name = clip(body.name, 120)
  const email = clip(body.email, 200)
  const phone = clip(body.phone, 40)
  const subject = clip(body.subject, 150) || `Website enquiry from ${name}`
  const message = clip(body.message, 5000)

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please fill in name, a valid email and message.' }, { status: 400 })
  }

  const html = `
    <h2>New enquiry from ${SITE.name} website</h2>
    <p><strong>Name:</strong> ${esc(name)}<br/>
    <strong>Email:</strong> ${esc(email)}<br/>
    <strong>Phone:</strong> ${esc(phone) || '-'}</p>
    <p style="white-space:pre-wrap">${esc(message)}</p>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || `${SITE.name} <onboarding@resend.dev>`,
      to: [SITE.email],
      reply_to: email,
      subject,
      html,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\n${message}`,
    }),
  })

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
    return Response.json({ error: 'Could not send message. Please email us directly.' }, { status: 502 })
  }
  return Response.json({ ok: true })
}
