import { generateMetadata as generateSEOMetadata, generateStructuredData, generateFAQData, generateHowToData } from '@/lib/seo'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

interface BlogPostParams {
  slug: string
}

interface PageProps {
  params: Promise<BlogPostParams>
}

// This would typically come from a CMS or database
const blogPosts = {
  'complete-guide-startup-funding-rounds': {
    title: 'Complete Guide to Startup Funding Rounds: From Pre-Seed to Series C',
    description: 'Master startup funding with our comprehensive guide covering pre-seed to Series C rounds. Learn what investors expect, funding amounts, valuation strategies, and preparation tips for each stage.',
    content: `
      # Complete Guide to Startup Funding Rounds: From Pre-Seed to Series C

      Understanding the startup funding landscape is crucial for any entrepreneur looking to scale their business. This comprehensive guide walks you through each funding stage, from initial pre-seed investment to mature Series C rounds.

      ## What Are Startup Funding Rounds?

      Startup funding rounds are structured investment stages where companies raise capital from investors in exchange for equity. Each round serves different purposes and attracts different types of investors.

      ## Pre-Seed Funding: Getting Started

      **Typical Amount:** £50K - £250K
      **Investors:** Friends, family, angel investors
      **Purpose:** Prove product-market fit

      Pre-seed funding is often the first external capital a startup raises. This stage focuses on:

      - Developing an MVP (Minimum Viable Product)
      - Initial market validation
      - Building the founding team
      - Early customer acquisition

      ### What Investors Look For:
      - Strong founding team with relevant experience
      - Clear problem identification and solution
      - Early traction or customer validation
      - Reasonable market size

      ## Seed Funding: Building Momentum

      **Typical Amount:** £250K - £2M
      **Investors:** Angel investors, seed VCs, accelerators
      **Purpose:** Scale product and team

      Seed funding helps startups:

      - Refine product based on user feedback
      - Hire key team members
      - Develop go-to-market strategy
      - Achieve initial revenue milestones

      ### Key Metrics Investors Evaluate:
      - Monthly Recurring Revenue (MRR) growth
      - Customer Acquisition Cost (CAC)
      - Product-market fit indicators
      - Team scaling capability

      ## Series A: Scaling for Growth

      **Typical Amount:** £2M - £15M
      **Investors:** Venture capital firms
      **Purpose:** Scale business model

      Series A funding marks the transition from startup to growth company:

      - Proven business model
      - Consistent revenue growth
      - Market expansion opportunities
      - Operational efficiency improvements

      ### Due Diligence Focus Areas:
      - Financial performance and projections
      - Market opportunity size
      - Competitive positioning
      - Management team strength

      ## Series B: Market Expansion

      **Typical Amount:** £10M - £50M
      **Investors:** Later-stage VCs, growth equity firms
      **Purpose:** Market expansion and scaling

      Series B companies typically have:

      - Established market presence
      - Clear path to profitability
      - International expansion plans
      - Strong operational metrics

      ## Series C and Beyond: Preparing for Exit

      **Typical Amount:** £30M+
      **Investors:** Growth equity, private equity, strategic investors
      **Purpose:** Pre-IPO growth, acquisitions

      Late-stage funding focuses on:

      - Market dominance
      - International scaling
      - Strategic acquisitions
      - IPO preparation

      ## How to Prepare for Each Round

      ### 1. Financial Documentation
      - Clean financial statements
      - Revenue projections
      - Cash flow forecasts
      - Cap table management

      ### 2. Legal Preparation
      - Corporate structure optimization
      - IP protection
      - Employment agreements
      - Board governance

      ### 3. Market Analysis
      - Competitive landscape
      - Market size validation
      - Growth opportunities
      - Risk assessment

      ### 4. Team Readiness
      - Key hire planning
      - Advisor recruitment
      - Board composition
      - Equity allocation

      ## Common Mistakes to Avoid

      - **Raising too early:** Without sufficient traction
      - **Overvaluation:** Setting unrealistic valuations
      - **Poor timing:** Market conditions matter
      - **Inadequate preparation:** Rushed due diligence
      - **Wrong investors:** Misaligned strategic fit

      ## Conclusion

      Each funding round serves a specific purpose in your startup's journey. Success depends on understanding investor expectations, preparing thoroughly, and choosing the right partners for your stage and goals.

      Ready to start your funding journey? [Apply to connect with our investor network](/apply) and get matched with the right investors for your stage.
    `,
    publishedAt: '2024-12-15',
    modifiedAt: '2024-12-15',
    author: 'RaiseSignal Team',
    readTime: '8 min read',
    category: 'Funding Guides',
    tags: ['startup funding', 'venture capital', 'series A', 'seed funding', 'pre-seed'],
    keywords: [
      'startup funding rounds',
      'pre-seed funding',
      'seed funding',
      'series A funding',
      'series B funding',
      'series C funding',
      'venture capital',
      'startup investment',
      'funding guide',
      'investor expectations'
    ]
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    path: `/blog/${resolvedParams.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.modifiedAt,
    authors: [post.author],
    section: post.category,
    tags: post.tags,
    ogImage: `/og-blog-${resolvedParams.slug}.png`
  })
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // Generate structured data for the article
  const articleStructuredData = generateStructuredData('article', {
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: post.author
    },
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    image: `https://www.raisesignal.uk/og-blog-${resolvedParams.slug}.png`,
    url: `https://www.raisesignal.uk/blog/${resolvedParams.slug}`
  })

  // Generate How-To structured data
  const howToData = generateHowToData(
    "How to Prepare for Startup Funding Rounds",
    "Complete guide to preparing your startup for different funding stages",
    [
      {
        name: "Prepare Financial Documentation",
        text: "Organize clean financial statements, revenue projections, and cash flow forecasts"
      },
      {
        name: "Legal Preparation",
        text: "Optimize corporate structure, protect IP, and prepare employment agreements"
      },
      {
        name: "Market Analysis",
        text: "Analyze competitive landscape and validate market size"
      },
      {
        name: "Team Readiness",
        text: "Plan key hires and prepare board composition"
      }
    ]
  )

  // Generate FAQ structured data
  const faqData = generateFAQData([
    {
      question: "How much should I raise in my seed round?",
      answer: "Seed rounds typically range from £250K to £2M, depending on your industry, traction, and growth plans. Focus on raising enough to reach your next major milestone."
    },
    {
      question: "When should I start preparing for Series A?",
      answer: "Start preparing 6-12 months before you plan to raise. This gives you time to build traction, refine metrics, and identify the right investors."
    },
    {
      question: "What documents do investors need during due diligence?",
      answer: "Key documents include financial statements, legal documents, cap table, customer contracts, and IP documentation."
    }
  ])

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <article className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm text-tertiary">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
          {/* This would typically be rendered from markdown or rich text */}
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/## /g, '<h2>').replace(/### /g, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-card border px-3 py-1 rounded-full text-sm text-secondary"
              >
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Ready to raise funding?</h3>
            <p className="text-secondary mb-4">
              Connect with our network of verified institutional investors and get matched 
              with the right partners for your funding stage.
            </p>
            <Link 
              href="/apply"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              Apply for Funding
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}
