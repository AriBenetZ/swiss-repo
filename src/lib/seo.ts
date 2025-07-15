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

// Enhanced keyword sets for better targeting
export const coreKeywords = [
  'startup funding',
  'private investors',
  'angel investors', 
  'venture capital',
  'investment platform',
  'fundraising',
  'seed funding',
  'series A funding',
  'series B funding',
  'growth capital',
  'startup capital',
  'investor network',
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
    : `${title} | Aurum Ascend Capital - Global Investment Platform`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: authors.map(author => ({ name: author })),
    creator: 'Aurum Ascend Capital',
    publisher: 'Aurum Ascend Capital',
    category: 'finance',
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${path}`,
      type,
      siteName: 'Aurum Ascend Capital',
      locale,
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
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
      images: [`${baseUrl}${ogImage}`],
      creator: '@aurumascend',
      site: '@aurumascend',
    },
    alternates: {
      canonical: `${domainConfig.primaryUrl}${path}`,
      languages: {
        'en-CH': `${domainConfig.primaryUrl}${path}`,
        'en-US': `${domainConfig.primaryUrl}${path}`,
        'en': `${domainConfig.primaryUrl}${path}`,
        'x-default': `${domainConfig.primaryUrl}${path}`,
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

export const industryKeywords = [
  'fintech funding',
  'SaaS funding',
  'healthtech investors',
  'edtech venture capital',
  'greentech funding',
  'AI startup funding',
  'blockchain investors',
  'deeptech funding',
  'biotech venture capital',
  'cleantech investors'
];

export const stageKeywords = [
  'pre-seed funding',
  'seed round investors',
  'series A investors',
  'series B funding',
  'growth stage funding',
  'late stage investors',
  'bridge funding',
  'mezzanine financing',
  'growth equity',
  'expansion capital'
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
          url: "https://www.aurumascend.ch/logo.svg",
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
            url: "https://www.aurumascend.ch/logo.svg"
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
    keywords: [...coreKeywords, ...geographicKeywords.slice(0, 15)],
    path: "/",
    ogImage: "/og-home.png"
  },
  
  about: {
    title: "About Aurum Ascend Capital - Global Investment Platform Leadership",
    description: "Learn about Aurum Ascend Capital's mission to democratize access to growth capital. Meet our team of investment professionals connecting companies with institutional investors worldwide.",
    keywords: [...coreKeywords, "investment team", "company mission", "startup platform"],
    path: "/about",
    ogImage: "/og-about.png"
  },
  
  apply: {
    title: "Apply for Funding - Connect with Global Investors",
    description: "Apply to connect with our network of 500+ institutional investors. Get matched with VCs, private equity, and family offices actively seeking investment opportunities.",
    keywords: [...coreKeywords, "apply for funding", "investor application", "funding application"],
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
    image: "https://www.aurumascend.ch/logo.svg",
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
