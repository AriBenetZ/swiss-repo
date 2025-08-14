import { generateMetadata as generateSEOMetadata, coreKeywords, industryKeywords } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEOMetadata({
  title: "Growth-Stage Investment Insights & Funding Guides",
  description: "Expert insights on European growth-stage funding, institutional investment strategies, venture capital trends, and startup scaling guides from industry professionals.",
  keywords: [...coreKeywords, ...industryKeywords, 'growth-stage investment blog', 'European funding insights', 'institutional investor guides', 'startup scaling advice'],
  path: "/blog",
  ogImage: "/og-blog.png"
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-base">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              European Growth-Stage Investment Insights
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Expert guidance on growth-stage funding, institutional investment strategies, and European market insights to help scale your business with the right capital partners.
            </p>
          </header>
          {children}
        </div>
      </div>
    </div>
  )
}
