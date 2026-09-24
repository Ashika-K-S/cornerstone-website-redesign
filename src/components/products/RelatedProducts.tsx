import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Product } from "@/types/product";

export function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <div className="mt-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">Related products</h2>
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-sky-700">
          Explore more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md"
          >
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">{product.category}</div>
            <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
