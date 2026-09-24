"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Search, Menu, X, ArrowRight, Sparkles, Heart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Shop", href: "/products" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Gallery", href: "/gallery" },
    { name: "Journal", href: "/journal" },
    { name: "Routine Quiz", href: "/#quiz" },
  ];

  return (
    <>
      {/* Top Notice / Ticker Bar */}
      <div className="bg-[#1C1C1C] text-[#EFEBE4] text-[11px] font-medium py-1.5 px-4 tracking-wider overflow-hidden">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="hidden sm:flex items-center gap-3 text-neutral-400 text-[10px]">
            <span className="bg-neutral-800 px-2 py-0.5 rounded text-white tracking-widest">0269</span>
            <span className="bg-neutral-800 px-2 py-0.5 rounded text-white tracking-widest">05789</span>
          </div>

          <div className="flex-1 text-center truncate px-2 text-neutral-200">
            <span className="inline-block animate-pulse text-amber-300 mr-2">&#9679;</span>
            <span className="font-semibold text-white">Free Express Shipping</span> on all prepaid orders &gt; ₹999 | Code: <strong className="text-amber-200 tracking-widest">LOVEAGAIN</strong> for 10% OFF
          </div>

          <div className="hidden md:flex items-center gap-4 text-neutral-300">
            <Link href="/philosophy" className="hover:text-white transition-colors underline decoration-neutral-600 underline-offset-4">
              1800+ Excluded Toxins
            </Link>
            <Link href="/login" className="hover:text-white transition-colors">
              Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#e7e1d8] py-3.5"
            : "bg-[#FAF8F5] border-b border-[#ece6de] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Mobile hamburger & desktop main links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[#ede5dc] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-neutral-800" /> : <Menu className="w-5 h-5 text-neutral-800" />}
            </button>

            <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-medium text-neutral-700">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 transition-colors hover:text-black ${
                      isActive ? "text-black font-semibold" : ""
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Center: Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <Link href="/" className="group inline-flex items-center gap-2" aria-label="TrueKind Skincare Home">
              <img
                src="/logo.svg"
                alt="TrueKind Skincare"
                width={136}
                height={28}
                className="h-6 sm:h-7 w-auto transition-transform group-hover:scale-102"
              />
            </Link>
          </div>

          {/* Right: Search, Quiz badge & Cart */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-neutral-700 hover:text-black hover:bg-[#ede5dc] rounded-full transition-colors"
              aria-label="Search skincare products"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <Link
              href="/#quiz"
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold bg-[#E8DFD5] hover:bg-[#DDD2C5] text-neutral-800 px-3 py-1.5 rounded-full transition-all border border-[#d6cbbe]"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Skin Quiz</span>
            </Link>

            <button
              onClick={openCart}
              className="relative p-2 text-neutral-800 hover:text-black hover:bg-[#ede5dc] rounded-full transition-colors flex items-center"
              aria-label={`Open shopping cart with ${totalCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1C1C1C] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale-in">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col">
          <div className="p-4 flex items-center justify-between border-b border-[#e5ded5]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo.svg" alt="TrueKind" width={120} height={25} className="h-6 w-auto" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-neutral-200"
            >
              <X className="w-6 h-6 text-neutral-800" />
            </button>
          </div>

          <div className="p-6 space-y-6 flex-1 overflow-y-auto">
            <div className=" text-xs text-neutral-500 mb-2">0269 / 05789</div>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl uppercase tracking-wider font-medium text-neutral-800 hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl uppercase tracking-wider font-medium text-neutral-800 hover:text-black"
              >
                Sign Up / Login
              </Link>
            </nav>

            <div className="pt-8 border-t border-[#e2dbd1] space-y-4">
              <div className="p-4 bg-[#F2EDE5] rounded-2xl border border-[#ded5cb]">
                <h4 className="font-semibold text-neutral-900 text-sm mb-1 uppercase tracking-wider">
                  Personalised Regimen
                </h4>
                <p className="text-xs text-neutral-600 mb-3">
                  Answer 3 quick questions about your skin goals to receive custom product suggestions.
                </p>
                <Link
                  href="/#quiz"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-[#2F2F2F] text-white px-4 py-2 rounded-full"
                >
                  Take Skin Quiz <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="text-xs text-neutral-500 space-y-1">
                <p>Support: care@truekindskincare.com</p>
                <p>Helpline: +91 89399 97071</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs">
          <div className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl shadow-2xl p-6 border border-[#ded5cb]">
            <div className="flex items-center justify-between pb-4 border-b border-[#e2dbd1]">
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-500">
                Search Products &amp; Actives
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full hover:bg-neutral-200"
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3 bg-white px-4 py-3 rounded-full border border-[#d8cfc3]">
              <Search className="w-5 h-5 text-neutral-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Vitamin C, BHA, Niacinamide, Cleanser..."
                className="w-full bg-transparent text-sm focus:outline-none text-neutral-800"
              />
            </div>

            {searchQuery.trim().length > 0 && (
              <div className="mt-4 pt-2">
                <Link
                  href={`/products?search=${encodeURIComponent(searchQuery)}`}
                  onClick={() => setSearchOpen(false)}
                  className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-[#F0EBE3] hover:bg-[#EAE2D8] text-sm text-neutral-800 font-medium transition-colors"
                >
                  <span>Search for &ldquo;{searchQuery}&rdquo; in all products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            <div className="mt-5">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mb-2">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {["Vitamin C Serum", "BHA & Tea Tree", "Kumkumadi Oil", "Sleeping Mask", "Cleanser"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/products?search=${encodeURIComponent(tag)}`}
                      onClick={() => setSearchOpen(false)}
                      className="text-xs bg-white hover:bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-full border border-[#ded5cb] transition-colors"
                    >
                      {tag}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
