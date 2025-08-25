// Next.js 15 Schema.org components with 2025 best practices
import Script from 'next/script'

interface SchemaOrgProps {
  schema: object
  priority?: 'high' | 'low'
}

export function SchemaOrg({ schema, priority = 'low' }: SchemaOrgProps) {
  return (
    <Script
      id={`schema-${Object.hasOwnProperty.call(schema, '@type') ? (schema as any)['@type'] : 'unknown'}`}
      type="application/ld+json"
      strategy={priority === 'high' ? 'beforeInteractive' : 'afterInteractive'}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// Optimized Organization Schema for investment platform
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://www.aurumascend.ch/#organization",
    "name": "Aurum Ascend Capital",
    "alternateName": ["Aurum Ascend", "AurumAscend", "Aurum Ascend Platform", "AurumAscend Platform", "Aurum Ascend Capital Platform", "Auram Ascend", "AuramAscend", "Auram Ascend Capital"],
    "url": "https://www.aurumascend.ch",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.aurumascend.ch/logo.png",
      "width": 512,
      "height": 512,
      "caption": "Aurum Ascend Capital - European Investment Platform"
    },
    "description": "Professional B2B investment platform connecting companies at all stages with verified institutional investors worldwide. Expert matching services, proven results, global network coverage.",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bahnhofstrasse 100",
      "addressLocality": "Zurich",
      "postalCode": "8001",
      "addressCountry": "Switzerland"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41445550123",
      "contactType": "customer service",
      "email": "info@aurumascend.ch",
      "availableLanguage": ["English", "German", "French"],
      "areaServed": ["CH", "EU", "US", "GB"]
    },
    "sameAs": [
      "https://linkedin.com/company/aurumascend",
      "https://twitter.com/aurumascend"
    ],
    "serviceType": "Investment Platform Services",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Switzerland"
      },
      {
        "@type": "Place",
        "name": "Europe"
      },
      {
        "@type": "Place",
        "name": "Global"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Investment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investor Matching",
            "description": "Connect companies with verified institutional investors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Due Diligence Support",
            "description": "Comprehensive company verification and preparation"
          }
        }
      ]
    }
  }

  return <SchemaOrg schema={schema} priority="high" />
}

// Website Schema with search functionality
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.aurumascend.ch/#website",
    "name": "Aurum Ascend Capital",
    "url": "https://www.aurumascend.ch",
    "description": "Professional B2B investment platform connecting companies with verified institutional investors across Europe and globally.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.aurumascend.ch/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@id": "https://www.aurumascend.ch/#organization"
    }
  }

  return <SchemaOrg schema={schema} />
}

// Breadcrumb Schema component
interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": {
        "@type": "WebPage",
        "@id": item.url,
        "url": item.url
      }
    }))
  }

  return <SchemaOrg schema={schema} />
}

// FAQ Schema component
interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "name": "Aurum Ascend Capital",
          "url": "https://www.aurumascend.ch"
        }
      }
    }))
  }

  return <SchemaOrg schema={schema} />
}

// Article Schema for blog posts
interface ArticleSchemaProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
  image?: string
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
  image
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://www.aurumascend.ch"
    },
    "publisher": {
      "@id": "https://www.aurumascend.ch/#organization"
    },
    "url": url,
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image,
        "width": 1200,
        "height": 630
      }
    }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return <SchemaOrg schema={schema} />
}
