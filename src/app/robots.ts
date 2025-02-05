import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/'
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/']
      }
    ],
    sitemap: 'https://ututo.ar/sitemap.xml',
    host: 'https://ututo.ar'
  }
}
