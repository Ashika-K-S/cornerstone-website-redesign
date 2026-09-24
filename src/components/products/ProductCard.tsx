import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden border-b border-slate-200 bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{product.category}</div>
        <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{product.shortDescription}</p>

        <Link
          href={`/products/${product.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-800"
        >
          View details <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
