"use client";

import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight, Scale, Trash2, X } from "lucide-react";
import { useComparison } from "@/context/ComparisonContext";
import { products } from "@/data/products";

export function ComparisonBar() {
  const { selectedSlugs, removeFromCompare, clearCompare, warningMessage, dismissWarning } =
    useComparison();

  const comparedProducts = products.filter((p) => selectedSlugs.includes(p.slug));

  if (selectedSlugs.length === 0 && !warningMessage) {
    return null;
  }

  return (
    <aside
      aria-label="Product comparison panel"
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 pointer-events-none"
    >
      <div className="mx-auto max-w-5xl pointer-events-auto space-y-2">
        {/* Warning Notification when user tries to add > 3 products */}
        {warningMessage && (
          <div
            role="alert"
            className="flex items-center justify-between gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900 shadow-lg animate-in slide-in-from-bottom duration-200"
          >
            <div className="flex items-center gap-2.5">
              <AlertCircle className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
              <span>{warningMessage}</span>
            </div>
            <button
              type="button"
              onClick={dismissWarning}
              className="rounded-lg p-1 text-amber-700 hover:bg-amber-100 hover:text-amber-950"
              aria-label="Dismiss warning"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Floating Bar */}
        {selectedSlugs.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-3xl border border-slate-700/80 bg-slate-900/95 px-4 py-3.5 text-white shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                  <Scale className="h-4 w-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-white">
                    {selectedSlugs.length} product{selectedSlugs.length > 1 ? "s" : ""} selected
                  </span>
                  <span className="ml-1 text-slate-400 text-xs hidden sm:inline">(max 3)</span>
                </div>
              </div>

              <div className="h-6 w-px bg-slate-700 shrink-0 mx-1 hidden sm:block" />

              {/* Product Pills */}
              <div className="flex items-center gap-2">
                {comparedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/90 pl-1.5 pr-2 py-1 text-xs"
                  >
                    <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                    <span className="max-w-[110px] sm:max-w-[140px] truncate font-medium text-slate-200">
                      {product.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFromCompare(product.slug)}
                      className="rounded-md p-0.5 text-slate-400 hover:bg-slate-700 hover:text-white"
                      aria-label={`Remove ${product.name} from comparison`}
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
              <button
                type="button"
                onClick={clearCompare}
                className="inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-400 hover:bg-slate-800 hover:text-white transition"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Clear</span>
              </button>

              <Link
                href="/products/compare"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <span>Compare Products</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
