"use client";

import { productData } from "@/lib/translations";
import { Check, Crown, Droplets, Flower2, Sparkles } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import AnimatedSection from "./animated-section";
import { useLanguage } from "./language-context";
import ProductFilter from "./product-filter";

export default function ProductsContent() {
  const { locale, t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    (productData ?? []).forEach((product: any) => {
      if (product?.collection) cats.add(product.collection);
    });
    return Array.from(cats);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return productData ?? [];
    return (productData ?? []).filter((p: any) => p?.collection === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative">
        <div className="absolute inset-0 shimmer-gold pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center relative">
          <AnimatedSection>
            <span className="text-brand-gold text-xs tracking-[0.4em] uppercase font-medium">
              {(t as any)?.products?.subtitle ?? ""}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-brown-dark mt-4 mb-4">
              {(t as any)?.products?.title ?? "The Collection"}
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold/40" />
              <Crown size={14} className="text-brand-gold/40" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-gold/40" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pt-8 md:pt-12 pb-4 md:pb-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Products */}
      <section className="pt-12 md:pt-16 pb-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="space-y-36">
            {(filteredProducts ?? [])?.map?.((product: any, i: number) => {
              const pData = product?.[locale] ?? product?.en ?? {};
              const isEven = i % 2 === 0;
              return (
                <AnimatedSection key={product?.id ?? i} delay={0.1}>
                  <div
                    id={product?.id ?? ""}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${!isEven ? "lg:direction-rtl" : ""}`}
                  >
                    {/* Image */}
                    <div className={`${!isEven && !isRtl ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-gradient-to-br from-brand-brown-dark to-brand-charcoal shadow-[0_30px_80px_rgba(0,0,0,0.2)] group card-shine-effect border border-brand-gold/10">
                        <Image
                          src={
                            product?.image ?? "/images/lumiere-hair-serum.webp"
                          }
                          alt={pData?.name ?? "Product"}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`${!isEven && !isRtl ? "lg:order-1" : ""} flex flex-col justify-center`}
                    >
                      <span className="text-brand-gold text-xs tracking-[0.3em] uppercase font-medium">
                        {pData?.tagline ?? ""}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-brown-dark mt-2 mb-5">
                        {pData?.name ?? ""}
                      </h2>
                      <p className="text-brand-brown/80 leading-[1.85] mb-8 text-[15px]">
                        {pData?.description ?? ""}
                      </p>

                      {/* Pricing */}
                      {(pData?.discountPrice ?? pData?.price) && (
                        <div className="mb-8 flex items-center gap-4">
                          <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal rounded-[1rem] p-5 border border-brand-gold/15 card-inner-glow">
                            <span className="text-brand-gold font-serif text-3xl font-semibold tracking-tight">
                              {pData?.discountPrice ?? pData?.price} AED
                            </span>
                            {pData?.discountPrice && pData?.price && (
                              <>
                                <span className="text-brand-brown/40 text-lg line-through ml-3 font-serif">
                                  {pData.price} AED
                                </span>
                                <span className="ml-4 px-4 py-1.5 bg-red-500/15 text-red-400 text-[11px] font-semibold rounded-full tracking-wider uppercase border border-red-500/20">
                                  Save {pData.price - pData.discountPrice} AED (
                                  {Math.round(
                                    ((pData.price - pData.discountPrice) /
                                      pData.price) *
                                    100,
                                  )}
                                  % OFF)
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Signature Scent */}
                      {pData?.scent && (
                        <div className="mb-8 bg-gradient-to-br from-brand-brown-dark to-brand-charcoal rounded-[1.5rem] p-7 border border-brand-gold/10 card-inner-glow">
                          <div className="flex items-center gap-2 mb-3">
                            <Flower2 size={15} className="text-brand-gold" />
                            <h3 className="text-brand-gold font-medium text-[11px] uppercase tracking-[0.2em]">
                              {(t as any)?.products?.scent ?? "Signature Scent"}
                            </h3>
                          </div>
                          <p className="text-brand-cream/70 text-sm leading-[1.8] italic">
                            {pData.scent}
                          </p>
                        </div>
                      )}

                      {/* Ingredients */}
                      <div className="mb-8 bg-gradient-to-br from-brand-brown-dark to-brand-charcoal rounded-[1.5rem] p-7 border border-brand-gold/10 card-inner-glow">
                        <div className="flex items-center gap-2 mb-4">
                          <Droplets size={15} className="text-brand-gold" />
                          <h3 className="text-brand-gold font-medium text-[11px] uppercase tracking-[0.2em]">
                            {(t as any)?.products?.ingredients ??
                              "Precious Ingredients"}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {(pData?.ingredients ?? [])?.map?.(
                            (ing: string, j: number) => (
                              <span
                                key={j}
                                className="px-4 py-2 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-medium border border-brand-gold/15 hover:bg-brand-gold/18 hover:border-brand-gold/30 transition-all duration-300"
                              >
                                {ing ?? ""}
                              </span>
                            ),
                          ) ?? []}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-8 bg-gradient-to-br from-brand-brown-dark to-brand-charcoal rounded-[1.5rem] p-7 border border-brand-gold/10 card-inner-glow">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles size={15} className="text-brand-gold" />
                          <h3 className="text-brand-gold font-medium text-[11px] uppercase tracking-[0.2em]">
                            {(t as any)?.products?.benefits ?? "The Experience"}
                          </h3>
                        </div>
                        <div className="space-y-3">
                          {(pData?.benefits ?? [])?.map?.(
                            (ben: string, j: number) => (
                              <div
                                key={j}
                                className="flex items-center gap-3 group/item"
                              >
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-gold/25 to-brand-gold/10 flex items-center justify-center shrink-0 group-hover/item:from-brand-gold/35 group-hover/item:to-brand-gold/15 transition-all duration-300">
                                  <Check
                                    size={11}
                                    className="text-brand-gold"
                                  />
                                </div>
                                <span className="text-brand-cream/80 text-sm">
                                  {ben ?? ""}
                                </span>
                              </div>
                            ),
                          ) ?? []}
                        </div>
                      </div>

                      {/* Ritual Steps */}
                      {pData?.ritual && (
                        <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal rounded-[1.5rem] p-7 border border-brand-gold/10">
                          <div className="flex items-center gap-2 mb-5">
                            <Crown size={15} className="text-brand-gold" />
                            <h3 className="text-brand-gold font-medium text-[11px] uppercase tracking-[0.2em]">
                              {(t as any)?.products?.howToUse ?? "The Ritual"}
                            </h3>
                          </div>
                          <div className="space-y-4">
                            {(pData.ritual ?? []).map(
                              (step: string, j: number) => (
                                <div key={j} className="flex items-start gap-4">
                                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-gold/25 to-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-gold/15">
                                    <span className="text-brand-gold text-[10px] font-bold">
                                      {j + 1}
                                    </span>
                                  </div>
                                  <span className="text-brand-cream/80 text-sm leading-[1.75]">
                                    {step}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}
                    </div>
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
