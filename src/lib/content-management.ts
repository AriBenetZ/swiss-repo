// Content Management System for SEO-optimized blog posts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  modifiedAt: string;
  author: string;
  category: string;
  tags: string[];
  keywords: string[];
  readTime: string;
  featured: boolean;
  seoScore: number;
}

// SEO-optimized blog post templates
export const blogPostTemplates = {
  'funding-guide': {
    titleTemplate: 'Complete Guide to [FUNDING_TYPE]: Everything You Need to Know',
    descriptionTemplate: 'Master [FUNDING_TYPE] with our comprehensive guide. Learn requirements, process, timeline, and expert tips for [YEAR].',
    keywordSets: {
      'seed-funding': ['seed funding', 'startup funding', 'angel investors', 'pre-seed'],
      'series-a': ['series A funding', 'venture capital', 'VC funding', 'startup growth'],
      'growth-capital': ['growth capital', 'scale-up funding', 'expansion capital']
    }
  },
  'investor-insights': {
    titleTemplate: '[INVESTOR_TYPE] Investment Trends: What [YEAR] Data Reveals',
    descriptionTemplate: 'Analyze [INVESTOR_TYPE] investment patterns, funding trends, and market insights for [YEAR]. Data-driven analysis for founders.',
    keywordSets: {
      'vc-trends': ['venture capital trends', 'VC investment data', 'startup funding trends'],
      'angel-trends': ['angel investor trends', 'angel funding data', 'private investor insights']
    }
  },
  'success-stories': {
    titleTemplate: 'How [COMPANY] Raised £[AMOUNT] in [FUNDING_ROUND]: A Case Study',
    descriptionTemplate: 'Learn how [COMPANY] successfully raised £[AMOUNT] in their [FUNDING_ROUND]. Get insights on strategy, pitch deck, and investor approach.',
    keywordSets: {
      'case-study': ['startup success story', 'funding case study', 'investment success', 'fundraising strategy']
    }
  }
};

// Auto-generate SEO metadata for blog posts
export function generateBlogSEO(post: Partial<BlogPost>, template?: keyof typeof blogPostTemplates) {
  const currentYear = new Date().getFullYear();
  
  return {
    title: post.title || `${post.title} | RaiseSignal Investment Insights`,
    description: post.description || `${post.excerpt?.substring(0, 150)}...`,
    keywords: [
      ...(post.keywords || []),
      'startup funding',
      'investment insights',
      'venture capital',
      `funding ${currentYear}`,
      'business growth'
    ],
    canonical: `/blog/${post.slug}`,
    publishedTime: post.publishedAt,
    modifiedTime: post.modifiedAt,
    authors: [post.author || 'RaiseSignal Team'],
    section: post.category || 'Investment Insights',
    tags: post.tags || []
  };
}

// Content calendar for consistent publishing
export const contentCalendar = {
  weekly: [
    'Market Monday: Investment trends analysis',
    'Tutorial Tuesday: Funding process guides', 
    'Wednesday Wisdom: Expert investor insights',
    'Throwback Thursday: Successful case studies',
    'Feature Friday: New platform features'
  ],
  monthly: [
    'Funding round analysis',
    'Industry sector deep-dive',
    'Investor spotlight series',
    'Regulatory updates',
    'Economic impact analysis'
  ]
};

// SEO content optimization checklist
export function auditBlogPost(post: BlogPost) {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Title optimization
  if (post.title.length < 30) issues.push('Title too short (<30 chars)');
  if (post.title.length > 60) issues.push('Title too long (>60 chars)');
  if (!post.title.includes('funding') && !post.title.includes('investment')) {
    recommendations.push('Consider including "funding" or "investment" in title');
  }

  // Description optimization  
  if (post.description.length < 120) issues.push('Description too short (<120 chars)');
  if (post.description.length > 160) issues.push('Description too long (>160 chars)');

  // Content optimization
  if (post.content.length < 1000) recommendations.push('Consider expanding content (>1000 words)');
  if (post.keywords.length < 3) recommendations.push('Add more target keywords');

  // SEO score calculation
  let score = 100;
  score -= issues.length * 10;
  score -= recommendations.length * 5;
  
  return {
    score: Math.max(0, score),
    issues,
    recommendations
  };
}
