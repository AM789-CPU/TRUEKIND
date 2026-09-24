import { NextResponse } from "next/server";
import { seedDatabase } from "@/db/seed";

export async function GET() {
  try {
    await seedDatabase();
    return NextResponse.json({ success: true, message: "Database seeded successfully" });
  } catch (err: unknown) {
    console.error("Seed error:", err);
    return NextResponse.json({ error: "Failed to seed" }, { status: 500 });
  }
}
