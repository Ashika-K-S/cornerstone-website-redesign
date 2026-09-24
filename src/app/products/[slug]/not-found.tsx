import Link from "next/link";
import { ArrowLeft, PackageSearch } from "lucide-react";

export default function ProductNotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-50 text-sky-700 shadow-xs border border-sky-100">
        <PackageSearch className="h-10 w-10" aria-hidden="true" />
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
        404 — Specification Unavailable
      </p>

      <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
        Product not found
      </h1>

      <p className="mt-4 text-base text-slate-600 max-w-md mx-auto">
        The product you&apos;re looking for may have been removed or is unavailable.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-6 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-sky-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Browse Products</span>
        </Link>

        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
        >
          <span>Contact Sales Team</span>
        </Link>
      </div>
    </main>
  );
}
