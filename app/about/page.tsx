import AboutContent from "@/components/about-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Maison | Maison Hoyam",
  description:
    "Discover the story of Maison Hoyam — a luxury haircare house born in the UAE, inspired by French beauty traditions and the power of nature's finest botanicals.",
  keywords: [
    "luxury haircare maison",
    "organic hair brand story",
    "UAE luxury beauty",
    "French haircare rituals",
    "botanical hair products",
    "Maison Hoyam",
  ],
  openGraph: {
    title: "Our Maison | Maison Hoyam",
    description:
      "Discover the story of Maison Hoyam — a luxury haircare house born in the UAE, inspired by French beauty traditions.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Maison Hoyam — Our Maison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Maison | Maison Hoyam",
    description:
      "Discover the story of Maison Hoyam — a luxury haircare house born in the UAE.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/about`,
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
