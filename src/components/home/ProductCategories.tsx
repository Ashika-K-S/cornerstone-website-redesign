import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { categories } from "@/data/categories";

export function ProductCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Our portfolio</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Product categories</h2>
        </div>
        <Link href="/products" className="hidden items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-sky-700 sm:inline-flex">
          View all categories <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.slug}`}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden border-b border-slate-200 bg-slate-100">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">{category.count} products</div>
              <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
