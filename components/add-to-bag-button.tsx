"use client";
import { ShoppingBag } from "lucide-react";
import { useCart, type CartItem } from "@/components/cart-context";
import { useLanguage } from "@/components/language-context";

interface AddToBagButtonProps {
  product: CartItem;
  className?: string;
  variant?: "default" | "icon" | "full";
}

export default function AddToBagButton({
  product,
  className = "",
  variant = "default",
}: AddToBagButtonProps) {
  const { addToBag } = useCart();
  const { t, locale } = useLanguage();

  const handleAdd = () => {
    addToBag(product, locale);
  };

  const bagLabel = (t as any)?.checkout?.addToBag ?? "Add to Bag";

  if (variant === "icon") {
    return (
      <button
        onClick={handleAdd}
        className={`w-10 h-10 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-mid text-white flex items-center justify-center shadow-[0_4px_16px_rgba(212,165,116,0.3)] hover:shadow-[0_8px_24px_rgba(212,165,116,0.45)] hover:-translate-y-0.5 transition-all duration-300 ${className}`}
        aria-label={bagLabel}
      >
        <ShoppingBag size={16} />
      </button>
    );
  }

  if (variant === "full") {
    return (
      <button
        onClick={handleAdd}
        className={`w-full px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-mid hover:from-brand-gold-mid hover:to-brand-gold-dark text-white rounded-full transition-all duration-300 text-sm tracking-[0.12em] uppercase font-medium shadow-[0_8px_32px_rgba(212,165,116,0.35)] hover:shadow-[0_16px_48px_rgba(212,165,116,0.5)] disabled:opacity-60 hover:-translate-y-1.5 flex items-center justify-center gap-2.5 ${className}`}
      >
        <ShoppingBag size={16} />
        {bagLabel}
      </button>
    );
  }

  // default
  return (
    <button
      onClick={handleAdd}
      className={`px-6 py-2.5 bg-gradient-to-r from-brand-gold to-brand-gold-mid hover:from-brand-gold-mid hover:to-brand-gold-dark text-white rounded-full transition-all duration-300 text-xs tracking-[0.12em] uppercase font-medium shadow-[0_4px_16px_rgba(212,165,116,0.3)] hover:shadow-[0_12px_32px_rgba(212,165,116,0.5)] hover:-translate-y-0.5 flex items-center gap-2 ${className}`}
    >
      <ShoppingBag size={14} />
      {bagLabel}
    </button>
  );
}
