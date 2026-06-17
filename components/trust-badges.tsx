"use client";

import { Leaf, Shield, Heart, MapPin } from "lucide-react";

export default function TrustBadges({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      <span className="px-3 py-1.5 bg-brand-gold/20 text-brand-brown-dark text-[10px] rounded-full border border-brand-gold/30 font-medium tracking-wider uppercase inline-flex items-center gap-1.5">
        <Leaf size={11} className="text-brand-gold-dark" /> 100% Natural
      </span>
      <span className="px-3 py-1.5 bg-brand-gold/20 text-brand-brown-dark text-[10px] rounded-full border border-brand-gold/30 font-medium tracking-wider uppercase inline-flex items-center gap-1.5">
        <Shield size={11} className="text-brand-gold-dark" /> No Parabens
      </span>
      <span className="px-3 py-1.5 bg-brand-gold/20 text-brand-brown-dark text-[10px] rounded-full border border-brand-gold/30 font-medium tracking-wider uppercase inline-flex items-center gap-1.5">
        <Heart size={11} className="text-brand-gold-dark" /> Cruelty-Free
      </span>
      <span className="px-3 py-1.5 bg-brand-gold/20 text-brand-brown-dark text-[10px] rounded-full border border-brand-gold/30 font-medium tracking-wider uppercase inline-flex items-center gap-1.5">
        <MapPin size={11} className="text-brand-gold-dark" /> Made in UAE
      </span>
    </div>
  );
}
