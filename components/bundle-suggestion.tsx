"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Crown, Plus } from "lucide-react";
import { productData } from "@/lib/translations";
import AddToBagButton from "@/components/add-to-bag-button";

interface BundleSuggestionProps {
  currentProductId: string;
  currentCollection: string;
  locale: "en" | "ar";
}

const hairCollections = ["lumiere", "le-reve", "coffee-noir"];
const bodyCollections = ["citrine", "rose"];

const BUNDLE_DISCOUNT = 50;

export default function BundleSuggestion({
  currentProductId,
  currentCollection,
  locale,
}: BundleSuggestionProps) {
  const [added, setAdded] = useState(false);

  const isHair = hairCollections.includes(currentCollection);
  const isBody = bodyCollections.includes(currentCollection);

  if (!isHair && !isBody) return null;

  const pool = isHair ? hairCollections : bodyCollections;
  const current = productData.find((p: any) => p.id === currentProductId);
  const companion = productData.find(
    (p: any) => p.id !== currentProductId && pool.includes(p.collection ?? ""),
  );

  if (!current || !companion) return null;

  const currentData = current[locale] ?? current.en ?? {};
  const companionData = companion[locale] ?? companion.en ?? {};
  const currentPrice = currentData.discountPrice ?? currentData.price ?? 0;
  const companionPrice =
    companionData.discountPrice ?? companionData.price ?? 0;
  const originalTotal = currentPrice + companionPrice;
  const bundlePrice = originalTotal - BUNDLE_DISCOUNT;

  return (
    <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal rounded-[1.5rem] p-7 border border-brand-gold/10 card-inner-glow">
      <div className="flex items-center gap-2 mb-5">
        <Crown size={15} className="text-brand-gold" />
        <h3 className="text-brand-gold font-medium text-[11px] uppercase tracking-[0.2em]">
          Complete the Ritual
        </h3>
      </div>
      <div className="flex items-center gap-4 mb-5">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-brand-charcoal/50 shrink-0">
          <Image
            src={current.image ?? "/images/lumiere-hair-serum.jpg"}
            alt={currentData.name ?? ""}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <Plus size={20} className="text-brand-gold/40 shrink-0" />
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-brand-charcoal/50 shrink-0">
          <Image
            src={companion.image ?? "/images/le-reve-hair-oil.jpg"}
            alt={companionData.name ?? ""}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <ArrowRight size={20} className="text-brand-gold shrink-0" />
        <div>
          <p className="text-brand-cream/60 text-[10px] uppercase tracking-wider">
            Buy Together &amp; Save {BUNDLE_DISCOUNT} AED
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-brand-cream/40 text-sm line-through font-serif">
              {originalTotal} AED
            </span>
            <span className="text-brand-gold font-serif text-2xl font-semibold">
              {bundlePrice} AED
            </span>
          </div>
        </div>
      </div>
      <p className="text-brand-cream/60 text-xs mb-4">
        {currentData.name} + {companionData.name}
      </p>
      <div className="flex gap-3">
        <AddToBagButton
          variant="default"
          product={{
            productId: current.id ?? "",
            name: currentData.name ?? "",
            price: currentPrice,
            quantity: 1,
            image: current.image ?? "",
            collection: current.collection ?? "",
            locale,
          }}
          className="flex-1"
        />
        <AddToBagButton
          variant="default"
          product={{
            productId: companion.id ?? "",
            name: companionData.name ?? "",
            price: companionPrice,
            quantity: 1,
            image: companion.image ?? "",
            collection: companion.collection ?? "",
            locale,
          }}
          className="flex-1"
        />
      </div>
    </div>
  );
}
