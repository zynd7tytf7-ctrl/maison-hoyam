import Breadcrumb from "@/components/breadcrumb";
import { ChunkLoadErrorHandler } from "@/components/chunk-load-error-handler";
import Header from "@/components/header";
import { LanguageProvider } from "@/components/language-context";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";
import { DM_Sans, Playfair_Display, Tajawal } from "next/font/google";
import "./globals.css";

const Footer = dynamic(() => import("@/components/footer"), { ssr: true });
const FloatingButtons = dynamic(() => import("@/components/floating-buttons"), {
  ssr: true,
});

// Static by default — pages override via their own export const dynamic
// export const dynamic = "force-dynamic";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maison Hoyam | Where Nature Meets Luxury Care",
  description:
    "Premium organic hair care from the UAE. Luxury scalp scrubs, hair serums, and oils crafted with the finest natural ingredients. No parabens, no silicones, no sulfates.",
  openGraph: {
    title: "Maison Hoyam | Where Nature Meets Luxury Care",
    description:
      "Premium organic hair care from the UAE. Luxury scalp scrubs, hair serums, and oils crafted with the finest natural ingredients.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${tajawal.variable} font-sans bg-white text-brand-brown-dark antialiased`}
      >
        <LanguageProvider>
          <Header />
          <Breadcrumb />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
          <ScrollToTop />
          <Toaster />
          <ChunkLoadErrorHandler />
        </LanguageProvider>
      </body>
    </html>
  );
}
