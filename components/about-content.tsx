"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./language-context";
import AnimatedSection from "./animated-section";
import { Gem, Recycle, FlaskConical, Crown, Heart } from "lucide-react";

export default function AboutContent() {
  const { t, isRtl } = useLanguage();
  const valIcons = [Gem, Recycle, FlaskConical, Heart];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 shimmer-gold pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center relative">
          <AnimatedSection>
            <span className="text-brand-gold text-xs tracking-[0.4em] uppercase font-medium">
              {(t as any)?.about?.subtitle ?? ""}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-brown-dark mt-4 mb-4">
              {(t as any)?.about?.title ?? "Our Maison"}
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold/40" />
              <Crown size={14} className="text-brand-gold/40" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-gold/40" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="pt-12 md:pt-16 pb-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(44,24,16,0.14)] group card-shine-effect">
                <Image
                  src="/images/lumiere-hair-serum.jpg"
                  alt="Lumière Hair Serum by Maison Hoyam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="space-y-6">
                <p className="text-brand-brown/80 leading-[1.85] text-[15px]">
                  {(t as any)?.about?.story ?? ""}
                </p>
                <p className="text-brand-brown/80 leading-[1.85] text-[15px]">
                  {(t as any)?.about?.storyP2 ?? ""}
                </p>
                <p className="text-brand-brown/80 leading-[1.85] text-[15px]">
                  {(t as any)?.about?.storyP3 ?? ""}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 bg-gradient-to-br from-brand-charcoal via-brand-brown-dark to-brand-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #D4A574 0.5px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-brand-gold/4 rounded-full blur-[120px]" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-gold mb-7">
                {(t as any)?.about?.philosophy ?? "Our Philosophy"}
              </h2>
              <p className="text-brand-cream/70 leading-[1.85] text-lg">
                {(t as any)?.about?.philosophyText ?? ""}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3)] group card-shine-effect">
                <Image
                  src="/images/le-reve-hair-oil.jpg"
                  alt="Le Rêve Botanical Hair Oil - Maison Hoyam philosophy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute inset-0 shimmer-gold pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-brown-dark">
              {(t as any)?.about?.valuesTitle ?? "Our Values"}
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold/40" />
              <Gem size={12} className="text-brand-gold/35" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-gold/40" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {((t as any)?.about?.values ?? [])?.map?.((val: any, i: number) => {
              const Icon = valIcons?.[i] ?? Gem;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal p-8 rounded-[1.5rem] card-inner-glow transition-all duration-600 text-center group border border-brand-gold/10 hover:border-brand-gold/25 hover:-translate-y-3 card-shine-effect">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 flex items-center justify-center mx-auto mb-6 group-hover:from-brand-gold/25 group-hover:to-brand-gold/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,165,116,0.15)]">
                      <Icon size={24} className="text-brand-gold" />
                    </div>
                    <h3 className="font-serif text-brand-cream text-lg mb-3">
                      {val?.title ?? ""}
                    </h3>
                    <p className="text-brand-cream/60 text-sm leading-[1.75]">
                      {val?.desc ?? ""}
                    </p>
                  </div>
                </AnimatedSection>
              );
            }) ?? []}
          </div>
        </div>
      </section>
    </div>
  );
}
