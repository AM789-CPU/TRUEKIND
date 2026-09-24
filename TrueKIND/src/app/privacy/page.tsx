import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#3B3B3B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase text-neutral-500 hover:text-black">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
          Privacy Policy
        </h1>
        <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed bg-white p-8 rounded-3xl border border-[#ded5cb]">
          <p>
            At TrueKind Skincare, we are committed to respecting and protecting your privacy. We collect only necessary details to fulfill your orders and provide skin regimen recommendations.
          </p>
          <h3 className="font-bold uppercase text-neutral-900 text-sm">Data Transparency</h3>
          <p>
            Just like our radical formulation transparency, we never sell your personal information or share skin diagnosis responses with third-party advertising brokers.
          </p>
          <h3 className="font-bold uppercase text-neutral-900 text-sm">Security</h3>
          <p>
            All checkout information is handled via 256-bit encrypted secure channels, ensuring peace of mind during every transaction.
          </p>
        </div>
      </div>
    </div>
  );
}
