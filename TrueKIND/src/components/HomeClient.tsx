"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { JOURNAL_POSTS } from "@/data/journal";
import { useCart } from "@/context/CartContext";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
  Droplet,
  Sun,
  Flame,
  Award,
  ChevronRight,
  ShoppingBag,
  ExternalLink,
  Star,
  Check,
} from "lucide-react";

export default function HomeClient() {
  const { addToCart } = useCart();
  const [selectedRange, setSelectedRange] = useState<string>("All");
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  // Quiz state
  const [quizStep, setQuizStep] = useState(1);
  const [skinType, setSkinType] = useState("");
  const [skinConcern, setSkinConcern] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");
  const [quizLoading, setQuizLoading] = useState(false);
  const [quizResult, setQuizResult] = useState<Product[] | null>(null);

  const ranges = ["All", "Pure Brilliance", "Clear Difference", "Varnaya Blends", "Daily Dew", "C Luminance"];

  const filteredProducts = selectedRange === "All"
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter((p) => p.range.toLowerCase() === selectedRange.toLowerCase());

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 2000);
  };

  const handleQuizSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuizLoading(true);

    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skinType,
          concerns: skinConcern,
          routineGoal,
        }),
      });
      const data = await res.json();
      if (data.recommendations) {
        setQuizResult(data.recommendations);
      }
    } catch {
      // fallback
      setQuizResult(PRODUCTS.slice(0, 3));
    } finally {
      setQuizLoading(false);
    }
  };

  const handleAddEntireRoutine = () => {
    if (!quizResult) return;
    quizResult.forEach((p) => addToCart(p, 1));
  };

  return (
    <div className="bg-[#FAF8F5] text-[#3B3B3B] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section id="intro" className="relative min-h-[90vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Ticker Counters */}
        <div className="flex justify-between items-center text-xs text-neutral-500 uppercase tracking-widest border-b border-[#e6dfd6] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-neutral-800 bg-[#EAE2D7] px-2.5 py-1 rounded">0269</span>
            <span>Batch Standard</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Bio-Efficacy Log</span>
            <span className="font-semibold text-neutral-800 bg-[#EAE2D7] px-2.5 py-1 rounded">05789</span>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-12">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 bg-[#ECE5DB] text-neutral-800 text-[11px] font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-[#ded5cb]">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Radical Formulation Transparency</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-neutral-900 leading-[1.05]">
              Clean, Conscious, <br />
              <span className="font-editorial lowercase text-neutral-600">performance</span> skincare.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-xl font-normal leading-relaxed">
              Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions! Free from over 1,800 questionable chemicals.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 bg-[#2F2F2F] hover:bg-black text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg active:scale-98"
              >
                <span>Explore All Products</span>
                <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </Link>

              <Link
                href="#quiz"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-[#EAE2D7] text-neutral-800 border border-neutral-400 px-6 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <span>Find Your Routine</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro Pillars */}
            <div className="pt-8 border-t border-[#e8e1d7] grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="block font-bold text-neutral-900 text-sm">1800+</span>
                <span className="text-neutral-500 text-[11px]">Restricted Toxins</span>
              </div>
              <div>
                <span className="block font-bold text-neutral-900 text-sm">100%</span>
                <span className="text-neutral-500 text-[11px]">Formula Disclosure</span>
              </div>
              <div>
                <span className="block font-bold text-neutral-900 text-sm">Stable pH</span>
                <span className="text-neutral-500 text-[11px]">Bio-compatible Active</span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-[#EBE4DA] border-4 border-[#FAF8F5]">
              <img
                src="/explore-1.jpg"
                alt="TrueKind Skincare Pure Potency"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Hero Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-neutral-900 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                      Best-Seller
                    </span>
                    <h3 className="text-sm font-semibold">Vitamin C 15% Brightening Serum</h3>
                    <p className="text-xs text-neutral-500">Ethyl Ascorbic Acid + AHAs</p>
                  </div>
                  <span className="text-sm font-bold bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#e2d8cd]">
                    ₹899
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping botanical leaf badge */}
            <div className="absolute -top-6 -right-6 w-24 h-24 hidden sm:block pointer-events-none drop-shadow-lg">
              <img src="/leaf.png" alt="Pure ingredients" width={96} height={96} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Scroll anchor */}
        <div className="flex justify-center pt-8">
          <Link
            href="#ingredients"
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
          >
            <span>Scroll To Discover TrueKind Standard</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-90" />
          </Link>
        </div>
      </section>

      {/* 2. FOUR PILLARS SECTION (#ingredients) */}
      <section id="ingredients" className="py-20 bg-[#F4EFEA] border-y border-[#E6DFD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-neutral-500 block mb-2">
              Our Non-Negotiable Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-neutral-900">
              Only proven Ingredients, <br />
              <span className="font-editorial lowercase">quality over quantity</span> always!
            </h2>
            <p className="text-sm text-neutral-600 mt-4 leading-relaxed">
              It’s about what we don’t put in. Squeaky clean formulas with over 1800 restricted ingredients, calibrated to exact biocompatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#ded5cb] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#EDE5DC] flex items-center justify-center mb-6">
                <img
                  src="/icon-clean-beyond-reproach.svg"
                  alt="Clean Beyond Reproach"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="text-base font-bold uppercase tracking-wider text-neutral-900 mb-2">
                Clean, Beyond Reproach
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Formulated to the highest global safety standards (US FDA &amp; EU COSING), prohibiting over 1,800 questionable chemicals.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#ded5cb] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#EDE5DC] flex items-center justify-center mb-6">
                <img
                  src="/icon-radical-transparency.svg"
                  alt="Radical Transparency"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="text-base font-bold uppercase tracking-wider text-neutral-900 mb-2">
                Radical Transparency
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                With no black boxes and nothing to hide, we disclose exact percentage ranges and EWG Safety Ratings for every active.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#ded5cb] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#EDE5DC] flex items-center justify-center mb-6">
                <img
                  src="/icon-potent-multi-tasking.svg"
                  alt="Potent & Multi Tasking"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="text-base font-bold uppercase tracking-wider text-neutral-900 mb-2">
                Potent &amp; Multi Tasking
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Formulas that deliver multiple proven benefits simultaneously – reducing skin routine steps without sacrificing results.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#ded5cb] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#EDE5DC] flex items-center justify-center mb-6">
                <img
                  src="/icon-conscious-responsible.svg"
                  alt="Conscious & Responsible"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="text-base font-bold uppercase tracking-wider text-neutral-900 mb-2">
                Conscious &amp; Responsible
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                100% vegan, cruelty-free, and packaged in endlessly recyclable glass and aluminium that leaves no permanent footprint.
              </p>
            </div>
          </div>

          {/* Banner clip */}
          <div className="mt-14 relative rounded-3xl overflow-hidden aspect-21/9 shadow-xl border border-[#e2d8cd]">
            <img
              src="/ingredients-clip.jpg"
              alt="Biocompatible skincare active bases"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center p-6 text-center text-white">
              <div className="max-w-xl">
                <span className="text-[11px] tracking-widest uppercase bg-black/40 px-3 py-1 rounded-full">
                  Verified Bio-Active Bases
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase mt-3 mb-2">
                  No Miracles Promised. Just Real Dermal Science.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200">
                  Stable pH levels, pure direct actives, and high-performance botanicals that nourish skin cells deep down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE PURE POTENCY (PRODUCT SHOWCASE) */}
      <section id="explore" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-neutral-500 block mb-2">
              The TrueKind Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-neutral-900 leading-tight">
              Explore <br />
              <span className="font-editorial lowercase">pure</span> potency
            </h2>
          </div>

          {/* Filter Pills */}
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-900 hover:text-black border-b-2 border-neutral-900 pb-1 hover:border-black transition-colors"
          >
            <span>View All 12 Skincare Formulas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. ETHOS & RADICAL TRANSPARENCY SECTION (#ethos) */}
      <section id="ethos" className="py-24 bg-[#1F1F1F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-amber-400 bg-neutral-800 px-3 py-1 rounded-full">
                Ethos &bull; Zero Toxics Given
              </span>

              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-tight">
                Radical <br />
                Transparency. <br />
                <span className="font-editorial lowercase text-neutral-400">hide</span> nothing.
              </h2>

              <p className="text-sm text-neutral-300 leading-relaxed max-w-lg">
                We take our formulation philosophy and ingredient safety very seriously. What you put on your skin could impact your overall health and well-being.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4 p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/60">
                  <div className="w-10 h-10 rounded-full bg-amber-950/60 flex items-center justify-center shrink-0 text-amber-400">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">100% Transparent Formulas</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Highest standards of efficacy and safety using verified ingredients with EWG 1 rating and zero hidden fragrances.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/60">
                  <div className="w-10 h-10 rounded-full bg-amber-950/60 flex items-center justify-center shrink-0 text-amber-400">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Only Verified Ingredients</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Skin care packed with antioxidants, skin replenishing and skin restoring agents in stable pH levels that deliver real results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/philosophy"
                  className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Read Full Formulation Philosophy <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Ingredient Transparency Table Preview */}
            <div className="lg:col-span-6 bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Sample Formula Transparency Table
                  </h3>
                  <p className="text-[11px] text-neutral-400">Vitamin C 15% Brightening Serum</p>
                </div>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-1 rounded">
                  EWG VERIFIED
                </span>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-neutral-800 text-neutral-400 uppercase text-[10px] tracking-wider">
                      <th className="py-2.5 font-medium">Ingredient</th>
                      <th className="py-2.5 font-medium text-center">EWG Safety</th>
                      <th className="py-2.5 font-medium text-right">Concentration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60 text-[11px]">
                    <tr>
                      <td className="py-2 text-neutral-200">Aqua</td>
                      <td className="py-2 text-center text-emerald-400">Score 1</td>
                      <td className="py-2 text-right text-neutral-400">30% to 50%</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-200">1% Hyaluronic Acid Solution</td>
                      <td className="py-2 text-center text-emerald-400">Score 1</td>
                      <td className="py-2 text-right text-neutral-400">25% to 40%</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-200">Ethyl Ascorbic Acid (Vit C)</td>
                      <td className="py-2 text-center text-emerald-400">Score 1</td>
                      <td className="py-2 text-right text-neutral-400">17% to 18%</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-200">Natural AHA Fruit Complex</td>
                      <td className="py-2 text-center text-emerald-400">Score 1-2</td>
                      <td className="py-2 text-right text-neutral-400">2.5% to 5%</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-200">Niacinamide (Vitamin B3)</td>
                      <td className="py-2 text-center text-emerald-400">Score 1</td>
                      <td className="py-2 text-right text-neutral-400">2% to 3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                <span>1,800+ negative ingredients prohibited</span>
                <span className="text-white font-medium">Zero Compromises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROMOTION BANNER (#offer) */}
      <section className="py-16 bg-[#EBE4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#2D2A26] text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-7 p-8 sm:p-12 space-y-4">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                  Exclusive Invitation
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
                  Exciting offers <span className="font-editorial lowercase text-amber-200">awaits</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md leading-relaxed">
                  Shop your personalized clean ritual now and use promo code <strong className="text-white bg-white/20 px-2 py-0.5 rounded">LOVEAGAIN</strong> for an immediate 10% discount plus complimentary deluxe trial miniatures.
                </p>
                <div className="pt-2">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-100 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all"
                  >
                    Claim The Offer <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5 relative h-64 md:h-full min-h-[280px]">
                <img
                  src="/offer.jpg"
                  alt="TrueKind Skincare limited offer"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SKIN ROUTINE REGIMEN QUIZ (#quiz) */}
      <section id="quiz" className="py-24 bg-[#FAF8F5] border-t border-[#E6DFD6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-neutral-500 bg-[#EAE2D7] px-3 py-1 rounded-full">
              Personalized Routine Builder
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-neutral-900 mt-3">
              Find Your <br />
              <span className="font-editorial lowercase">perfect</span> routine
            </h2>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto mt-2">
              Answer 3 simple questions about your skin and our dermal formula system will match your ideal 3-step ritual.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#ded5cb] shadow-lg">
            {!quizResult ? (
              <form onSubmit={handleQuizSubmit} className="space-y-8">
                {/* Question 1: Skin Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-800 mb-3">
                    1. What is your primary skin type?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Oily / Acne Prone", "Dry / Dehydrated", "Combination", "Sensitive / Normal"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSkinType(type)}
                        className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                          skinType === type
                            ? "border-neutral-900 bg-[#2F2F2F] text-white"
                            : "border-neutral-200 bg-[#FAF8F5] text-neutral-700 hover:border-neutral-400"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2: Primary Skin Concern */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-800 mb-3">
                    2. What is your primary concern?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Acne & Breakouts", "Dark Spots & Dullness", "Dryness & Tightness", "Fine Lines & Aging"].map((con) => (
                      <button
                        type="button"
                        key={con}
                        onClick={() => setSkinConcern(con)}
                        className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                          skinConcern === con
                            ? "border-neutral-900 bg-[#2F2F2F] text-white"
                            : "border-neutral-200 bg-[#FAF8F5] text-neutral-700 hover:border-neutral-400"
                        }`}
                      >
                        {con}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3: Regimen Depth */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-800 mb-3">
                    3. What is your preferred routine depth?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Lit From Within Glow", "Clear Pore Refinement", "Daily Deep Barrier Hydration"].map((goal) => (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => setRoutineGoal(goal)}
                        className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                          routineGoal === goal
                            ? "border-neutral-900 bg-[#2F2F2F] text-white"
                            : "border-neutral-200 bg-[#FAF8F5] text-neutral-700 hover:border-neutral-400"
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!skinType || !skinConcern || !routineGoal || quizLoading}
                    className="w-full bg-[#2F2F2F] hover:bg-black disabled:bg-neutral-300 text-white py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 shadow"
                  >
                    {quizLoading ? "Analyzing Bio-compatibility..." : "Generate My Regimen"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-8 animate-fade-in">
                <div className="p-4 bg-[#F2EDE5] rounded-2xl border border-[#ded5cb] text-center">
                  <span className="text-xs uppercase text-emerald-800 font-bold">
                    Diagnostic Match Found
                  </span>
                  <h3 className="text-xl font-bold uppercase text-neutral-900 mt-1">
                    Your Personalized 3-Step Bio-Ritual
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    Calibrated specifically for {skinType} targeting {skinConcern}.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {quizResult.map((prod, idx) => (
                    <div key={prod.id || prod.slug} className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#ded5cb] flex flex-col justify-between">
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-white">
                        <Image src={prod.image} alt={prod.title} fill className="object-cover" />
                        <span className="absolute top-2 left-2 bg-neutral-900 text-white text-[10px] px-2 py-0.5 rounded">
                          Step {idx + 1}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-neutral-500">{prod.category}</span>
                        <h4 className="font-bold text-xs uppercase text-neutral-900 line-clamp-2">{prod.title}</h4>
                        <span className="text-xs font-bold text-neutral-800 mt-1 block">₹{prod.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddEntireRoutine}
                    className="flex-1 bg-[#2F2F2F] hover:bg-black text-white py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add Complete 3-Step Routine To Cart
                  </button>
                  <button
                    onClick={() => setQuizResult(null)}
                    className="sm:w-auto px-6 py-4 rounded-full border border-neutral-300 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-100 text-neutral-700"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. CLEAN JOURNAL EDITORIAL HIGHLIGHTS (#journal) */}
      <section id="journal" className="py-24 bg-[#F5EFEB] border-t border-[#E6DFD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-500 block mb-2">
                Dermal Education &amp; Rituals
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-neutral-900 leading-tight">
                clean <br />
                <span className="font-editorial lowercase">journal</span>
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-900 hover:text-black border-b border-neutral-800 pb-1"
            >
              <span>See All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.id || post.slug}
                href={`/journal/${post.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E6DFD6] hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2.5 py-1 rounded-full">
                    {post.date}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                      {post.category} &bull; {post.readTime}
                    </span>
                    <h3 className="font-bold text-base text-neutral-900 group-hover:text-amber-800 transition-colors mt-2 mb-2 leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#f0eae1] flex items-center justify-between text-xs font-semibold text-neutral-800 group-hover:text-black">
                    <span>Read Story</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM COMMUNITY CONNECT (#connect) */}
      <section id="connect" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-neutral-500 bg-[#EAE2D7] px-3 py-1 rounded-full">
            @truekindskincare
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-neutral-900 mt-3">
            Connect <br />
            <span className="font-editorial lowercase">on</span> instagram
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Get the latest updates about skincare rituals, formulation revelations, and real before &amp; after stories.
          </p>
        </div>

        {/* 6-Photo Community Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { img: "https://images.prismic.io/truekind/ZurDj7VsGrYSvh0W_1.jpg?auto=format,compress&w=600", label: "AHA Cleanser" },
            { img: "https://images.prismic.io/truekind/Z-Aml3dAxsiBvxen_gallery-3.jpg?auto=format,compress&w=600", label: "Ritual" },
            { img: "https://images.prismic.io/truekind/ZurSVbVsGrYSvisH_1.jpg?auto=format,compress&w=600", label: "Kumkumadi Oil" },
            { img: "https://images.prismic.io/truekind/Z6D3P5bqstJ9-Ldy_Close-upPortraitwithGoldenLighting.jpg?auto=format,compress&w=600", label: "Dewy Glow" },
            { img: "https://images.prismic.io/truekind/ZurP_7VsGrYSvijF_1.jpg?auto=format,compress&w=600", label: "Water Crème" },
            { img: "https://images.prismic.io/truekind/ZurTmbVsGrYSviws_1.jpg?auto=format,compress&w=600", label: "Vitamin C Serum" },
          ].map((item, idx) => (
            <a
              key={idx}
              href="https://instagram.com/truekindskincare"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-200 block shadow-xs"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                sizes="(max-width: 640px) 50vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold p-2 text-center">
                <span>{item.label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/truekindskincare"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#2F2F2F] hover:bg-black text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            Follow @truekindskincare <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
