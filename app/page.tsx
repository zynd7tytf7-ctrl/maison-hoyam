import HomeContent from "@/components/home-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison Hoyam | Where Nature Meets Luxury Care",
  description:
    "Discover Lumière — the signature hair serum from Maison Hoyam. Luxury organic haircare crafted in the UAE. No parabens, no silicones, no sulfates.",
  keywords: [
    "luxury haircare",
    "organic hair serum",
    "UAE beauty",
    "botanical hair care",
    "Maison Hoyam",
  ],
  openGraph: {
    title: "Maison Hoyam | Where Nature Meets Luxury Care",
    description:
      "Discover Lumière — the signature hair serum from Maison Hoyam. Luxury organic haircare crafted in the UAE.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Maison Hoyam — Where Nature Meets Luxury Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Hoyam | Where Nature Meets Luxury Care",
    description:
      "Discover Lumière — the signature hair serum from Maison Hoyam.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}`,
  },
};

export default function HomePage() {
  return <HomeContent />;
}
