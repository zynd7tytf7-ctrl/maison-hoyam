"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./language-context";

export default function Breadcrumb() {
  const pathname = usePathname();
  const { isRtl, t } = useLanguage();

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

  return (
    <div
      className={`bg-gradient-to-b from-brand-brown-dark/5 to-transparent border-b border-brand-gold/8 py-4 mt-20 ${isRtl ? "text-right" : "text-left"
        }`}
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
  );
}
