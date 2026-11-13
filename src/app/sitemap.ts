import type { MetadataRoute } from 'next'
import { NAV, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return NAV.map(({ href }) => ({
    url: `${SITE.url}${href === '/' ? '' : href}`,
    lastModified,
    changeFrequency: href === '/' ? 'weekly' : 'monthly',
    priority: href === '/' ? 1 : href === '/services' || href === '/contact' ? 0.8 : 0.6,
  }))
}
