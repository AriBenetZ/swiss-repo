import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.raisesignal.uk'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/tmp/',
          '/.well-known/',
          '/internal/',
          '*.json$',
          '*/search?*', // Prevent indexing of search results
          '/raisesignal.nl*', // Block any references to old .nl domain
          '*.nl*', // Block any .nl domain references
          '*/apply?*', // Prevent indexing of application form with params
          '*raisesignal.nl*', // Additional .nl blocking
          '*.raisesignal.nl*', // Block subdomains
          '/nl/*', // Block any /nl/ paths
        ],
        crawlDelay: 1, // Be respectful to crawlers
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/tmp/',
          '/internal/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/tmp/',
          '/internal/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/tmp/',
          '/internal/',
        ],
      },
      {
        userAgent: 'TwitterBot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/tmp/',
          '/internal/',
        ],
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/tmp/',
          '/internal/',
        ],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  }
}
