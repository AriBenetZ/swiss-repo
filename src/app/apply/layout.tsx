import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Funding - Start Your Investment Journey",
  description: "Apply for startup funding through Aurum Ascend Capital's verified investor network. Submit your pitch deck and connect with angel investors, VCs, and private equity firms. Free application process with 48-hour response time.",
  keywords: [
    "apply for funding",
    "startup application",
    "pitch deck submission", 
    "funding application",
    "investor pitch",
    "startup funding form",
    "venture capital application",
    "angel investor application",
    "seed funding application",
    "series A application"
  ],
  openGraph: {
    title: "Apply for Funding - Start Your Investment Journey", 
    description: "Apply for startup funding through Aurum Ascend Capital's verified investor network. Submit your pitch deck and connect with investors worldwide.",
    url: "https://www.aurumascend.ch/apply",
    type: "website",
    images: [
      {
        url: "/og-apply.png",
        width: 1200,
        height: 630,
        alt: "Apply for Startup Funding - Aurum Ascend Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Funding - Start Your Investment Journey",
    description: "Apply for startup funding through Aurum Ascend Capital's verified investor network. Submit your pitch deck and connect with investors worldwide.",
  },
  alternates: {
    canonical: "/apply",
  },
};

export default function ApplyLayout({
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
