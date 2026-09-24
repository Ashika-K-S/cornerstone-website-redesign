import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <section aria-labelledby="related-products-heading" className="mt-16 pt-8 border-t border-slate-200">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Complementary Solutions
          </span>
          <h2 id="related-products-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Related Products
          </h2>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-sky-700 transition"
        >
          <span>Explore full catalogue</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
