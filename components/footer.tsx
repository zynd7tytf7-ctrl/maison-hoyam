"use client";

import { Crown, Heart, Leaf, Mail, MessageCircle, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useLanguage } from "./language-context";

export default function Footer() {
  const { t, isRtl, locale } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const links = [
    { href: "/", label: (t as any)?.nav?.home ?? "Home" },
    { href: "/products", label: (t as any)?.nav?.products ?? "The Collection" },
    { href: "/about", label: (t as any)?.nav?.about ?? "Our Maison" },
    { href: "/contact", label: (t as any)?.nav?.contact ?? "Contact" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-brand-charcoal to-brand-charcoal-dark relative overflow-hidden">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-gold/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-20 bg-gradient-to-r from-brand-gold/8 to-brand-gold/3 border border-brand-gold/15 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-serif tracking-tight mb-3">
                {isRtl ? "ابقي على تواصل" : "Stay Connected"}
              </h3>
              <p className="text-brand-cream/70 text-sm leading-relaxed">
                {isRtl
                  ? "اشتركي بنشرتنا الأسبوعية واحصلي على أحدث المنتجات ونصائح العناية الحصرية"
                  : "Subscribe to our weekly newsletter for exclusive tips, new launches, and luxury self-care rituals."}
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder={isRtl ? "بريدك الإلكتروني" : "Your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-2xl bg-white/10 border border-brand-gold/30 text-white placeholder-brand-cream/50 focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/30 focus:bg-gradient-to-r focus:from-brand-gold/10 focus:to-transparent transition-all"
                autoComplete="email"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-charcoal font-semibold hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
              >
                {isRtl ? "اشترك" : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <div className="col-span-full text-center text-brand-gold text-sm animate-fade-in">
                ✓ {isRtl ? "شكراً لاشتراكك!" : "Thank you for subscribing!"}
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="Maison Hoyam"
                  fill
                  sizes="48px"
                  className="object-contain brightness-110"
                />
              </div>
              <div>
                <h3 className="font-serif text-brand-gold text-sm tracking-[0.12em]">
                  MH
                </h3>
                <p className="text-brand-cream/55 text-[8px] tracking-[0.25em] uppercase">
                  Luxury Care
                </p>
              </div>
            </div>
            <p className="text-brand-cream/60 text-xs leading-relaxed mb-5">
              {isRtl
                ? "دار الفخامة للعناية بالشعر، حيث يلتقي الطبيعة بالترف والابتكار"
                : "Where nature meets luxury. Handcrafted botanical rituals for the modern woman."}
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold/20 hover:border-brand-gold/40 transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold/20 hover:border-brand-gold/40 transition-all"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.36-.04z" />
                </svg>
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold/20 hover:border-brand-gold/40 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold/80 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              {isRtl ? "الروابط" : "Navigation"}
            </h4>
            <nav className="flex flex-col gap-3.5 space-y-0">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-cream/60 text-sm hover:text-brand-gold transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/"
                className="text-brand-cream/60 text-sm hover:text-brand-gold transition-colors duration-300 font-medium"
              >
                {isRtl ? "سياسة الخصوصية" : "Privacy Policy"}
              </Link>
            </nav>
          </div>

          {/* About */}
          <div>
            <h4 className="text-brand-gold/80 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              {isRtl ? "عنا" : "About"}
            </h4>
            <ul className="flex flex-col gap-3.5 space-y-0">
              <li className="flex items-start gap-2">
                <Leaf
                  size={14}
                  className="text-brand-gold/60 mt-0.5 flex-shrink-0"
                />
                <span className="text-brand-cream/60 text-sm">
                  {isRtl ? "عضوية نباتية معتمدة" : "Cruelty-Free"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Shield
                  size={14}
                  className="text-brand-gold/60 mt-0.5 flex-shrink-0"
                />
                <span className="text-brand-cream/60 text-sm">
                  {isRtl ? "خالية من المواد الضارة" : "No Parabens"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Heart
                  size={14}
                  className="text-brand-gold/60 mt-0.5 flex-shrink-0"
                />
                <span className="text-brand-cream/60 text-sm">
                  {isRtl ? "صنع يدوي في الإمارات" : "Handcrafted UAE"}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-gold/80 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              {isRtl ? "اتصلي بنا" : "Get In Touch"}
            </h4>
            <div className="space-y-3.5">
              <a
                href="mailto:xyakuzapro@gmail.com"
                className="flex items-start gap-2 group"
              >
                <Mail
                  size={14}
                  className="text-brand-gold/60 mt-0.5 flex-shrink-0 group-hover:text-brand-gold transition-colors"
                />
                <span className="text-brand-cream/60 text-sm group-hover:text-brand-gold transition-colors">
                  xyakuzapro@gmail.com
                </span>
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 group"
              >
                <MessageCircle
                  size={14}
                  className="text-brand-gold/60 mt-0.5 flex-shrink-0 group-hover:text-brand-gold transition-colors"
                />
                <span className="text-brand-cream/60 text-sm group-hover:text-brand-gold transition-colors">
                  {isRtl ? "واتس آب" : "WhatsApp"}
                </span>
              </a>
              <p className="text-brand-cream/50 text-xs leading-relaxed">
                {isRtl
                  ? "متوفرة للطلبات والأسئلة"
                  : "Available for orders & inquiries"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-gold/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-brand-cream/50 text-xs text-center sm:text-left tracking-wider">
              © 2025 Maison Hoyam.{" "}
              {isRtl ? "جميع الحقوق محفوظة." : "All rights reserved."}
            </p>
            <div className="flex items-center gap-3">
              <Crown size={10} className="text-brand-gold/30" />
              <span className="text-brand-cream/40 text-[10px] tracking-widest uppercase">
                {isRtl ? "الفخامة في كل قطرة" : "Luxury in Every Drop"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
