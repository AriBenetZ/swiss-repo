import type { Metadata } from "next";
import { generateMetadata, commonKeywords, defaultOGImages } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Case Studies - Real Success Stories from Funded Startups",
  description: "Explore success stories from startups that secured funding through Aurum Ascend Capital. See how founders raised $50M+ across different industries with our verified investor network.",
  keywords: [
    ...commonKeywords,
    // Brand variations
    "aurum ascend success stories", "aurumascend case studies", "auram ascend results", "auramascend portfolio",
    // Success story keywords
    "startup success stories", "funding case studies", "investment success stories", "funded startups",
    "venture capital success", "angel investor success", "startup funding examples", "funding results",
    // Industry success keywords
    "real estate funding success", "healthcare funding stories", "technology funding examples",
    "manufacturing funding cases", "energy project success", "fintech funding results",
    // Professional results keywords
    "institutional investment success", "professional funding results", "verified investor outcomes",
    "strategic capital success", "growth capital results"
  ],
  path: "/case-studies",
  ogImage: defaultOGImages.caseStudies,
});

export default function CaseStudiesLayout({
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
