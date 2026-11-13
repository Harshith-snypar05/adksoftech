import type { Metadata } from 'next'
import { Sora, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

const display = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const body = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Software Development, AI & IT Staffing in Hyderabad`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  openGraph: { type: 'website', siteName: SITE.name, title: SITE.name, description: SITE.description, url: SITE.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
