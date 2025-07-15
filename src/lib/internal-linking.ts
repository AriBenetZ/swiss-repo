// Smart internal linking for better SEO
export interface InternalLink {
  href: string;
  text: string;
  context: string;
  priority: 'high' | 'medium' | 'low';
}

// Strategic internal linking map - Matchmaking Platform Focus
export const internalLinkingStrategy = {
  // From any page, these are high-value links for matchmaking platform
  globalLinks: [
    { href: '/apply', text: 'Apply for Investor Matching', context: 'company-conversion', priority: 'high' as const },
    { href: '/how-it-works', text: 'How Our Matching Works', context: 'process-education', priority: 'high' as const },
    { href: '/case-studies', text: 'Successful Matches & Outcomes', context: 'social-proof', priority: 'high' as const }
  ],

  // Context-specific linking for matchmaking value
  contextualLinks: {
    '/': [
      { href: '/about', text: 'Learn About Our Matching Approach', context: 'trust-building', priority: 'medium' as const },
      { href: '/team', text: 'Meet Our Investment Matching Team', context: 'credibility', priority: 'medium' as const }
    ],
    '/apply': [
      { href: '/how-it-works', text: 'Understand Our Matching Process', context: 'preparation', priority: 'high' as const },
      { href: '/case-studies', text: 'See Successful Company-Investor Matches', context: 'motivation', priority: 'high' as const }
    ],
    '/how-it-works': [
      { href: '/apply', text: 'Start Your Investor Matching Journey', context: 'next-step', priority: 'high' as const },
      { href: '/case-studies', text: 'Real Matching Success Examples', context: 'validation', priority: 'medium' as const }
    ],
    '/case-studies': [
      { href: '/apply', text: 'Get Matched Like These Success Stories', context: 'cta', priority: 'high' as const },
      { href: '/how-it-works', text: 'Learn Our Proven Matching Process', context: 'process', priority: 'medium' as const }
    ]
  }
};

// Generate contextual link suggestions
export function getInternalLinks(currentPath: string): InternalLink[] {
  const global = internalLinkingStrategy.globalLinks.filter(link => link.href !== currentPath);
  const contextual = (internalLinkingStrategy.contextualLinks as any)[currentPath] || [];
  
  return [...global, ...contextual].sort((a: InternalLink, b: InternalLink) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
}

// Smart breadcrumb generator
export function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', href: '/' }];
  
  const pathMap: Record<string, string> = {
    'apply': 'Apply for Investor Matching',
    'how-it-works': 'How Investor Matching Works', 
    'case-studies': 'Successful Company-Investor Matches',
    'about': 'About Our Matching Platform',
    'contact': 'Contact Our Matching Team',
    'team': 'Our Investment Matching Team',
    'careers': 'Join Our Matching Platform',
    'blog': 'Investor-Company Insights',
    'press': 'Press & Media Coverage'
  };

  let currentPath = '';
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: pathMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: currentPath
    });
  });

  return breadcrumbs;
}
