import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { INDUSTRIES, PROCESS, SERVICES, STACK } from '@/lib/site'

const FACTS = [
  { k: '7', v: 'Service lines under one roof' },
  { k: 'AI', v: 'Built into how we engineer' },
  { k: 'IND', v: 'Delivery from Hyderabad, India' },
]

export default function HomePage() {
  const loop = [...STACK, ...STACK]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,#0B2A5E0D_1px,transparent_1px),linear-gradient(to_bottom,#0B2A5E0D_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_40%,#000,transparent_70%)]" />
        <div className="container-x relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <p className="kicker">Software · AI · Talent</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Software that moves your business <span className="accent-word">forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              ADK Softech designs and builds web and mobile products, AI systems and cloud platforms — and provides the
              engineers to run them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-outline">
                Explore services
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 border-t border-navy/10 pt-6">
              {FACTS.map((f, i) => (
                <div key={f.k} className={i ? 'border-l border-navy/10 pl-5' : ''}>
                  <dt className="font-display text-3xl font-extrabold text-navy">{f.k}</dt>
                  <dd className="mt-1 text-xs leading-snug">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="absolute -left-4 top-6 h-44 w-44 rounded-full bg-sun/40 blur-3xl" />
            <div className="absolute -right-2 bottom-4 h-52 w-52 rounded-full bg-azure/30 blur-3xl" />
            <div className="absolute inset-6 border border-navy/10" />
            <div className="absolute inset-0 -rotate-6 border border-brand/30" />
            <Image
              src="/icon.png"
              alt=""
              width={512}
              height={512}
              priority
              className="relative h-full w-full animate-floaty mix-blend-multiply"
            />
            <div className="absolute -left-2 bottom-10 border border-navy/10 bg-white px-4 py-3 shadow-[0_18px_40px_-20px_rgba(11,42,94,0.45)]">
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand">Now building</p>
              <p className="mt-0.5 font-display text-sm font-bold text-navy">LLM &amp; agent platforms</p>
            </div>
            <div className="absolute -right-2 top-10 border border-navy/10 bg-white px-4 py-3 shadow-[0_18px_40px_-20px_rgba(11,42,94,0.45)]">
              <p className="text-[11px] font-bold uppercase tracking-widest text-azure">Delivering</p>
              <p className="mt-0.5 font-display text-sm font-bold text-navy">Cloud-native products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack marquee */}
      <section className="border-y border-navy/10 bg-navy py-4" aria-label="Technologies we work with">
        <div className="mask-fade overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {loop.map((s, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-sm font-semibold uppercase tracking-widest text-white/80">
                {s}
                <span className="h-1.5 w-1.5 rotate-45 bg-brand" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="kicker">What we do</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              End-to-end technology, from first idea to ongoing support.
            </h2>
            <p className="mt-5 leading-relaxed">
              Seven service lines that cover the full life of a product — and the people who build and run it.
            </p>
            <Link href="/services" className="btn-primary mt-7">
              All services <ArrowRight size={16} />
            </Link>
          </div>

          <ol className="border-t border-navy/10">
            {SERVICES.map((s, i) => (
              <li key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="group relative grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-b border-navy/10 py-6 transition-colors hover:bg-brand-50 sm:grid-cols-[4rem_1fr_auto] sm:px-3"
                >
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="font-display text-2xl font-extrabold text-navy/25 transition-colors group-hover:text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <h3 className="text-lg font-bold leading-snug sm:text-xl">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed">{s.summary}</p>
                  </span>
                  <ArrowUpRight className="mt-1 text-navy/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" size={22} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-50 py-20 lg:py-24">
        <div className="container-x">
          <p className="kicker">How we work</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            A simple process, run with discipline.
          </h2>
          <div className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <div aria-hidden className="absolute left-0 right-0 top-[22px] hidden h-px bg-navy/20 md:block" />
            {PROCESS.map((p) => (
              <div key={p.n} className="relative">
                <span className="relative flex h-11 w-11 items-center justify-center bg-brand font-display text-sm font-bold text-white [clip-path:polygon(0_0,100%_50%,0_100%)] pr-2">
                  <span className="-ml-1">{p.n}</span>
                </span>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-24">
        <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="kicker">Industries</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">Solving real business challenges.</h2>
            <p className="mt-4 leading-relaxed">
              We work with ambitious businesses and turn complex challenges into practical, scalable technology.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {INDUSTRIES.map((ind) => (
              <li
                key={ind}
                className="flex items-center gap-3 border border-navy/10 px-5 py-4 font-display text-sm font-semibold text-navy transition-colors hover:border-brand hover:bg-brand-50"
              >
                <Check size={16} className="text-brand" /> {ind}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="relative overflow-hidden bg-navy px-8 py-14 sm:px-14 lg:py-16">
          <div aria-hidden className="play-clip absolute -right-10 top-1/2 h-[380px] w-[340px] -translate-y-1/2 bg-gradient-to-br from-sun via-brand to-flame opacity-95 max-lg:opacity-25" />
          <div aria-hidden className="play-clip absolute right-24 top-1/2 h-[240px] w-[210px] -translate-y-1/2 bg-azure/70 max-lg:hidden" />
          <div className="relative max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun">Let&apos;s talk</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-4xl">
              Have a product to build or a team to grow?
            </h2>
            <p className="mt-4 text-white/75">Tell us what you need. We&apos;ll come back with a clear next step.</p>
            <Link href="/contact" className="btn-primary mt-7">
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
