"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, RotateCcw, Scale, Trash2, X } from "lucide-react";
import { ProductImage } from "@/components/ui/ProductImage";
import { useComparison } from "@/context/ComparisonContext";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

export function ComparisonTable() {
  const { selectedSlugs, removeFromCompare, clearCompare } = useComparison();

  const selectedProducts: Product[] = products.filter((p) =>
    selectedSlugs.includes(p.slug)
  );

  if (selectedProducts.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-xs sm:p-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
          <Scale className="h-8 w-8" />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          No products selected for comparison.
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Explore our product catalogue and select up to 3 enterprise solutions to compare specifications, applications, and features side-by-side.
        </p>
        <div className="mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-xs transition hover:bg-sky-800"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  // Extract all unique specification labels from selected products
  const allSpecLabels = Array.from(
    new Set(
      selectedProducts.flatMap((p) => p.specifications.map((s) => s.label))
    )
  );

  return (
    <div className="space-y-6">
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Side-by-side review
          </span>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Comparing {selectedProducts.length} Solution{selectedProducts.length > 1 ? "s" : ""}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Objective specification comparison based on verified technical data.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={clearCompare}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:border-slate-300 hover:text-slate-900 transition"
          >
            <Trash2 className="h-3.5 w-3.5 text-slate-500" />
            <span>Clear Comparison</span>
          </button>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-xl border border-sky-200 bg-sky-50 px-3.5 py-2 text-xs font-semibold text-sky-800 hover:bg-sky-100 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Add More Products</span>
          </Link>
        </div>
      </div>

      {/* Responsive Comparison Container: Horizontally scrollable on mobile, column grid on desktop */}
      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full border-collapse text-left min-w-[700px]">
          {/* Header Row: Product Thumbnails & Remove Actions */}
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/60">
              <th className="p-5 font-semibold text-slate-500 text-xs uppercase tracking-wider w-[220px]">
                Product
              </th>
              {selectedProducts.map((product) => (
                <th key={product.id} className="p-5 align-top">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                          {product.category}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromCompare(product.slug)}
                          className="inline-flex items-center gap-1 rounded-md p-1 text-xs text-slate-400 hover:bg-slate-200/70 hover:text-slate-700 transition"
                          title="Remove from comparison"
                          aria-label={`Remove ${product.name} from comparison`}
                        >
                          <X className="h-4 w-4" />
                          <span className="text-xs">Remove</span>
                        </button>
                      </div>

                      <div className="relative h-44 w-full rounded-2xl border border-slate-200 bg-white p-3 mb-4 overflow-hidden">
                        <ProductImage
                          src={product.image}
                          alt={product.name}
                          fallbackTitle={product.name}
                          className="object-contain p-2"
                        />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-col gap-2">
                      <Link
                        href={`/contact-us?product=${product.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-800"
                      >
                        Request an Enquiry
                      </Link>
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900"
                      >
                        View details <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-sm">
            {/* Overview / Description */}
            <tr className="hover:bg-slate-50/50">
              <td className="p-5 font-semibold text-slate-700 bg-slate-50/30 text-xs uppercase tracking-wider align-top">
                Overview
              </td>
              {selectedProducts.map((product) => (
                <td key={`desc-${product.id}`} className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed align-top">
                  {product.shortDescription}
                </td>
              ))}
            </tr>

            {/* Category */}
            <tr className="hover:bg-slate-50/50">
              <td className="p-5 font-semibold text-slate-700 bg-slate-50/30 text-xs uppercase tracking-wider">
                Category
              </td>
              {selectedProducts.map((product) => (
                <td key={`cat-${product.id}`} className="p-5 text-slate-800 font-medium">
                  {product.category}
                </td>
              ))}
            </tr>

            {/* Specifications Section Header */}
            <tr className="bg-sky-50/40">
              <td
                colSpan={selectedProducts.length + 1}
                className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-sky-900"
              >
                Technical Specifications & Performance
              </td>
            </tr>

            {/* Dynamic Specification Rows */}
            {allSpecLabels.map((label) => {
              // Check if values differ across products for subtle differentiation
              const values = selectedProducts.map(
                (p) => p.specifications.find((s) => s.label === label)?.value || "Not available"
              );
              const isDifferent = new Set(values).size > 1;

              return (
                <tr
                  key={`spec-${label}`}
                  className={`hover:bg-slate-50/50 ${isDifferent ? "bg-amber-50/15" : ""}`}
                >
                  <td className="p-5 font-medium text-slate-700 bg-slate-50/30 text-xs">
                    <span>{label}</span>
                    {isDifferent && (
                      <span className="block text-[10px] text-sky-700 font-normal mt-0.5">
                        Differentiation
                      </span>
                    )}
                  </td>
                  {selectedProducts.map((product) => {
                    const spec = product.specifications.find((s) => s.label === label);
                    const hasSpec = !!spec;
                    return (
                      <td
                        key={`spec-${label}-${product.id}`}
                        className={`p-5 text-xs sm:text-sm ${
                          hasSpec ? "text-slate-800 font-medium" : "text-slate-400 italic"
                        }`}
                      >
                        {hasSpec ? spec.value : "Not available"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}

            {/* Extended Description */}
            <tr className="hover:bg-slate-50/50">
              <td className="p-5 font-semibold text-slate-700 bg-slate-50/30 text-xs uppercase tracking-wider align-top">
                Full Description
              </td>
              {selectedProducts.map((product) => (
                <td key={`full-desc-${product.id}`} className="p-5 text-xs text-slate-600 leading-relaxed align-top">
                  {product.description}
                </td>
              ))}
            </tr>

            {/* Bottom Enquiry Actions */}
            <tr className="bg-slate-50/80">
              <td className="p-5 font-semibold text-slate-700 text-xs uppercase tracking-wider">
                Action
              </td>
              {selectedProducts.map((product) => (
                <td key={`action-${product.id}`} className="p-5">
                  <Link
                    href={`/contact-us?product=${product.slug}`}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-sky-700 px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-sky-800"
                  >
                    Request an Enquiry
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
