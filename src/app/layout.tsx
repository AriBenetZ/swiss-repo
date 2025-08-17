import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SEOProvider } from "@/components/seo-provider";
import { OrganizationSchema, WebsiteSchema } from "@/components/schema-org";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aurum Ascend Capital - Connect with Institutional Investors for Growth Capital",
    template: "%s | Aurum Ascend Capital"
  },
  description: "Connect with verified institutional investors across Europe, Americas, Asia & global markets. Aurum Ascend Capital helps growth-stage companies secure funding from VCs, private equity, and family offices. Join 150+ successful funding connections with our Swiss-based expertise.",
  keywords: [
    // Core Swiss-focused keywords
    "Swiss investment platform", "Switzerland startup funding", "Zurich venture capital", "Swiss private equity",
    "institutional investors Switzerland", "startup funding Switzerland", "venture capital Zurich", "Swiss angel investors",
    "series A funding Switzerland", "series B funding Switzerland", "growth capital Switzerland", "Swiss fundraising platform",
    
    // Enhanced Swiss-specific long-tail keywords
    "Swiss startup investment platform", "Zurich based investment platform", "Switzerland venture capital firms",
    "Swiss institutional investor network", "startup funding platform Switzerland", "investment platform Zurich",
    "Swiss growth capital platform", "Switzerland angel investor network", "Zurich private equity platform",
    
    // Geographic expansion keywords
    "European investors", "EU startup funding", "European venture capital", "German investors",
    "Austrian venture capital", "French private equity", "Italian investors", "Nordic funding",
    "DACH region venture capital", "European funding", "Swiss private equity", "Alpine funding",
    
    // Global reach keywords
    "international investors", "global funding platform", "cross-border investment", "worldwide venture capital",
    "American VCs", "Asian investors", "Singapore funding", "Australian venture capital", "Canadian investors",
    
    // Industry-specific keywords  
    "fintech funding Switzerland", "SaaS funding Zurich", "healthtech investors Switzerland", "cleantech venture capital",
    "medtech funding Switzerland", "AI startup funding", "blockchain investors Switzerland", "deeptech funding",
    "biotech venture capital", "proptech investors Switzerland", "cybersecurity funding", "precision instruments funding",
    
    // Funding stage keywords
    "pre-seed funding Switzerland", "seed funding Switzerland", "series A investors Switzerland", "series B funding Switzerland",
    "growth stage funding Switzerland", "late stage investors Switzerland", "bridge funding Switzerland", "mezzanine financing Switzerland",
    "expansion capital Switzerland", "scale-up funding Switzerland", "startup capital Switzerland", "venture debt Switzerland",
    
    // Investor type keywords
    "family offices Switzerland", "private investors Switzerland", "angel investor platform Switzerland", "VC network Switzerland",
    "institutional capital Switzerland", "corporate investors Switzerland", "strategic investors Switzerland", "impact investors Switzerland",
    "pension fund investment", "sovereign wealth fund", "insurance company investors", "asset manager funding",
    
    // Long-tail SEO keywords
    "how to find investors Switzerland", "startup funding application Switzerland", "venture capital matching Switzerland",
    "institutional investor network Switzerland", "private equity opportunities Switzerland", "family office investors Switzerland",
    "growth stage funding Switzerland", "startup scale-up funding", "business angel network Switzerland",
    "venture capital firms Zurich", "private equity firms Switzerland", "investment opportunities Switzerland",
    
    // Company-specific keywords
    "Aurum Ascend Capital", "Aurum Ascend platform", "investment matching Switzerland", "verified investors Switzerland",
    "funding connections Switzerland", "startup due diligence Switzerland", "capital raising Switzerland", "investment platform Switzerland",
    "Aurum Ascend investment platform", "aurum ascend capital", "funding platform Switzerland", "investor platform Switzerland"
  ],
  authors: [{ name: "Aurum Ascend Capital", url: "https://www.aurumascend.ch" }],
  creator: "Aurum Ascend Capital",
  publisher: "Aurum Ascend Capital",
  metadataBase: new URL("https://www.aurumascend.ch"),
  // Additional 2025 SEO optimizations
  applicationName: "Aurum Ascend Capital",
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
    // Tell Google this site has moved to .ch permanently
    "original-source": "https://www.aurumascend.ch",
    "robots": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    // Block any .nl domain references
    "x-frame-options": "SAMEORIGIN",
  },
  alternates: {
    canonical: "/",
    languages: {
      'en': 'https://www.aurumascend.ch',
      'en-US': 'https://www.aurumascend.ch',
      'en-GB': 'https://www.aurumascend.ch', 
      'en-EU': 'https://www.aurumascend.ch',
      'en-CH': 'https://www.aurumascend.ch', // Switzerland
      'en-DE': 'https://www.aurumascend.ch', // Germany
      'en-AT': 'https://www.aurumascend.ch', // Austria
      'en-FR': 'https://www.aurumascend.ch', // France
      'en-IT': 'https://www.aurumascend.ch', // Italy
      'en-SG': 'https://www.aurumascend.ch', // Singapore
      'en-AU': 'https://www.aurumascend.ch', // Australia
      'en-CA': 'https://www.aurumascend.ch', // Canada
    }
  },
  openGraph: {
    title: "Aurum Ascend Capital - Connect with Institutional Investors for Growth Capital",
    description: "Connect with verified institutional investors across Europe, Americas, Asia & global markets. Join 150+ successful funding connections with our Swiss-based expertise.",
    url: "https://www.aurumascend.ch",
    siteName: "Aurum Ascend Capital",
    type: "website",
    locale: "en_CH",
    alternateLocale: ["en_US", "en_EU", "en_DE", "en_AT", "en_FR", "en_IT", "en_SG", "en_AU", "en_CA"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aurum Ascend Capital - Switzerland's Premier Investment Platform for Growth Companies and Institutional Investors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurum Ascend Capital - Connect with Institutional Investors for Growth Capital",
    description: "Connect with verified institutional investors across Europe, Americas, Asia & global markets. Join 150+ successful funding connections.",
    images: ["/og-image.png"],
    creator: "@aurumascend",
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
      { url: "/logo.png", type: "image/png+xml" },
      { url: "/logo.png", sizes: "any", type: "image/png+xml" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png+xml" },
      { url: "/logo.png", sizes: "152x152", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
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
        <link rel="icon" href="/logo.png" type="image/png+xml" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="mask-icon" href="/logo.png" color="#D4AF37" />
        
        {/* Open Graph Logo */}
        <meta property="og:logo" content="https://www.aurumascend.ch/logo.png" />
        <meta property="og:image:alt" content="Aurum Ascend Capital Logo - Global Investment Platform" />
        
        {/* Twitter Logo */}
        <meta name="twitter:image:alt" content="Aurum Ascend Capital Logo - Global Investment Platform" />
        
        {/* Additional logo references for search engines */}
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* International SEO */}
        <meta name="geo.region" content="CH" />
        <meta name="geo.placename" content="Zurich" />
        <meta name="geo.position" content="47.3769;8.5417" />
        <meta name="ICBM" content="47.3769, 8.5417" />
        
        {/* Additional meta tags for international presence */}
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="international" />
        <meta name="audience" content="international" />
        
        {/* Business specific */}
        <meta name="business:contact_data:street_address" content="Bahnhofstrasse 100" />
        <meta name="business:contact_data:locality" content="Zurich" />
        <meta name="business:contact_data:region" content="Zurich" />
        <meta name="business:contact_data:postal_code" content="8001" />
        <meta name="business:contact_data:country_name" content="Switzerland" />
        
        {/* AI SEO 2025 Optimizations - Single robots directive */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Enhanced AI Search Optimization */}
        <meta name="AI-content-classification" content="business-finance-investment" />
        <meta name="content-language" content="en-CH" />
        <meta name="subject" content="Investment Platform for Growth Companies and Institutional Investors" />
        <meta name="abstract" content="Global investment platform connecting verified institutional investors with growth-stage companies across Europe, Americas, Asia, and Scandinavia" />
        
        {/* Search Engine Relationship */}
        <meta name="rating" content="general" />
        <meta name="classification" content="business" />
        <meta name="expires" content="never" />
        <meta name="revisit-after" content="3 days" />
        
        {/* Domain preference and canonicalization */}
        <link rel="canonical" href="https://www.aurumascend.ch" />
        <meta name="preferred-domain" content="www.aurumascend.ch" />
        <meta name="original-source" content="https://www.aurumascend.ch" />
        
        {/* Enhanced Swiss/European SEO */}
        <meta name="DC.identifier" content="https://www.aurumascend.ch" />
        <meta name="DC.language" content="en-CH" />
        <meta name="DC.coverage" content="Europe, Americas, Asia, Global" />
        <meta name="DC.subject" content="Investment Platform, Venture Capital, Private Equity, Institutional Investors" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization", 
              "name": "Aurum Ascend Capital",
              "url": "https://www.aurumascend.ch",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.aurumascend.ch/logo.png",
                "width": 512,
                "height": 512,
                "caption": "Aurum Ascend Capital Logo"
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://www.aurumascend.ch/og-image.png",
                "width": 1200,
                "height": 630,
                "caption": "Aurum Ascend Capital - Investment Platform"
              },
              "description": "Investment platform connecting growth-stage companies with verified institutional investors, VCs, private equity, and family offices across Europe, Americas, Asia & global markets. 150+ successful deals completed with our Swiss-based expertise.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bahnhofstrasse 100",
                "addressLocality": "Zurich",
                "addressCountry": "Switzerland",
                "postalCode": "8001"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+447537126467",
                "contactType": "customer service",
                "email": "info@aurumascend.ch",
                "availableLanguage": ["English"]
              },
              "foundingDate": "2019",
              "industry": "Financial Services",
              "numberOfEmployees": "11-50",
              "sameAs": [
                "https://linkedin.com/company/aurumascend",
                "https://twitter.com/aurumascend"
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
              "name": "Aurum Ascend Capital",
              "url": "https://www.aurumascend.ch",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.aurumascend.ch/logo.png",
                "width": 512,
                "height": 512,
                "caption": "Aurum Ascend Capital Logo"
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
              "name": "Aurum Ascend Capital",
              "url": "https://www.aurumascend.ch",
              "description": "Global investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.aurumascend.ch/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Aurum Ascend Capital",
                "logo": "https://www.aurumascend.ch/logo.png"
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
              "name": "Aurum Ascend Capital",
              "alternateName": ["Aurum Ascend", "Aurum Ascend Capital", "Aurum Ascend Investment Platform"],
              "url": "https://www.aurumascend.ch",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.aurumascend.ch/logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Investment platform connecting growth-stage companies with verified institutional investors across Europe, Americas, Asia & Scandinavia",
              "priceRange": "Success-based fees only",
              "telephone": "+41445881234",
              "email": "info@aurumascend.ch",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Zurichstrasse 110",
                "addressLocality": "Zurich",
                "postalCode": "8008",
                "addressCountry": "CH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.3769,
                "longitude": 8.5417
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
                  "name": "Aurum Ascend Capital",
                  "url": "https://www.aurumascend.ch"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aurum Ascend Capital connects startups with verified institutional investors through our secure platform. Apply in 3 steps: Submit your application, get matched with relevant investors, and secure funding. We've helped 150+ companies raise capital across Europe, Americas, Asia, and Scandinavia.",
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
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-base text-primary dark`}>
        <SEOProvider>
          <OrganizationSchema />
          <WebsiteSchema />
          <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <main className="flex-1 flex flex-col mb-auto">
              {children}
            </main>
            <Footer />
          </div>
        </SEOProvider>
      </body>
    </html>
  );
}
