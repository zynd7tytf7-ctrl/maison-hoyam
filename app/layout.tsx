import Breadcrumb from "@/components/breadcrumb";
import { CartProvider } from "@/components/cart-context";
import { ChunkLoadErrorHandler } from "@/components/chunk-load-error-handler";
import Header from "@/components/header";
import { LanguageProvider } from "@/components/language-context";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { DM_Sans, Playfair_Display, Tajawal } from "next/font/google";
import "./globals.css";

const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const FloatingButtons = dynamic(() => import("@/components/floating-buttons"), {
  ssr: false,
});

// Static by default — pages override via their own export const dynamic
// export const dynamic = "force-dynamic";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maison Hoyam | Where Nature Meets Luxury Care",
  description:
    "Premium organic hair care from the UAE. Luxury scalp scrubs, hair serums, and oils crafted with the finest natural ingredients. No parabens, no silicones, no sulfates.",
  keywords: [
    "luxury haircare",
    "organic hair products",
    "UAE haircare brand",
    "hair serum",
    "scalp scrub",
    "botanical hair oil",
    "natural ingredients",
    "paraben free",
    "sulfate free",
    "cruelty free",
    "Maison Hoyam",
    "French haircare rituals",
    "cold-pressed botanicals",
    "premium hair treatments",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    siteName: "Maison Hoyam",
    locale: "en_US",
    alternateLocale: ["ar_AE"],
    type: "website",
    url: siteUrl,
    title: "Maison Hoyam | Where Nature Meets Luxury Care",
    description:
      "Premium organic hair care from the UAE. Luxury scalp scrubs, hair serums, and oils crafted with the finest natural ingredients.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Maison Hoyam — Where Nature Meets Luxury Care",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@maisonhoyam",
    creator: "@maisonhoyam",
    title: "Maison Hoyam | Where Nature Meets Luxury Care",
    description:
      "Premium organic hair care from the UAE. Luxury scalp scrubs, hair serums, and oils crafted with the finest natural ingredients.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  applicationName: "Maison Hoyam",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
  appleWebApp: {
    title: "Maison Hoyam",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maison Hoyam",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.webp`,
    description:
      "Premium organic hair care from the UAE. Luxury scalp scrubs, hair serums, and oils crafted with the finest natural ingredients.",
    email: "xyakuzapro@gmail.com",
    telephone: "+971501234567",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
    },
    sameAs: [
      "https://instagram.com",
      "https://tiktok.com",
      "https://wa.me/971501234567",
    ],
  };

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${tajawal.variable} font-sans bg-white text-brand-brown-dark antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <CartProvider>
            <Header />
            <Breadcrumb />
            <main>{children}</main>
            <Footer />
            <FloatingButtons />
            <ScrollToTop />
            <Toaster />
            <ChunkLoadErrorHandler />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
