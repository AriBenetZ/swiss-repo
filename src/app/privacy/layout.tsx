import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aurum Ascend Capital - Data Protection & Security",
  description: "Learn how Aurum Ascend Capital protects your data and privacy. Comprehensive privacy policy covering data collection, usage, sharing, and your rights under GDPR and data protection laws.",
  keywords: [
    "privacy policy", "data protection", "GDPR compliance", "data security",
    "personal information", "privacy rights", "data collection", "data usage",
    "Aurum Ascend Capital privacy", "investment platform privacy", "confidentiality"
  ],
  openGraph: {
    title: "Privacy Policy | Aurum Ascend Capital",
    description: "Learn how Aurum Ascend Capital protects your data and privacy. GDPR compliant data protection practices.",
    url: "https://www.aurumascend.ch/privacy",
    siteName: "Aurum Ascend Capital",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Aurum Ascend Capital",
    description: "Learn how Aurum Ascend Capital protects your data and privacy. GDPR compliant data protection practices.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aurumascend.ch/privacy",
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
            "description": "Aurum Ascend Capital's privacy policy detailing data protection practices, GDPR compliance, and user privacy rights.",
            "url": "https://www.aurumascend.ch/privacy",
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
                  "name": "Privacy Policy",
                  "item": "https://www.aurumascend.ch/privacy"
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
            "name": "Aurum Ascend Capital",
            "url": "https://www.aurumascend.ch",
            "privacyPolicy": "https://www.aurumascend.ch/privacy",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Privacy Officer",
              "email": "privacy@aurumascend.ch",
              "availableLanguage": "English"
            },
            "policy": [
              {
                "@type": "DigitalDocument",
                "name": "Privacy Policy",
                "description": "Data protection and privacy practices",
                "url": "https://www.aurumascend.ch/privacy"
              },
              {
                "@type": "DigitalDocument", 
                "name": "GDPR Compliance",
                "description": "European data protection regulation compliance",
                "url": "https://www.aurumascend.ch/privacy"
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
                "name": "How does Aurum Ascend Capital protect your data?",
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
                  "text": "We use bank-grade AES-256 encryption, secure data centers, regular security audits, and strict access controls to protect your personal and financial information.",
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
                "name": "What are your GDPR rights with Aurum Ascend Capital?",
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
                  "text": "You have the right to access, correct, delete, or restrict processing of your data. You can also request data portability and withdraw consent at any time.",
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
                "name": "Does Aurum Ascend Capital share your data?",
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
                  "text": "We only share data with verified investors during the funding process, and only with your explicit consent. We never sell personal data to third parties.",
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
                "name": "How long does Aurum Ascend Capital keep your data?",
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
                  "text": "We retain data only as long as necessary for business purposes and legal requirements, typically 7 years for financial records and 3 years for general business data.",
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
