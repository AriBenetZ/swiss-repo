import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.raisesignal.uk'
  const currentDate = new Date()
  
  // Define static routes with optimized priorities and frequencies for 2025 SEO best practices
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily', // Homepage should be crawled frequently
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}`,
          'en-US': `${baseUrl}`,
          'en-GB': `${baseUrl}`,
          'en-EU': `${baseUrl}`,
          'en-SE': `${baseUrl}`, // Sweden
          'en-NO': `${baseUrl}`, // Norway
          'en-DK': `${baseUrl}`, // Denmark
          'en-FI': `${baseUrl}`, // Finland
          'en-DE': `${baseUrl}`, // Germany
          'en-FR': `${baseUrl}`, // France
          'en-CH': `${baseUrl}`, // Switzerland
          'en-AT': `${baseUrl}`, // Austria
          'en-SG': `${baseUrl}`, // Singapore
          'en-AU': `${baseUrl}`, // Australia
          'en-CA': `${baseUrl}`, // Canada
        }
      }
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95, // High priority for conversion page
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9, // Important informational page
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly', // Content updates regularly
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8, // Important for user engagement
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly', // Blog gets regular updates
      priority: 0.7,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/press`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]

  // TODO: Add dynamic routes for blog posts when blog content is added
  // const blogPosts = await getBlogPosts() // Uncomment when blog is implemented
  // const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [
    ...staticRoutes,
    // ...blogRoutes, // Uncomment when blog is implemented
  ]
}
