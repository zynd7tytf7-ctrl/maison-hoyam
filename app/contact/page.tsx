import ContactContent from "@/components/contact-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Maison Hoyam",
  description:
    "Get in touch with Maison Hoyam. We'd love to hear from you — whether it's about our luxury hair products, orders, or partnership inquiries.",
  keywords: [
    "contact Maison Hoyam",
    "luxury haircare inquiries",
    "UAE hair product support",
    "customer service hair care",
  ],
  openGraph: {
    title: "Contact | Maison Hoyam",
    description:
      "Get in touch with Maison Hoyam — luxury hair products inquiries, orders, and partnerships.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Maison Hoyam — Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Maison Hoyam",
    description: "Get in touch with Maison Hoyam — luxury hair products inquiries.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/contact`,
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
