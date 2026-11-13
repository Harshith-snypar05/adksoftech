'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Menu, X } from 'lucide-react'
import { NAV, SITE } from '@/lib/site'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="hidden bg-navy text-[12px] text-white/80 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-sun" /> HITEC City, Hyderabad, India
          </span>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition-colors hover:text-sun">
            <Mail size={13} className="text-sun" /> {SITE.email}
          </a>
        </div>
      </div>

      <div className="container-x flex h-[68px] items-center justify-between">
        <Link href="/" aria-label={`${SITE.name} home`} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt={SITE.name} width={1980} height={350} priority className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((n) => {
            const active = n.href === '/' ? pathname === '/' : pathname.startsWith(n.href)
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                  active ? 'text-brand' : 'text-navy hover:text-brand'
                }`}
              >
                {n.label}
                <span
                  className={`absolute inset-x-4 -bottom-[13px] h-[3px] bg-brand transition-transform duration-200 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <Link href="/contact" className="btn-primary hidden !py-2.5 md:inline-flex">
          Get in touch <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          className="p-2 text-navy md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/10 bg-white md:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/5 py-3.5 text-base font-semibold text-navy last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Get in touch
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
