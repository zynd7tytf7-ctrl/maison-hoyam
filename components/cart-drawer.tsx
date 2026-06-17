"use client";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart-context";
import { useLanguage } from "@/components/language-context";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, removeFromBag, updateQuantity, totalItems, subtotal } =
    useCart();
  const { t, isRtl } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const checkout = (t as any)?.checkout ?? {};
  const emptyBagText = checkout?.emptyBag ?? "Your bag is empty";
  const continueShoppingText =
    checkout?.continueShopping ?? "Continue Shopping";
  const bagText = checkout?.bag ?? "Bag";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 ${isRtl ? "left-0" : "right-0"} h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col animate-slide-down`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-gold/10">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={18} className="text-brand-gold" />
            <h2 className="font-serif text-lg text-brand-brown-dark">
              {bagText}
            </h2>
            {totalItems > 0 && (
              <span className="text-xs text-brand-gold/60 font-medium">
                ({totalItems})
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-brand-gold/5 transition-colors"
          >
            <X size={18} className="text-brand-brown/60" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {!mounted || cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingBag size={48} className="text-brand-gold/20 mb-4" />
              <p className="text-brand-brown/50 text-sm mb-6">{emptyBagText}</p>
              <Link
                href="/products"
                onClick={onClose}
                className="px-6 py-2.5 bg-gradient-to-r from-brand-gold to-brand-gold-mid text-white rounded-full text-xs tracking-[0.1em] uppercase font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {continueShoppingText}
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.items.map((item) => (
                <div
                  key={item.productId}
                  className="flex gap-4 p-3 rounded-2xl bg-brand-cream/30 border border-brand-gold/15"
                >
                  {/* Image */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-brand-brown-dark/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-brand-brown-dark truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-gold font-serif mt-0.5">
                      {item.price} AED
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1 bg-white border border-brand-gold/15 rounded-full">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-brand-brown/60 hover:text-brand-gold transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-medium text-brand-brown-dark w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-brand-brown/60 hover:text-brand-gold transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromBag(item.productId)}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-red-400/60 hover:text-red-400 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Line price */}
                  <div className="text-right shrink-0">
                    <span className="text-sm font-serif text-brand-brown-dark">
                      {item.price * item.quantity} AED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {mounted && cart.items.length > 0 && (
          <div className="px-6 py-5 border-t border-brand-gold/10 bg-brand-cream/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-brown/70">
                {checkout?.subtotal ?? "Subtotal"}
              </span>
              <span className="font-serif text-lg text-brand-brown-dark">
                {subtotal} AED
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full py-3.5 bg-gradient-to-r from-brand-gold to-brand-gold-mid text-white rounded-full text-sm tracking-[0.12em] uppercase font-medium flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(212,165,116,0.3)] hover:shadow-[0_12px_36px_rgba(212,165,116,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {checkout?.title ?? "Checkout"}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
