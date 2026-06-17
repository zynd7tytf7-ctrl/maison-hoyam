"use client";
import { ArrowLeft, Crown, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "@/components/cart-context";
import { useLanguage } from "@/components/language-context";

interface CheckoutFormData {
  customerName: string;
  phone: string;
  deliveryAddress: string;
  notes: string;
}

export default function CheckoutContent() {
  const { cart, subtotal, clearBag } = useCart();
  const { t, isRtl } = useLanguage();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    defaultValues: {
      customerName: "",
      phone: "",
      deliveryAddress: "",
      notes: "",
    },
  });

  useEffect(() => {
    setMounted(true);
    // Redirect if cart empty
    if (cart.loaded && cart.items.length === 0) {
      router.replace("/products");
    }
  }, [cart.loaded, cart.items.length, router]);

  if (!mounted || !cart.loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <ShoppingBag size={48} className="text-brand-gold/20 mb-4" />
        <p className="text-brand-brown/50 text-sm">
          {(t as any)?.checkout?.emptyBag ?? "Your bag is empty"}
        </p>
        <Link
          href="/products"
          className="mt-4 px-6 py-2.5 bg-gradient-to-r from-brand-gold to-brand-gold-mid text-white rounded-full text-xs uppercase tracking-wider"
        >
          {(t as any)?.checkout?.continueShopping ?? "Continue Shopping"}
        </Link>
      </div>
    );
  }

  const checkout = (t as any)?.checkout ?? {};

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: data.customerName,
          phone: data.phone,
          deliveryAddress: data.deliveryAddress,
          notes: data.notes || undefined,
          items: cart.items.map((i) => ({
            productId: i.productId,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
            image: i.image,
            collection: i.collection,
            locale: i.locale,
          })),
          subtotal,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Failed to place order");
      }

      clearBag();
      router.push(`/order-confirmation?order=${json.orderNumber}`);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong");
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-brand-cream/40 border border-brand-gold/20 rounded-2xl px-5 py-4 text-brand-brown-dark text-sm placeholder:text-brand-brown/30 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/30 focus:bg-white transition-all duration-300";
  const labelClass =
    "text-brand-gold/80 text-xs tracking-[0.15em] uppercase font-medium mb-2 block";

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-brand-brown/60 text-xs uppercase tracking-wider hover:text-brand-gold transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          {(t as any)?.checkout?.continueShopping ?? "Continue Shopping"}
        </Link>

        <div className="flex items-center gap-2.5 mb-10">
          <Crown size={16} className="text-brand-gold/40" />
          <h1 className="font-serif text-3xl sm:text-4xl text-brand-brown-dark">
            {checkout?.title ?? "Checkout"}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Order Summary */}
          <div className={`lg:col-span-2 ${isRtl ? "lg:order-2" : ""}`}>
            <div className="bg-gradient-to-br from-brand-brown-dark to-brand-charcoal rounded-2xl sm:rounded-[2rem] p-8 border border-brand-gold/10 card-inner-glow sticky top-28">
              <h2 className="font-serif text-xl text-brand-gold mb-6">
                {checkout?.orderSummary ?? "Order Summary"}
              </h2>
              <div className="space-y-4 mb-8">
                {cart.items.map((item) => (
                  <div key={item.productId} className="flex gap-4 items-start">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-brand-charcoal/50">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-brand-cream/90 text-sm truncate font-medium">
                        {item.name}
                      </p>
                      <p className="text-brand-cream/40 text-xs mt-0.5">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-brand-cream/80 text-sm font-serif shrink-0">
                      {item.price * item.quantity} AED
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-brand-gold/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-brand-cream/60 text-sm">
                    {checkout?.subtotal ?? "Subtotal"}
                  </span>
                  <span className="font-serif text-xl text-brand-gold">
                    {subtotal} AED
                  </span>
                </div>
              </div>

              {/* Cash on Delivery badge */}
              <div className="mt-6 bg-brand-gold/10 rounded-2xl px-4 py-3 border border-brand-gold/15 text-center">
                <p className="text-brand-gold text-xs font-medium tracking-wide uppercase">
                  {checkout?.cashOnDelivery ?? "Cash on Delivery"}
                </p>
                <p className="text-brand-cream/50 text-[11px] mt-1">
                  {checkout?.cashOnDeliveryHint ??
                    "Pay when you receive your order"}
                </p>
              </div>

              {/* Delivery timing */}
              <div className="mt-4 text-center">
                <p className="text-brand-cream/50 text-[10px] tracking-[0.1em] uppercase">
                  {isRtl
                    ? "التوصيل خلال 24-48 ساعة في دبي"
                    : "Delivery within 24-48 hrs in Dubai"}
                </p>
                <p className="text-brand-cream/40 text-[10px] tracking-[0.1em] uppercase mt-0.5">
                  {isRtl
                    ? "توصيل مجاني للطلبات فوق 200 درهم"
                    : "Free delivery for orders over 200 AED"}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`lg:col-span-3 ${isRtl ? "lg:order-1" : ""}`}>
            <div className="bg-gradient-to-br from-brand-cream/30 to-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 border border-brand-gold/10">
              <div className="flex items-center gap-2.5 mb-8 pb-6 border-b border-brand-gold/10">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-brand-gold to-brand-gold-dark" />
                <h3 className="font-serif text-lg text-brand-brown-dark">
                  Delivery Details
                </h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className={labelClass}>
                    {checkout?.customerName ?? "Full Name"}
                  </label>
                  <input
                    id="checkout-name"
                    {...register("customerName", {
                      required: "Name is required",
                    })}
                    type="text"
                    placeholder={checkout?.namePlaceholder ?? "Your full name"}
                    className={`${inputClass} ${errors.customerName ? "border-red-400/40" : ""}`}
                    autoComplete="name"
                    disabled={isSubmitting}
                  />
                  {errors.customerName && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {checkout?.customerName
                        ? isRtl
                          ? "الاسم مطلوب"
                          : "Name is required"
                        : "Required"}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass}>
                    {checkout?.phone ?? "Mobile Number"}
                  </label>
                  <input
                    id="checkout-phone"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^(\+971|05)\d{8,10}$/,
                        message:
                          "Enter a valid UAE number (+971 XX XXX XXXX or 05X XXX XXXX)",
                      },
                    })}
                    type="tel"
                    placeholder={
                      checkout?.phonePlaceholder ?? "+971 XX XXX XXXX"
                    }
                    className={`${inputClass} ${errors.phone ? "border-red-400/40" : ""}`}
                    autoComplete="tel"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className={labelClass}>
                    {checkout?.address ?? "Delivery Address"}
                  </label>
                  <textarea
                    id="checkout-address"
                    {...register("deliveryAddress", {
                      required: "Address is required",
                    })}
                    rows={3}
                    placeholder={
                      checkout?.addressPlaceholder ?? "Your delivery address"
                    }
                    className={`${inputClass} resize-none ${errors.deliveryAddress ? "border-red-400/40" : ""}`}
                    autoComplete="street-address"
                    disabled={isSubmitting}
                  />
                  {errors.deliveryAddress && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {isRtl ? "العنوان مطلوب" : "Address is required"}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className={labelClass}>
                    {checkout?.notes ?? "Order Notes (Optional)"}
                  </label>
                  <textarea
                    id="checkout-notes"
                    {...register("notes")}
                    rows={2}
                    placeholder={
                      checkout?.notesPlaceholder ?? "Special instructions..."
                    }
                    className={`${inputClass} resize-none`}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="text-red-400 text-sm bg-red-500/10 px-5 py-3.5 rounded-2xl border border-red-500/20 animate-fade-in">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-mid hover:from-brand-gold-mid hover:to-brand-gold-dark text-white rounded-full transition-all duration-300 text-sm tracking-[0.12em] uppercase font-medium shadow-[0_8px_32px_rgba(212,165,116,0.35)] hover:shadow-[0_16px_48px_rgba(212,165,116,0.5)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:animate-pulse hover:-translate-y-1.5 flex items-center justify-center gap-2.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {checkout?.placingOrder ?? "Placing Order..."}
                    </>
                  ) : (
                    (checkout?.placeOrder ?? "Place Order")
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
