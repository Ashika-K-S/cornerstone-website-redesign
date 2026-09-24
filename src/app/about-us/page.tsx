import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Cornerstone International",
  description:
    "Learn about Cornerstone International, our market expertise, product focus, and commitment to world-class industrial sales and services.",
  openGraph: {
    title: "About Us | Cornerstone International",
    description:
      "Cornerstone International specializes in diversified product sales and services, connecting Indian enterprises with proven industrial solutions.",
    type: "website",
  },
};

const strengths = [
  {
    icon: Target,
    title: "Market-Need Focus",
    text: "Our core strength lies in identifying operational industry needs and delivering appropriate, technically certified solutions.",
  },
  {
    icon: Shield,
    title: "Diversified Sector Coverage",
    text: "Unmatched expertise across pest management, facility hygiene, resilient infrastructure, clean water generation, and commercial energy.",
  },
  {
    icon: Users,
    title: "Assured Post-Sales Delivery",
    text: "Direct partnerships with specialist manufacturers and technology leaders to ensure timely deliveries and dependable operational support.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="space-y-16 py-12 sm:py-16">
      {/* 1. Header & Overview Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
              Corporate Profile
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Cornerstone International
            </h1>
            <p className="mt-4 text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
              Specialist distributor of industrial sanitation, environmental technologies, and infrastructure products across India.
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
              <p>
                With expertise in diversified product sales and services, our unique strength is understanding real-world facility requirements and delivering appropriate, verified technical equipment.
              </p>
              <p>
                Our product portfolio spans non-chemical pest suppression, advanced facility hygiene, polyurea infrastructure coatings, pure atmospheric water generation, and rooftop solar power.
              </p>
              <p>
                By partnering directly with technology manufacturers and technical domain specialists, Cornerstone provides world-class industrial solutions backed by timely project fulfillment and assured after-sales service.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-6 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-sky-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
              >
                <span>Browse Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
              >
                <span>Contact Operations</span>
              </Link>
            </div>
          </div>

          {/* Facility / Corporate Image */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-md">
            <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about/cornerstone-facility.webp"
                alt="Cornerstone International Operations & Distribution Facility"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars Section */}
      <section aria-labelledby="pillars-heading" className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              Our Operating Philosophy
            </p>
            <h2 id="pillars-heading" className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Delivering Practical Value to Indian Enterprise
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Our service-led approach ensures long-term operational success for clients across commercial and industrial sectors.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 mb-5">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
              Partner With Us
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-white">
              Looking for reliable industrial sanitation or water solutions?
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              Connect with our technical engineers in Bengaluru for product demonstrations, technical trials, and supply agreements.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xs transition hover:bg-slate-100 active:scale-[0.98]"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </main>
  );
}
