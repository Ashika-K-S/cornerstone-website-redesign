import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { RelatedProducts } from "@/components/products/RelatedProducts";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/products" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-sky-700">
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="relative h-[480px] w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-contain p-6"
            />
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">{product.category}</div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800">
              Request a quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
              Browse catalogue
            </Link>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Key details</h2>
            <div className="mt-5 space-y-4">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
                  <span className="font-medium text-slate-500">{spec.label}</span>
                  <span className="max-w-[60%] text-right text-slate-800">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">Why customers choose this solution</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            "Reliable performance in demanding environments",
            "Practical fit for commercial, healthcare, and hospitality use",
            "Backed by a service-led approach to support long-term delivery",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
              <span className="text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
    </main>
  );
}
