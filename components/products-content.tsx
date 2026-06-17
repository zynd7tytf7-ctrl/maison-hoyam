"use client";

import { productData } from "@/lib/translations";
import {
  Check,
  Crown,
  Droplets,
  Flower2,
  Sparkles,
  ChevronDown,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import AnimatedSection from "./animated-section";
import { useLanguage } from "./language-context";
import ProductFilter from "./product-filter";
import AddToBagButton from "@/components/add-to-bag-button";
import TrustBadges from "@/components/trust-badges";
import FragranceNotes from "@/components/fragrance-notes";
import ReviewSection from "@/components/review-section";
import BundleSuggestion from "@/components/bundle-suggestion";
import StickyMobileBar from "@/components/sticky-mobile-bar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CartItem } from "@/components/cart-context";

export default function ProductsContent() {
  const { locale, t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

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
    return (productData ?? []).filter(
      (p: any) => p?.collection === selectedCategory,
    );
  }, [selectedCategory]);

  // JSON-LD Product structured data
  const productJsonLd = (productData ?? []).map((product: any, i: number) => {
    const pData = product?.en ?? {};
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: pData.name,
      description: pData.tagline,
      image: `${siteUrl}${product.image}`,
      brand: {
        "@type": "Brand",
        name: "Maison Hoyam",
      },
      offers: {
        "@type": "Offer",
        price: pData.discountPrice?.toString() ?? pData.price?.toString() ?? "",
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/products#${product.id ?? ""}`,
      },
    };
  });

  const toggleProduct = (id: string) => {
    setExpandedProduct((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productJsonLd.length === 1 ? productJsonLd[0] : productJsonLd,
          ),
        }}
      />
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

      {/* Products Grid */}
      <section className="pt-4 md:pt-8 pb-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* GRID: compact cards 2-col desktop, 1-col mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {(filteredProducts ?? [])?.map?.((product: any, idx: number) => {
              const pData = product?.[locale] ?? product?.en ?? {};
              const isExpanded = expandedProduct === (product?.id ?? "");
              const displayPrice = pData?.discountPrice ?? pData?.price ?? 0;

              return (
                <AnimatedSection key={product?.id ?? idx} delay={idx * 0.05}>
                  <div
                    id={product?.id ?? ""}
                    className="bg-white rounded-2xl border border-brand-gold/10 hover:border-brand-gold/20 transition-all duration-300 overflow-hidden"
                  >
                    {/* Card Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-brand-brown-dark/5 to-brand-charcoal/5">
                      <Image
                        src={
                          product?.image ?? "/images/lumiere-hair-serum.webp"
                        }
                        alt={pData?.name ?? "Product"}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        priority={idx < 2}
                        loading={idx < 2 ? undefined : "lazy"}
                      />
                      {/* Discount badge */}
                      {pData?.discountPrice &&
                        pData?.price &&
                        pData.discountPrice < pData.price && (
                          <div className="absolute top-3 left-3 px-3 py-1 bg-red-500/90 text-white text-[10px] font-bold rounded-full tracking-wider">
                            -
                            {Math.round(
                              ((pData.price - pData.discountPrice) /
                                pData.price) *
                                100,
                            )}
                            %
                          </div>
                        )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="font-serif text-lg text-brand-brown-dark truncate">
                        {pData?.name ?? ""}
                      </h3>
                      <p className="text-brand-brown/60 text-[12px] uppercase tracking-wider mt-0.5 line-clamp-1">
                        {pData?.tagline ?? ""}
                      </p>

                      {/* Price + Buttons */}
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-xl font-semibold text-brand-brown-dark">
                            {displayPrice} AED
                          </span>
                          {pData?.discountPrice &&
                            pData?.price &&
                            pData.discountPrice < pData.price && (
                              <span className="text-xs text-brand-brown/40 line-through">
                                {pData.price} AED
                              </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                          <AddToBagButton
                            variant="icon"
                            product={{
                              productId: product?.id ?? "",
                              name: pData?.name ?? "",
                              price: displayPrice,
                              quantity: 1,
                              image:
                                product?.image ??
                                "/images/lumiere-hair-serum.webp",
                              collection: product?.collection ?? "",
                              locale: locale as "en" | "ar",
                            }}
                          />
                        </div>
                      </div>

                      {/* Expand toggle */}
                      <button
                        onClick={() => toggleProduct(product?.id ?? "")}
                        className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brand-gold/15 text-brand-brown/70 hover:text-brand-brown-dark hover:border-brand-gold/30 hover:bg-brand-gold/3 transition-all duration-300 text-[12px] tracking-wider uppercase font-medium"
                      >
                        {isExpanded ? "Hide Details" : "View Details"}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {/* EXPANDED DETAILS */}
                    {isExpanded && (
                      <div className="px-5 pb-6 border-t border-brand-gold/10 pt-5">
                        {/* Description */}
                        <p className="text-brand-brown/80 leading-[1.8] text-[14px] mb-6">
                          {pData?.description ?? ""}
                        </p>

                        {/* Trust Badges */}
                        <div className="mb-6">
                          <TrustBadges />
                        </div>

                        {/* Accordion: Ingredients, Benefits, Ritual, Fragrance, Reviews */}
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full space-y-2"
                        >
                          {/* Ingredients */}
                          {pData?.ingredients?.length > 0 && (
                            <AccordionItem
                              value="ingredients"
                              className="border border-brand-gold/10 rounded-xl px-4"
                            >
                              <AccordionTrigger className="hover:no-underline py-3">
                                <div className="flex items-center gap-2 text-brand-brown-dark text-[13px] font-medium">
                                  <Droplets
                                    size={14}
                                    className="text-brand-gold"
                                  />
                                  {(t as any)?.products?.ingredients ??
                                    "Precious Ingredients"}
                                  <span className="text-[10px] text-brand-gold/60 ml-1">
                                    ({pData.ingredients.length})
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pb-3">
                                <div className="flex flex-wrap gap-2">
                                  {(pData?.ingredients ?? [])?.map?.(
                                    (ing: string, j: number) => (
                                      <span
                                        key={j}
                                        className="px-3 py-1.5 bg-brand-gold/8 text-brand-gold rounded-full text-[11px] font-medium border border-brand-gold/12"
                                      >
                                        {ing ?? ""}
                                      </span>
                                    ),
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}

                          {/* Benefits */}
                          {pData?.benefits?.length > 0 && (
                            <AccordionItem
                              value="benefits"
                              className="border border-brand-gold/10 rounded-xl px-4"
                            >
                              <AccordionTrigger className="hover:no-underline py-3">
                                <div className="flex items-center gap-2 text-brand-brown-dark text-[13px] font-medium">
                                  <Sparkles
                                    size={14}
                                    className="text-brand-gold"
                                  />
                                  {(t as any)?.products?.benefits ??
                                    "The Experience"}
                                  <span className="text-[10px] text-brand-gold/60 ml-1">
                                    ({pData.benefits.length})
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pb-3">
                                <div className="space-y-2">
                                  {(pData?.benefits ?? [])?.map?.(
                                    (ben: string, j: number) => (
                                      <div
                                        key={j}
                                        className="flex items-center gap-2 text-brand-brown/80 text-[13px]"
                                      >
                                        <div className="w-4 h-4 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0">
                                          <Check
                                            size={9}
                                            className="text-brand-gold"
                                          />
                                        </div>
                                        {ben ?? ""}
                                      </div>
                                    ),
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}

                          {/* How to Use / Ritual */}
                          {pData?.ritual?.length > 0 && (
                            <AccordionItem
                              value="ritual"
                              className="border border-brand-gold/10 rounded-xl px-4"
                            >
                              <AccordionTrigger className="hover:no-underline py-3">
                                <div className="flex items-center gap-2 text-brand-brown-dark text-[13px] font-medium">
                                  <Crown
                                    size={14}
                                    className="text-brand-gold"
                                  />
                                  {(t as any)?.products?.howToUse ??
                                    "The Ritual"}
                                  <span className="text-[10px] text-brand-gold/60 ml-1">
                                    ({pData.ritual.length} steps)
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pb-3">
                                <div className="space-y-3">
                                  {(pData.ritual ?? []).map(
                                    (step: string, j: number) => (
                                      <div
                                        key={j}
                                        className="flex items-start gap-3"
                                      >
                                        <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                                          <span className="text-brand-gold text-[10px] font-bold">
                                            {j + 1}
                                          </span>
                                        </div>
                                        <span className="text-brand-brown/80 text-[13px] leading-[1.7]">
                                          {step}
                                        </span>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}

                          {/* Fragrance Notes */}
                          {pData?.scent && (
                            <AccordionItem
                              value="scent"
                              className="border border-brand-gold/10 rounded-xl px-4"
                            >
                              <AccordionTrigger className="hover:no-underline py-3">
                                <div className="flex items-center gap-2 text-brand-brown-dark text-[13px] font-medium">
                                  <Flower2
                                    size={14}
                                    className="text-brand-gold"
                                  />
                                  {(t as any)?.products?.scent ??
                                    "Signature Scent"}
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pb-3">
                                <FragranceNotes scent={pData.scent} />
                              </AccordionContent>
                            </AccordionItem>
                          )}

                          {/* Reviews */}
                          <AccordionItem
                            value="reviews"
                            className="border border-brand-gold/10 rounded-xl px-4"
                          >
                            <AccordionTrigger className="hover:no-underline py-3">
                              <div className="flex items-center gap-2 text-brand-brown-dark text-[13px] font-medium">
                                <ShoppingBag
                                  size={14}
                                  className="text-brand-gold"
                                />
                                Customer Reviews
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-3">
                              <ReviewSection productId={product?.id ?? ""} />
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    )}

                    {/* Sticky Mobile Bar (only for expanded) */}
                    {isExpanded && (
                      <StickyMobileBar
                        productName={pData?.name ?? ""}
                        price={pData?.price ?? 0}
                        discountPrice={pData?.discountPrice}
                        productId={product?.id ?? ""}
                        image={
                          product?.image ?? "/images/lumiere-hair-serum.webp"
                        }
                        collection={product?.collection ?? ""}
                      />
                    )}
                  </div>
                </AnimatedSection>
              );
            }) ?? []}
          </div>

          {/* Bundle Suggestion — standalone promo between products, shown once */}
          {filteredProducts?.length > 0 && (
            <div className="mt-12">
              <BundleSuggestion
                currentProductId={filteredProducts[0]?.id ?? ""}
                currentCollection={filteredProducts[0]?.collection ?? ""}
                locale={locale as "en" | "ar"}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
