"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  Star,
  Check,
  ShoppingBag,
  SlidersHorizontal,
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const initialRange = searchParams.get("range") || "All";

  const { addToCart } = useCart();
  const [selectedRange, setSelectedRange] = useState<string>(initialRange);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const ranges = ["All", "Pure Brilliance", "Clear Difference", "Varnaya Blends", "Daily Dew", "C Luminance"];
  const categories = ["All", "Serums", "Toners", "Cleansers", "Tonics", "Sleeping Mask", "Moisturisers", "Facial Oils"];

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 2000);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Range filter
      if (selectedRange !== "All" && p.range.toLowerCase() !== selectedRange.toLowerCase()) {
        return false;
      }
      // Category filter
      if (selectedCategory !== "All" && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.range.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.keyIngredients.some((ki) => ki.title.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedRange, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#3B3B3B]">
      {/* Header */}
      <div className="border-b border-[#e6dfd6] pb-8 mb-10">
        <div className="flex items-center gap-3 text-xs text-neutral-500 uppercase tracking-widest mb-3">
          <span className="bg-[#EAE2D7] px-2 py-0.5 rounded text-neutral-800">0269</span>
          <span className="bg-[#EAE2D7] px-2 py-0.5 rounded text-neutral-800">05789</span>
          <span>TrueKind Formulation Index</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-neutral-900 leading-tight">
              Meet Our <br />
              <span className="font-editorial lowercase">complete</span> lineup
            </h1>
            <p className="text-sm text-neutral-600 max-w-lg mt-2">
              Every formula is crafted with bio-compatible bases, stable active pH, and 100% transparent ingredient disclosure.
            </p>
          </div>

          <Link
            href="/#quiz"
            className="inline-flex items-center gap-2 bg-[#E8DFD5] hover:bg-[#DDD2C5] text-neutral-900 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors w-fit border border-[#d8cec2]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Need Help? Find Your Regimen</span>
          </Link>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-6 mb-12">
        {/* Search input & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by active (e.g. Vitamin C, BHA, Niacinamide)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#ded5cb] rounded-full pl-10 pr-4 py-2.5 text-xs text-neutral-800 focus:outline-none focus:border-neutral-800"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs text-neutral-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#ded5cb] rounded-full px-3 py-2 text-xs text-neutral-800 focus:outline-none"
            >
              <option value="featured">Featured Catalog</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Range Tabs */}
        <div>
          <span className="text-[11px] uppercase tracking-widest text-neutral-400 block mb-2">
            Filter by Range:
          </span>
          <div className="flex flex-wrap gap-2">
            {ranges.map((rng) => (
              <button
                key={rng}
                onClick={() => setSelectedRange(rng)}
                className={`text-xs px-4 py-2 rounded-full uppercase tracking-wider font-semibold transition-all ${
                  selectedRange === rng
                    ? "bg-[#2F2F2F] text-white shadow-sm"
                    : "bg-[#EFEAE2] hover:bg-[#E5DED4] text-neutral-700"
                }`}
              >
                {rng}
              </button>
            ))}
          </div>
        </div>

        {/* Type / Category Tabs */}
        <div>
          <span className="text-[11px] uppercase tracking-widest text-neutral-400 block mb-2">
            Filter by Product Type:
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-neutral-800 text-white font-medium"
                    : "bg-white border border-[#e2d8cd] text-neutral-600 hover:border-neutral-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center text-xs text-neutral-500 mb-6">
        <span>Showing {filteredProducts.length} clean formula{filteredProducts.length === 1 ? "" : "s"}</span>
        {(selectedRange !== "All" || selectedCategory !== "All" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedRange("All");
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-neutral-800 underline hover:text-black font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center bg-white rounded-3xl border border-[#ded5cb] p-8">
          <p className="text-lg font-semibold text-neutral-800 mb-2">No matching formulas found</p>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-6">
            Try adjusting your search keyword or clearing the range/category filters.
          </p>
          <button
            onClick={() => {
              setSelectedRange("All");
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="bg-[#2F2F2F] text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold"
          >
            View Complete Lineup
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedSlug === product.slug;
            return (
              <div
                key={product.id || product.slug}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E6DFD6] transition-all duration-300 hover:shadow-xl"
              >
                {/* Product Image with Hover Flip */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative aspect-4/5 w-full bg-[#F5EFEB] overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={product.image2 || product.image}
                    alt={`${product.title} alternate view`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Range Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[10px] uppercase font-bold tracking-wider text-neutral-800 px-2.5 py-1 rounded-full border border-neutral-200">
                    {product.range}
                  </span>

                  {/* Volume badge */}
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-full">
                    {product.volume}
                  </span>
                </Link>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 text-xs mb-1.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-neutral-800">{product.rating}</span>
                      <span className="text-neutral-400">({product.reviewsCount})</span>
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="font-bold text-base text-neutral-900 group-hover:text-amber-800 transition-colors line-clamp-2 uppercase tracking-tight"
                    >
                      {product.title}
                    </Link>

                    <p className="text-xs text-neutral-500 line-clamp-2 mt-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f0eae1] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-neutral-400 line-through mr-1.5">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-base font-bold text-neutral-900">
                        ₹{product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdded}
                      className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                        isAdded
                          ? "bg-emerald-700 text-white"
                          : "bg-[#2F2F2F] hover:bg-black text-white active:scale-95"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs">Loading Complete Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
