import { Metadata } from 'next';
import { generateMetadata, pageConfigs } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  ...pageConfigs.home,
  title: "RaiseSignal - Connect with Institutional Investors for Growth Capital",
  description: "Established investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia. 150+ successful deals completed since 2019. Start your funding journey today.",
  keywords: [
    // Core UK-focused keywords
    'UK investment platform', 'British startup funding', 'London venture capital', 'UK private equity',
    'institutional investors UK', 'startup funding UK', 'venture capital London', 'UK angel investors',
    'series A funding UK', 'series B funding UK', 'growth capital UK', 'UK fundraising platform',
    
    // European expansion keywords
    'European investors', 'EU startup funding', 'European venture capital', 'Scandinavian investors',
    'German venture capital', 'French private equity', 'Swedish investors', 'Norwegian funding',
    'Danish venture capital', 'Finnish investors', 'Swiss private equity', 'Austrian funding',
    
    // Global reach keywords
    'international investors', 'global funding platform', 'cross-border investment', 'worldwide venture capital',
    'American VCs', 'Asian investors', 'Singapore funding', 'Australian venture capital', 'Canadian investors',
    
    // Industry-specific keywords
    'fintech funding UK', 'SaaS funding London', 'healthtech investors UK', 'edtech venture capital',
    'cleantech funding UK', 'AI startup funding', 'blockchain investors UK', 'deeptech funding',
    
    // Long-tail SEO keywords
    'how to find investors UK', 'startup funding application UK', 'venture capital matching UK',
    'institutional investor network UK', 'private equity opportunities UK', 'family office investors UK',
    'growth stage funding UK', 'startup scale-up funding', 'business angel network UK',
    
    // Company-specific keywords
    'RaiseSignal UK', 'RaiseSignal platform', 'investment matching UK', 'verified investors UK',
    'funding connections UK', 'startup due diligence UK', 'capital raising UK', 'investment platform UK'
  ],
  path: "/",
  ogImage: "/og-home.png"
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "RaiseSignal UK Investment Platform",
    "description": "UK's premier investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia. 150+ successful deals completed since 2019.",
    "url": "https://www.raisesignal.uk",
    "provider": {
      "@type": "Organization",
      "name": "RaiseSignal",
      "url": "https://www.raisesignal.uk",
      "logo": "https://www.raisesignal.uk/logo.svg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3 More London Riverside",
        "addressLocality": "London",
        "addressCountry": "United Kingdom",
        "postalCode": "SE1 2RE"
      }
    },
    "areaServed": [
      "United Kingdom", "Europe", "North America", "Asia", "Scandinavia",
      "Germany", "France", "Sweden", "Norway", "Denmark", "Finland", 
      "Switzerland", "Austria", "United States", "Singapore", "Japan", 
      "Australia", "Canada"
    ],
    "serviceType": "Investment Platform",
    "category": "Financial Services",
    "brand": "RaiseSignal",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Investment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Series A Funding Connections",
            "description": "Connect growth-stage companies with institutional investors for Series A funding rounds"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Capital Network",
            "description": "Access to global network of VCs, private equity, and family offices for growth capital"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Institutional Investor Matching",
            "description": "AI-powered matching system connecting companies with relevant institutional investors"
          }
        }
      ]
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does RaiseSignal UK work?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "RaiseSignal",
          "url": "https://www.raisesignal.uk"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RaiseSignal UK connects growth-stage companies with verified institutional investors through a proven 5-step process: Application & Verification, Investor Matching, Due Diligence, Term Negotiation, and Funding Completion. We've completed 150+ successful deals since 2019.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "RaiseSignal",
            "url": "https://www.raisesignal.uk"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "What types of investors are on the RaiseSignal platform?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "RaiseSignal",
          "url": "https://www.raisesignal.uk"
        },
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Our UK-based platform includes institutional investors, venture capital firms, private equity investors, family offices, and strategic corporate investors from over 25 countries across Europe, Americas, Asia, and Scandinavia.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "RaiseSignal",
            "url": "https://www.raisesignal.uk"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "How long does the funding process take through RaiseSignal UK?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "RaiseSignal",
          "url": "https://www.raisesignal.uk"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average funding process takes 8-12 weeks from application to funding completion through our UK platform, with initial response within 48 hours and first investor meetings typically within 1 week.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "RaiseSignal",
            "url": "https://www.raisesignal.uk"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "What funding stages does RaiseSignal UK support?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "RaiseSignal",
          "url": "https://www.raisesignal.uk"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RaiseSignal UK specializes in growth-stage funding including Series A, Series B, and growth capital rounds. We work with companies raising £500K to £50M+ across Europe, Americas, Asia, and Scandinavia.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "RaiseSignal",
            "url": "https://www.raisesignal.uk"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "Is RaiseSignal UK available internationally?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "RaiseSignal",
          "url": "https://www.raisesignal.uk"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, while based in the UK, RaiseSignal serves companies globally with our network of institutional investors across Europe, Americas, Asia, and Scandinavia. We've completed deals in over 25 countries.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "RaiseSignal",
            "url": "https://www.raisesignal.uk"
          },
          "upvoteCount": 0
        }
      }
    ]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.raisesignal.uk"
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RaiseSignal UK",
    "alternateName": ["RaiseSignal", "Raise Signal UK", "RaiseSignal Investment Platform"],
    "url": "https://www.raisesignal.uk",
    "description": "UK's premier investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia",
    "publisher": {
      "@type": "Organization",
      "name": "RaiseSignal",
      "url": "https://www.raisesignal.uk"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.raisesignal.uk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Investment Platform Services",
      "description": "Connect growth-stage companies with institutional investors"
    }
  };

  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Raise Capital Through RaiseSignal UK",
    "description": "Step-by-step guide to raising growth capital through RaiseSignal UK's institutional investor network",
    "totalTime": "PT8W",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "GBP",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Submit Application",
        "text": "Complete comprehensive application with business plan, financial projections, and company details",
        "url": "https://www.raisesignal.uk/apply"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Investor Matching",
        "text": "Our AI-powered system matches your company with relevant institutional investors based on sector, stage, and criteria",
        "url": "https://www.raisesignal.uk/how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Due Diligence",
        "text": "Engage in structured due diligence process with pre-qualified institutional investors",
        "url": "https://www.raisesignal.uk/how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Term Negotiation",
        "text": "Negotiate investment terms with institutional investors and family offices",
        "url": "https://www.raisesignal.uk/how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Funding Completion",
        "text": "Complete legal documentation and receive growth capital investment",
        "url": "https://www.raisesignal.uk/how-it-works"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData)
        }}
      />
      {children}
    </>
  );
}
