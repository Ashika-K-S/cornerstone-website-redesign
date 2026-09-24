"use client";

import { useId } from "react";
import { Filter } from "lucide-react";
import type { ProductCategory } from "@/types/product";

interface ProductFilterProps {
  categories: ProductCategory[];
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  counts?: Record<string, number>;
  className?: string;
}

export function ProductFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
  className = "",
}: ProductFilterProps) {
  const selectId = useId();

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Mobile: Compact Accessible Dropdown & Scrollable Pills */}
      <div className="md:hidden space-y-3">
        <div className="flex items-center gap-2">
          <label
            htmlFor={selectId}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            <Filter className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Filter Category:</span>
          </label>
        </div>

        <div className="relative">
          <select
            id={selectId}
            value={selectedCategory}
            onChange={(e) => onSelectCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-10 text-sm font-medium text-slate-900 shadow-2xs focus:border-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-100"
          >
            <option value="all">
              All Products {counts?.all !== undefined ? `(${counts.all})` : ""}
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name} {counts?.[category.slug] !== undefined ? `(${counts[category.slug]})` : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Scrollable quick pills for quick touch access on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar scroll-smooth">
          <button
            type="button"
            onClick={() => onSelectCategory("all")}
            aria-pressed={selectedCategory === "all"}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
              selectedCategory === "all"
                ? "bg-sky-700 text-white shadow-2xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Products {counts?.all !== undefined && <span className="ml-1 opacity-80">({counts.all})</span>}
          </button>
          {categories.map((category) => (
            <button
              key={`quick-${category.id}`}
              type="button"
              onClick={() => onSelectCategory(category.slug)}
              aria-pressed={selectedCategory === category.slug}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                selectedCategory === category.slug
                  ? "bg-sky-700 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category.name}
              {counts?.[category.slug] !== undefined && (
                <span className="ml-1 opacity-75">({counts[category.slug]})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal Pill Navigation with micro-interactions */}
      <div className="hidden md:flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => onSelectCategory("all")}
          aria-pressed={selectedCategory === "all"}
          className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 ${
            selectedCategory === "all"
              ? "border-sky-700 bg-sky-700 text-white shadow-2xs"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <span>All Products</span>
          {counts?.all !== undefined && (
            <span
              className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
                selectedCategory === "all"
                  ? "bg-sky-800 text-sky-100"
                  : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
              }`}
            >
              {counts.all}
            </span>
          )}
        </button>

        {categories.map((category) => {
          const isSelected = selectedCategory === category.slug;
          const count = counts?.[category.slug] ?? 0;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.slug)}
              aria-pressed={isSelected}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 ${
                isSelected
                  ? "border-sky-700 bg-sky-700 text-white shadow-2xs"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>{category.name}</span>
              {counts?.[category.slug] !== undefined && (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
                    isSelected
                      ? "bg-sky-800 text-sky-100"
                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
