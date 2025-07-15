import { generateMetadata as generateSEOMetadata, coreKeywords, industryKeywords } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEOMetadata({
  title: "Investment & Funding Insights Blog",
  description: "Expert insights on startup funding, venture capital trends, investment strategies, and growth capital guidance from industry professionals.",
  keywords: [...coreKeywords, ...industryKeywords, 'investment blog', 'funding insights', 'startup advice', 'VC trends'],
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
              Investment & Funding Insights
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Expert guidance on startup funding, investment strategies, and market insights 
              to help you navigate the world of growth capital.
            </p>
          </header>
          {children}
        </div>
      </div>
    </div>
  )
}
