import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SERVICES, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description: `Services from ${SITE.name}: product engineering, AI, cloud and DevOps, enterprise integration, application support and IT staffing.`,
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-navy-50">
        <div className="container-x py-16 lg:py-24">
          <p className="kicker">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Everything you need to build, run and <span className="accent-word">grow</span> technology.
          </h1>
          <ul className="mt-8 flex flex-wrap gap-2">
            {SERVICES.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-brand hover:text-brand"
                >
                  {String(i + 1).padStart(2, '0')} · {s.title.split(' & ')[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-x">
        {SERVICES.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="grid grid-cols-1 scroll-mt-32 gap-8 border-b border-navy/10 py-14 last:border-0 lg:grid-cols-[0.7fr_1.2fr] lg:gap-16"
          >
            <div>
              <span className="font-display text-6xl font-extrabold text-brand/25">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="mt-2 text-2xl font-extrabold leading-snug sm:text-3xl">{s.title}</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed">{s.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 border border-navy/10 px-4 py-3 text-sm font-medium text-navy">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="container-x py-16">
        <div className="flex flex-col items-start justify-between gap-6 bg-brand-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <h2 className="max-w-lg text-2xl font-extrabold sm:text-3xl">Not sure where to start? Talk to our team.</h2>
          <Link href="/contact" className="btn-primary shrink-0">
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
