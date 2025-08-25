import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team - Careers at Aurum Ascend Capital",
  description: "Join Aurum Ascend Capital's mission to democratize startup funding. Explore career opportunities in fintech, investment platform development, and startup ecosystem growth.",
  keywords: [
    // Brand variations
    "aurum ascend capital careers", "aurumascend jobs", "auram ascend careers", "auramascend employment",
    // Job type keywords
    "fintech jobs", "investment platform jobs", "startup jobs", "venture capital careers",
    "remote jobs", "tech careers", "investment careers", "financial services jobs",
    // Professional roles
    "institutional investment jobs", "professional fundraising careers", "capital markets jobs",
    "investor relations careers", "business development jobs", "fintech careers",
    // Location keywords
    "Switzerland fintech jobs", "Zurich investment jobs", "European fintech careers"
  ],
  openGraph: {
    title: "Join Our Team - Careers at Aurum Ascend Capital",
    description: "Join Aurum Ascend Capital's mission to democratize startup funding. Explore career opportunities in fintech and startup ecosystem growth.",
    url: "https://www.aurumascend.ch/careers",
    type: "website",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersLayout({
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
