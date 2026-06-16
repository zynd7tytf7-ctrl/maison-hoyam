"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./language-context";

export default function Breadcrumb() {
  const pathname = usePathname();
  const { isRtl, t } = useLanguage();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

  // Map routes to labels
  const routeLabels: { [key: string]: string } = {
    "/": (t as any)?.nav?.home ?? "Home",
    "/products": (t as any)?.nav?.products ?? "The Collection",
    "/about": (t as any)?.nav?.about ?? "Our Maison",
    "/contact": (t as any)?.nav?.contact ?? "Contact",
  };

  // Don't show breadcrumb on home page
  if (pathname === "/") return null;

  // Get current page label
  const currentPath = pathname.split("/").filter(Boolean)[0];
  const currentLabel =
    routeLabels[`/${currentPath}`] ||
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

  // JSON-LD BreadcrumbList structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: routeLabels["/"],
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLabel,
        item: `${siteUrl}/${currentPath}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <div
        className={`py-3 mt-16 ${isRtl ? "text-right" : "text-left"}`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2" aria-label="Breadcrumb">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-brown/60 hover:text-brand-brown-dark transition-colors duration-300"
            >
              <Home size={16} />
              <span className="text-sm font-medium">{routeLabels["/"]}</span>
            </Link>

            {currentPath && (
              <>
                {isRtl ? (
                  <ChevronRight
                    size={16}
                    className="text-brand-gold/40 rotate-180"
                  />
                ) : (
                  <ChevronRight size={16} className="text-brand-gold/40" />
                )}
                <span className="text-sm font-medium text-brand-brown-dark">
                  {currentLabel}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
