import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, ShieldCheck, Tag } from "lucide-react";
import { notFound } from "next/navigation";

import { CompareButton } from "@/components/products/CompareButton";
import { ProductDocuments } from "@/components/products/ProductDocuments";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { ProductImage } from "@/components/ui/ProductImage";
import { products } from "@/data/products";
import { categoryApplications } from "@/lib/productFiltering";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Cornerstone International",
      description: "The requested product could not be found in our catalogue.",
    };
  }

  return {
    title: `${product.name} - ${product.category} | Cornerstone International`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Cornerstone International`,
      description: product.shortDescription,
      type: "website",
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name} - ${product.category}`,
        },
      ],
    },
  };
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

  // Find verified applications mapped in category data
  const matchedApplications = (categoryApplications[product.categorySlug] || []).filter((app) =>
    app.productIds.includes(product.id)
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 space-y-12 pb-24 sm:pb-16">
      {/* 1. Breadcrumbs: Home / Products / Category / Product */}
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <li>
            <Link
              href="/"
              className="hover:text-sky-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-sky-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded"
            >
              Products
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="hover:text-sky-700 transition max-w-[150px] sm:max-w-none truncate inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-300">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li
            aria-current="page"
            className="font-bold text-slate-900 max-w-[180px] sm:max-w-none truncate"
          >
            {product.name}
          </li>
        </ol>
      </nav>

      {/* 2. Hero Product Overview */}
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
        {/* Product Image Frame with fallback & priority loading */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="relative h-[360px] sm:h-[460px] w-full">
            <ProductImage
              src={product.image}
              alt={`${product.name} - ${product.category} system`}
              fallbackTitle={product.name}
              priority={true}
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-800">
              <Tag className="h-3 w-3" />
              <span>{product.category}</span>
            </div>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              {product.description}
            </p>
          </div>

          {/* Primary Desktop Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={`/contact-us?product=${product.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-sky-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
            >
              <span>Request an Enquiry</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <CompareButton
              productSlug={product.slug}
              productName={product.name}
              variant="full"
            />
          </div>

          {/* Brochure & Document Section */}
          <ProductDocuments productSlug={product.slug} productName={product.name} />
        </div>
      </div>

      {/* 3. Verified Applications Section */}
      {matchedApplications.length > 0 && (
        <section aria-labelledby="applications-heading" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-sky-700" />
            <h2 id="applications-heading" className="text-xl font-bold text-slate-900 sm:text-2xl">
              Supported Enterprise Applications
            </h2>
          </div>
          <p className="mt-1 text-sm text-slate-600">
            Validated deployment areas based on product engineering and regulatory suitability:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matchedApplications.map((app) => (
              <div key={app.id} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{app.label}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Technical Specifications Section */}
      {product.specifications && product.specifications.length > 0 && (
        <section
          id="technical-specifications"
          aria-labelledby="specifications-heading"
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-100 pb-5">
            <div>
              <h2 id="specifications-heading" className="text-xl font-bold text-slate-900 sm:text-2xl">
                Technical Specifications
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Official parameters and operational characteristics.
              </p>
            </div>

            <Link
              href={`/contact-us?product=${product.slug}`}
              className="text-xs font-semibold text-sky-700 hover:text-sky-900 underline"
            >
              Need custom technical specifications? Enquire here &rarr;
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.specifications.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {spec.label}
                </span>
                <span className="mt-2 text-sm font-bold text-slate-900">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Related Products */}
      {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}

      {/* 6. Sticky Mobile Enquiry CTA (Mobile Only) */}
      <aside
        aria-label="Mobile enquiry bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/90 bg-white/95 px-4 py-3 backdrop-blur-md shadow-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold text-sky-700 uppercase tracking-wider truncate">
              {product.category}
            </p>
            <p className="text-xs font-extrabold text-slate-900 truncate">
              {product.name}
            </p>
          </div>
          <Link
            href={`/contact-us?product=${product.slug}`}
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-sky-700 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-sky-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
          >
            Enquire About This Product
          </Link>
        </div>
      </aside>
    </main>
  );
}
