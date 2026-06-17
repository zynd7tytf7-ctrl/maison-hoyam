"use client";

import {
  Clock,
  Crown,
  Mail,
  MapPin,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import AnimatedSection from "./animated-section";
import ContactForm from "./contact-form";
import { useLanguage } from "./language-context";

export default function ContactContent() {
  const { t, isRtl } = useLanguage();

  const stats = [
    {
      icon: Star,
      value: "4.9",
      label: isRtl ? "تقييم العملاء" : "Customer Rating",
    },
    {
      icon: Shield,
      value: "100%",
      label: isRtl ? "مكونات طبيعية" : "Natural Ingredients",
    },
    {
      icon: Truck,
      value: isRtl ? "2-3 أيام" : "2-3 Days",
      label: isRtl ? "توصيل سريع" : "Fast Delivery",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 shimmer-gold pointer-events-none" />
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] max-w-full bg-brand-gold/3 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/8 rounded-full text-brand-gold text-[10px] tracking-[0.3em] uppercase font-medium border border-brand-gold/15 mb-6">
              <Sparkles size={11} />
              {isRtl ? "تواصلي معنا" : "Get in Touch"}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-brown-dark mb-5">
              {(t as any)?.contact?.title ?? "Begin Your Journey"}
            </h1>
            <p className="text-brand-brown/60 max-w-xl mx-auto text-[15px] leading-relaxed">
              {isRtl
                ? "سواء كنتِ تبحثين عن طقسك المثالي أو تستكشفين شراكة، يسعدنا سماعك."
                : "Whether you're seeking your perfect ritual or exploring a partnership, we'd love to hear from you."}
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold/40" />
              <Crown size={14} className="text-brand-gold/40" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-gold/40" />
            </div>
          </AnimatedSection>

          {/* Trust Stats */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-2">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal p-5 rounded-[1.25rem] text-center border border-brand-gold/10 card-inner-glow"
                >
                  <stat.icon
                    size={18}
                    className="text-brand-gold/60 mx-auto mb-2"
                  />
                  <div className="text-brand-cream font-serif text-xl font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-brand-cream/45 text-[10px] tracking-wider uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pt-8 md:pt-12 pb-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info Cards */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal p-6 rounded-[1.5rem] card-inner-glow border border-brand-gold/10 hover:border-brand-gold/25 hover:-translate-y-1 transition-all duration-500 card-shine-effect">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-brand-gold" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-brand-cream/60 text-[10px] tracking-[0.2em] uppercase mb-1">
                        {isRtl ? "البريد الإلكتروني" : "Email Us"}
                      </p>
                      <a
                        href="mailto:contact@maisonhoyam.com"
                        className="text-brand-gold text-sm hover:text-brand-cream transition-colors truncate block"
                      >
                        contact@maisonhoyam.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal p-6 rounded-[1.5rem] card-inner-glow border border-brand-gold/10 hover:border-brand-gold/25 hover:-translate-y-1 transition-all duration-500 card-shine-effect">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-whatsapp/12 flex items-center justify-center shrink-0">
                      <MessageCircle
                        size={20}
                        className="text-brand-whatsapp"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-brand-cream/60 text-[10px] tracking-[0.2em] uppercase mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/971501234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-whatsapp text-sm hover:text-green-400 transition-colors block"
                      >
                        {isRtl
                          ? "راسلينا عبر واتساب"
                          : "Message us on WhatsApp"}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal p-6 rounded-[1.5rem] card-inner-glow border border-brand-gold/10 hover:border-brand-gold/25 hover:-translate-y-1 transition-all duration-500 card-shine-effect">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-brand-gold" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-brand-cream/60 text-[10px] tracking-[0.2em] uppercase mb-1">
                        {isRtl ? "الموقع" : "Location"}
                      </p>
                      <p className="text-brand-cream/70 text-sm">
                        {isRtl
                          ? "الإمارات العربية المتحدة"
                          : "United Arab Emirates"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal p-6 rounded-[1.5rem] card-inner-glow border border-brand-gold/10 hover:border-brand-gold/25 hover:-translate-y-1 transition-all duration-500 card-shine-effect">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-brand-gold" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-brand-cream/60 text-[10px] tracking-[0.2em] uppercase mb-1">
                        {isRtl ? "ساعات العمل" : "Business Hours"}
                      </p>
                      <p className="text-brand-cream/70 text-sm leading-relaxed">
                        {isRtl
                          ? "السبت – الخميس: 9 صباحاً – 6 مساءً"
                          : "Sat – Thu: 9:00 AM – 6:00 PM"}
                      </p>
                      <p className="text-brand-cream/40 text-xs mt-0.5">
                        {isRtl ? "الجمعة: مغلق" : "Friday: Closed"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Promise */}
                <div className="bg-brand-charcoal p-5 rounded-[1.25rem] border border-brand-gold/15 text-center">
                  <p className="text-brand-gold/90 text-xs leading-relaxed">
                    {isRtl
                      ? "نسعى للرد على جميع الاستفسارات خلال 24 ساعة. فريقنا جاهز لمساعدتك."
                      : "We aim to respond to all inquiries within 24 hours. Our team is ready to assist you."}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal p-8 sm:p-10 rounded-[1.5rem] card-inner-glow border border-brand-gold/10">
                <h2 className="font-serif text-brand-cream text-xl mb-6 text-center sm:text-start">
                  {isRtl ? "أرسلي رسالة" : "Send a Message"}
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
