'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { SITE } from '@/lib/site'

const field =
  'w-full border border-navy/20 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20'

/** No backend: the message is composed into the visitor's own mail client. */
export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const get = (k: string) => String(f.get(k) ?? '').trim()
    const body = `Name: ${get('name')}\nEmail: ${get('email')}\nPhone: ${get('phone')}\n\n${get('message')}`
    const subject = get('subject') || `Enquiry from ${get('name')}`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="border border-navy/10 bg-white p-6 shadow-[0_24px_60px_-34px_rgba(11,42,94,0.45)] sm:p-8">
      <h2 className="text-2xl font-extrabold">Send us a message</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          Name
          <input name="name" required autoComplete="name" className={`${field} mt-1.5`} placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold text-navy">
          Email
          <input name="email" type="email" required autoComplete="email" className={`${field} mt-1.5`} placeholder="you@company.com" />
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
          <input name="subject" className={`${field} mt-1.5`} placeholder="How can we help?" />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">
          Message
          <textarea name="message" required rows={5} className={`${field} mt-1.5 resize-y`} placeholder="Tell us about your project or hiring need" />
        </label>
      </div>
      <button type="submit" className="btn-primary mt-6">
        Send message <Send size={16} />
      </button>
      {sent && (
        <p role="status" className="mt-4 text-sm text-slate-600">
          Your email app should open with the message ready to send. If it doesn&apos;t, write to{' '}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-brand">
            {SITE.email}
          </a>
          .
        </p>
      )}
    </form>
  )
}
