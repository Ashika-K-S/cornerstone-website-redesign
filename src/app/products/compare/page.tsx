import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ComparisonTable } from "@/components/products/ComparisonTable";

export const metadata: Metadata = {
  title: "Product Comparison | Cornerstone International",
  description:
    "Compare technical specifications and operational capabilities of Cornerstone International solutions side-by-side.",
};

export default function ProductComparePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Back navigation */}
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-sky-700 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Product Catalogue</span>
        </Link>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          Evaluation Tool
        </span>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Product Comparison
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
          Review side-by-side technical capabilities and operational suitability for selected Cornerstone products.
        </p>
      </div>

      {/* Comparison Matrix */}
      <ComparisonTable />
    </main>
  );
}
