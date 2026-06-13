"use client";

import { useLanguage } from "./language-context";

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function ProductFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFilterProps) {
  const { isRtl, t } = useLanguage();

  const categoryLabels: { [key: string]: string } = {
    lumiere: isRtl ? "لوميير" : "Lumière",
    "le-reve": isRtl ? "لو ريف" : "Le Rêve",
    "coffee-noir": isRtl ? "كافيه نوار" : "Café Noir",
    citrine: isRtl ? "السترين" : "Citrine",
    rose: isRtl ? "الورد" : "Rose",
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
        {/* All Products Button */}
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${selectedCategory === null
              ? "bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-charcoal shadow-lg shadow-brand-gold/20"
              : "bg-brand-gold/10 text-brand-brown border border-brand-gold/20 hover:border-brand-gold/40 hover:bg-brand-gold/15"
            }`}
        >
          {isRtl ? "الكل" : "All Products"}
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${selectedCategory === category
                ? "bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-charcoal shadow-lg shadow-brand-gold/20"
                : "bg-brand-gold/10 text-brand-brown border border-brand-gold/20 hover:border-brand-gold/40 hover:bg-brand-gold/15"
              }`}
          >
            {categoryLabels[category] || category}
          </button>
        ))}
      </div>
    </div>
  );
}
