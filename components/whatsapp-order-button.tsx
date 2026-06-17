"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+971501234567";

interface WhatsAppOrderButtonProps {
  productName: string;
  productId: string;
  price?: number;
  variant?: "pill" | "full" | "floating";
  className?: string;
}

export default function WhatsAppOrderButton({
  productName,
  productId,
  price,
  variant = "pill",
  className = "",
}: WhatsAppOrderButtonProps) {
  const message = `Hello Maison Hoyam, I'd like to order ${productName} (${productId}) for ${price ?? ""} AED. Cash on delivery.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  if (variant === "floating") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 group ${className}`}
        aria-label={`Order ${productName} via WhatsApp`}
      >
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full bg-brand-whatsapp/30 animate-ping"
            style={{ animationDuration: "2s" }}
          />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-brand-whatsapp to-brand-whatsapp-dark text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] group-hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] group-hover:scale-110 transition-all duration-300">
            <MessageCircle size={25} strokeWidth={2} />
          </div>
        </div>
      </a>
    );
  }

  if (variant === "full") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full px-8 py-3 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-black rounded-full transition-all duration-300 text-sm tracking-[0.12em] uppercase font-medium shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 ${className}`}
      >
        <MessageCircle size={18} /> Order via WhatsApp
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-black rounded-full text-xs tracking-wider font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 ${className}`}
    >
      <MessageCircle size={18} /> Order via WhatsApp
    </a>
  );
}
