"use client";

import { productData } from "@/lib/translations";
import {
  ArrowLeft,
  ArrowRight,
  Crown,
  Crown as CrownIcon,
  Gem,
  Leaf,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./animated-section";
import { useLanguage } from "./language-context";
import AddToBagButton from "@/components/add-to-bag-button";
import TrustBadges from "@/components/trust-badges";

import type { CartItem } from "@/components/cart-context";
import Testimonials from "./testimonials";

const marqueeItems = [
  "✦ Luxury Haircare",
  "✦ No Parabens",
  "✦ No Silicones",
  "✦ No Sulfates",
  "✦ Cruelty Free",
  "✦ Small Batch Crafted",
  "✦ Cold-Pressed Botanicals",
  "✦ French-Inspired Rituals",
  "✦ Handcrafted in UAE",
];

export default function HomeContent() {
  const { locale, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const philosophyData = (t as any)?.philosophy?.items ?? [];
  const philosophyIcons = [Sparkles, Leaf, Gem, Crown];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== 1. HERO — CINEMATIC LUMIÈRE ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.webp"
            alt="Maison Hoyam — Where light becomes hair"
            fill
            sizes="100vw"
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal-dark/95 via-brand-charcoal/80 to-brand-brown-dark/30" />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"
            style={{ height: "30%", top: "70%" }}
          />
        </div>

        {/* Floating light particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[18%] left-[22%] w-1.5 h-1.5 rounded-full bg-brand-gold/40 animate-float" />
          <div className="absolute top-[35%] right-[28%] w-1 h-1 rounded-full bg-brand-gold-light/25 animate-float-slow" />
          <div className="absolute bottom-[35%] left-[38%] w-2 h-2 rounded-full bg-brand-gold/15 animate-float-delayed" />
          <div className="absolute top-[60%] right-[18%] w-1.5 h-1.5 rounded-full bg-brand-gold/20 animate-float" />
          <div className="absolute top-[45%] left-[12%] w-1 h-1 rounded-full bg-brand-gold-light/30 animate-float-slow" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/8 backdrop-blur-md border border-brand-gold/25 mb-8">
                <Crown size={13} className="text-brand-gold" />
                <span className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-medium">
                  {(t as any)?.hero?.badge ?? "Luxury Haircare House"}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-4">
                <span className="block">
                  {(t as any)?.hero?.brandName ?? "Maison Hoyam"}
                </span>
              </h1>

              <p className="text-gradient-gold text-lg sm:text-xl md:text-2xl font-serif italic leading-relaxed mb-4 max-w-md">
                {(t as any)?.hero?.tagline ?? "Where light becomes hair"}
              </p>

              <p className="text-brand-cream/70 text-sm sm:text-[15px] leading-relaxed mb-10 max-w-md">
                {(t as any)?.hero?.subtitle ?? ""}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-mid hover:from-brand-gold-mid hover:to-brand-gold-dark text-white rounded-full transition-all duration-300 text-sm tracking-[0.1em] uppercase font-medium shadow-[0_8px_32px_rgba(212,165,116,0.35)] hover:shadow-[0_16px_48px_rgba(212,165,116,0.5)] hover:-translate-y-1.5 btn-press btn-ripple"
                >
                  {(t as any)?.hero?.cta ?? "Discover Lumière"}
                  <ArrowIcon
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-9 py-4 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold/50 rounded-full transition-all duration-300 text-sm tracking-[0.1em] uppercase backdrop-blur-sm btn-press"
                >
                  {(t as any)?.hero?.secondary ?? "Our Maison"}
                </Link>
              </div>
            </div>

            {/* Lumière hero showcase — glowing product */}
            <div className="hidden lg:flex justify-center relative">
              <div className="relative w-[360px] h-[360px]">
                {/* Glowing aura — light from within */}
                <div className="absolute inset-[-30px] rounded-full bg-gradient-to-br from-brand-gold-light/20 via-brand-gold/12 to-brand-gold-light/8 animate-glow blur-[60px]" />
                <div
                  className="absolute inset-[-15px] rounded-full bg-gradient-to-tr from-brand-gold/8 via-transparent to-brand-gold-light/5 animate-glow blur-[30px]"
                  style={{ animationDelay: "1.5s" }}
                />
                <div className="relative w-full h-full rounded-full overflow-hidden border border-brand-gold/25 shadow-[0_0_60px_rgba(212,165,116,0.2),0_24px_80px_rgba(212,165,116,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <Image
                    src="/images/lumiere-hair-serum.webp"
                    alt="Lumière Hair Serum — the signature product of Maison Hoyam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-brand-brown-dark/70 backdrop-blur-xl rounded-full px-5 py-2.5 border border-brand-gold/30 shadow-[0_8px_24px_rgba(0,0,0,0.3)] animate-float">
                  <span className="text-brand-gold text-[10px] font-semibold tracking-[0.2em]">
                    LUMIÈRE
                  </span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-brand-brown-dark/70 backdrop-blur-xl rounded-full px-5 py-2.5 border border-brand-gold/30 shadow-[0_8px_24px_rgba(0,0,0,0.3)] animate-float-slow">
                  <span className="text-brand-gold text-[10px] font-semibold tracking-[0.2em]">
                    SIGNATURE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow">
          <span className="text-brand-gold/50 text-[10px] tracking-[0.2em] uppercase">
            {isRtl ? "اكتشفي" : "Discover"}
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        </div>
      </section>

      {/* Spacer between hero and marquee */}
      <div className="h-8 md:h-12 bg-white" />

      {/* Subtle Marquee */}
      <section className="py-4 bg-gradient-to-r from-brand-brown-dark via-brand-brown-mid to-brand-brown-dark overflow-hidden relative">
        <div className="absolute inset-0 shimmer-gold" />
        <div className="relative flex">
          <div className="animate-marquee flex shrink-0 gap-10 items-center">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="text-brand-gold/60 text-[11px] tracking-[0.3em] uppercase whitespace-nowrap font-medium"
              >
                {item}
              </span>
            ))}
          </div>
          <div
            className="animate-marquee flex shrink-0 gap-10 items-center"
            aria-hidden="true"
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`d-${i}`}
                className="text-brand-gold/60 text-[11px] tracking-[0.3em] uppercase whitespace-nowrap font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. LUMIÈRE FEATURE SECTION ===== */}
      <section className="pt-20 pb-28 md:pt-28 md:pb-36 relative">
        <div className="absolute inset-0 shimmer-gold pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — product image with glow */}
            <AnimatedSection>
              <div className="relative">
                {/* Light glow behind product */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold-light/15 via-brand-gold/8 to-transparent rounded-[2.5rem] blur-[40px] scale-105" />
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(212,165,116,0.12),0_30px_80px_rgba(44,24,16,0.14)] card-shine-effect lumiere-light-sweep">
                  <Image
                    src="/images/lumiere-hero-800.webp"
                    alt="Lumière Hair Serum — signature serum by Maison Hoyam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right — editorial copy */}
            <AnimatedSection delay={0.15}>
              <div>
                <span className="text-brand-gold text-[11px] tracking-[0.4em] uppercase font-medium">
                  {(t as any)?.lumiere?.label ?? "Signature Serum"}
                </span>
                <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-brand-brown-dark mt-4 mb-3 leading-none">
                  {(t as any)?.lumiere?.title ?? "Lumière"}
                </h2>
                <p className="text-brand-gold text-lg sm:text-xl font-serif italic mb-6">
                  {(t as any)?.lumiere?.subtitle ??
                    "Light captured in a bottle"}
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-brand-gold/40 to-transparent" />
                  <Sparkles size={12} className="text-brand-gold/40" />
                  <div className="h-px w-16 bg-gradient-to-l from-brand-gold/40 to-transparent" />
                </div>
                <p className="text-brand-brown/75 leading-[1.9] text-[15px] mb-6">
                  {(t as any)?.lumiere?.description ?? ""}
                </p>

                {/* Lumière Pricing */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-brand-gold font-serif text-3xl font-semibold tracking-tight">
                    200 AED
                  </span>
                  <span className="text-brand-brown/30 text-lg line-through font-serif">
                    500 AED
                  </span>
                  <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[10px] font-semibold rounded-full tracking-wider uppercase border border-red-500/15">
                    60% OFF
                  </span>
                </div>

                <Link
                  href="/products#lumiere-hair-serum"
                  className="group inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-mid hover:from-brand-gold-mid hover:to-brand-gold-dark text-white rounded-full transition-all duration-300 text-sm tracking-[0.1em] uppercase font-medium shadow-[0_8px_32px_rgba(212,165,116,0.35)] hover:shadow-[0_16px_48px_rgba(212,165,116,0.5)] hover:-translate-y-1.5 btn-press btn-ripple"
                >
                  {(t as any)?.lumiere?.cta ?? "Discover Lumière"}
                  <ArrowIcon
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== 3. COLLECTIONS — LE RÊVE + COFFEE NOIR ===== */}
      <section className="py-28 md:py-36 bg-[#FAFAFA] relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-brand-brown text-xs tracking-[0.4em] uppercase font-medium">
              {(t as any)?.collections?.subtitle ?? "Two worlds. One maison."}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown-dark mt-5">
              {(t as any)?.collections?.title ?? "The Collections"}
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/30" />
              <Crown size={12} className="text-brand-gold/35" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/30" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Le Rêve */}
            <AnimatedSection delay={0.1}>
              <Link
                href="/products#le-reve-botanical-oil"
                className="group block"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(44,24,16,0.12)] hover:shadow-[0_40px_100px_rgba(44,24,16,0.2)] transition-all duration-700 hover:-translate-y-2 card-shine-effect hover-glow">
                  <Image
                    src="/images/le-reve-hair-oil.webp"
                    alt="Le Rêve Botanical Hair Oil — Soft Care Collection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  {/* Soft gradient overlay — bottom-heavy, top-light for image visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/40 via-45% to-brand-charcoal/5" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="text-brand-gold text-[10px] tracking-[0.35em] uppercase block mb-2 font-medium">
                      {(t as any)?.collections?.leReve?.label ??
                        "Soft Care Collection"}
                    </span>
                    <h3 className="text-white font-serif text-3xl sm:text-4xl mb-3">
                      {(t as any)?.collections?.leReve?.name ?? "Le Rêve"}
                    </h3>
                    <p className="text-brand-cream/70 text-sm leading-relaxed mb-3 max-w-sm">
                      {(t as any)?.collections?.leReve?.description ??
                        (t as any)?.collections?.leReve?.tagline ??
                        ""}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-gold font-serif text-xl font-semibold">
                        200 AED
                      </span>
                      <span className="text-brand-cream/35 text-xs line-through">
                        500 AED
                      </span>
                      <span className="ml-auto text-brand-cream/50 text-[10px] tracking-wider uppercase group-hover:text-brand-gold transition-colors duration-300">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Café Noir */}
            <AnimatedSection delay={0.2}>
              <Link href="/products#coffee-noir-scrub" className="group block">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(44,24,16,0.12)] hover:shadow-[0_40px_100px_rgba(44,24,16,0.2)] transition-all duration-700 hover:-translate-y-2 card-shine-effect hover-glow">
                  <Image
                    src="/images/coffee-scalp-scrub.webp"
                    alt="Café Noir Scalp Scrub — Deep Repair Collection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  {/* Soft gradient overlay — bottom-heavy, top-light for image visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/40 via-45% to-brand-charcoal/5" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="text-brand-gold text-[10px] tracking-[0.35em] uppercase block mb-2 font-medium">
                      {(t as any)?.collections?.coffeeNoir?.label ??
                        "Deep Repair Collection"}
                    </span>
                    <h3 className="text-white font-serif text-3xl sm:text-4xl mb-3">
                      {(t as any)?.collections?.coffeeNoir?.name ?? "Café Noir"}
                    </h3>
                    <p className="text-brand-cream/70 text-sm leading-relaxed mb-3 max-w-sm">
                      {(t as any)?.collections?.coffeeNoir?.description ??
                        (t as any)?.collections?.coffeeNoir?.tagline ??
                        ""}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-gold font-serif text-xl font-semibold">
                        200 AED
                      </span>
                      <span className="text-brand-cream/35 text-xs line-through">
                        500 AED
                      </span>
                      <span className="ml-auto text-brand-cream/50 text-[10px] tracking-wider uppercase group-hover:text-brand-gold transition-colors duration-300">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== 4. BRAND PHILOSOPHY ===== */}
      <section className="py-28 md:py-36 bg-gradient-to-br from-brand-charcoal via-brand-brown-dark to-brand-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #D4A574 0.5px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-brand-gold/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-brand-gold/4 rounded-full blur-[120px]" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
          <AnimatedSection className="text-center mb-10">
            <span className="text-brand-gold/70 text-[11px] tracking-[0.4em] uppercase font-medium">
              {(t as any)?.philosophy?.subtitle ?? "Our Philosophy"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-5 mb-5 gold-gradient-text">
              {(t as any)?.philosophy?.title ?? "Light. Care. Transformation."}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold/25" />
              <Gem size={12} className="text-brand-gold/30" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-gold/25" />
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-cream/80 leading-[1.9] text-[15px]">
              {(t as any)?.philosophy?.description ?? ""}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {philosophyData?.map?.((item: any, i: number) => {
              const Icon = philosophyIcons[i] ?? Leaf;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-[1.5rem] hover:bg-white/[0.07] transition-all duration-500 group border border-white/[0.05] hover:border-brand-gold/20 hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 flex items-center justify-center mb-6 group-hover:from-brand-gold/25 group-hover:to-brand-gold/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,165,116,0.15)]">
                      <Icon size={24} className="text-brand-gold" />
                    </div>
                    <h3 className="font-serif text-brand-cream text-lg mb-2">
                      {item?.title ?? ""}
                    </h3>
                    <p className="text-brand-cream/60 text-sm leading-[1.75]">
                      {item?.desc ?? ""}
                    </p>
                  </div>
                </AnimatedSection>
              );
            }) ?? []}
          </div>
        </div>
      </section>

      {/* ===== 5. HAIR RITUALS ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-brand-brown text-xs tracking-[0.4em] uppercase font-medium">
              {(t as any)?.products?.subtitle ?? "The Collection"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-brown-dark mt-3 mb-4">
              Hair Rituals
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/30" />
              <CrownIcon size={12} className="text-brand-gold/30" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/30" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData
              ?.filter((p: any) =>
                ["lumiere", "le-reve", "coffee-noir"].includes(
                  p?.collection ?? "",
                ),
              )
              ?.map((product: any) => {
                const pData =
                  product?.[locale as "en" | "ar"] ?? product?.en ?? {};
                return (
                  <div
                    key={product?.id}
                    className="group relative bg-white rounded-[2rem] p-6 border border-brand-gold/10 hover:border-brand-gold/30 shadow-sm hover:shadow-[0_20px_60px_rgba(212,165,116,0.1)] transition-all duration-500"
                  >
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-brown-dark/5 to-brand-charcoal/5 mb-5">
                      <Image
                        src={
                          product?.image ?? "/images/lumiere-hair-serum.webp"
                        }
                        alt={pData?.name ?? ""}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-brand-brown-dark mb-1">
                      {pData?.name ?? ""}
                    </h3>
                    <p className="text-brand-brown text-xs uppercase tracking-wider mb-3">
                      {pData?.tagline ?? ""}
                    </p>
                    <p className="text-brand-brown-dark font-serif text-xl font-semibold mb-4">
                      {pData?.discountPrice ?? pData?.price ?? 0} AED
                    </p>
                    {/* Trust Badges */}
                    <div className="mb-4">
                      <TrustBadges />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <AddToBagButton
                        variant="default"
                        product={{
                          productId: product?.id ?? "",
                          name: pData?.name ?? "",
                          price: pData?.discountPrice ?? pData?.price ?? 0,
                          quantity: 1,
                          image:
                            product?.image ?? "/images/lumiere-hair-serum.webp",
                          collection: product?.collection ?? "",
                          locale: locale as "en" | "ar",
                        }}
                        className="flex-1"
                      />
                    </div>
                  </div>
                );
              }) ?? []}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent my-8" />
      </div>

      {/* ===== 6. BODY RITUALS ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-brand-brown text-xs tracking-[0.4em] uppercase font-medium">
              {(t as any)?.products?.subtitle ?? "The Collection"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-brown-dark mt-3 mb-4">
              Body Rituals
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/30" />
              <CrownIcon size={12} className="text-brand-gold/30" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/30" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {productData
              ?.filter((p: any) =>
                ["citrine", "rose"].includes(p?.collection ?? ""),
              )
              ?.map((product: any) => {
                const pData =
                  product?.[locale as "en" | "ar"] ?? product?.en ?? {};
                return (
                  <div
                    key={product?.id}
                    className="group relative bg-white rounded-[2rem] p-6 border border-brand-gold/10 hover:border-brand-gold/30 shadow-sm hover:shadow-[0_20px_60px_rgba(212,165,116,0.1)] transition-all duration-500"
                  >
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-brown-dark/5 to-brand-charcoal/5 mb-5">
                      <Image
                        src={product?.image ?? "/images/citrine_glow.jpg"}
                        alt={pData?.name ?? ""}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-brand-brown-dark mb-1">
                      {pData?.name ?? ""}
                    </h3>
                    <p className="text-brand-brown text-xs uppercase tracking-wider mb-3">
                      {pData?.tagline ?? ""}
                    </p>
                    <p className="text-brand-brown-dark font-serif text-xl font-semibold mb-4">
                      {pData?.discountPrice ?? pData?.price ?? 0} AED
                    </p>
                    {/* Trust Badges */}
                    <div className="mb-4">
                      <TrustBadges />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <AddToBagButton
                        variant="default"
                        product={{
                          productId: product?.id ?? "",
                          name: pData?.name ?? "",
                          price: pData?.discountPrice ?? pData?.price ?? 0,
                          quantity: 1,
                          image: product?.image ?? "/images/citrine_glow.jpg",
                          collection: product?.collection ?? "",
                          locale: locale as "en" | "ar",
                        }}
                        className="flex-1"
                      />
                    </div>
                  </div>
                );
              }) ?? []}
          </div>
        </div>
      </section>

      {/* ===== 5.5 TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== 6. CLOSING — LIGHT AWAITS ===== */}
      <section className="py-28 md:py-36 bg-gradient-to-br from-brand-charcoal-dark via-brand-charcoal to-brand-brown-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-[15%] w-[350px] h-[350px] rounded-full bg-brand-gold/5 blur-[100px] animate-glow" />
          <div
            className="absolute bottom-20 left-[15%] w-[280px] h-[280px] rounded-full bg-brand-gold/5 blur-[100px] animate-glow"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center relative">
          <AnimatedSection>
            <Sparkles size={20} className="text-brand-gold/40 mx-auto mb-7" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-5">
              {(t as any)?.closing?.title ??
                (isRtl ? "ضوؤك ينتظرك." : "Your light awaits.")}
            </h2>
            <p className="text-brand-gold/75 max-w-lg mx-auto mb-12 text-[15px] leading-relaxed">
              {(t as any)?.closing?.description ?? ""}
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-mid hover:from-brand-gold-mid hover:to-brand-gold-dark text-white rounded-full transition-all duration-300 text-sm tracking-[0.12em] uppercase font-medium shadow-[0_8px_32px_rgba(212,165,116,0.35)] hover:shadow-[0_16px_48px_rgba(212,165,116,0.5)] hover:-translate-y-1.5 btn-press btn-ripple"
            >
              {(t as any)?.closing?.cta ??
                (isRtl ? "اكتشفي الطقس" : "Discover the Ritual")}
              <ArrowIcon
                size={16}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
