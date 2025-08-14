import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team - Careers at Aurum Ascend Capital",
  description: "Join Aurum Ascend Capital's mission to democratize startup funding. Explore career opportunities in fintech, investment platform development, and startup ecosystem growth.",
  keywords: [
    "aurum ascend capital careers",
    "fintech jobs",
    "investment platform jobs",
    "startup jobs",
    "venture capital careers",
    "remote jobs",
    "tech careers"
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
