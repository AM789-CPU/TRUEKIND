"use client";

import React, { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  Star,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RefreshCw,
  Leaf,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = PRODUCTS.find((p) => p.slug === slug);

  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"about" | "ingredients" | "usage" | "faqs">("about");
  const [added, setAdded] = useState(false);

  // Reviews state
  const [reviews, setReviews] = useState<Array<{ id: number; author: string; rating: number; title: string; content: string; createdAt: string }>>([]);
  const [reviewFormOpen, setReviewFormOpen] = useState(false);
  const [reviewerName, setReviewerName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [submittingReview, setSubmittingReview] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/reviews?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setReviews(data);
      })
      .catch(() => {});
  }, [slug]);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link href="/products" className="text-sm underline text-neutral-800">
          Back to all products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName || !reviewTitle || !reviewContent) return;
    setSubmittingReview(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: slug,
          author: reviewerName,
          rating: reviewRating,
          title: reviewTitle,
          content: reviewContent,
        }),
      });
      const data = await res.json();
      if (data.review) {
        setReviews([data.review, ...reviews]);
        setReviewFormOpen(false);
        setReviewerName("");
        setReviewTitle("");
        setReviewContent("");
      }
    } catch {
      // ignore
    } finally {
      setSubmittingReview(false);
    }
  };

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] text-[#3B3B3B] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-neutral-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-black">Products</Link>
          <span>/</span>
          <span className="text-neutral-400">{product.range}</span>
          <span>/</span>
          <span className="text-neutral-900 font-semibold truncate">{product.title}</span>
        </nav>

        {/* Top Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Gallery Images */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-4/5 w-full bg-[#F5EFEB] rounded-3xl overflow-hidden border border-[#E6DFD6] shadow-md">
              <Image
                src={selectedImage || product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-xs uppercase tracking-wider font-bold text-neutral-800 px-3 py-1 rounded-full border border-neutral-200">
                {product.range}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedImage(product.image)}
                className={`relative w-20 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                  selectedImage === product.image ? "border-black shadow" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={product.image} alt="Thumbnail 1" fill className="object-cover" />
              </button>

              {product.image2 && (
                <button
                  onClick={() => setSelectedImage(product.image2)}
                  className={`relative w-20 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === product.image2 ? "border-black shadow" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={product.image2} alt="Thumbnail 2" fill className="object-cover" />
                </button>
              )}
            </div>
          </div>

          {/* Right: Product Purchase Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-neutral-800">4.9</span>
                <span className="text-xs text-neutral-500">({product.reviewsCount + reviews.length} verified reviews)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-neutral-900 leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-3 mt-3">
                <span className="text-2xl font-bold text-neutral-900">₹{product.price}</span>
                <span className="text-sm text-neutral-400 line-through">₹{product.originalPrice}</span>
                <span className="text-xs uppercase bg-[#ECE5DB] text-neutral-800 px-2.5 py-1 rounded-full font-semibold">
                  {product.volume}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#d3cac0] rounded-full bg-white px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:text-black text-neutral-600"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-semibold text-neutral-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:text-black text-neutral-600"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`flex-1 py-4 px-8 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-98 ${
                    added
                      ? "bg-emerald-700 text-white"
                      : "bg-[#2F2F2F] hover:bg-black text-white"
                  }`}
                >
                  {added ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Bag &bull; ₹{product.price * quantity}
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 flex items-center gap-1.5 justify-center">
                <Truck className="w-3.5 h-3.5 text-neutral-700" /> Free Shipping above ₹999 &bull; Dispatches within 24 hours
              </p>
            </div>

            {/* 4 Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#e8e1d7] text-xs text-neutral-700">
              <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-[#ded5cb]">
                <RefreshCw className="w-4 h-4 text-neutral-600 shrink-0" />
                <span>30 Days Return</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-[#ded5cb]">
                <Truck className="w-4 h-4 text-neutral-600 shrink-0" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-[#ded5cb]">
                <Leaf className="w-4 h-4 text-neutral-600 shrink-0" />
                <span>Vegan &amp; Cruelty Free</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-[#ded5cb]">
                <ShieldCheck className="w-4 h-4 text-neutral-600 shrink-0" />
                <span>Planet-Kind Packaging</span>
              </div>
            </div>

            {/* Quick Skin Suitability */}
            <div className="p-4 bg-[#F2EDE5] rounded-2xl border border-[#ded5cb] space-y-1 text-xs">
              <p><strong className="text-neutral-900">Suitable For:</strong> {product.suitableFor}</p>
              <p><strong className="text-neutral-900">Recommended For:</strong> {product.recommendedFor}</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation for Detailed Sections */}
        <div className="border-b border-[#e6dfd6] mb-12 flex space-x-8 text-xs font-bold uppercase tracking-widest">
          {[
            { id: "about", label: "All About the Product" },
            { id: "ingredients", label: "Full Formula & EWG Table" },
            { id: "usage", label: "Usage & Directions" },
            { id: "faqs", label: `Reviews & FAQs (${product.faqs.length + reviews.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 transition-colors relative ${
                activeTab === tab.id
                  ? "text-neutral-900 border-b-2 border-neutral-900"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: About */}
        {activeTab === "about" && (
          <div className="space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 mb-4">
                The Science &amp; Story Behind the Formula
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed mb-6 whitespace-pre-line">
                {product.about || product.description}
              </p>
            </div>

            {/* Key Ingredients Cards */}
            {product.keyIngredients.length > 0 && (
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-neutral-500">
                    High Potency Actives
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 mt-1">
                    Key Ingredients
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.keyIngredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white rounded-3xl border border-[#ded5cb] flex items-start gap-4 shadow-xs"
                    >
                      {ing.imageUrl && (
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-[#F4EFEA]">
                          <Image src={ing.imageUrl} alt={ing.title} fill className="object-cover" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-sm uppercase text-neutral-900 mb-1">{ing.title}</h4>
                        <p className="text-xs text-neutral-600 leading-relaxed">{ing.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Ingredients & EWG Table */}
        {activeTab === "ingredients" && (
          <div className="space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full font-bold">
                Zero Toxics Given &bull; 1800+ Restricted
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-900 mt-3 mb-3">
                Full Ingredient List &amp; Formula Transparency
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We formulate to meet some of the highest safety standards in the world (including US FDA, European Union COSING Database). We disclose active percentages and official EWG Skin Deep ratings so you know exactly what is going onto your skin.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#ded5cb] overflow-hidden shadow-sm">
              <div className="p-6 bg-[#F4EFEA] border-b border-[#ded5cb] flex justify-between items-center">
                <span className="font-bold text-xs uppercase tracking-wider text-neutral-800">
                  Formula Composition &bull; {product.title}
                </span>
                <span className="text-xs bg-[#EAE2D7] px-2.5 py-1 rounded text-neutral-700">
                  Stable Physiological pH
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#e6dfd6] bg-[#FAF8F5] text-neutral-500 uppercase text-[10px] tracking-wider">
                      <th className="py-3 px-6 font-semibold">Ingredient</th>
                      <th className="py-3 px-6 font-semibold text-center">EWG Safety Rating</th>
                      <th className="py-3 px-6 font-semibold text-right">Concentration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ece6dd]">
                    {product.ingredientsFormula.length > 0 ? (
                      product.ingredientsFormula.map((item, idx) => (
                        <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                          <td className="py-3.5 px-6 font-medium text-neutral-900">{item.title}</td>
                          <td className="py-3.5 px-6 text-center">
                            <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                              Score {item.ewg}
                            </span>
                          </td>
                          <td className="py-3.5 px-6 text-right text-neutral-600">
                            {item.concentration}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="py-3.5 px-6 font-medium text-neutral-900">Aqua &amp; Biocompatible Botanical Complex</td>
                        <td className="py-3.5 px-6 text-center">
                          <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                            Score 1
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-right text-neutral-600">Pure Formulation</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Usage */}
        {activeTab === "usage" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#ded5cb] space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-500">Ritual Protocol</span>
              <h3 className="text-xl font-bold uppercase text-neutral-900">When &amp; How to Use</h3>

              <div className="space-y-4 pt-2 text-xs text-neutral-700">
                <div>
                  <h4 className="font-bold uppercase text-neutral-900 mb-1">When to Apply:</h4>
                  <p>{product.usage.when}</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-neutral-900 mb-1">Recommended Dose:</h4>
                  <p>{product.usage.dose}</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-neutral-900 mb-1">Application Steps:</h4>
                  <p className="leading-relaxed">{product.usage.how}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#ded5cb] space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-500">Best Practices</span>
              <h3 className="text-xl font-bold uppercase text-neutral-900">Good to Know &amp; Precautions</h3>

              <div className="space-y-4 pt-2 text-xs text-neutral-700">
                <div>
                  <h4 className="font-bold uppercase text-neutral-900 mb-1">Pro Tip:</h4>
                  <p className="leading-relaxed">{product.usage.goodToKnow}</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-neutral-900 mb-1">Precautions:</h4>
                  <p className="leading-relaxed text-amber-800">{product.usage.precautions}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Reviews & FAQs */}
        {activeTab === "faqs" && (
          <div className="space-y-16">
            {/* Reviews Section */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">Community Feedback</span>
                  <h3 className="text-2xl font-bold uppercase text-neutral-900 mt-1">Verified Customer Reviews</h3>
                </div>

                <button
                  onClick={() => setReviewFormOpen(!reviewFormOpen)}
                  className="bg-[#2F2F2F] hover:bg-black text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  {reviewFormOpen ? "Close Review Form" : "Write a Review"}
                </button>
              </div>

              {/* Review Submission Form */}
              {reviewFormOpen && (
                <form
                  onSubmit={handleReviewSubmit}
                  className="bg-white p-6 rounded-3xl border border-[#ded5cb] mb-8 space-y-4 max-w-xl"
                >
                  <h4 className="font-bold text-sm uppercase text-neutral-900">Share Your Experience</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Your Name</label>
                      <input
                        required
                        type="text"
                        value={reviewerName}
                        onChange={(e) => setReviewerName(e.target.value)}
                        placeholder="e.g. Shalini M."
                        className="w-full bg-[#FAF8F5] border border-[#d8cfc3] rounded-lg px-3 py-2 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Rating</label>
                      <select
                        value={reviewRating}
                        onChange={(e) => setReviewRating(Number(e.target.value))}
                        className="w-full bg-[#FAF8F5] border border-[#d8cfc3] rounded-lg px-3 py-2 text-xs"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Great</option>
                        <option value={3}>3 Stars - Good</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold mb-1">Review Headline</label>
                      <input
                        required
                        type="text"
                        value={reviewTitle}
                        onChange={(e) => setReviewTitle(e.target.value)}
                        placeholder="e.g. Unbelievable glow within 2 weeks!"
                        className="w-full bg-[#FAF8F5] border border-[#d8cfc3] rounded-lg px-3 py-2 text-xs"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold mb-1">Review Details</label>
                      <textarea
                        required
                        rows={3}
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        placeholder="Tell others about texture, absorption, and results..."
                        className="w-full bg-[#FAF8F5] border border-[#d8cfc3] rounded-lg px-3 py-2 text-xs"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submittingReview}
                    className="bg-[#2F2F2F] text-white px-6 py-2 rounded-full text-xs uppercase font-semibold"
                  >
                    {submittingReview ? "Submitting..." : "Submit Verified Review"}
                  </button>
                </form>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {reviews.length > 0 ? (
                  reviews.map((rev) => (
                    <div key={rev.id} className="p-6 bg-white rounded-2xl border border-[#ded5cb] space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex text-amber-500 text-xs">
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Verified Buyer
                        </span>
                      </div>
                      <h5 className="font-bold text-sm text-neutral-900">{rev.title}</h5>
                      <p className="text-xs text-neutral-600 leading-relaxed">{rev.content}</p>
                      <p className="text-[10px] text-neutral-400 pt-1">{rev.author}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-6 bg-white rounded-2xl border border-[#ded5cb] text-xs text-neutral-500">
                    Be the first to review this formula!
                  </div>
                )}
              </div>
            </div>

            {/* Product FAQs */}
            {product.faqs.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold uppercase text-neutral-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {product.faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 bg-white rounded-2xl border border-[#ded5cb] space-y-2">
                      <h4 className="font-bold text-sm text-neutral-900">{faq.question}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Goes Well With (Related Cross-Sell) */}
        <div className="mt-24 pt-16 border-t border-[#e6dfd6]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500">Synergistic Ritual</span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-neutral-900 mt-1">Goes Well With</h3>
            </div>
            <Link href="/products" className="text-xs uppercase font-semibold text-neutral-900 hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id || rel.slug}
                href={`/products/${rel.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E6DFD6] hover:shadow-lg transition-all"
              >
                <div className="relative aspect-4/5 w-full bg-[#F5EFEB]">
                  <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-neutral-400">{rel.range}</span>
                    <h4 className="font-bold text-sm uppercase text-neutral-900 mt-1 group-hover:text-amber-800 transition-colors line-clamp-1">{rel.title}</h4>
                  </div>
                  <div className="pt-3 border-t border-[#f0eae1] flex justify-between items-center text-xs font-semibold">
                    <span>₹{rel.price}</span>
                    <span className="text-neutral-500 group-hover:text-black">View Formula &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
