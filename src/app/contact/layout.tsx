import type { Metadata } from "next";
import { generateMetadata, commonKeywords, defaultOGImages } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us - Get in Touch with RaiseSignal",
  description: "Contact RaiseSignal for startup funding questions, investor inquiries, or partnership opportunities. Get expert guidance on your funding journey from our experienced team.",
  keywords: [
    ...commonKeywords,
    "contact raisesignal",
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
