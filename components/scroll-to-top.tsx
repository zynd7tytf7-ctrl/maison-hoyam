"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-charcoal shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/40 flex items-center justify-center group transition-all duration-300 animate-fade-in hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={20}
            className="group-hover:-translate-y-1 transition-transform duration-300"
          />
        </button>
      )}
    </>
  );
}
