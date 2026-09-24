import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Cornerstone International",
  description: "Learn about Cornerstone International, our market expertise, product focus, and commitment to world-class service.",
};

const strengths = [
  {
    title: "Diversified expertise",
    text: "Our range spans pest control, hygiene, power, water, infrastructure, and wellness solutions built for real-world operational demands.",
  },
  {
    title: "Market-led solutions",
    text: "We identify emerging requirements and connect customers with products that respond to practical needs and changing market conditions.",
  },
  {
    title: "Service reliability",
    text: "From product selection to post-sales support, our team focuses on timely delivery, trusted service, and long-term customer satisfaction.",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">About us</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Cornerstone International</h1>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Expertise in diversified product sales and services, its unique strengths are in finding out the market need and provide appropriate solutions. Our unmatched expertise in various industrial products starting from pest control, hygiene products to infrastructure, water, and energy related products, gives added advantage to our valuable customers.
            </p>
            <p>
              Our prime focus is to provide world class products to our customers and ensure timely deliveries and assured post sales services.
            </p>
            <p>
              Since our prime focus is to offer world class products and services, we partner with individual expertise and manufactures from various Industrial back grounds.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl">
            <Image
              src="/images/about/cornerstone-facility.webp"
              alt="Cornerstone International Operations & Product Facility"
              width={1376}
              height={768}
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full rounded-[1.5rem] object-cover aspect-[16/9]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {strengths.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-xl font-black">
                {item.title.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
