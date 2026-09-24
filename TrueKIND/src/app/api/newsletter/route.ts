import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { newsletterSubscribersTable } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    await getDb()
      .insert(newsletterSubscribersTable)
      .values({ email: email.toLowerCase().trim() })
      .onConflictDoNothing();

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to clean skincare insights!",
    });
  } catch (err: unknown) {
    console.error("Newsletter subscription error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
