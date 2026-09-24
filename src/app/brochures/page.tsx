import type { Metadata } from "next";
import { ResourcesBrowser } from "@/components/resources/ResourcesBrowser";

export const metadata: Metadata = {
  title: "Resources & Technical Documentation | Cornerstone International",
  description:
    "Explore and download official product literature, technical brochures, and industrial application case studies from Cornerstone International.",
};

export default function BrochuresPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          Knowledge & Media Center
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Product Documentation & Resources
        </h1>
        <p className="mt-3 text-base text-slate-600 max-w-2xl">
          Review official technical brochures, engineering guidelines, and operational video case studies across all Cornerstone business units.
        </p>
      </div>

      {/* Interactive Resources Browser */}
      <ResourcesBrowser />
    </main>
  );
}
