import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";

import { videoItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Video Gallery | Cornerstone International",
  description:
    "Explore field demonstrations and video case studies of Cornerstone International's industrial sanitisation and environmental equipment.",
  openGraph: {
    title: "Video Gallery | Cornerstone International",
    description:
      "Watch certified dry steam sanitisation and healthcare hygiene equipment in real-world operational environments.",
    type: "website",
  },
};

export default function VideoGalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">
          Demonstrations & Field Applications
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Video Gallery
        </h1>
        <p className="mt-3 text-base text-slate-600 max-w-2xl">
          Watch Cornerstone dry steam sanitisation systems, wellness technologies, and enterprise operations deployed in healthcare, education, and hospitality settings.
        </p>
      </div>

      {/* Video Cards Grid */}
      <section aria-labelledby="video-grid-heading">
        <h2 id="video-grid-heading" className="sr-only">
          Case Study Video Library
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <div>
                {/* Poster & Play Trigger */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.poster}
                    alt={`${item.title} video thumbnail`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-slate-950/25 transition-colors group-hover:bg-slate-950/10" />

                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 rounded-t-3xl"
                    aria-label={`Watch ${item.title} on YouTube`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-sky-700 shadow-xl transition-transform duration-200 group-hover:scale-110">
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-sky-700">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-950 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                >
                  <span>Watch Case Study</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
