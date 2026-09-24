import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { skinQuizSubmissionsTable } from "@/db/schema";
import { PRODUCTS } from "@/data/products";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, skinType, concerns, routineGoal } = body;

    const recommendations = PRODUCTS.filter((p) => {
      const pText = (p.title + " " + p.suitableFor + " " + p.recommendedFor + " " + p.category).toLowerCase();
      if (concerns?.toLowerCase().includes("acne") && pText.includes("acne")) return true;
      if (concerns?.toLowerCase().includes("pigmentation") && pText.includes("vitamin c")) return true;
      if (concerns?.toLowerCase().includes("dullness") && pText.includes("brightening")) return true;
      if (skinType?.toLowerCase().includes("oily") && (pText.includes("bha") || pText.includes("cleanser"))) return true;
      if (skinType?.toLowerCase().includes("dry") && (pText.includes("hydrating") || pText.includes("hyaluronic"))) return true;
      return false;
    }).slice(0, 3);

    const finalRecommendations = recommendations.length > 0 ? recommendations : PRODUCTS.slice(0, 3);

    // Persist only if we have an email and a DB is configured. If DATABASE_URL is not set
    // (e.g. during Vercel preview without Postgres), just return recommendations.
    if (email) {
      try {
        await getDb()
          .insert(skinQuizSubmissionsTable)
          .values({
            name: name || "Anonymous",
            email: email.toLowerCase().trim(),
            skinType: skinType || "Normal",
            concerns: concerns || "Radiance",
            routineGoal: routineGoal || "Healthy Glow",
            recommendedProducts: finalRecommendations.map((p) => ({
              id: p.id,
              slug: p.slug,
              title: p.title,
              price: p.price,
            })),
          })
          .onConflictDoNothing();
      } catch (e) {
        console.warn("Quiz submission skipped (DB unavailable):", e instanceof Error ? e.message : e);
      }
    }

    return NextResponse.json({
      success: true,
      recommendations: finalRecommendations,
    });
  } catch (err: unknown) {
    console.error("Quiz submission error:", err);
    return NextResponse.json({ error: "Failed to evaluate routine" }, { status: 500 });
  }
}
