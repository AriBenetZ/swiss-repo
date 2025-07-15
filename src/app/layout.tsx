import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RaiseSignal - Connect with Institutional Investors for Growth Capital",
    template: "%s | RaiseSignal"
  },
  description: "Connect with verified institutional investors across Europe, Americas, Asia & Scandinavia. RaiseSignal helps growth-stage companies secure funding from VCs, private equity, and family offices. Join 150+ successful funding connections since 2019.",
  keywords: [
    // Core UK-focused keywords
    "UK investment platform", "British startup funding", "London venture capital", "UK private equity",
    "institutional investors UK", "startup funding UK", "venture capital London", "UK angel investors",
    "series A funding UK", "series B funding UK", "growth capital UK", "UK fundraising platform",
    
    // Enhanced UK-specific long-tail keywords
    "UK startup investment platform", "London based investment platform", "British venture capital firms",
    "UK institutional investor network", "startup funding platform UK", "investment platform London",
    "UK growth capital platform", "British angel investor network", "London private equity platform",
    
    // Geographic expansion keywords
    "European investors", "EU startup funding", "European venture capital", "Scandinavian investors",
    "German venture capital", "French private equity", "Swedish investors", "Norwegian funding",
    "Danish venture capital", "Finnish investors", "Swiss private equity", "Austrian funding",
    
    // Global reach keywords
    "international investors", "global funding platform", "cross-border investment", "worldwide venture capital",
    "American VCs", "Asian investors", "Singapore funding", "Australian venture capital", "Canadian investors",
    
    // Industry-specific keywords  
    "fintech funding UK", "SaaS funding London", "healthtech investors UK", "edtech venture capital",
    "cleantech funding UK", "AI startup funding", "blockchain investors UK", "deeptech funding",
    "biotech venture capital", "proptech investors UK", "cybersecurity funding", "medtech investors",
    
    // Funding stage keywords
    "pre-seed funding UK", "seed funding UK", "series A investors UK", "series B funding UK",
    "growth stage funding UK", "late stage investors UK", "bridge funding UK", "mezzanine financing UK",
    "expansion capital UK", "scale-up funding UK", "startup capital UK", "venture debt UK",
    
    // Investor type keywords
    "family offices UK", "private investors UK", "angel investor platform UK", "VC network UK",
    "institutional capital UK", "corporate investors UK", "strategic investors UK", "impact investors UK",
    "pension fund investment", "sovereign wealth fund", "insurance company investors", "asset manager funding",
    
    // Long-tail SEO keywords
    "how to find investors UK", "startup funding application UK", "venture capital matching UK",
    "institutional investor network UK", "private equity opportunities UK", "family office investors UK",
    "growth stage funding UK", "startup scale-up funding", "business angel network UK",
    "venture capital firms London", "private equity firms UK", "investment opportunities UK",
    
    // Company-specific keywords
    "RaiseSignal UK", "RaiseSignal platform", "investment matching UK", "verified investors UK",
    "funding connections UK", "startup due diligence UK", "capital raising UK", "investment platform UK",
    "RaiseSignal investment platform", "raise signal UK", "funding platform UK", "investor platform UK"
  ],
  authors: [{ name: "RaiseSignal", url: "https://www.raisesignal.uk" }],
  creator: "RaiseSignal",
  publisher: "RaiseSignal",
  metadataBase: new URL("https://www.raisesignal.uk"),
  // Additional 2025 SEO optimizations
  applicationName: "RaiseSignal",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION, // Use environment variable
    // other: {
    //   "microsoft-domain-verification": process.env.BING_VERIFICATION,
    // },
  },
  other: {
    // Tell Google this site has moved from .nl to .uk permanently
    "original-source": "https://www.raisesignal.uk",
    "robots": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    // Block any .nl domain references
    "x-frame-options": "SAMEORIGIN",
  },
  alternates: {
    canonical: "/",
    languages: {
      'en': 'https://www.raisesignal.uk',
      'en-US': 'https://www.raisesignal.uk',
      'en-GB': 'https://www.raisesignal.uk', 
      'en-EU': 'https://www.raisesignal.uk',
      'en-SE': 'https://www.raisesignal.uk', // Sweden
      'en-NO': 'https://www.raisesignal.uk', // Norway  
      'en-DK': 'https://www.raisesignal.uk', // Denmark
      'en-FI': 'https://www.raisesignal.uk', // Finland
      'en-DE': 'https://www.raisesignal.uk', // Germany
      'en-FR': 'https://www.raisesignal.uk', // France
      'en-CH': 'https://www.raisesignal.uk', // Switzerland
      'en-AT': 'https://www.raisesignal.uk', // Austria
      'en-SG': 'https://www.raisesignal.uk', // Singapore
      'en-AU': 'https://www.raisesignal.uk', // Australia
      'en-CA': 'https://www.raisesignal.uk', // Canada
    }
  },
  openGraph: {
    title: "RaiseSignal - Connect with Institutional Investors for Growth Capital",
    description: "Connect with verified institutional investors across Europe, Americas, Asia & Scandinavia. Join 150+ successful funding connections since 2019.",
    url: "https://www.raisesignal.uk",
    siteName: "RaiseSignal UK",
    type: "website",
    locale: "en_GB",
    alternateLocale: ["en_US", "en_EU", "en_SE", "en_NO", "en_DK", "en_FI", "en_DE", "en_FR", "en_CH", "en_AT", "en_SG", "en_AU", "en_CA"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RaiseSignal - UK's Premier Investment Platform for Growth Companies and Institutional Investors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaiseSignal - Connect with Institutional Investors for Growth Capital",
    description: "Connect with verified institutional investors across Europe, Americas, Asia & Scandinavia. Join 150+ successful funding connections.",
    images: ["/og-image.png"],
    creator: "@raisesignal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    shortcut: "/logo.svg",
    apple: [
      { url: "/logo.svg", sizes: "180x180", type: "image/svg+xml" },
      { url: "/logo.jpg", sizes: "152x152", type: "image/jpeg" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
        color: "#8B5CF6"
      }
    ]
  },
  manifest: "/site.webmanifest",
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* Logo and Branding */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="mask-icon" href="/logo.svg" color="#8B5CF6" />
        
        {/* Open Graph Logo */}
        <meta property="og:logo" content="https://www.raisesignal.uk/logo.svg" />
        <meta property="og:image:alt" content="RaiseSignal Logo - Global Investment Platform" />
        
        {/* Twitter Logo */}
        <meta name="twitter:image:alt" content="RaiseSignal Logo - Global Investment Platform" />
        
        {/* Additional logo references for search engines */}
        <meta name="msapplication-TileImage" content="/logo.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* International SEO */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        
        {/* Additional meta tags for international presence */}
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="international" />
        <meta name="audience" content="international" />
        
        {/* Business specific */}
        <meta name="business:contact_data:street_address" content="3 More London Riverside" />
        <meta name="business:contact_data:locality" content="London" />
        <meta name="business:contact_data:region" content="England" />
        <meta name="business:contact_data:postal_code" content="SE1 2RE" />
        <meta name="business:contact_data:country_name" content="United Kingdom" />
        
        {/* AI SEO 2025 Optimizations - Single robots directive */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Enhanced AI Search Optimization */}
        <meta name="AI-content-classification" content="business-finance-investment" />
        <meta name="content-language" content="en-GB" />
        <meta name="subject" content="Investment Platform for Growth Companies and Institutional Investors" />
        <meta name="abstract" content="Global investment platform connecting verified institutional investors with growth-stage companies across Europe, Americas, Asia, and Scandinavia" />
        
        {/* Search Engine Relationship */}
        <meta name="rating" content="general" />
        <meta name="classification" content="business" />
        <meta name="expires" content="never" />
        <meta name="revisit-after" content="3 days" />
        
        {/* Domain preference and canonicalization */}
        <link rel="canonical" href="https://www.raisesignal.uk" />
        <meta name="preferred-domain" content="www.raisesignal.uk" />
        <meta name="original-source" content="https://www.raisesignal.uk" />
        
        {/* Enhanced UK/European SEO */}
        <meta name="DC.identifier" content="https://www.raisesignal.uk" />
        <meta name="DC.language" content="en-GB" />
        <meta name="DC.coverage" content="Europe, Americas, Asia, Scandinavia" />
        <meta name="DC.subject" content="Investment Platform, Venture Capital, Private Equity, Institutional Investors" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization", 
              "name": "RaiseSignal",
              "url": "https://www.raisesignal.uk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.raisesignal.uk/logo.svg",
                "width": 512,
                "height": 512,
                "caption": "RaiseSignal Logo"
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://www.raisesignal.uk/og-image.png",
                "width": 1200,
                "height": 630,
                "caption": "RaiseSignal - Investment Platform"
              },
              "description": "Investment platform connecting growth-stage companies with verified institutional investors, VCs, private equity, and family offices across Europe, Americas, Asia & Scandinavia. 150+ successful deals completed since 2019.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3 More London Riverside",
                "addressLocality": "London",
                "addressCountry": "United Kingdom",
                "postalCode": "SE1 2RE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+447537126467",
                "contactType": "customer service",
                "email": "info@raisesignal.uk",
                "availableLanguage": ["English"]
              },
              "foundingDate": "2019",
              "industry": "Financial Services",
              "numberOfEmployees": "11-50",
              "sameAs": [
                "https://linkedin.com/company/raisesignal",
                "https://twitter.com/raisesignal"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Investment Platform Services",
                "description": "Connect growth-stage companies with institutional investors across Europe, Americas, Asia & Scandinavia"
              },
              "areaServed": ["Europe", "North America", "Asia", "Scandinavia", "Worldwide"],
              "serviceType": "Investment Platform"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "RaiseSignal",
              "url": "https://www.raisesignal.uk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.raisesignal.uk/logo.svg",
                "width": 512,
                "height": 512,
                "caption": "RaiseSignal Logo"
              },
              "description": "Investment platform specializing in connecting growth-stage companies with institutional investors across Europe, Americas, Asia, and Scandinavia. 150+ successful deals completed since 2019.",
              "serviceType": ["Investment Platform", "Capital Markets", "Financial Advisory"],
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country", 
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "Germany"
                },
                {
                  "@type": "Country",
                  "name": "France"
                },
                {
                  "@type": "Country",
                  "name": "Sweden"
                },
                {
                  "@type": "Country",
                  "name": "Norway"
                },
                {
                  "@type": "Country",
                  "name": "Denmark"
                },
                {
                  "@type": "Country",
                  "name": "Finland"
                },
                {
                  "@type": "Country",
                  "name": "Switzerland"
                },
                {
                  "@type": "Country",
                  "name": "Austria"
                },
                {
                  "@type": "Country",
                  "name": "Singapore"
                },
                {
                  "@type": "Country",
                  "name": "Japan"
                },
                {
                  "@type": "Country",
                  "name": "Australia"
                },
                {
                  "@type": "Country",
                  "name": "Canada"
                },
                {
                  "@type": "Place",
                  "name": "Europe"
                },
                {
                  "@type": "Place",
                  "name": "North America"
                },
                {
                  "@type": "Place",
                  "name": "Asia Pacific"
                },
                {
                  "@type": "Place",
                  "name": "Scandinavia"
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
                      "name": "Series A Funding",
                      "description": "Connect with institutional investors for Series A funding rounds"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Series B Funding",
                      "description": "Access to growth capital for scaling operations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Growth Capital",
                      "description": "Institutional capital for market expansion and growth"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "RaiseSignal",
              "url": "https://www.raisesignal.uk",
              "description": "Global investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.raisesignal.uk/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "RaiseSignal",
                "logo": "https://www.raisesignal.uk/logo.svg"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "RaiseSignal UK",
              "alternateName": ["RaiseSignal", "Raise Signal", "RaiseSignal Investment Platform"],
              "url": "https://www.raisesignal.uk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.raisesignal.uk/logo.svg",
                "width": 512,
                "height": 512
              },
              "description": "Investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia",
              "priceRange": "Success-based fees only",
              "telephone": "+447537126467",
              "email": "info@raisesignal.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3 More London Riverside",
                "addressLocality": "London",
                "postalCode": "SE1 2RE",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.5074,
                "longitude": -0.1278
              },
              "areaServed": [
                "United Kingdom", "Europe", "North America", "Asia", "Scandinavia"
              ],
              "serviceType": "Investment Platform",
              "knowsAbout": [
                "Venture Capital", "Private Equity", "Series A Funding", "Series B Funding",
                "Growth Capital", "Institutional Investors", "Family Offices", "Angel Investors",
                "Startup Funding", "Business Investment", "Capital Raising", "Due Diligence"
              ],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "name": "Financial Services Authorization",
                "credentialCategory": "Professional License"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "150"
              }
            })
          }}
        />
        {/* Voice Search & AI Assistant Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "QAPage",
              "mainEntity": {
                "@type": "Question",
                "name": "How do I find investors for my startup?",
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
                  "text": "RaiseSignal connects startups with verified institutional investors through our secure platform. Apply in 3 steps: Submit your application, get matched with relevant investors, and secure funding. We've helped 150+ companies raise capital across Europe, Americas, Asia, and Scandinavia.",
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
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-base text-primary dark`}>
        <div className="min-h-screen flex flex-col relative">
          <Navbar />
          <main className="flex-1 flex flex-col mb-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
