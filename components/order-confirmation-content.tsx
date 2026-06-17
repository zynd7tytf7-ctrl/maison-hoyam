"use client";
import { CheckCircle, Crown, Home, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-context";

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  rotation: number;
}

export default function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order");
  const { t, isRtl } = useLanguage();
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect if no order number
  useEffect(() => {
    if (mounted && !orderNumber) {
      router.replace("/products");
    }
  }, [mounted, orderNumber, router]);

  // Canvas confetti
  useEffect(() => {
    if (!orderNumber || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [
      "#D4A574", // brand-gold
      "#E8C89E", // brand-gold-light
      "#B8956A", // brand-gold-dark
      "#E8D5C4", // brand-cream
      "#C4955A", // brand-gold-mid
      "#2C1810", // brand-brown-dark
    ];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: ConfettiParticle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 2 + 1.5,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.5,
      rotation: Math.random() * 360,
    }));

    let frame = 0;
    const maxFrames = 280; // ~5 seconds at 60fps
    let animId: number;

    const animate = () => {
      if (frame >= maxFrames) {
        cancelAnimationFrame(animId);
        return;
      }
      frame++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.vy += 0.03; // gravity
        p.y += p.vy;
        p.rotation += 1;
        if (frame > maxFrames - 60) {
          p.opacity -= 0.017;
        }
        if (p.opacity <= 0) return;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [orderNumber]);

  if (!mounted) return null;
  if (!orderNumber) return null;

  const order = (t as any)?.order ?? {};

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center px-4 py-20">
      {/* Confetti canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      <div className="relative z-20 max-w-lg w-full text-center">
        {/* Success icon */}
        <div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 flex items-center justify-center mx-auto mb-8 border border-brand-gold/20 animate-glow"
          style={{ animationDelay: "0s" }}
        >
          <CheckCircle size={48} className="text-brand-gold" />
        </div>

        <h1
          className="font-serif text-3xl sm:text-4xl text-brand-brown-dark mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {order?.success ?? "Order Received!"}
        </h1>

        {/* Order number card */}
        <div
          className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal rounded-[1.5rem] p-6 border border-brand-gold/10 card-inner-glow mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-brand-cream/50 text-xs tracking-[0.2em] uppercase mb-2">
            {order?.orderNumber ?? "Order Number"}
          </p>
          <p className="font-mono text-2xl text-brand-gold tracking-wider">
            {orderNumber}
          </p>
        </div>

        <p
          className="text-brand-brown/60 text-sm leading-relaxed mb-3 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {order?.message ??
            "Your order has been received. Our delivery agent will contact you soon to confirm delivery details."}
        </p>
        <p
          className="text-brand-gold/70 text-xs mb-10 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          {order?.paymentNote ?? "Pay upon delivery — cash accepted."}
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <Link
            href="/products"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-gold to-brand-gold-mid text-white rounded-full text-sm tracking-[0.1em] uppercase font-medium shadow-[0_8px_24px_rgba(212,165,116,0.3)] hover:shadow-[0_12px_36px_rgba(212,165,116,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={16} />
            {order?.continueShopping ?? "Continue Shopping"}
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 border border-brand-gold/20 text-brand-brown rounded-full text-sm tracking-[0.1em] uppercase font-medium hover:bg-brand-gold/5 hover:border-brand-gold/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Home size={16} />
            {order?.returnHome ?? "Return Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
