import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { NAV, SERVICES, SITE, MAP_LINK } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t-4 border-brand bg-navy-50">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.4fr_1.2fr]">
        <div>
          <Image src="/logo.png" alt={SITE.name} width={1980} height={350} className="h-10 w-auto mix-blend-multiply" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{SITE.description}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="transition-colors hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                {SITE.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-brand" />
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-brand">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/10">
        <div className="container-x py-5 text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
      </div>
    </footer>
  )
}
