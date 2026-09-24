"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck, RefreshCw, Leaf } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    discountCode,
    applyDiscountCode,
    total,
    totalCount,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState<{ text: string; error?: boolean } | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const ok = applyDiscountCode(promoInput);
    if (ok) {
      setPromoMessage({ text: "Coupon code applied! 10% off" });
    } else {
      setPromoMessage({ text: "Invalid coupon. Try 'LOVEAGAIN' or 'TRUEKIND10'", error: true });
    }
  };

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={closeCart}
        />

        {/* Drawer panel */}
        <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-50 text-[#3b3b3b]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5dfd8]">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg tracking-wider uppercase text-neutral-900">
                Cart ({totalCount})
              </span>
              <span className="text-xs bg-[#EAE3DB] px-2 py-0.5 rounded-full text-neutral-700">
                0269 / 05789
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-[#eae3db] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#F0EBE4] px-6 py-3 border-b border-[#e5dfd8] text-xs">
            {subtotal >= freeShippingThreshold ? (
              <p className="text-emerald-800 font-medium flex items-center gap-1.5">
                <Truck className="w-4 h-4" /> You have unlocked FREE Express Shipping!
              </p>
            ) : (
              <div>
                <p className="text-neutral-700 mb-1.5">
                  Add <span className="font-semibold text-neutral-900">₹{freeShippingThreshold - subtotal}</span> more for <span className="font-semibold">FREE Shipping</span>
                </p>
                <div className="w-full bg-[#dfd6cb] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-neutral-800 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#e8e2da]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#eee7de] flex items-center justify-center mb-4 text-neutral-400">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-2">Your cart is empty</h3>
                <p className="text-neutral-500 text-sm max-w-xs mb-6">
                  Discover our honest, biocompatible skincare formulas engineered for real results.
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 bg-[#3b3b3b] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors"
                >
                  Browse Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id || item.product.slug} className="py-4 flex gap-4">
                  <div className="relative w-20 h-24 bg-white rounded-lg overflow-hidden shrink-0 border border-[#e8e2da]">
                    <img
                      src={item.product.image || "/explore-1.jpg"}
                      alt={item.product.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={closeCart}
                          className="font-medium text-sm text-neutral-900 hover:underline line-clamp-1"
                        >
                          {item.product.title}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-neutral-400 hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {item.product.volume} &bull; {item.product.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#d3cac0] rounded-full bg-white px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:text-black transition-colors text-neutral-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-neutral-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:text-black transition-colors text-neutral-600"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-neutral-900">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="border-t border-[#e5dfd8] bg-[#F7F4EE] px-6 py-5 space-y-4">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="PROMO CODE (e.g. LOVEAGAIN)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 bg-white border border-[#d8d0c5] rounded-full px-4 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-neutral-800"
                />
                <button
                  type="submit"
                  className="bg-[#3b3b3b] text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-black transition-colors"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <p className={`text-xs ${promoMessage.error ? "text-red-600" : "text-emerald-700"}`}>
                  {promoMessage.text}
                </p>
              )}

              {/* Price calculations */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount ({discountCode})</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span>{subtotal >= freeShippingThreshold ? "Free" : "₹70"}</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-neutral-900 pt-2 border-t border-[#e2dbd1]">
                  <span>Total</span>
                  <span>₹{total + (subtotal >= freeShippingThreshold ? 0 : 70)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full bg-[#2F2F2F] hover:bg-black text-white font-medium py-3.5 px-6 rounded-full flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-all shadow-md active:scale-98"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>

              {/* Trust badges strip */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-neutral-500 text-center uppercase tracking-tight">
                <div className="flex flex-col items-center">
                  <RefreshCw className="w-3.5 h-3.5 mb-0.5 text-neutral-600" />
                  <span>30 Days Return</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-3.5 h-3.5 mb-0.5 text-neutral-600" />
                  <span>Free Shipping &gt; ₹999</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mb-0.5 text-neutral-600" />
                  <span>100% Clean Actives</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </>
  );
}
