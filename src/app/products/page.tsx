"use client";

import { Suspense, useEffect, useMemo, useState, useTransition } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { RotateCcw } from "lucide-react";

import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductSearch } from "@/components/products/ProductSearch";
import { SolutionFinder } from "@/components/products/SolutionFinder";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import {
  filterProducts,
  getCategoryProductCounts,
} from "@/lib/productFiltering";

function ProductsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  // Read initial values from URL search params
  const initialCategory = searchParams.get("category") || "all";
  const initialQuery = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Keep state in sync if URL changes (e.g. browser back/forward)
  useEffect(() => {
    const urlCat = searchParams.get("category") || "all";
    const urlQ = searchParams.get("q") || "";
    setSelectedCategory(urlCat);
    setSearchQuery(urlQ);
  }, [searchParams]);

  // Synchronize state changes to URL cleanly without page reloads
  const updateUrl = (cat: string, q: string) => {
    startTransition(() => {
      const params = new URLSearchParams();
      if (cat && cat !== "all") params.set("category", cat);
      if (q && q.trim()) params.set("q", q.trim());

      const queryStr = params.toString();
      const targetUrl = queryStr ? `${pathname}?${queryStr}` : pathname;

      // Use replaceState to preserve scroll and avoid page reload
      window.history.replaceState(null, "", targetUrl);
    });
  };

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    updateUrl(slug, searchQuery);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    updateUrl(selectedCategory, query);
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    updateUrl("all", "");
  };

  // Compute category product counts for badges
  const categoryCounts = useMemo(() => {
    return getCategoryProductCounts(products);
  }, []);

  // Filter products using helper function
  const filteredProducts = useMemo(() => {
    return filterProducts(products, {
      categorySlug: selectedCategory,
      query: searchQuery,
    });
  }, [selectedCategory, searchQuery]);

  const isFiltered = selectedCategory !== "all" || searchQuery.trim().length > 0;

  // Active category display name
  const currentCategoryName =
    selectedCategory === "all"
      ? null
      : categories.find((c) => c.slug === selectedCategory)?.name;

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16">
      {/* 1. Page Header */}
      <div className="border-b border-slate-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          Our Products
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Product Catalogue
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Explore certified industrial sanitisation equipment, atmospheric water generation, commercial solar systems, and resilient infrastructure materials.
        </p>
      </div>

      {/* 2. FIND THE RIGHT SOLUTION (Guided Solution Finder) */}
      <SolutionFinder />

      {/* 3. PRODUCT SEARCH & CATEGORY FILTERING */}
      <section id="catalogue-browser" aria-labelledby="browse-catalogue-heading" className="space-y-8 pt-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="browse-catalogue-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Browse All Products
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Filter by industry division or search by product name, category, or specification.
            </p>
          </div>

          {/* Results Count Badge */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs">
              {filteredProducts.length === 1
                ? "Showing 1 product"
                : `Showing ${filteredProducts.length} products`}
            </div>

            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 hover:border-slate-300 hover:text-slate-900 transition shadow-2xs"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Input */}
        <div className="max-w-xl">
          <ProductSearch
            value={searchQuery}
            onChange={handleSearchChange}
            onClear={() => handleSearchChange("")}
            placeholder="Search products..."
          />
        </div>

        {/* Category Filters */}
        <div className="space-y-4">
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            counts={categoryCounts}
          />

          {/* Active Filter Chips */}
          {isFiltered && (
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
              <span className="font-semibold text-slate-600">Active filters:</span>
              {currentCategoryName && (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-800">
                  <span>Category: {currentCategoryName}</span>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("all")}
                    className="hover:text-sky-950 font-bold ml-1"
                    aria-label={`Remove ${currentCategoryName} filter`}
                  >
                    ×
                  </button>
                </span>
              )}

              {searchQuery.trim() && (
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  <span>Keyword: &ldquo;{searchQuery}&rdquo;</span>
                  <button
                    type="button"
                    onClick={() => handleSearchChange("")}
                    className="hover:text-slate-950 font-bold ml-1"
                    aria-label="Remove search keyword filter"
                  >
                    ×
                  </button>
                </span>
              )}

              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-semibold text-sky-700 hover:underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="pt-2">
          <ProductGrid
            products={filteredProducts}
            onResetFilters={handleResetFilters}
            isFiltered={isFiltered}
          />
        </div>
      </section>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-sky-700 border-r-transparent align-[-0.125em]" />
          <p className="mt-4 text-sm font-medium text-slate-500">Loading product catalogue...</p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
