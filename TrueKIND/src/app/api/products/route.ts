import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/data/products";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const range = searchParams.get("range");
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let filtered = [...PRODUCTS];

  if (range && range !== "All") {
    filtered = filtered.filter((p) => p.range.toLowerCase() === range.toLowerCase());
  }

  if (category && category !== "All") {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.range.toLowerCase().includes(q)
    );
  }

  return NextResponse.json(filtered);
}
