import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedProducts() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Featured range</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Selected products</h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-sky-700">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
