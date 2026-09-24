import React from "react";
import Image from "next/image";
import Link from "next/link";
import { JOURNAL_POSTS } from "@/data/journal";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";

export default function JournalPage() {
  const featured = JOURNAL_POSTS[0];
  const others = JOURNAL_POSTS.slice(1);

  return (
    <div className="bg-[#FAF8F5] text-[#3B3B3B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#e6dfd6] pb-8 mb-12">
          <div className="flex items-center gap-3 text-xs text-neutral-500 uppercase tracking-widest mb-3">
            <span className="bg-[#EAE2D7] px-2 py-0.5 rounded text-neutral-800">0269</span>
            <span className="bg-[#EAE2D7] px-2 py-0.5 rounded text-neutral-800">05789</span>
            <span>Editorial Journal</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-neutral-900 leading-tight">
                clean <br />
                <span className="font-editorial lowercase">journal</span>
              </h1>
              <p className="text-sm text-neutral-600 max-w-lg mt-2">
                Healthy tips on skincare, regimen, dermal science, and conscious living.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featured && (
          <Link
            href={`/journal/${featured.slug}`}
            className="group block mb-16 rounded-3xl overflow-hidden bg-white border border-[#E6DFD6] shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto min-h-[320px] bg-neutral-200 overflow-hidden">
                <Image
                  src={featured.imageUrl}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-104 transition-transform duration-700"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-widest mb-3">
                    <span className="bg-[#EAE2D7] px-2.5 py-0.5 rounded text-neutral-800 font-semibold">
                      Featured
                    </span>
                    <span>{featured.date}</span>
                    <span>&bull;</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-900 group-hover:text-amber-800 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-neutral-600 mt-4 leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f0eae1] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-black">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((post) => (
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
    </div>
  );
}
