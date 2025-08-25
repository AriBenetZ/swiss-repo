import { Metadata } from 'next';

// Domain configuration
const domainConfig = {
  primaryUrl: 'https://www.aurumascend.ch',
} as const;

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: string[];
}

// Enhanced keyword sets for 2025 SEO best practices
export const coreKeywords = [
  // Brand name variations - all possible spellings for maximum discoverability
  'aurum ascend',
  'aurum ascend capital',
  'aurum ascend investment',
  'aurum ascend platform',
  'aurumascend',
  'aurumascend capital',
  'aurumascend investment',
  'aurumascend platform',
  // Alternative spellings that users might search for
  'auram ascend',
  'auram ascend capital', 
  'auramascend',
  'auramascend capital',
  // Primary business keywords
  'institutional investment platform',
  'verified investor network',
  'B2B investment matching',
  'startup funding solutions',
  'growth capital platform',
  'European investment services',
  'venture capital connections',
  'private equity introductions',
  'investment facilitation',
  'capital raising platform',
  // Intent-based keywords
  'how to raise capital',
  'find institutional investors',
  'startup funding process',
  'investment platform benefits',
  'verified investor access',
  // Location + service keywords
  'Swiss investment platform',
  'European capital raising',
  'Zurich investment services',
  'DACH region funding',
  'EU startup capital'
];

export const longTailKeywords = [
  // Brand-specific long tail keywords - all variations
  'aurum ascend investment platform',
  'aurum ascend capital raising services',
  'aurum ascend institutional investors',
  'aurumascend investment platform',
  'aurumascend capital raising services',
  'aurumascend institutional investors',
  'auram ascend investment platform',
  'auram ascend capital services',
  'auramascend platform',
  'auramascend investment services',
  // Problem-solving keywords
  'how to connect with institutional investors',
  'best platform for startup funding',
  'verified investor network access',
  'professional investment introduction services',
  'European growth capital solutions',
  'institutional investor matching services',
  'startup funding success rate',
  'professional capital raising platform',
  // Competitor comparison keywords
  'alternative to AngelList',
  'better than Crunchbase pro',
  'professional investor platform',
  'curated investor network',
  'relationship-driven investment platform'
];

export const semanticKeywords = [
  // Related terms for semantic SEO & AI search engines 2025
  'due diligence',
  'investment criteria',
  'funding rounds',
  'cap table management',
  'investor relations',
  'financial projections',
  'business valuation',
  'term sheets',
  'investment memorandum',
  'pitch deck preparation',
  // AI-optimized intent keywords for 2025
  'how to raise capital for startups',
  'find institutional investors',
  'best investment platform',
  'startup funding process',
  'venture capital introduction',
  'private equity matching',
  'investment platform comparison',
  'funding success rate',
  'investor network access',
  'capital raising strategy'
];

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = domainConfig.primaryUrl;
  const {
    title,
    description,
    keywords = [],
    path,
    ogImage = '/og-image.png',
    noIndex = false,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors = [],
    section,
    tags = [],
    locale = 'en_CH',
    alternateLocales = ['en_US', 'en_EU']
  } = config;

  const fullTitle = path === '/' 
    ? title 
    : `${title} | Aurum Ascend Capital - European Investment Platform`;

  // Enhanced metadata with 2025 best practices
  const metadata: Metadata = {
    title: {
      template: '%s | Aurum Ascend Capital - European Investment Platform',
      default: title,
      absolute: path === '/' ? title : undefined
    },
    description,
    keywords: [
      ...keywords, 
      ...coreKeywords.slice(0, 8), 
      ...aiSearchKeywords.slice(0, 6),
      ...fundingSeekerKeywords.slice(0, 10),
      ...professionalServiceKeywords.slice(0, 6),
      ...industryKeywords.slice(0, 15),
      ...stageKeywords.slice(0, 10)
    ].join(', '),
    authors: authors.map(author => ({ name: author })),
    creator: 'Aurum Ascend Capital',
    publisher: 'Aurum Ascend Capital',
    category: 'Business and Finance',
    classification: 'Investment Services',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type,
      siteName: 'Aurum Ascend Capital',
      locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Aurum Ascend Capital`,
          type: 'image/png',
        },
        {
          url: '/og-image-square.png',
          width: 1200,
          height: 1200,
          alt: `${title} - Aurum Ascend Capital`,
          type: 'image/png',
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@aurumascend',
      site: '@aurumascend',
    },
    alternates: {
      canonical: path,
      languages: {
        'en-CH': path,
        'en-US': path,
        'en': path,
        'x-default': path,
      },
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
      other: {
        'facebook-domain-verification': process.env.FACEBOOK_DOMAIN_VERIFICATION || '',
        'bing': process.env.BING_VERIFICATION || '',
      },
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'theme-color': '#1a365d',
      'color-scheme': 'light dark',
    },
  };

  return metadata;
}

export const geographicKeywords = [
  // Swiss-specific keywords
  'Swiss startup funding',
  'Zurich investors',
  'Swiss venture capital',
  'Swiss angel investors',
  'startup funding Switzerland',
  'venture capital Zurich',
  'Swiss investment platform',
  'Swiss startup capital',
  'Zurich startup funding',
  'Swiss fundraising',
  // European keywords
  'European investors',
  'EU startup funding',
  'European venture capital',
  'Amsterdam investors',
  'Berlin startup funding',
  'Paris venture capital',
  'Stockholm investors',
  // Global keywords
  'international funding',
  'global investors',
  'cross-border investment',
  'worldwide venture capital',
  'international startup funding'
];

// 2025 AI Search Engine Optimization Keywords
export const aiSearchKeywords = [
  // Natural language queries for AI search engines
  'best investment platform for startups',
  'how to connect with venture capital firms',
  'institutional investor matching services',
  'startup funding platform reviews',
  'professional investment introduction',
  'verified investor network access',
  'capital raising success stories',
  'investment platform comparison guide',
  'startup fundraising best practices',
  'venture capital introduction services',
  // Voice search optimization
  'find investors for my startup',
  'connect with venture capital',
  'best way to raise capital',
  'institutional investor platform',
  'startup funding help',
  'investment matching service'
];

// Comprehensive funding seeker intent keywords
export const fundingSeekerKeywords = [
  // General funding seeking
  'seeking funding for business',
  'need investors for startup',
  'looking for business funding',
  'find venture capital investors',
  'seeking private equity funding',
  'need capital for expansion',
  'looking for seed funding',
  'seeking growth capital',
  'find institutional investors',
  'business funding opportunities',
  // Sector-specific funding seeking
  'seeking real estate investors',
  'need funding for hospital project',
  'looking for manufacturing investors',
  'seeking healthcare facility funding',
  'need capital for construction project',
  'looking for energy project investors',
  'seeking agricultural funding',
  'need hotel development funding',
  'looking for technology investors',
  'seeking pharmaceutical funding',
  // Stage-specific seeking
  'seeking pre-seed investors',
  'need series A funding',
  'looking for growth stage capital',
  'seeking late stage investors',
  'need bridge financing',
  'looking for mezzanine funding',
  'seeking working capital',
  'need equipment financing',
  // Professional language variations
  'raising capital for business',
  'sourcing institutional investment',
  'accessing growth funding',
  'securing venture capital',
  'obtaining private equity',
  'procuring development capital',
  'attracting strategic investors',
  'engaging funding partners',
  'connecting with capital providers',
  'partnering with investment firms'
];

// Professional service keywords for credibility
export const professionalServiceKeywords = [
  'institutional investor introduction',
  'professional capital raising services',
  'verified investor network access',
  'expert investment matching',
  'strategic funding consultation',
  'professional due diligence support',
  'institutional funding facilitation',
  'expert investor relations',
  'professional fundraising guidance',
  'strategic capital advisory',
  'institutional investment platform',
  'professional funding intermediary',
  'expert capital introduction',
  'strategic investor matching',
  'professional investment facilitation',
  'institutional capital access',
  'expert funding consultation',
  'professional investor engagement',
  'strategic funding solutions',
  'institutional investment advisory'
];

// Entity-based keywords for 2025 search algorithms
export const entityKeywords = [
  // Brand entity associations
  'Aurum Ascend investment services',
  'Aurum Ascend capital platform', 
  'Aurum Ascend investor network',
  'AuramAscend funding solutions',
  'Swiss investment platform leader',
  'European capital raising expert',
  'institutional investor connector',
  'startup funding facilitator',
  'venture capital introducer',
  'private equity matcher'
];

export const industryKeywords = [
  // Technology & Digital
  'fintech funding',
  'SaaS funding',
  'healthtech investors',
  'edtech venture capital',
  'greentech funding',
  'AI startup funding',
  'blockchain investors',
  'deeptech funding',
  'biotech venture capital',
  'cleantech investors',
  'cybersecurity funding',
  'software development funding',
  'mobile app funding',
  'e-commerce funding',
  'digital platform funding',
  // Real Estate & Infrastructure
  'real estate investment funding',
  'commercial real estate investors',
  'residential development funding',
  'industrial real estate capital',
  'construction project funding',
  'property development investors',
  'real estate private equity',
  'infrastructure project funding',
  'logistics facility funding',
  'warehouse development capital',
  // Healthcare & Life Sciences
  'hospital funding',
  'medical device funding',
  'pharmaceutical funding',
  'healthcare facility investors',
  'medical practice funding',
  'dental practice investors',
  'veterinary clinic funding',
  'nursing home funding',
  'rehabilitation center investors',
  'medical research funding',
  // Manufacturing & Industrial
  'manufacturing funding',
  'industrial equipment financing',
  'factory expansion funding',
  'production facility investors',
  'automation technology funding',
  'aerospace manufacturing funding',
  'automotive industry investors',
  'chemical industry funding',
  'precision instruments funding',
  'machinery manufacturing capital',
  // Energy & Utilities
  'renewable energy funding',
  'solar project investors',
  'wind energy funding',
  'energy storage funding',
  'utility infrastructure investors',
  'power generation funding',
  'oil and gas funding',
  'hydroelectric project funding',
  'nuclear energy investors',
  'grid modernization funding',
  // Hospitality & Tourism
  'hotel funding',
  'restaurant chain investors',
  'tourism venture funding',
  'hospitality expansion capital',
  'resort development funding',
  'travel technology funding',
  'entertainment venue investors',
  'conference center funding',
  'leisure facility capital',
  'vacation rental funding',
  // Agriculture & Food
  'agricultural funding',
  'farm expansion investors',
  'food processing funding',
  'agtech venture capital',
  'organic farming investors',
  'livestock operation funding',
  'aquaculture funding',
  'food distribution capital',
  'beverage company funding',
  'sustainable agriculture investors'
];

export const stageKeywords = [
  // Early Stage Funding
  'pre-seed funding',
  'seed round investors',
  'angel investor funding',
  'family and friends funding',
  'startup capital',
  'initial funding round',
  'early stage investors',
  'concept stage funding',
  'prototype funding',
  'MVP development funding',
  // Growth Stage Funding
  'series A investors',
  'series B funding',
  'series C capital',
  'growth stage funding',
  'expansion capital',
  'scale-up funding',
  'revenue growth funding',
  'market expansion capital',
  'international expansion funding',
  'product development funding',
  // Later Stage Funding
  'late stage investors',
  'pre-IPO funding',
  'private equity funding',
  'buyout funding',
  'acquisition financing',
  'management buyout funding',
  'recapitalization funding',
  'exit preparation funding',
  // Specialized Funding Types
  'bridge funding',
  'mezzanine financing',
  'convertible debt funding',
  'revenue-based financing',
  'equipment financing',
  'working capital funding',
  'inventory financing',
  'accounts receivable funding',
  'debt consolidation funding',
  'refinancing solutions',
  // Project-Specific Funding
  'project financing',
  'development funding',
  'construction financing',
  'research and development funding',
  'clinical trial funding',
  'patent funding',
  'intellectual property funding',
  'licensing deal funding',
  'joint venture funding',
  'strategic partnership funding'
];

// Enhanced structured data generation with more schema types
export function generateStructuredData(type: 'service' | 'organization' | 'faq' | 'breadcrumb' | 'article' | 'website' | 'howto' | 'review', data: any) {
  const baseStructuredData = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case 'service':
      return {
        ...baseStructuredData,
        "@type": "Service",
        provider: {
          "@type": "Organization",
          name: "Aurum Ascend Capital",
          url: "https://www.aurumascend.ch"
        },
        areaServed: [
          "United Kingdom", "United States", "Germany", "France", 
          "Sweden", "Norway", "Denmark", "Finland"
        ],
        ...data
      };
      
    case 'organization':
      return {
        ...baseStructuredData,
        "@type": "Organization",
        "@id": "https://www.aurumascend.ch/#organization",
        name: "Aurum Ascend Capital",
        alternateName: ["Aurum Ascend", "Aurum Ascend Platform"],
        url: "https://www.aurumascend.ch",
        logo: {
          "@type": "ImageObject",
          url: "https://www.aurumascend.ch/logo.png",
          width: 512,
          height: 512
        },
        sameAs: [
          "https://linkedin.com/company/aurumascend",
          "https://twitter.com/aurumascend"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+41445881234",
          contactType: "customer service",
          email: "info@aurumascend.ch",
          availableLanguage: ["English"],
          areaServed: ["CH", "US", "EU"]
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Zurichstrasse 110",
          addressLocality: "Zurich",
          addressCountry: "Switzerland",
          postalCode: "8008"
        },
        ...data
      };
      
    case 'faq':
      return {
        ...baseStructuredData,
        "@type": "FAQPage",
        mainEntity: data.questions?.map((q: any) => ({
          "@type": "Question",
          name: q.question,
          answerCount: 1,
          datePublished: q.datePublished || "2024-01-01T00:00:00Z",
          dateModified: q.dateModified || "2025-07-10T00:00:00Z",
          author: {
            "@type": "Organization",
            "name": "Aurum Ascend Capital",
            "url": "https://www.aurumascend.ch"
          },
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
            datePublished: q.datePublished || "2024-01-01T00:00:00Z",
            dateModified: q.dateModified || "2025-07-10T00:00:00Z",
            author: {
              "@type": "Organization",
              "name": "Aurum Ascend Capital",
              "url": "https://www.aurumascend.ch"
            },
            upvoteCount: q.upvoteCount || 0
          }
        })) || [],
        ...data
      };
      
    case 'breadcrumb':
      return {
        ...baseStructuredData,
        "@type": "BreadcrumbList",
        itemListElement: data.items?.map((item: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url
        })) || []
      };
      
    case 'article':
      return {
        ...baseStructuredData,
        "@type": "Article",
        publisher: {
          "@type": "Organization",
          name: "Aurum Ascend Capital",
          logo: {
            "@type": "ImageObject",
            url: "https://www.aurumascend.ch/logo.png"
          }
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url
        },
        ...data
      };
      
    case 'website':
      return {
        ...baseStructuredData,
        "@type": "WebSite",
        "@id": "https://www.aurumascend.ch/#website",
        url: "https://www.aurumascend.ch",
        name: "Aurum Ascend Capital",
        description: "Global investment platform connecting growth companies with institutional investors",
        publisher: {
          "@id": "https://www.aurumascend.ch/#organization"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.aurumascend.ch/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        ...data
      };
      
    case 'howto':
      return {
        ...baseStructuredData,
        "@type": "HowTo",
        name: data.name,
        description: data.description,
        totalTime: data.totalTime,
        estimatedCost: data.estimatedCost,
        supply: data.supply || [],
        tool: data.tool || [],
        step: data.steps?.map((step: any, index: number) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
          url: step.url
        })) || []
      };
      
    case 'review':
      return {
        ...baseStructuredData,
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Aurum Ascend Capital Investment Platform"
        },
        ...data
      };
      
    default:
      return baseStructuredData;
  }
}

// Generate page-specific metadata configurations
export const pageConfigs = {
  home: {
    title: "Aurum Ascend Capital - Switzerland's Premier Investment Platform | Connect with Institutional Investors",
    description: "Connect with verified institutional investors across Europe, Americas, Asia & Scandinavia through Switzerland's leading investment platform. Join 150+ companies that have successfully raised growth capital since 2019.",
    keywords: [
      ...coreKeywords.slice(0, 8), 
      ...geographicKeywords.slice(0, 10), 
      ...fundingSeekerKeywords.slice(0, 15),
      ...professionalServiceKeywords.slice(0, 8),
      ...industryKeywords.slice(0, 20)
    ],
    path: "/",
    ogImage: "/og-home.png"
  },
  
  about: {
    title: "About Aurum Ascend Capital - Global Investment Platform Leadership",
    description: "Learn about Aurum Ascend Capital's mission to democratize access to growth capital. Meet our team of investment professionals connecting companies with institutional investors worldwide.",
    keywords: [
      ...coreKeywords.slice(0, 6), 
      ...professionalServiceKeywords.slice(0, 10),
      "investment team", "company mission", "startup platform", "institutional expertise"
    ],
    path: "/about",
    ogImage: "/og-about.png"
  },
  
  apply: {
    title: "Apply for Funding - Connect with Global Investors",
    description: "Apply to connect with our network of 500+ institutional investors. Get matched with VCs, private equity, and family offices actively seeking investment opportunities.",
    keywords: [
      ...coreKeywords.slice(0, 6), 
      ...fundingSeekerKeywords.slice(0, 20),
      ...stageKeywords.slice(0, 15),
      "apply for funding", "investor application", "funding application"
    ],
    path: "/apply",
    ogImage: "/og-apply.png"
  },
  
  howItWorks: {
    title: "How Aurum Ascend Capital Works - Step-by-Step Funding Process",
    description: "Discover our proven 4-step process for connecting growth companies with institutional investors. From application to funding, we guide you through every step.",
    keywords: [...coreKeywords, "funding process", "how to raise capital", "investment process"],
    path: "/how-it-works",
    ogImage: "/og-how-it-works.png"
  },
  
  caseStudies: {
    title: "Success Stories - Funding Case Studies & Results",
    description: "Read inspiring success stories from companies that raised capital through Aurum Ascend Capital. See real funding outcomes and investor connections.",
    keywords: [...coreKeywords, "success stories", "case studies", "funding results", "portfolio companies"],
    path: "/case-studies",
    ogImage: "/og-case-studies.png"
  },
  
  contact: {
    title: "Contact Aurum Ascend Capital - Get Support for Your Funding Journey",
    description: "Get in touch with our investment team. Whether you're seeking funding or looking to invest, we're here to help connect you with the right opportunities.",
    keywords: [...coreKeywords, "contact", "support", "investment team"],
    path: "/contact",
    ogImage: "/og-contact.png"
  },

  team: {
    title: "Our Team - Investment Professionals & Advisors",
    description: "Meet the experienced investment professionals and advisors behind Aurum Ascend Capital. Our team brings decades of experience in venture capital, private equity, and startup growth.",
    keywords: [...coreKeywords, "investment team", "advisors", "professionals", "experience"],
    path: "/team",
    ogImage: "/og-team.png"
  },

  careers: {
    title: "Careers at Aurum Ascend Capital - Join Our Investment Team",
    description: "Join Aurum Ascend Capital and help shape the future of startup funding. Explore career opportunities in investment, technology, and business development.",
    keywords: [...coreKeywords, "careers", "jobs", "investment careers", "fintech jobs"],
    path: "/careers",
    ogImage: "/og-careers.png"
  }
};

// SEO utility functions
export function generateBreadcrumbData(items: Array<{name: string, url: string}>) {
  return generateStructuredData('breadcrumb', { items });
}

export function generateFAQData(questions: Array<{question: string, answer: string}>) {
  return generateStructuredData('faq', { questions });
}

export function generateHowToData(name: string, description: string, steps: Array<{name: string, text: string, url?: string}>) {
  return generateStructuredData('howto', {
    name,
    description,
    steps,
    totalTime: "PT30M", // 30 minutes default
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "CHF",
      value: "0"
    }
  });
}

// Advanced SEO utilities
export function generateCanonicalUrl(path: string, domain = domainConfig.primaryUrl): string {
  return `${domain}${path}`;
}

export function generateAlternateUrls(path: string) {
  return {
    'en-CH': `${domainConfig.primaryUrl}${path}`,
    'en-US': `${domainConfig.primaryUrl}${path}`,
    'en': `${domainConfig.primaryUrl}${path}`,
    'x-default': `${domainConfig.primaryUrl}${path}`,
  };
}

export function optimizeTitle(title: string, maxLength = 60): string {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + '...';
}

export function optimizeDescription(description: string, maxLength = 160): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
}

// Generate rich snippets for different content types
export function generateLocalBusinessSchema(data: any = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Aurum Ascend Capital",
    image: "https://www.aurumascend.ch/logo.png",
    "@id": "https://www.aurumascend.ch",
    url: "https://www.aurumascend.ch",
    telephone: "+41445881234",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zurichstrasse 110",
      addressLocality: "Zurich",
      postalCode: "8008",
      addressCountry: "CH"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.3769,
      longitude: 8.5417
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    sameAs: [
      "https://linkedin.com/company/aurumascend",
      "https://twitter.com/aurumascend"
    ],
    ...data
  };
}

// Export common keywords for use in layout files
export const commonKeywords = coreKeywords;

// Default OG images for different sections
export const defaultOGImages = {
  home: '/og-image.png',
  about: '/og-about.png',
  apply: '/og-apply.png',
  blog: '/og-blog.png',
  careers: '/og-careers.png',
  caseStudies: '/og-case-studies.png',
  contact: '/og-contact.png',
  howItWorks: '/og-how-it-works.png',
  team: '/og-team.png',
  press: '/og-press.png',
  compliance: '/og-compliance.png',
  privacy: '/og-privacy.png',
  terms: '/og-terms.png'
};

// Comprehensive keyword compilation for different SEO purposes
export function getAllKeywords(purpose: 'meta' | 'content' | 'schema' | 'full' = 'meta') {
  const allKeywords = [
    ...coreKeywords,
    ...longTailKeywords,
    ...semanticKeywords,
    ...aiSearchKeywords,
    ...fundingSeekerKeywords,
    ...professionalServiceKeywords,
    ...entityKeywords,
    ...geographicKeywords,
    ...industryKeywords,
    ...stageKeywords
  ];

  switch (purpose) {
    case 'meta':
      return allKeywords.slice(0, 50); // Limit for meta tags
    case 'content':
      return allKeywords.slice(0, 100); // For content optimization
    case 'schema':
      return allKeywords.slice(0, 30); // For structured data
    case 'full':
      return allKeywords; // All keywords
    default:
      return allKeywords.slice(0, 50);
  }
}

// Industry-specific keyword generator for targeted landing pages
export function getIndustryKeywords(industry: string) {
  const industryMap: { [key: string]: string[] } = {
    'real-estate': [
      'real estate investment funding', 'commercial real estate investors', 'property development investors',
      'real estate private equity', 'construction project funding', 'industrial real estate capital',
      'seeking real estate investors', 'need funding for real estate project', 'commercial property funding'
    ],
    'healthcare': [
      'hospital funding', 'medical device funding', 'pharmaceutical funding', 'healthcare facility investors',
      'medical practice funding', 'medical research funding', 'need funding for hospital project',
      'seeking healthcare investors', 'medical facility capital'
    ],
    'technology': [
      'fintech funding', 'SaaS funding', 'AI startup funding', 'blockchain investors',
      'cybersecurity funding', 'software development funding', 'looking for technology investors',
      'seeking fintech funding', 'need AI startup capital'
    ],
    'manufacturing': [
      'manufacturing funding', 'industrial equipment financing', 'factory expansion funding',
      'production facility investors', 'automation technology funding', 'seeking manufacturing investors',
      'need industrial funding', 'factory development capital'
    ],
    'energy': [
      'renewable energy funding', 'solar project investors', 'wind energy funding',
      'energy storage funding', 'utility infrastructure investors', 'seeking energy project funding',
      'need renewable energy investors', 'clean energy capital'
    ]
  };

  return industryMap[industry] || [];
}
