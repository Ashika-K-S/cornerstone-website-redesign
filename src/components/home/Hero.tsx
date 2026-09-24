import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-slate-100 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
            Trusted solutions
          </span>
          <h1 className="mt-5 max-w-xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Quality products and services for a healthier, safer tomorrow.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Cornerstone International brings together specialist expertise across pest control, hygiene, water, power, energy, and infrastructure to deliver dependable products and responsive service.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Explore Products
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              Speak to an Expert
            </Link>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-left">
            {[
              { label: "Industry focus", value: "8+" },
              { label: "Solutions", value: "40+" },
              { label: "Service support", value: "24/7" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-sky-200 via-sky-100 to-white blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-sky-100/50">
            <Image
              src="/images/hero/mk4000-hero.webp"
              alt="Menikini MK 4000 Industrial Dry Steam Disinfection System - Cornerstone International"
              width={1376}
              height={768}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
              className="h-auto w-full rounded-[1.5rem] object-cover aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
