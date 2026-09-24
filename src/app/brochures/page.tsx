import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import { brochures } from "@/data/brochures";

export const metadata: Metadata = {
  title: "Brochures | Cornerstone International",
  description: "Download brochure resources for Cornerstone International product lines and specialist solutions.",
};

export default function BrochuresPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Brochures</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Download product literature</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {brochures.map((brochure) => (
          <article key={brochure.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-64 overflow-hidden border-b border-slate-200 bg-white">
              <Image
                src={brochure.image}
                alt={brochure.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-contain p-4 transition duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">{brochure.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{brochure.description}</p>
              <Link
                href={brochure.file}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
