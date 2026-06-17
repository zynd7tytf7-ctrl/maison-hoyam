import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed | Maison Hoyam",
  robots: { index: false, follow: false },
};

const OrderConfirmationContent = dynamic(
  () => import("@/components/order-confirmation-content"),
  { ssr: false }
);

export default function OrderConfirmationPage() {
  return <OrderConfirmationContent />;
}
