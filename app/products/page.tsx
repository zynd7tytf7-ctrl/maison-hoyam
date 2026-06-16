import ProductsContent from "@/components/products-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Collection | Maison Hoyam",
  description:
    "Explore our luxury haircare collection: Lumière Hair Serum, Le Rêve Botanical Oil, Café Noir Scalp Scrub, Citrine Glow, and Rose de Nuit. Handcrafted in the UAE from cold-pressed botanicals.",
  keywords: [
    "luxury hair collection",
    "hair serum",
    "botanical hair oil",
    "scalp scrub",
    "organic hair products",
    "Maison Hoyam products",
    "UAE luxury haircare",
  ],
  openGraph: {
    title: "The Collection | Maison Hoyam",
    description:
      "Explore our luxury haircare collection: Lumière, Le Rêve, Café Noir, Citrine Glow, and Rose de Nuit. Handcrafted in the UAE.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Maison Hoyam — The Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Collection | Maison Hoyam",
    description:
      "Explore our luxury haircare collection: Lumière, Le Rêve, Café Noir, Citrine Glow, Rose de Nuit.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/products`,
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
