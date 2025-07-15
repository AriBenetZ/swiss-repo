import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RaiseSignal - Data Protection & Security",
  description: "Learn how RaiseSignal protects your data and privacy. Comprehensive privacy policy covering data collection, usage, sharing, and your rights under GDPR and data protection laws.",
  keywords: [
    "privacy policy", "data protection", "GDPR compliance", "data security",
    "personal information", "privacy rights", "data collection", "data usage",
    "RaiseSignal privacy", "investment platform privacy", "confidentiality"
  ],
  openGraph: {
    title: "Privacy Policy | RaiseSignal",
    description: "Learn how RaiseSignal protects your data and privacy. GDPR compliant data protection practices.",
    url: "https://www.raisesignal.uk/privacy",
    siteName: "RaiseSignal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | RaiseSignal",
    description: "Learn how RaiseSignal protects your data and privacy. GDPR compliant data protection practices.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.raisesignal.uk/privacy",
  },
};

export default function PrivacyLayout({
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
            "name": "Privacy Policy",
            "description": "RaiseSignal's privacy policy detailing data protection practices, GDPR compliance, and user privacy rights.",
            "url": "https://www.raisesignal.uk/privacy",
            "publisher": {
              "@type": "Organization",
              "name": "RaiseSignal",
              "url": "https://www.raisesignal.uk"
            },
            "datePublished": "2024-01-15T00:00:00Z",
            "dateModified": "2025-01-15T00:00:00Z",
            "inLanguage": "en-GB",
            "isPartOf": {
              "@type": "WebSite",
              "name": "RaiseSignal",
              "url": "https://www.raisesignal.uk"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.raisesignal.uk"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Privacy Policy",
                  "item": "https://www.raisesignal.uk/privacy"
                }
              ]
            }
          }),
        }}
      />
      
      {/* Organization Privacy Practice Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RaiseSignal",
            "url": "https://www.raisesignal.uk",
            "privacyPolicy": "https://www.raisesignal.uk/privacy",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Privacy Officer",
              "email": "privacy@raisesignal.uk",
              "availableLanguage": "English"
            },
            "policy": [
              {
                "@type": "DigitalDocument",
                "name": "Privacy Policy",
                "description": "Data protection and privacy practices",
                "url": "https://www.raisesignal.uk/privacy"
              },
              {
                "@type": "DigitalDocument", 
                "name": "GDPR Compliance",
                "description": "European data protection regulation compliance",
                "url": "https://www.raisesignal.uk/privacy"
              }
            ]
          }),
        }}
      />
      
      {/* Privacy FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does RaiseSignal protect your data?",
                "answerCount": 1,
                "datePublished": "2024-01-15T00:00:00Z",
                "dateModified": "2025-07-10T00:00:00Z",
                "author": {
                  "@type": "Organization",
                  "name": "RaiseSignal",
                  "url": "https://www.raisesignal.uk"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use bank-grade AES-256 encryption, secure data centers, regular security audits, and strict access controls to protect your personal and financial information.",
                  "datePublished": "2024-01-15T00:00:00Z",
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
                "name": "What are your GDPR rights with RaiseSignal?",
                "answerCount": 1,
                "datePublished": "2024-01-15T00:00:00Z",
                "dateModified": "2025-07-10T00:00:00Z",
                "author": {
                  "@type": "Organization",
                  "name": "RaiseSignal",
                  "url": "https://www.raisesignal.uk"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You have the right to access, correct, delete, or restrict processing of your data. You can also request data portability and withdraw consent at any time.",
                  "datePublished": "2024-01-15T00:00:00Z",
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
                "name": "Does RaiseSignal share your data?",
                "answerCount": 1,
                "datePublished": "2024-01-15T00:00:00Z",
                "dateModified": "2025-07-10T00:00:00Z",
                "author": {
                  "@type": "Organization",
                  "name": "RaiseSignal",
                  "url": "https://www.raisesignal.uk"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We only share data with verified investors during the funding process, and only with your explicit consent. We never sell personal data to third parties.",
                  "datePublished": "2024-01-15T00:00:00Z",
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
                "name": "How long does RaiseSignal keep your data?",
                "answerCount": 1,
                "datePublished": "2024-01-15T00:00:00Z",
                "dateModified": "2025-07-10T00:00:00Z",
                "author": {
                  "@type": "Organization",
                  "name": "RaiseSignal",
                  "url": "https://www.raisesignal.uk"
                },
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We retain data only as long as necessary for business purposes and legal requirements, typically 7 years for financial records and 3 years for general business data.",
                  "datePublished": "2024-01-15T00:00:00Z",
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
          }),
        }}
      />
      {children}
    </>
  );
}
