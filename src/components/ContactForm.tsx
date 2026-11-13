'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { SITE } from '@/lib/site'

const field =
  'w-full border border-navy/20 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Could not send message.')
      form.reset()
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send message.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="border border-navy/10 bg-white p-6 shadow-[0_24px_60px_-34px_rgba(11,42,94,0.45)] sm:p-8">
      <h2 className="text-2xl font-extrabold">Send us a message</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          Name
          <input name="name" required maxLength={120} autoComplete="name" className={`${field} mt-1.5`} placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold text-navy">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={`${field} mt-1.5`} placeholder="you@company.com" />
        </label>
        <label className="text-sm font-semibold text-navy">
          Phone
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            pattern="\+?[0-9 ]{7,20}"
            title="Enter number with country code, e.g. +91 98765 43210"
            autoComplete="tel"
            className={`${field} mt-1.5`}
            placeholder="+91 98765 43210"
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Subject
          <input name="subject" maxLength={150} className={`${field} mt-1.5`} placeholder="How can we help?" />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">
          Message
          <textarea name="message" required maxLength={5000} rows={5} className={`${field} mt-1.5 resize-y`} placeholder="Tell us about your project or hiring need" />
        </label>
        {/* Honeypot: hidden from people, bots fill it */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn-primary mt-6 disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'} <Send size={16} />
      </button>
      {status === 'sent' && (
        <p role="status" className="mt-4 text-sm font-semibold text-navy">
          Thanks — your message is on its way. We&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="mt-4 text-sm text-flame">
          {error} You can also write to{' '}
          <a href={`mailto:${SITE.email}`} className="font-semibold underline">
            {SITE.email}
          </a>
          .
        </p>
      )}
    </form>
  )
}
