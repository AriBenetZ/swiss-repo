// Advanced SEO Analytics for Next.js 15 & 2025 Best Practices
// Uses @next/third-parties for optimized script loading

import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

export interface SEOEvent {
  event_name: string;
  event_category: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

// Core Web Vitals tracking with Next.js 15 optimization
export const trackCoreWebVitals = () => {
  if (typeof window !== 'undefined') {
    onCLS(sendToGoogleAnalytics)
    onFID(sendToGoogleAnalytics)
    onFCP(sendToGoogleAnalytics)
    onLCP(sendToGoogleAnalytics)
    onTTFB(sendToGoogleAnalytics)
    onINP(sendToGoogleAnalytics)
  }
}

// Enhanced Google Analytics 4 tracking
export const sendToGoogleAnalytics = (metric: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Core Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      custom_map: {
        metric_id: 'dimension1',
        metric_value: 'dimension2',
        metric_delta: 'dimension3',
      },
    });
  }
};

// SEO-specific event tracking
export const trackSEOEvents = {
  // Search interactions
  searchQuery: (query: string, results: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'search', {
        search_term: query,
        event_category: 'SEO',
        event_label: 'internal_search',
        custom_parameters: {
          search_results: results,
          search_type: 'site_search'
        }
      });
    }
  },

  // Page engagement
  scrollDepth: (percentage: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll', {
        event_category: 'Engagement',
        event_label: `${percentage}%`,
        value: percentage
      });
    }
  },

  // Content interactions
  contentEngagement: (contentType: string, action: string, element: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: 'Content',
        event_label: `${contentType}_${element}`,
        content_type: contentType,
        engagement_action: action
      });
    }
  },

  // Form interactions for lead generation
  formInteraction: (formName: string, step: string, field?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_interaction', {
        event_category: 'Forms',
        event_label: formName,
        form_name: formName,
        form_step: step,
        form_field: field || 'unknown'
      });
    }
  },

  // CTA tracking
  ctaClick: (ctaText: string, location: string, destination: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'CTA',
        event_label: ctaText,
        cta_text: ctaText,
        cta_location: location,
        destination_url: destination
      });
    }
  },

  // Social proof interactions
  socialProof: (type: string, action: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'social_proof_interaction', {
        event_category: 'Social Proof',
        event_label: type,
        interaction_type: action
      });
    }
  }
};

// Enhanced structured data validation
export const validateStructuredData = async (url: string) => {
  if (process.env.NODE_ENV === 'development') {
    try {
      const response = await fetch(`https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`);
      console.log('Structured Data Validation:', response.status === 200 ? 'Valid' : 'Issues detected');
    } catch (error) {
      console.warn('Could not validate structured data:', error);
    }
  }
};

// Page load optimization tracking
export const trackPagePerformance = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (window.gtag && perfData) {
          window.gtag('event', 'page_performance', {
            event_category: 'Performance',
            page_load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
            dom_ready_time: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
            first_byte_time: Math.round(perfData.responseStart - perfData.fetchStart),
            dns_time: Math.round(perfData.domainLookupEnd - perfData.domainLookupStart),
            connection_time: Math.round(perfData.connectEnd - perfData.connectStart)
          });
        }
      }, 0);
    });
  }
};

// Schema.org microdata injection for enhanced SEO
export const injectMicrodata = (elementId: string, schemaType: string, properties: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(elementId);
    if (element) {
      element.setAttribute('itemscope', '');
      element.setAttribute('itemtype', `https://schema.org/${schemaType}`);
      
      Object.entries(properties).forEach(([key, value]) => {
        const propElement = document.createElement('meta');
        propElement.setAttribute('itemprop', key);
        propElement.setAttribute('content', String(value));
        element.appendChild(propElement);
      });
    }
  }
};

// Breadcrumb JSON-LD generator
export const generateBreadcrumbLD = (items: Array<{name: string, url: string}>) => {
  return {
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
  };
};

// FAQ schema generator with enhanced markup
export const generateFAQLD = (faqs: Array<{question: string, answer: string}>) => {
  return {
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
  };
};

// Organization schema with comprehensive details
export const generateOrganizationLD = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://www.aurumascend.ch/#organization",
    "name": "Aurum Ascend Capital",
    "alternateName": ["Aurum Ascend", "AurumAscend"],
    "url": "https://www.aurumascend.ch",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.aurumascend.ch/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Professional B2B investment platform connecting companies at all stages with verified institutional investors worldwide. Expert matching services, proven results, global network coverage.",
    "foundingDate": "2019",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Zurich",
        "addressCountry": "Switzerland"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bahnhofstrasse 100",
      "addressLocality": "Zurich",
      "postalCode": "8001",
      "addressCountry": "Switzerland"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+41445550123",
        "contactType": "customer service",
        "email": "info@aurumascend.ch",
        "availableLanguage": ["English", "German", "French"],
        "areaServed": ["CH", "EU", "US", "GB"]
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/aurumascend",
      "https://twitter.com/aurumascend"
    ],
    "serviceType": "Investment Platform",
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
  };
};

// Enhanced robots.txt generation
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot  
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 2

# High-frequency bots
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10

# Block aggressive crawlers
User-agent: SemrushBot-SA
Disallow: /

User-agent: DotBot
Disallow: /

# Sitemaps
Sitemap: https://www.aurumascend.ch/sitemap.xml
Sitemap: https://www.aurumascend.ch/sitemap-index.xml

# Cache-Control headers recommendation
# X-Robots-Tag: index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`;
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
