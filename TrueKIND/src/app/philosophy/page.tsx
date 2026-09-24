import React from "react";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#3B3B3B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ticker header */}
        <div className="flex justify-between items-center text-xs text-neutral-500 uppercase tracking-widest border-b border-[#e6dfd6] pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="bg-[#EAE2D7] px-2.5 py-1 rounded text-neutral-800 font-bold">0269</span>
            <span>Radical Ethics</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Clean Standards</span>
            <span className="bg-[#EAE2D7] px-2.5 py-1 rounded text-neutral-800 font-bold">05789</span>
          </div>
        </div>

        {/* Hero headline */}
        <div className="max-w-4xl mb-20">
          <span className="text-xs uppercase tracking-widest text-neutral-500 bg-[#EAE2D7] px-3.5 py-1.5 rounded-full inline-block mb-4">
            Our Purpose &amp; Conviction
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-neutral-900 leading-[1.05]">
            Our simple philosophy <br />
            in all that we do. <br />
            <span className="font-editorial lowercase text-neutral-600">passionate</span> about skin care, <br />
            we are <span className="underline decoration-neutral-400 underline-offset-8">truekind.</span>
          </h1>
          <p className="text-lg text-neutral-600 mt-6 leading-relaxed max-w-2xl">
            Drawing from our rich heritage and embracing dermal science, we aim to create transparent skincare that is incredibly effective, safe, and kind to the planet.
          </p>
        </div>

        {/* Section 1: Clean Ingredients */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-t border-[#e6dfd6]">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-neutral-500">Pillar 01</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-neutral-900">
              Clean Ingredients, <br />
              <span className="font-editorial lowercase">radical</span> transparency.
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              We formulate to the highest standards of efficacy and safety – using only proven, verified ingredients in bio-compatible bases; and free from over 1800 questionable ingredients.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              With no black boxes, and nothing to hide, we strive for radical formulation transparency, so you will never have to guess what and how much of it is in the products you use.
            </p>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#2F2F2F] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors"
              >
                Inspect All Formulas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden bg-[#EAE2D7] shadow-xl border border-[#ded5cb]">
            <img src="/texture.png" alt="Pure botanical texture" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>

        {/* Big 1800+ Highlight Card */}
        <div className="my-16 bg-[#2F2F2F] text-white rounded-3xl p-8 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-300 bg-neutral-800 px-4 py-1.5 rounded-full">
              Global Compliance Benchmark
            </span>
            <h3 className="text-6xl sm:text-8xl font-black tracking-tight text-white">
              1800+
            </h3>
            <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
              Unsafe &amp; Questionable Ingredients Excluded
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Meeting the stringent requirements of the US FDA, European Union COSING Database, and EWG Skin Deep ratings. No parabens, no sulfates, no artificial colorants, no hidden fragrance masks.
            </p>
          </div>
        </div>

        {/* Section 2: Thoughtful Packaging */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 border-t border-[#e6dfd6]">
          <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden bg-[#EAE2D7] shadow-xl border border-[#ded5cb] order-2 lg:order-1">
            <img src="/empress.png" alt="Conscious sustainable manufacturing" loading="lazy" className="absolute inset-0 h-full w-full object-contain p-8" />
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-neutral-500">Pillar 02</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-neutral-900">
              Thoughtful Packaging, <br />
              <span className="font-editorial lowercase">sustainably</span> made.
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Every TrueKind vessel is selected for high recyclability and non-reactivity with pure dermal actives. Our frosted glass droppers and lightweight aluminium closures keep formulas active while reducing plastic waste.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Packaged in FSC-certified unbleached cardboards printed with natural soy ink – kind to your vanity and kind to Mother Earth.
            </p>
          </div>
        </div>

        {/* 6 Commitments Badges */}
        <div className="py-20 border-t border-[#e6dfd6]">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold uppercase text-neutral-900">
              Our 6 Non-Negotiable Commitments
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Vegan & Cruelty Free", desc: "Never tested on animals, certified cruelty-free botanical derivatives." },
              { title: "100% Transparent Formula", desc: "Exact active percentages and safety levels openly stated on every label." },
              { title: "Kind to Planet Packaging", desc: "Infinitely recyclable amber & flint glass bottles and paper boxes." },
              { title: "Multitasking Formulas", desc: "Consolidate your vanity with products that brighten, protect, and repair at once." },
              { title: "Sustainable Manufacturing", desc: "Low water footprint, energy-conscious clean-room compounding." },
              { title: "Clean & Pure Beauty", desc: "Biocompatible carrier bases with bio-identical skin restoration lipids." },
            ].map((com, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-[#ded5cb] space-y-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-800" />
                <h4 className="font-bold text-base uppercase text-neutral-900">{com.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{com.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
