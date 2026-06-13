"use client";

import { Star } from "lucide-react";
import AnimatedSection from "./animated-section";
import { useLanguage } from "./language-context";

const testimonialsData = {
  en: [
    {
      name: "Sophia Laurent",
      role: "Luxury Beauty Curator",
      quote:
        "Maison Hoyam has revolutionized my daily self-care routine. The quality is unmatched.",
      rating: 5,
      image: "✨",
    },
    {
      name: "Amira Al Mansoori",
      role: "Hair Care Specialist",
      quote:
        "Finally, a brand that understands the complexity of luxury haircare. Simply exquisite.",
      rating: 5,
      image: "👑",
    },
    {
      name: "Isabella Rossi",
      role: "Wellness Influencer",
      quote:
        "Every product feels like a ritual. The attention to detail is extraordinary.",
      rating: 5,
      image: "🌸",
    },
  ],
  ar: [
    {
      name: "صفياء لوران",
      role: "منسقة الجمال الفاخر",
      quote: "غيّرت ميزون هويام روتيني اليومي للعناية. الجودة لا تضاهى.",
      rating: 5,
      image: "✨",
    },
    {
      name: "أميرة المنصوري",
      role: "أخصائية العناية بالشعر",
      quote:
        "أخيراً، علامة تفهم تعقيدات العناية بالشعر الفاخرة. ببساطة رائعة.",
      rating: 5,
      image: "👑",
    },
    {
      name: "إيزابيلا روسي",
      role: "مؤثرة الرفاهية",
      quote: "كل منتج يشعر وكأنه طقس. التفاني في التفاصيل استثنائي.",
      rating: 5,
      image: "🌸",
    },
  ],
};

export default function Testimonials() {
  const { locale, isRtl } = useLanguage();
  const testimonials = testimonialsData[locale as "en" | "ar"];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-brand-cream/30 to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-brand-gold text-xs tracking-[0.4em] uppercase font-medium">
              {isRtl ? "آراء العملاء" : "Testimonials"}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-brown-dark mt-4 mb-4">
              {isRtl ? "مراجعات من النساء اللاتي يحببن" : "Trusted By"}
            </h2>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold/40" />
              <span className="text-brand-gold/60 text-sm">
                {isRtl ? "مختارات الفخامة" : "Premium Selection"}
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-gold/40" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 border border-brand-gold/10 hover:border-brand-gold/30 shadow-sm hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-500">
                {/* Background accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Header with avatar and rating */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className="fill-brand-gold text-brand-gold"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-brand-brown/70 leading-relaxed mb-5 italic text-sm md:text-base">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="pt-5 border-t border-brand-gold/10">
                    <p className="font-semibold text-brand-brown-dark text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-brand-gold text-xs tracking-wider uppercase">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
