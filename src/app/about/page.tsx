import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Eye, Gem, Target, MapPin } from 'lucide-react'
import { MAP_LINK, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${SITE.name} — a software engineering and IT staffing company based in Hyderabad, India.`,
}

const PILLARS = [
  { icon: Target, title: 'Mission', text: 'Help businesses build smarter with technology that is dependable, maintainable and built to last.' },
  { icon: Eye, title: 'Vision', text: 'Be the trusted engineering partner for companies that need software and talent to grow.' },
  { icon: Gem, title: 'Values', text: 'Ownership, quality and continuous learning — in every project and every hire.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-navy-50">
        <div className="container-x py-16 lg:py-24">
          <p className="kicker">About us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Driven by people. Powered by <span className="accent-word">technology.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
          <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl">
            A team of engineers, designers and problem-solvers.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              {SITE.name} builds software products, AI solutions and cloud platforms for businesses, and supplies the
              technical talent to keep them running.
            </p>
            <p>
              We work in short, transparent iterations, document the decisions we make, and stay engaged after launch —
              because the real test of software is how it performs a year later.
            </p>
            <p>Our team is based in HITEC City, Hyderabad, and works with clients across industries.</p>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-px border border-navy/10 bg-navy/10 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center bg-brand-100 text-brand">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-20 lg:pb-28">
        <div className="grid grid-cols-1 items-center gap-8 bg-navy p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Our office</p>
            <h2 className="mt-3 text-3xl font-extrabold !text-white">Hyderabad, India</h2>
            <address className="mt-5 flex gap-3 not-italic text-white/80">
              <MapPin className="mt-1 shrink-0 text-sun" size={20} />
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-white">
                {SITE.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </a>
            </address>
          </div>
          <div className="lg:text-right">
            <Link href="/contact" className="btn-primary">
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
