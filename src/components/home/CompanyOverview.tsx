import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CompanyOverview() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">About Cornerstone</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Expertise in diversified product sales and services.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Cornerstone International brings together market insight, product knowledge, and service support to help organisations find the right solution for hygiene, infrastructure, water quality, and energy-driven operations.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Our focus is on providing world-class products, dependable delivery, and professional after-sales support built around the realities of growing businesses and public-facing environments.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Tailored recommendations for industrial and commercial environments",
              "Strong focus on quality, delivery reliability, and post-sales support",
              "Specialist solutions aligned to health, hygiene, water, and infrastructure needs",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { value: "15+", label: "Years of market insight" },
              { value: "8", label: "Core sectors" },
              { value: "100%", label: "Focus on service quality" },
              { value: "24/7", label: "Client support" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/about-us"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
