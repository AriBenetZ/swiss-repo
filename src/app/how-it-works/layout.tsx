import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Simple 3-Step Funding Process",
  description: "Discover how Aurum Ascend Capital connects startups with investors in 3 simple steps: Apply, Match, Fund. Learn about our secure platform, verification process, and success stories from 10,000+ funded startups.",
  keywords: [
    "how aurum ascend capital works",
    "funding process",
    "startup investment process", 
    "investor matching",
    "funding steps",
    "investment platform guide",
    "startup funding guide",
    "venture capital process",
    "angel investor process"
  ],
  openGraph: {
    title: "How It Works - Simple 3-Step Funding Process", 
    description: "Discover how Aurum Ascend Capital connects startups with investors in 3 simple steps: Apply, Match, Fund. Learn about our secure platform and verification process.",
    url: "https://www.aurumascend.ch/how-it-works",
    type: "website",
    images: [
      {
        url: "/og-how-it-works.png",
        width: 1200,
        height: 630,
        alt: "How Aurum Ascend Capital Works - Funding Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works - Simple 3-Step Funding Process",
    description: "Discover how Aurum Ascend Capital connects startups with investors in 3 simple steps: Apply, Match, Fund.",
  },
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
