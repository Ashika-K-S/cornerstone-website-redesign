import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CompareButton } from "@/components/products/CompareButton";
import { ProductImage } from "@/components/ui/ProductImage";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xs transition-all duration-200 ease-out hover:-translate-y-1 hover:border-sky-300 hover:shadow-md">
      {/* 1. Product Image Area with consistent container dimensions */}
      <div className="relative h-60 sm:h-64 overflow-hidden border-b border-slate-100 bg-white flex items-center justify-center">
        <ProductImage
          src={product.image}
          alt={`${product.name} - ${product.category}`}
          fallbackTitle={product.name}
          className="object-contain p-5 transition-transform duration-300 ease-out group-hover:scale-105"
        />

        {/* Comparison Action pinned top-right */}
        <div className="absolute top-3 right-3 z-10">
          <CompareButton
            productSlug={product.slug}
            productName={product.name}
            variant="compact"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        {/* 2. Category */}
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
          {product.category}
        </div>

        {/* 3. Product Name */}
        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-sky-950">
          <Link
            href={`/products/${product.slug}`}
            className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded"
          >
            {product.name}
          </Link>
        </h3>

        {/* 4. Short Description */}
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {product.shortDescription}
        </p>

        {/* 5. Primary Actions: View Details (Main) & Enquire (Secondary) */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 transition-colors hover:text-sky-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 rounded"
          >
            <span>View Details</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href={`/contact-us?product=${product.slug}`}
            className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
