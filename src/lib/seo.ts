import type { Metadata } from 'next'
import { SERVICES, SITE } from '@/lib/site'

export const KEYWORDS = [
  'ADK Softech',
  'software development company Hyderabad',
  'IT staffing Hyderabad',
  'AI engineering',
  'product engineering',
  'cloud and DevOps services',
  'enterprise application integration',
  'application maintenance and modernisation',
  'technology consulting',
  'HITEC City',
]

/** Per-page metadata with canonical + Open Graph + Twitter wired to that page. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: 'en_IN',
      title: `${title} | ${SITE.name}`,
      description,
      url: path,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${SITE.name} — software, AI and IT staffing in Hyderabad` }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${SITE.name}`, description, images: ['/twitter-image'] },
  }
}

/** Escape `<` so JSON-LD can never close its script tag. */
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c')

export const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/opengraph-image`,
  description: SITE.description,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3U Unit, 3rd Floor, Dwaraka Pride, Plot No.4/1, Survey No.64, Huda Techno Enclave, Madhapur, HITEC City',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500081',
    addressCountry: 'IN',
  },
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer service', email: SITE.email }],
}

export const WEBSITE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': `${SITE.url}/#organization` },
  inLanguage: 'en-IN',
}

export const SERVICES_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${SITE.name} services`,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.summary,
      url: `${SITE.url}/services#${s.id}`,
      provider: { '@id': `${SITE.url}/#organization` },
    },
  })),
}
