"use client";
import AddToBagButton from "@/components/add-to-bag-button";

interface StickyMobileBarProps {
  productName: string;
  price: number;
  discountPrice?: number;
  productId: string;
  image: string;
  collection: string;
}

export default function StickyMobileBar({
  productName,
  price,
  discountPrice,
  productId,
  image,
  collection,
}: StickyMobileBarProps) {
  const displayPrice = discountPrice ?? price;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-brand-gold/15 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-40 px-4 py-3.5 flex items-center justify-between gap-3">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-serif text-brand-brown-dark truncate">
          {productName}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-brand-gold font-serif font-semibold">
            {displayPrice} AED
          </span>
          {discountPrice && discountPrice !== price && (
            <span className="text-brand-brown/40 text-xs line-through">
              {price} AED
            </span>
          )}
        </div>
      </div>
      <AddToBagButton
        variant="default"
        product={{
          productId,
          name: productName,
          price: displayPrice,
          quantity: 1,
          image,
          collection,
          locale: "en",
        }}
        className="shrink-0"
      />
    </div>
  );
}
