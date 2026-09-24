"use client";

import { ArrowRight } from "lucide-react";

import type { ProductCategory } from "@/types/product";

export function ProductFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: {
  categories: ProductCategory[];
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onSelectCategory("all")}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
          selectedCategory === "all"
            ? "border-sky-700 bg-sky-700 text-white"
            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900"
        }`}
      >
        All categories
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onSelectCategory(category.slug)}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            selectedCategory === category.slug
              ? "border-sky-700 bg-sky-700 text-white"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900"
          }`}
        >
          {category.name}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}
