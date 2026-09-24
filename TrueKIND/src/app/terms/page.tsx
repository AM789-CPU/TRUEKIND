import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#3B3B3B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase text-neutral-500 hover:text-black">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
          Terms &amp; Conditions
        </h1>
        <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed bg-white p-8 rounded-3xl border border-[#ded5cb]">
          <p>
            Welcome to TrueKind Skincare. By browsing and using this website, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h3 className="font-bold uppercase text-neutral-900 text-sm">1. Formulation Honesty</h3>
          <p>
            All products are formulated strictly without over 1,800 restricted ingredients in adherence with US FDA and EU COSING standards. Ingredient lists with EWG ratings are disclosed directly on each formula listing.
          </p>
          <h3 className="font-bold uppercase text-neutral-900 text-sm">2. Orders &amp; Shipping</h3>
          <p>
            We offer complimentary standard shipping on all orders over ₹999 across India. Orders are processed and dispatched within 24 to 48 hours on business days.
          </p>
          <h3 className="font-bold uppercase text-neutral-900 text-sm">3. 30 Days Satisfaction Guarantee</h3>
          <p>
            If our formula does not meet your skin expectations, you may return the product within 30 days of delivery for a prompt exchange or store credit.
          </p>
        </div>
      </div>
    </div>
  );
}
