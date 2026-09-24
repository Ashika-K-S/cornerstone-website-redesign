'use client';

import { useMemo, useState } from "react";

import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductGrid } from "@/components/products/ProductGrid";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const visibleProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((product) => product.categorySlug === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Our products</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Product catalogue</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
          {visibleProducts.length} products available
        </div>
      </div>

      <div className="mb-8">
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <ProductGrid products={visibleProducts} />
    </main>
  );
}
