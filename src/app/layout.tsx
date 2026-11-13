import type { Metadata } from 'next'
import { Sora, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'
import { KEYWORDS, ORGANIZATION_LD, WEBSITE_LD, jsonLd } from '@/lib/seo'

const display = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const body = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

const DEFAULT_TITLE = `${SITE.name} | Software Development, AI & IT Staffing in Hyderabad`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: KEYWORDS,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: '/' },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_IN', title: DEFAULT_TITLE, description: SITE.description, url: '/' },
  twitter: { card: 'summary_large_image', title: DEFAULT_TITLE, description: SITE.description },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd([ORGANIZATION_LD, WEBSITE_LD]) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
