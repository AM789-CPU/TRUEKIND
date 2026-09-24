import HomeClient from "@/components/HomeClient";
import { seedDatabase } from "@/db/seed";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Ensure default products and seed data exist
  try {
    await seedDatabase();
  } catch (e) {
    console.error("Seed error in HomePage:", e);
  }

  return <HomeClient />;
}
