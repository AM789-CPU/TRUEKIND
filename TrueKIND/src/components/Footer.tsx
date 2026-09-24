"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail, Phone, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
      setEmail("");
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#EDE7DF] pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Mission Banner */}
        <div className="pb-14 border-b border-neutral-800">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                <span className="bg-neutral-800 px-2 py-0.5 rounded text-white">0269</span>
                <span className="bg-neutral-800 px-2 py-0.5 rounded text-white">05789</span>
                <span className="text-neutral-500 uppercase tracking-widest text-[10px]">
                  RADICAL FORMULATION TRANSPARENCY
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase text-white leading-tight">
                True to Oneself <br />
                <span className="font-editorial text-neutral-300">kind to Nature</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
              Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions! Formulated without over 1,800 questionable substances.
            </p>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-neutral-800 text-sm">
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-wider text-white uppercase font-sans">
                TrueKind<span className="text-neutral-500 text-base">.</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Drawing from our rich heritage and embracing modern dermal science, we engineer pure potency skincare with zero toxics given and 100% transparent EWG-rated formula disclosures.
            </p>
            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <a href="mailto:care@truekindskincare.com" className="hover:text-white transition-colors">
                  care@truekindskincare.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <a href="tel:+918939997071" className="hover:text-white transition-colors">
                  +91 89399 97071
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-neutral-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a
                  href="https://instagram.com/truekindskincare"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @truekindskincare
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-widest text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Complete Lineup
                </Link>
              </li>
              <li>
                <Link href="/products?range=Pure+Brilliance" className="hover:text-white transition-colors">
                  Pure Brilliance Range
                </Link>
              </li>
              <li>
                <Link href="/products?range=Clear+Difference" className="hover:text-white transition-colors">
                  Clear Difference (Acne)
                </Link>
              </li>
              <li>
                <Link href="/products?range=Varnaya+Blends" className="hover:text-white transition-colors">
                  Varnaya Blends (Ayurveda)
                </Link>
              </li>
              <li>
                <Link href="/products?range=Daily+Dew" className="hover:text-white transition-colors">
                  Daily Dew (Hydration)
                </Link>
              </li>
              <li>
                <Link href="/#quiz" className="hover:text-white transition-colors text-amber-200">
                  Find Your Routine (Quiz)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-widest text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/philosophy" className="hover:text-white transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Glow Up Gallery
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  Clean Journal
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-white">
              Stay in the Know
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Subscribe to receive clean skincare formulations, ingredient breakdowns, and private VIP launches.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs py-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You&apos;re subscribed to TrueKind updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="ENTER YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-full px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1 top-1 bottom-1 px-3 bg-white text-black hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-neutral-500 block">
                  Grab 10% off your first ritual with code: LOVEAGAIN
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Ethical Standards Badges */}
        <div className="py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-b border-neutral-800 text-xs text-neutral-400">
          <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
            <span className="block text-white font-semibold text-sm">1,800+</span>
            <span>Restricted Ingredients</span>
          </div>
          <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
            <span className="block text-white font-semibold text-sm">100%</span>
            <span>Transparent EWG Ratings</span>
          </div>
          <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
            <span className="block text-white font-semibold text-sm">Vegan</span>
            <span>&amp; Cruelty-Free Certified</span>
          </div>
          <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
            <span className="block text-white font-semibold text-sm">Planet-Kind</span>
            <span>Recyclable Glass &amp; Aluminum</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>&copy; {new Date().getFullYear()} TrueKind Skincare. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Formulated to US FDA &amp; European Union COSING Safety Standards
          </p>
        </div>
      </div>
    </footer>
  );
}
