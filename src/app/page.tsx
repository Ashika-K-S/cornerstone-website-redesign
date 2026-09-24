import Link from "next/link";

import { CompanyOverview } from "@/components/home/CompanyOverview";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { ProductCategories } from "@/components/home/ProductCategories";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <CompanyOverview />

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Why choose Cornerstone?</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Need a practical solution for hygiene, water, or infrastructure?</h2>
            </div>
            <Link href="/contact-us" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
              Enquire now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
