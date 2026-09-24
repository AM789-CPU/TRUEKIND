"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cart, subtotal, discount, total, clearCart, closeCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "cod",
  });
  const [loading, setLoading] = useState(false);
  const [successOrder, setSuccessOrder] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subtotal,
          discount,
          total,
          items: cart.map((item) => ({
            id: item.product.id,
            title: item.product.title,
            slug: item.product.slug,
            price: item.product.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create order");
      }

      setSuccessOrder(data.orderNumber || "TK-" + Math.floor(100000 + Math.random() * 900000));
      clearCart();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl overflow-hidden border border-[#e5dfd8]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5dfd8] bg-[#F4EFEA]">
          <div>
            <h3 className="font-semibold text-lg text-neutral-900 uppercase tracking-wider">
              {successOrder ? "Order Confirmed" : "Fast & Secure Checkout"}
            </h3>
            <p className="text-xs text-neutral-500">TrueKind Skincare &bull; Honest Formulation</p>
          </div>
          <button
            onClick={() => {
              onClose();
              if (successOrder) closeCart();
            }}
            className="p-1 rounded-full hover:bg-neutral-200 transition-colors"
          >
            <X className="w-5 h-5 text-neutral-700" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {successOrder ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900">Thank you for your order!</h4>
              <p className="text-sm text-neutral-600">
                Your order number is <span className=" font-semibold text-black">{successOrder}</span>.
                A confirmation receipt with tracking details will be sent to your email.
              </p>
              <div className="bg-[#f0ebe3] p-4 rounded-xl text-left text-xs space-y-1 text-neutral-700">
                <p><strong>Shipping to:</strong> {formData.name}</p>
                <p>{formData.address}, {formData.city} - {formData.postalCode}</p>
                <p><strong>Payment Method:</strong> {formData.paymentMethod === "cod" ? "Cash on Delivery" : "UPI / Net Banking"}</p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  closeCart();
                }}
                className="w-full bg-[#2F2F2F] text-white py-3 rounded-full text-sm font-medium hover:bg-black transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full bg-white border border-[#d8d0c5] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@example.com"
                    className="w-full bg-white border border-[#d8d0c5] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-[#d8d0c5] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Shipping Address *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House/Flat No, Street, Locality"
                    className="w-full bg-white border border-[#d8d0c5] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    City *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Mumbai / Delhi"
                    className="w-full bg-white border border-[#d8d0c5] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    PIN Code *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    placeholder="400001"
                    className="w-full bg-white border border-[#d8d0c5] rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Payment Option
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-medium transition-all ${formData.paymentMethod === "cod" ? "border-neutral-900 bg-neutral-900 text-white" : "border-[#d8d0c5] bg-white text-neutral-800"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={() => setFormData({ ...formData, paymentMethod: "cod" })}
                        className="sr-only"
                      />
                      <span>Cash on Delivery (COD)</span>
                    </label>
                    <label className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-medium transition-all ${formData.paymentMethod === "online" ? "border-neutral-900 bg-neutral-900 text-white" : "border-[#d8d0c5] bg-white text-neutral-800"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={formData.paymentMethod === "online"}
                        onChange={() => setFormData({ ...formData, paymentMethod: "online" })}
                        className="sr-only"
                      />
                      <span>UPI / Cards / Net Banking</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order total review */}
              <div className="bg-[#f2ece4] p-3 rounded-xl flex justify-between items-center text-sm font-semibold text-neutral-900">
                <span>Total Payable:</span>
                <span>₹{total}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2F2F2F] hover:bg-black disabled:bg-neutral-400 text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-colors shadow"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Confirm Order &bull; ₹{total} <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
