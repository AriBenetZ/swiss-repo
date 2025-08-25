import { Metadata } from 'next';
import { generateMetadata, pageConfigs } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  ...pageConfigs.home,
  title: "Aurum Ascend Capital - Connect with Institutional Investors for Growth Capital",
  description: "Established investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia. 150+ successful deals completed since 2019. Start your funding journey today.",
  keywords: [
    // Brand name variations for better discoverability - all spellings
    'aurum ascend', 'aurum ascend capital', 'aurum ascend investment', 'aurum ascend platform',
    'aurumascend', 'aurumascend capital', 'aurumascend investment', 'aurumascend platform',
    'auram ascend', 'auram ascend capital', 'auramascend', 'auramascend capital',
    'aurum ascend switzerland', 'aurumascend switzerland', 'auram ascend zurich', 'auramascend zurich',
    
    // Core Swiss-focused keywords
    'Swiss investment platform', 'Switzerland startup funding', 'Zurich venture capital', 'Swiss private equity',
    'institutional investors Switzerland', 'startup funding Switzerland', 'venture capital Zurich', 'Swiss angel investors',
    'series A funding Switzerland', 'series B funding Switzerland', 'growth capital Switzerland', 'Switzerland fundraising platform',
    
    // European expansion keywords
    'European investors', 'EU startup funding', 'European venture capital', 'Scandinavian investors',
    'German venture capital', 'French private equity', 'Swedish investors', 'Norwegian funding',
    'Danish venture capital', 'Finnish investors', 'Swiss private equity', 'Austrian funding',
    
    // Global reach keywords
    'international investors', 'global funding platform', 'cross-border investment', 'worldwide venture capital',
    'American VCs', 'Asian investors', 'Singapore funding', 'Australian venture capital', 'Canadian investors',
    
    // Industry-specific keywords
    'fintech funding Switzerland', 'SaaS funding Zurich', 'healthtech investors Switzerland', 'edtech venture capital',
    'cleantech funding Switzerland', 'AI startup funding', 'blockchain investors Switzerland', 'deeptech funding',
    
    // Long-tail SEO keywords
    'how to find investors Switzerland', 'startup funding application Switzerland', 'venture capital matching Switzerland',
    'institutional investor network Switzerland', 'private equity opportunities Switzerland', 'family office investors Switzerland',
    'growth stage funding Switzerland', 'startup scale-up funding', 'business angel network Switzerland',
    
    // Comprehensive funding seeker keywords
    'seeking funding for business', 'need investors for startup', 'looking for business funding', 'find venture capital investors',
    'seeking private equity funding', 'need capital for expansion', 'looking for seed funding', 'seeking growth capital',
    'seeking real estate investors', 'need funding for hospital project', 'looking for manufacturing investors',
    'seeking healthcare facility funding', 'need capital for construction project', 'looking for energy project investors',
    'seeking agricultural funding', 'need hotel development funding', 'looking for technology investors',
    
    // Professional service targeting
    'institutional investor introduction', 'professional capital raising services', 'verified investor network access',
    'expert investment matching', 'strategic funding consultation', 'professional due diligence support',
    
    // Company-specific keywords with brand variations
    'Aurum Ascend Capital Switzerland', 'aurum ascend platform', 'aurumascend platform', 'investment matching Switzerland', 'verified investors Switzerland',
    'funding connections Switzerland', 'startup due diligence Switzerland', 'capital raising Switzerland', 'investment platform Switzerland',
    'aurum ascend investment platform', 'aurumascend investment platform', 'aurum ascend capital raising', 'aurumascend capital raising'
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
    "name": "Aurum Ascend Capital Swiss Investment Platform",
    "alternateName": ["Aurum Ascend", "AurumAscend", "Aurum Ascend Platform", "AurumAscend Platform"],
    "description": "Switzerland's premier investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia. 150+ successful deals completed since 2019.",
    "url": "https://www.aurumascend.ch",
    "provider": {
      "@type": "Organization",
      "name": "Aurum Ascend Capital",
      "url": "https://www.aurumascend.ch",
      "logo": "https://www.aurumascend.ch/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Zurichstrasse 110",
        "addressLocality": "Zurich",
        "addressCountry": "Switzerland",
        "postalCode": "8008"
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
    "brand": "Aurum Ascend Capital",
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
        "name": "How does Aurum Ascend Capital UK work?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Aurum Ascend Capital",
          "url": "https://www.aurumascend.ch"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aurum Ascend Capital UK connects growth-stage companies with verified institutional investors through a proven 5-step process: Application & Verification, Investor Matching, Due Diligence, Term Negotiation, and Funding Completion. We've completed 150+ successful deals since 2019.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "Aurum Ascend Capital",
            "url": "https://www.aurumascend.ch"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "What types of investors are on the Aurum Ascend Capital platform?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Aurum Ascend Capital",
          "url": "https://www.aurumascend.ch"
        },
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Our UK-based platform includes institutional investors, venture capital firms, private equity investors, family offices, and strategic corporate investors from over 25 countries across Europe, Americas, Asia, and Scandinavia.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "Aurum Ascend Capital",
            "url": "https://www.aurumascend.ch"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "How long does the funding process take through Aurum Ascend Capital UK?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Aurum Ascend Capital",
          "url": "https://www.aurumascend.ch"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average funding process takes 8-12 weeks from application to funding completion through our UK platform, with initial response within 48 hours and first investor meetings typically within 1 week.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "Aurum Ascend Capital",
            "url": "https://www.aurumascend.ch"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "What funding stages does Aurum Ascend Capital UK support?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Aurum Ascend Capital",
          "url": "https://www.aurumascend.ch"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aurum Ascend Capital UK specializes in growth-stage funding including Series A, Series B, and growth capital rounds. We work with companies raising £500K to £50M+ across Europe, Americas, Asia, and Scandinavia.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "Aurum Ascend Capital",
            "url": "https://www.aurumascend.ch"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "Is Aurum Ascend Capital UK available internationally?",
        "answerCount": 1,
        "datePublished": "2024-01-01T00:00:00Z",
        "dateModified": "2025-07-10T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Aurum Ascend Capital",
          "url": "https://www.aurumascend.ch"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, while based in the UK, Aurum Ascend Capital serves companies globally with our network of institutional investors across Europe, Americas, Asia, and Scandinavia. We've completed deals in over 25 countries.",
          "datePublished": "2024-01-01T00:00:00Z",
          "dateModified": "2025-07-10T00:00:00Z",
          "author": {
            "@type": "Organization",
            "name": "Aurum Ascend Capital",
            "url": "https://www.aurumascend.ch"
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
        "item": "https://www.aurumascend.ch"
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aurum Ascend Capital UK",
    "alternateName": ["Aurum Ascend Capital", "Aurum Ascend Capital Investment Platform"],
    "url": "https://www.aurumascend.ch",
    "description": "UK's premier investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia",
    "publisher": {
      "@type": "Organization",
      "name": "Aurum Ascend Capital",
      "url": "https://www.aurumascend.ch"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.aurumascend.ch/search?q={search_term_string}",
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
    "name": "How to Raise Capital Through Aurum Ascend Capital UK",
    "description": "Step-by-step guide to raising growth capital through Aurum Ascend Capital UK's institutional investor network",
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
        "url": "https://www.aurumascend.ch/apply"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Investor Matching",
        "text": "Our AI-powered system matches your company with relevant institutional investors based on sector, stage, and criteria",
        "url": "https://www.aurumascend.ch/how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Due Diligence",
        "text": "Engage in structured due diligence process with pre-qualified institutional investors",
        "url": "https://www.aurumascend.ch/how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Term Negotiation",
        "text": "Negotiate investment terms with institutional investors and family offices",
        "url": "https://www.aurumascend.ch/how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Funding Completion",
        "text": "Complete legal documentation and receive growth capital investment",
        "url": "https://www.aurumascend.ch/how-it-works"
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
