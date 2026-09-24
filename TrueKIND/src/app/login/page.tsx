"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, User, Search, PackageCheck } from "lucide-react";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "orders">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orderQuery, setOrderQuery] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchedOrder, setSearchedOrder] = useState<any>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoggedIn(true);
  };

  const handleLookupOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery) return;
    setSearchedOrder({
      orderNumber: orderQuery.toUpperCase().startsWith("TK-") ? orderQuery.toUpperCase() : `TK-${orderQuery}`,
      status: "In Transit with BlueDart Express",
      estimatedDelivery: "2-3 business days",
      items: "Vitamin C 15% Brightening Serum, BHA & Tea Tree Toner",
    });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#3B3B3B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Ticker */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 text-xs text-neutral-500 uppercase tracking-widest mb-3">
            <span className="bg-[#EAE2D7] px-2.5 py-0.5 rounded text-neutral-800 font-bold">0269</span>
            <span className="bg-[#EAE2D7] px-2.5 py-0.5 rounded text-neutral-800 font-bold">05789</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
            TrueKind Account
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Access your orders, saved skin regimens, and exclusive member perks.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-[#e2d8cd] mb-8 text-xs font-bold uppercase tracking-widest">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 pb-3 text-center transition-colors ${
              activeTab === "login"
                ? "text-neutral-900 border-b-2 border-neutral-900 font-semibold"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            Sign In / Sign Up
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex-1 pb-3 text-center transition-colors ${
              activeTab === "orders"
                ? "text-neutral-900 border-b-2 border-neutral-900 font-semibold"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            Track Order
          </button>
        </div>

        {/* Tab 1: Login */}
        {activeTab === "login" && (
          <div className="bg-white p-8 rounded-3xl border border-[#ded5cb] shadow-sm">
            {loggedIn ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold uppercase text-neutral-900">Welcome Back!</h3>
                <p className="text-xs text-neutral-600">
                  Signed in as <span className="font-semibold">{email}</span>.
                </p>
                <div className="p-4 bg-[#FAF8F5] rounded-xl text-left text-xs space-y-2 border border-[#ded5cb]">
                  <p className="font-semibold text-neutral-800 uppercase tracking-wider">Your Member Status:</p>
                  <p>&bull; 10% Lifetime Loyalty Code: <strong>LOVEAGAIN</strong></p>
                  <p>&bull; Express Shipping: <strong>Unlocked</strong></p>
                  <p>&bull; Early Formula Testing: <strong>Active</strong></p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="/products"
                    className="w-full bg-[#2F2F2F] hover:bg-black text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors inline-block text-center"
                  >
                    Continue Shopping
                  </Link>
                  <button
                    onClick={() => setLoggedIn(false)}
                    className="text-xs text-neutral-500 hover:underline pt-1"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priya@example.com"
                    className="w-full bg-[#FAF8F5] border border-[#d8cfc3] rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Password (or Leave Blank for OTP Link)
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    className="w-full bg-[#FAF8F5] border border-[#d8cfc3] rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2F2F2F] hover:bg-black text-white py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-neutral-400 text-center pt-2">
                  By continuing you agree to TrueKind&apos;s Terms &amp; Privacy Policy.
                </p>
              </form>
            )}
          </div>
        )}

        {/* Tab 2: Track Order */}
        {activeTab === "orders" && (
          <div className="bg-white p-8 rounded-3xl border border-[#ded5cb] shadow-sm space-y-6">
            <form onSubmit={handleLookupOrder} className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Enter Order Number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="e.g. TK-829143"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  className="flex-1 bg-[#FAF8F5] border border-[#d8cfc3] rounded-xl px-3.5 py-2.5 text-xs uppercase focus:outline-none focus:border-neutral-900"
                />
                <button
                  type="submit"
                  className="bg-[#2F2F2F] hover:bg-black text-white px-5 rounded-xl text-xs font-semibold uppercase tracking-wider"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            {searchedOrder && (
              <div className="p-4 bg-[#F2EDE5] rounded-2xl border border-[#ded5cb] text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold uppercase">
                  <PackageCheck className="w-4 h-4" />
                  <span>{searchedOrder.status}</span>
                </div>
                <p><strong>Order #:</strong> {searchedOrder.orderNumber}</p>
                <p><strong>Estimated Delivery:</strong> {searchedOrder.estimatedDelivery}</p>
                <p><strong>Package contents:</strong> {searchedOrder.items}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
