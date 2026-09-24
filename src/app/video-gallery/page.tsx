import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

import { videoItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Video Gallery | Cornerstone International",
  description: "View the Cornerstone International video gallery covering sanitation, health, and wellness use cases.",
};

export default function VideoGalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Video gallery</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Customer stories and practical applications</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videoItems.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <Image
                src={item.poster}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
              <Link
                href={item.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-4 text-sky-700 shadow-lg"
                aria-label={`Play ${item.title}`}
              >
                <PlayCircle className="h-8 w-8" />
              </Link>
            </div>
            <div className="p-5">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{item.category}</div>
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
