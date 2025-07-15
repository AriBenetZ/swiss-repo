import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team - Careers at RaiseSignal",
  description: "Join RaiseSignal's mission to democratize startup funding. Explore career opportunities in fintech, investment platform development, and startup ecosystem growth.",
  keywords: [
    "raisesignal careers",
    "fintech jobs",
    "investment platform jobs",
    "startup jobs",
    "venture capital careers",
    "remote jobs",
    "tech careers"
  ],
  openGraph: {
    title: "Join Our Team - Careers at RaiseSignal",
    description: "Join RaiseSignal's mission to democratize startup funding. Explore career opportunities in fintech and startup ecosystem growth.",
    url: "https://www.raisesignal.uk/careers",
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
