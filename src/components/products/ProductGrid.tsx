import { SearchX, RotateCcw } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
  isFiltered?: boolean;
}

export function ProductGrid({ products, onResetFilters, isFiltered = false }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 px-6 py-16 text-center shadow-2xs">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xs border border-slate-200 text-slate-400">
          <SearchX className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">No products found</h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Try adjusting your search or category filter.
        </p>

        {isFiltered && onResetFilters && (
          <div className="mt-6">
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-sky-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>Clear Filters</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
