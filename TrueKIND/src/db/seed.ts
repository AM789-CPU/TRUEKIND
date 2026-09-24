import { getDb } from "./index";
import { productsTable, reviewsTable } from "./schema";
import { PRODUCTS } from "../data/products";
import { count } from "drizzle-orm";

export async function seedDatabase() {
  try {
    const db = getDb();
    const existing = await db.select({ val: count() }).from(productsTable);
    if (existing[0]?.val > 0) {
      return;
    }

    console.log("Seeding products...");
    for (const p of PRODUCTS) {
      await db
        .insert(productsTable)
        .values({
          slug: p.slug,
          title: p.title,
          price: p.price.toString(),
          volume: p.volume,
          category: p.category,
          range: p.range,
          description: p.description,
          about: p.about,
          image: p.image,
          image2: p.image2,
          themeBackground: p.themeBackground,
          themeButton: p.themeButton,
          keyIngredients: p.keyIngredients,
          ingredientsFormula: p.ingredientsFormula,
          suitableFor: p.suitableFor,
          recommendedFor: p.recommendedFor,
          usage: p.usage,
          faqs: p.faqs,
        })
        .onConflictDoNothing();
    }

    const sampleReviews = [
      {
        productSlug: "vitamin-c-15-brightening-serum",
        author: "Ananya S.",
        rating: 5,
        title: "Lit from within glow!",
        content:
          "Honestly within two weeks my dark spots noticeably softened and my skin has that dewy radiant look.",
      },
      {
        productSlug: "vitamin-c-15-brightening-serum",
        author: "Meera K.",
        rating: 5,
        title: "Best Vitamin C I have ever used",
        content:
          "The transparency table with EWG ratings sold me, and the performance kept me. Gentle on sensitive skin!",
      },
      {
        productSlug: "bha-tea-tree-acne-clearing-toneressence",
        author: "Rohan D.",
        rating: 5,
        title: "Cleared my stubborn breakouts",
        content:
          "The 2% salicylic acid combined with tea tree and azelaic acid worked wonders without drying out my barrier.",
      },
      {
        productSlug: "aha-brightening-exfoliant-cleanserface-wash",
        author: "Pooja V.",
        rating: 5,
        title: "Silky texture, feels luxurious",
        content:
          "Removes every trace of daily grime while gently exfoliating. My complexion looks smooth and fresh every morning.",
      },
    ];

    for (const rev of sampleReviews) {
      await db.insert(reviewsTable).values(rev).onConflictDoNothing();
    }

    console.log("Seeding complete!");
  } catch (err) {
    // If there is no DATABASE_URL (e.g. Vercel build without Postgres yet), silently skip.
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes("DATABASE_URL") || message.includes("connection")) {
      console.warn("Skipping seed: no database connection available yet.", message);
      return;
    }
    console.error("Error seeding database:", err);
  }
}
