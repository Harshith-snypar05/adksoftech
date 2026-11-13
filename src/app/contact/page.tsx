import type { Metadata } from 'next'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { MAP_EMBED, MAP_LINK, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${SITE.name} for software development, AI, cloud and IT staffing. Based in HITEC City, Hyderabad, India.`,
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-navy-50">
        <div className="container-x py-16 lg:py-24">
          <p className="kicker">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Let&apos;s build what&apos;s <span className="accent-word">next.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg">Tell us about your project or hiring need and we&apos;ll get back to you.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-5">
            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-start gap-4 border border-navy/10 p-6 transition-colors hover:border-brand"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand text-white">
                <Mail size={22} />
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-bold text-navy">Email us</span>
                <span className="mt-1 block text-brand">{SITE.email}</span>
              </span>
              <ArrowUpRight className="text-navy/30 transition-colors group-hover:text-brand" size={20} />
            </a>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border border-navy/10 p-6 transition-colors hover:border-brand"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy text-white">
                <MapPin size={22} />
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-bold text-navy">Visit us</span>
                <span className="mt-1 block leading-relaxed">
                  {SITE.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </span>
              <ArrowUpRight className="text-navy/30 transition-colors group-hover:text-brand" size={20} />
            </a>

            <div className="overflow-hidden border border-navy/10">
              <iframe
                title={`${SITE.name} office location`}
                src={MAP_EMBED}
                className="h-60 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
