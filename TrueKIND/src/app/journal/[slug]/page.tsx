import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JOURNAL_POSTS } from "@/data/journal";
import { PRODUCTS } from "@/data/products";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react";

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedProducts = PRODUCTS.slice(0, 2);

  return (
    <article className="bg-[#FAF8F5] text-[#3B3B3B] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-black mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>

        {/* Post Meta Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs text-neutral-500 uppercase tracking-widest">
            <span className="bg-[#EAE2D7] px-2.5 py-0.5 rounded text-neutral-800 font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-neutral-900 leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-neutral-600 leading-relaxed font-editorial">
            &ldquo;{post.excerpt}&rdquo;
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-16/10 w-full rounded-3xl overflow-hidden bg-neutral-200 mb-12 shadow-md border border-[#e2d8cd]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-neutral max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-neutral-700 border-b border-[#e6dfd6] pb-12">
          <p>
            Drawing from our rich legacy of over 30 years and embracing dermal science, TrueKind aims to create transparent skincare that is incredibly effective, safe, and without harming the environment or the planet.
          </p>

          <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-900 pt-4">
            The Science of Biocompatibility
          </h3>
          <p>
            When we formulate skincare, our guiding principle is bio-compatibility: choosing carrier bases and actives that mimic the natural cellular structure of healthy skin. By respecting your acid mantle and maintaining stable physiological pH levels, actives penetrate deeper without causing barrier distress or redness.
          </p>

          <div className="p-6 bg-[#F2EDE5] rounded-2xl border-l-4 border-neutral-800 my-6">
            <p className="font-semibold text-neutral-900 text-sm italic">
              &ldquo;Radical transparency is not just our marketing label; it is our clinical commitment. We believe every customer has the right to know exact ingredient percentages and EWG safety profiles.&rdquo;
            </p>
          </div>

          <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-900 pt-4">
            Building a Synergistic Routine
          </h3>
          <p>
            Rather than layering dozens of conflicting products, modern dermal science suggests a streamlined three-to-four-step protocol:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Gentle Cleansing:</strong> Preserve natural lipids while lifting away environmental debris.</li>
            <li><strong>Cellular Exfoliation:</strong> Utilize buffered AHAs or oil-soluble BHAs to clear pore lining.</li>
            <li><strong>Concentrated Antioxidants:</strong> Shield against daily free radicals with pure direct Vitamin C (Ethyl Ascorbic Acid).</li>
            <li><strong>Lipid Replenishment:</strong> Seal in moisture with squalane, hyaluronic acid, and botanical ceramides.</li>
          </ul>
        </div>

        {/* Recommended Rituals for this Post */}
        <div className="pt-12">
          <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-900 mb-6">
            Featured in this Ritual
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="p-4 bg-white rounded-2xl border border-[#ded5cb] flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="relative w-16 h-20 rounded-xl overflow-hidden shrink-0 bg-[#F4EFEA]">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400">{p.range}</span>
                  <h4 className="font-bold text-xs uppercase text-neutral-900 line-clamp-1">{p.title}</h4>
                  <span className="text-xs font-semibold text-neutral-800 mt-1 block">₹{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
