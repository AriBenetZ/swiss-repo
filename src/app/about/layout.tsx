import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aurum Ascend Capital - Global Investment Platform for Growth Companies",
  description: "Learn about Aurum Ascend Capital's mission to democratize access to growth capital. Founded in 2019, we've connected 150+ companies with institutional investors across 25+ countries. Discover our values, team, and vision.",
  keywords: [
    "about aurum ascend capital",
    "investment platform company", 
    "growth capital platform team",
    "institutional investor network",
    "fundraising platform mission",
    "global investment network",
    "venture capital platform",
    "private equity connections",
    "startup funding platform story",
    "international investment platform",
    "verified investor network",
    "capital raising infrastructure"
  ],
  openGraph: {
    title: "About Aurum Ascend Capital - Global Investment Platform for Growth Companies", 
    description: "Learn about our mission to democratize access to growth capital. We've connected 150+ companies with institutional investors across 25+ countries.",
    url: "https://www.aurumascend.ch/about",
    type: "website",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Aurum Ascend Capital - Global Investment Platform Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aurum Ascend Capital - Global Investment Platform", 
    description: "Learn about our mission to democratize access to growth capital for exceptional companies worldwide.",
    images: ["/og-about.png"],
  },
  alternates: {
    canonical: "https://www.aurumascend.ch/about",
  },
};

export default function AboutLayout({
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
