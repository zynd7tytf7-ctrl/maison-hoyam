import CheckoutContent from "@/components/checkout-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Maison Hoyam",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return <CheckoutContent />;
}
