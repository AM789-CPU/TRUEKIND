import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { reviewsTable } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      const allReviews = await getDb().select().from(reviewsTable).limit(20);
      return NextResponse.json(allReviews);
    }

    const reviews = await getDb()
      .select()
      .from(reviewsTable)
      .where(eq(reviewsTable.productSlug, slug))
      .orderBy(desc(reviewsTable.createdAt));

    return NextResponse.json(reviews);
  } catch (err: unknown) {
    console.error("Reviews GET error:", err);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productSlug, author, rating, title, content } = body;

    if (!productSlug || !author || !rating || !title || !content) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const [newReview] = await getDb()
      .insert(reviewsTable)
      .values({
        productSlug,
        author,
        rating: Number(rating),
        title,
        content,
        isVerified: "true",
      })
      .returning();

    return NextResponse.json({ success: true, review: newReview });
  } catch (err: unknown) {
    console.error("Reviews POST error:", err);
    return NextResponse.json({ error: "Failed to post review" }, { status: 500 });
  }
}
