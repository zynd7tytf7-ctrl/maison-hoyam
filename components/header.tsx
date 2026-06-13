"use client";

import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-context";

export default function Header() {
  const { locale, t, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window?.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: (t as any)?.nav?.home ?? "Home" },
    { href: "/products", label: (t as any)?.nav?.products ?? "The Collection" },
    { href: "/about", label: (t as any)?.nav?.about ?? "Our Maison" },
    { href: "/contact", label: (t as any)?.nav?.contact ?? "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith?.(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-[0_1px_0_rgba(212,165,116,0.12),0_8px_40px_rgba(44,24,16,0.06)]"
          : "bg-gradient-to-b from-brand-brown-dark/50 to-transparent"
        }`}
    >
      {/* Top accent line - animated */}
      <div
        className={`h-[1px] transition-all duration-700 ${scrolled
            ? "bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"
          }`}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-700 ${scrolled ? "h-16 md:h-18" : "h-20 md:h-24"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div
              className={`relative transition-all duration-500 ${scrolled
                  ? "w-10 h-10 md:w-11 md:h-11"
                  : "w-[52px] h-[52px] md:w-14 md:h-14"
                }`}
            >
              <Image
                src="/images/logo.png"
                alt="Maison Hoyam logo"
                fill
                sizes="(max-width: 768px) 40px, 56px"
                className="object-contain relative z-10 drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif tracking-[0.18em] transition-all duration-500 ${scrolled
                    ? "text-brand-brown-dark text-sm md:text-base"
                    : "text-white text-base md:text-lg drop-shadow-md"
                  }`}
              >
                <span className="hidden sm:inline">MAISON HOYAM</span>
                <span className="sm:hidden">MH</span>
              </span>
              <span
                className={`text-[8px] tracking-[0.3em] uppercase transition-all duration-500 hidden sm:block ${scrolled
                    ? "text-brand-gold-dark/80"
                    : "text-brand-gold/80 drop-shadow-sm"
                  }`}
              >
                Luxury Haircare House
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks?.map?.((link: any) => {
              const active = isActive(link?.href ?? "/");
              return (
                <Link
                  key={link?.href}
                  href={link?.href ?? "/"}
                  className={`relative px-4 py-2 text-[13px] tracking-[0.12em] uppercase transition-all duration-300 rounded-full ${scrolled
                      ? active
                        ? "text-brand-gold-dark font-semibold bg-brand-gold/12"
                        : "text-brand-brown/75 font-medium hover:text-brand-brown-dark hover:bg-brand-gold/8"
                      : active
                        ? "text-white font-semibold bg-white/12"
                        : "text-white/80 font-medium hover:text-white hover:bg-white/8"
                    }`}
                >
                  {link?.label}
                  {active && (
                    <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-brand-gold" />
                  )}
                </Link>
              );
            }) ?? []}

            {/* Divider */}
            <div
              className={`w-px h-4 mx-3 transition-all duration-500 ${scrolled ? "bg-brand-gold/20" : "bg-white/15"
                }`}
            />

            {/* Language Switcher */}
            <button
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all duration-300 border ${scrolled
                  ? "border-brand-gold/20 text-brand-brown hover:bg-brand-gold/5 hover:border-brand-gold/35"
                  : "border-white/20 text-white/80 hover:bg-white/10 hover:border-white/35"
                }`}
            >
              <Globe size={12} className="opacity-60" />
              <span className="font-medium">
                {locale === "en" ? "عربي" : "EN"}
              </span>
            </button>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] tracking-wider border transition-all ${scrolled
                  ? "border-brand-gold/20 text-brand-brown"
                  : "border-white/20 text-white/80"
                }`}
            >
              <Globe size={10} className="opacity-60" />
              {locale === "en" ? "عربي" : "EN"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-xl transition-all ${scrolled
                  ? "text-brand-brown hover:bg-brand-gold/5"
                  : "text-white hover:bg-white/10"
                }`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-brand-gold/10 overflow-hidden animate-slide-down">
          <nav className="flex flex-col px-5 py-4 gap-0.5">
            {navLinks?.map?.((link: any, i: number) => {
              const active = isActive(link?.href ?? "/");
              return (
                <div
                  key={link?.href}
                  className="animate-slide-down"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <Link
                    href={link?.href ?? "/"}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 py-3 px-4 rounded-2xl text-[13px] tracking-wider uppercase transition-all duration-300 ${active
                        ? "text-brand-brown-dark bg-gradient-to-r from-brand-gold/12 to-brand-gold/5 font-semibold"
                        : "text-brand-brown/70 hover:text-brand-brown-dark hover:bg-brand-gold/5"
                      }`}
                  >
                    {active && (
                      <div className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-gold to-brand-gold-dark" />
                    )}
                    {link?.label}
                  </Link>
                </div>
              );
            }) ?? []}
          </nav>
        </div>
      )}
    </header>
  );
}
