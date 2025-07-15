import type { Metadata } from "next";
import { generateMetadata, commonKeywords, defaultOGImages } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us - Get in Touch with Aurum Ascend Capital",
  description: "Contact Aurum Ascend Capital for startup funding questions, investor inquiries, or partnership opportunities. Get expert guidance on your funding journey from our experienced team.",
  keywords: [
    ...commonKeywords,
    "contact aurumascend",
    "funding questions",
    "investor inquiries",
    "startup support",
    "investment guidance",
    "funding consultation",
    "investor relations"
  ],
  path: "/contact",
  ogImage: defaultOGImages.contact,
});

export default function ContactLayout({
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
