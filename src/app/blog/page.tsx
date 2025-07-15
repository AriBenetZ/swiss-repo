import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: 'complete-guide-startup-funding-rounds',
    title: 'Complete Guide to Startup Funding Rounds: From Pre-Seed to Series C',
    excerpt: 'Understanding the different stages of startup funding, what investors look for at each stage, and how to prepare your company for each round.',
    publishedAt: '2024-12-15',
    readTime: '8 min read',
    category: 'Funding Guides',
    featured: true
  },
  {
    slug: 'venture-capital-vs-private-equity',
    title: 'Venture Capital vs Private Equity: What\'s Right for Your Startup',
    excerpt: 'Learn the key differences between VC and PE funding, including stage requirements, investment sizes, and strategic implications for your business.',
    publishedAt: '2024-12-10',
    readTime: '6 min read',
    category: 'Investment Types'
  },
  {
    slug: 'preparing-for-due-diligence',
    title: 'The Ultimate Due Diligence Checklist for Startups',
    excerpt: 'Everything you need to prepare for investor due diligence, including financial documents, legal requirements, and common red flags to avoid.',
    publishedAt: '2024-12-05',
    readTime: '10 min read',
    category: 'Due Diligence'
  },
  {
    slug: 'building-compelling-pitch-deck',
    title: 'Building a Compelling Pitch Deck That Gets Results',
    excerpt: 'Master the art of pitch deck creation with proven frameworks, real examples, and insider tips from successful entrepreneurs and VCs.',
    publishedAt: '2024-11-28',
    readTime: '7 min read',
    category: 'Pitch Decks'
  },
  {
    slug: 'european-funding-landscape-2024',
    title: 'European Startup Funding Landscape: 2024 Trends & Opportunities',
    excerpt: 'Comprehensive analysis of European VC activity, emerging trends, and the best opportunities for startups across different markets.',
    publishedAt: '2024-11-20',
    readTime: '9 min read',
    category: 'Market Analysis'
  },
  {
    slug: 'angel-investor-meetings-guide',
    title: 'How to Prepare for Angel Investor Meetings: A Step-by-Step Guide',
    excerpt: 'Master angel investor meetings with preparation strategies, common questions, and techniques to build investor confidence.',
    publishedAt: '2024-11-15',
    readTime: '5 min read',
    category: 'Angel Investing'
  }
]

export default function BlogIndex() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      {featuredPost && (
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">Featured Article</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4 text-sm text-tertiary">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 hover:text-accent transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-secondary mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-tertiary">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-secondary mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors text-sm"
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="font-medium text-primary">{category}</span>
              <div className="text-sm text-tertiary mt-1">
                {blogPosts.filter(post => post.category === category).length} articles
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
