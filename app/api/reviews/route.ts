export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { success: false, message: "productId is required" },
        { status: 400 },
      );
    }

    const reviews = await prisma.review.findMany({
      where: { productId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(reviews);
  } catch (error: any) {
    console.error("GET /api/reviews error:", error?.message ?? error);
    // Return empty array when database unavailable (e.g., migration not yet run)
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { productId, authorName, rating, text } = data;

    if (
      !productId ||
      typeof productId !== "string" ||
      productId.trim().length === 0
    ) {
      return NextResponse.json(
        { success: false, message: "productId must be a non-empty string" },
        { status: 400 },
      );
    }

    if (
      !authorName ||
      typeof authorName !== "string" ||
      authorName.trim().length < 2
    ) {
      return NextResponse.json(
        { success: false, message: "authorName must be at least 2 characters" },
        { status: 400 },
      );
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          success: false,
          message: "rating must be an integer between 1 and 5",
        },
        { status: 400 },
      );
    }

    if (
      !text ||
      typeof text !== "string" ||
      text.trim().length < 10 ||
      text.trim().length > 500
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "text must be between 10 and 500 characters",
        },
        { status: 400 },
      );
    }

    const review = await prisma.review.create({
      data: {
        productId: productId.trim(),
        authorName: authorName.trim(),
        rating,
        text: text.trim(),
        isVerified: false,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/reviews error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create review" },
      { status: 500 },
    );
  }
}
