import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Aurum Ascend Capital - Legal Agreement & Platform Rules",
  description: "Read Aurum Ascend Capital's terms of service. Legal agreement covering platform usage, user obligations, service provision, and terms for companies and investors.",
  keywords: [
    "terms of service", "terms and conditions", "legal agreement", "platform rules",
    "user obligations", "service terms", "Aurum Ascend Capital terms", "investment platform terms",
    "legal compliance", "user agreement", "service agreement"
  ],
  openGraph: {
    title: "Terms of Service | Aurum Ascend Capital",
    description: "Read Aurum Ascend Capital's terms of service covering platform usage and legal agreements.",
    url: "https://www.aurumascend.ch/terms",
    siteName: "Aurum Ascend Capital",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Aurum Ascend Capital",
    description: "Read Aurum Ascend Capital's terms of service covering platform usage and legal agreements.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aurumascend.ch/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Legal Document Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "description": "Aurum Ascend Capital's terms of service detailing platform usage rules, user obligations, and legal agreements.",
            "url": "https://www.aurumascend.ch/terms",
            "publisher": {
              "@type": "Organization",
              "name": "Aurum Ascend Capital",
              "url": "https://www.aurumascend.ch"
            },
            "datePublished": "2024-01-15T00:00:00Z",
            "dateModified": "2025-01-15T00:00:00Z",
            "inLanguage": "en-GB",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Aurum Ascend Capital",
              "url": "https://www.aurumascend.ch"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.aurumascend.ch"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Terms of Service",
                  "item": "https://www.aurumascend.ch/terms"
                }
              ]
            }
          }),
        }}
      />
      
      {/* Terms FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are Aurum Ascend Capital's main terms of service?",
                "answerCount": 1,
                "datePublished": "2024-01-15T00:00:00Z",
                "dateModified": "2025-07-10T00:00:00Z",
                "author": {
                  "@type": "Organization",
                  "name": "Aurum Ascend Capital",
                  "url": "https://www.aurumascend.ch"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Users must provide accurate information, maintain confidentiality, comply with securities regulations, and use the platform only for legitimate investment purposes. We provide matching services between companies and investors.",
                  "datePublished": "2024-01-15T00:00:00Z",
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
                "name": "What fees does Aurum Ascend Capital charge?",
                "answerCount": 1,
                "datePublished": "2024-01-15T00:00:00Z",
                "dateModified": "2025-07-10T00:00:00Z",
                "author": {
                  "@type": "Organization",
                  "name": "Aurum Ascend Capital",
                  "url": "https://www.aurumascend.ch"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We operate on a success-based fee model. No upfront fees are charged. Fees are only due upon successful completion of funding.",
                  "datePublished": "2024-01-15T00:00:00Z",
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
                "name": "Can I cancel my Aurum Ascend Capital agreement?",
                "answerCount": 1,
                "datePublished": "2024-01-15T00:00:00Z",
                "dateModified": "2025-07-10T00:00:00Z",
                "author": {
                  "@type": "Organization",
                  "name": "Aurum Ascend Capital",
                  "url": "https://www.aurumascend.ch"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You may terminate the agreement with 30 days written notice. However, obligations related to ongoing funding processes and confidentiality continue as specified in the agreement.",
                  "datePublished": "2024-01-15T00:00:00Z",
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
          }),
        }}
      />
      {children}
    </>
  );
}
