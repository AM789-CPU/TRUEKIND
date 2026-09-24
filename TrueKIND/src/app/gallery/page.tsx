import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GalleryPage() {
  const galleryImages = [
    { url: "https://images.prismic.io/truekind/ZurDj7VsGrYSvh0W_1.jpg?auto=format,compress&w=1200", title: "AHA Brightening Exfoliant Cleanser", subtitle: "Pure Brilliance Collection" },
    { url: "https://images.prismic.io/truekind/Z-Aml3dAxsiBvxen_gallery-3.jpg?auto=format,compress&w=1200", title: "Morning Botanical Ritual", subtitle: "Skin Barrier Balance" },
    { url: "https://images.prismic.io/truekind/ZurSVbVsGrYSvisH_1.jpg?auto=format,compress&w=1200", title: "Kumkumadi Radiance Oil", subtitle: "Varnaya Blends" },
    { url: "https://images.prismic.io/truekind/Z6D3P5bqstJ9-Ldy_Close-upPortraitwithGoldenLighting.jpg?auto=format,compress&w=1200", title: "Lit From Within Complexion", subtitle: "Healthy Cellular Vitality" },
    { url: "https://images.prismic.io/truekind/ZurP_7VsGrYSvijF_1.jpg?auto=format,compress&w=1200", title: "Hyaluronic & Squalane Water Crème", subtitle: "Daily Dew Collection" },
    { url: "https://images.prismic.io/truekind/Z-AmlndAxsiBvxem_gallery-2.jpg?auto=format,compress&w=1200", title: "Texture Study: Golden Elixir", subtitle: "Biocompatible Oils" },
    { url: "https://images.prismic.io/truekind/Zuq-1LVsGrYSvhqc_s764qjse3.jpg?auto=format,compress&w=1200", title: "Glass Dropper Precision", subtitle: "Formulated without Compromise" },
    { url: "https://images.prismic.io/truekind/ZurL27VsGrYSviVl_1.jpg?auto=format,compress&w=1200", title: "Pomegranate & Mint Tonic", subtitle: "Clarifying Mist" },
    { url: "https://images.prismic.io/truekind/ZurR3bVsGrYSviqH_1.jpg?auto=format,compress&w=1200", title: "Phyto-Retinol & Peptide Crème", subtitle: "Gentle Cellular Renewal" },
    { url: "https://images.prismic.io/truekind/Z-AmlHdAxsiBvxek_gallery-4.jpg?auto=format,compress&w=1200", title: "Dewy Moisture Lock", subtitle: "Zero Greasy Residue" },
    { url: "https://images.prismic.io/truekind/Z9b18ziBA97Gihj7_bha-%26-tea-tree-acne-clearing-toner.jpg?auto=format,compress&w=1200", title: "BHA & Tea Tree Acne Clearing Essence", subtitle: "Clear Difference Collection" },
    { url: "https://images.prismic.io/truekind/Z6D9rZbqstJ9-LhO_PortraitofaWomanAgainstBlueSky.jpg?auto=format,compress&w=1200", title: "Unreservedly Honest Skin", subtitle: "True To Nature" },
    { url: "https://images.prismic.io/truekind/ZurTmbVsGrYSviws_1.jpg?auto=format,compress&w=1200", title: "Vitamin C 15% Brightening Serum", subtitle: "C Luminance" },
    { url: "https://images.prismic.io/truekind/ZurNf7VsGrYSviaK_1.jpg?auto=format,compress&w=1200", title: "Bio-Exfoliant Sleeping Mask", subtitle: "Overnight Renewal" },
    { url: "https://images.prismic.io/truekind/Z-AmlXdAxsiBvxel_gallery-1.jpg?auto=format,compress&w=1200", title: "Daily Ritual Vanity", subtitle: "Kind to Skin & Planet" },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#3B3B3B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#e6dfd6] pb-8 mb-12">
          <div className="flex items-center gap-3 text-xs text-neutral-500 uppercase tracking-widest mb-3">
            <span className="bg-[#EAE2D7] px-2 py-0.5 rounded text-neutral-800">0269</span>
            <span className="bg-[#EAE2D7] px-2 py-0.5 rounded text-neutral-800">05789</span>
            <span>Visual Archives</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-neutral-900 leading-tight">
                Glow Up <br />
                <span className="font-editorial lowercase">visual</span> gallery
              </h1>
              <p className="text-sm text-neutral-600 max-w-lg mt-2">
                A visual journey through honest dermal science, real radiant skin, and eco-conscious glass packaging.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#2F2F2F] hover:bg-black text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Shop The Showcase <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-[#EDE6DC] border border-[#ded5cb] shadow-xs hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-amber-300">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-tight mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center py-12 bg-[#F2EDE5] rounded-3xl border border-[#ded5cb]">
          <h3 className="text-2xl font-bold uppercase text-neutral-900 mb-2">
            Share Your TrueKind Routine
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6">
            Tag @truekindskincare on Instagram with your honest ritual to be featured in our official Glow Up Gallery.
          </p>
          <a
            href="https://instagram.com/truekindskincare"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#2F2F2F] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors"
          >
            Connect on Instagram &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
