"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* WhatsApp - bottom left */}
      <a
        href="https://wa.me/971552260826"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 group animate-scale-in"
        style={{ animationDelay: "0.2s" }}
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Pulse ring */}
          <div
            className="absolute inset-0 rounded-full bg-brand-whatsapp/30 animate-ping"
            style={{ animationDuration: "2s" }}
          />
          {/* Button */}
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-brand-whatsapp to-brand-whatsapp-dark text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] group-hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] group-hover:scale-110 transition-all duration-300">
            <MessageCircle size={25} strokeWidth={2} />
          </div>
        </div>
      </a>

      {/* Call - bottom right */}
      <a
        href="tel:+971501234567"
        className="fixed bottom-6 right-6 z-50 group animate-scale-in"
        style={{ animationDelay: "0.4s" }}
        aria-label="Call us"
      >
        <div className="relative">
          {/* Pulse ring */}
          <div
            className="absolute inset-0 rounded-full bg-brand-gold-dark/25 animate-ping"
            style={{ animationDuration: "2.5s" }}
          />
          {/* Button */}
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-darker text-white flex items-center justify-center shadow-[0_4px_20px_rgba(184,149,106,0.35)] group-hover:shadow-[0_6px_28px_rgba(184,149,106,0.5)] group-hover:scale-110 transition-all duration-300">
            <Phone size={23} strokeWidth={2} />
          </div>
        </div>
      </a>
    </>
  );
}
