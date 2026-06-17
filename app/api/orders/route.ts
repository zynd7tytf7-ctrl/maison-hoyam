import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const orderSchema = z.object({
  customerName: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^(\+971|05)\d{8,10}$/, "Invalid UAE phone number"),
  deliveryAddress: z.string().min(1, "Address is required"),
  notes: z.string().optional(),
  items: z.array(
    z.object({
      productId: z.string(),
      name: z.string(),
      price: z.number(),
      quantity: z.number().int().min(1),
      image: z.string(),
      collection: z.string(),
      locale: z.enum(["en", "ar"]),
    })
  ),
  subtotal: z.number().min(0),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = orderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message ?? "Invalid data" },
        { status: 400 }
      );
    }

    const { customerName, phone, deliveryAddress, notes, items, subtotal } = parsed.data;

    const orderNumber = `MH-${String(Date.now()).slice(-6)}`;

    const order = await prisma.order.create({
      data: {
        orderNumber,
        items: items as any,
        customerName,
        phone,
        deliveryAddress,
        notes: notes ?? null,
        subtotal,
      },
    });

    return NextResponse.json(
      { success: true, orderNumber: order.orderNumber, id: order.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}
