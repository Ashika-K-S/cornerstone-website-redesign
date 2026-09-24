"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, ExternalLink, FileText, Play, RotateCcw, Search, Video, X } from "lucide-react";
import { brochures } from "@/data/brochures";
import { videoItems } from "@/data/gallery";
import { products } from "@/data/products";

type ResourceTab = "all" | "brochures" | "videos";

export function ResourcesBrowser() {
  const [activeTab, setActiveTab] = useState<ResourceTab>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const trimmedQuery = searchQuery.trim().toLowerCase();

  // Filter brochures
  const filteredBrochures = useMemo(() => {
    if (!trimmedQuery) return brochures;
    return brochures.filter(
      (b) =>
        b.title.toLowerCase().includes(trimmedQuery) ||
        b.description.toLowerCase().includes(trimmedQuery)
    );
  }, [trimmedQuery]);

  // Filter videos
  const filteredVideos = useMemo(() => {
    if (!trimmedQuery) return videoItems;
    return videoItems.filter(
      (v) =>
        v.title.toLowerCase().includes(trimmedQuery) ||
        v.category.toLowerCase().includes(trimmedQuery) ||
        v.description.toLowerCase().includes(trimmedQuery)
    );
  }, [trimmedQuery]);

  const totalResults =
    activeTab === "all"
      ? filteredBrochures.length + filteredVideos.length
      : activeTab === "brochures"
      ? filteredBrochures.length
      : filteredVideos.length;

  const handleReset = () => {
    setSearchQuery("");
    setActiveTab("all");
  };

  return (
    <div className="space-y-8">
      {/* Search & Tab Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:max-w-md">
          <label htmlFor="resources-search" className="sr-only">
            Search technical documentation and videos
          </label>
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            id="resources-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brochures, products, or videos..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-10 text-sm text-slate-900 shadow-2xs outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700"
              aria-label="Clear resource search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 self-start md:self-auto rounded-2xl border border-slate-200 bg-slate-100/80 p-1.5 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
              activeTab === "all"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            All Resources ({filteredBrochures.length + filteredVideos.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("brochures")}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
              activeTab === "brochures"
                ? "bg-sky-700 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Brochures ({filteredBrochures.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
              activeTab === "videos"
                ? "bg-sky-700 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Video className="h-3.5 w-3.5" />
            <span>Videos ({filteredVideos.length})</span>
          </button>
        </div>
      </div>

      {/* Results Count & Active Search indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div>
          Showing <strong className="text-slate-900">{totalResults}</strong> resource
          {totalResults !== 1 ? "s" : ""}
          {trimmedQuery && (
            <span>
              {" "}
              matching &ldquo;<span className="text-slate-800 font-semibold">{searchQuery}</span>
              &rdquo;
            </span>
          )}
        </div>

        {(searchQuery || activeTab !== "all") && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:underline"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {totalResults === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-12 text-center">
          <p className="text-base font-bold text-slate-900">No resources found</p>
          <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or reset the filters to browse all verified product documentation.
          </p>
          <div className="mt-5">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-xl bg-sky-700 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-sky-800"
            >
              <RotateCcw className="h-3 w-3" />
              Reset search
            </button>
          </div>
        </div>
      )}

      {/* Section 1: Product Brochures */}
      {(activeTab === "all" || activeTab === "brochures") && filteredBrochures.length > 0 && (
        <div className="space-y-4">
          {activeTab === "all" && (
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <FileText className="h-4 w-4 text-sky-700" />
              <h2 className="text-lg font-bold text-slate-900">Product Brochures & Literature</h2>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBrochures.map((brochure) => {
              const matchedProduct = products.find(
                (p) => p.slug === brochure.id || brochure.id.startsWith(p.slug)
              );

              return (
                <article
                  key={brochure.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xs transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
                >
                  <div>
                    <div className="relative h-52 w-full border-b border-slate-100 bg-white flex items-center justify-center p-4">
                      <Image
                        src={brochure.image}
                        alt={brochure.title}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-1.5">
                        {matchedProduct ? matchedProduct.category : "Technical Literature"}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-950">
                        {brochure.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                        {brochure.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-2">
                    <Link
                      href={`/contact-us?product=${brochure.id}&type=brochure`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-700 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-sky-800 active:scale-[0.98]"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download Brochure</span>
                    </Link>

                    {matchedProduct && (
                      <Link
                        href={`/products/${matchedProduct.slug}`}
                        className="inline-flex w-full items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-700 py-1"
                      >
                        <span>View Product Details</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* Section 2: Technical Videos & Case Studies */}
      {(activeTab === "all" || activeTab === "videos") && filteredVideos.length > 0 && (
        <div className="space-y-4 pt-4">
          {activeTab === "all" && (
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <Video className="h-4 w-4 text-sky-700" />
              <h2 className="text-lg font-bold text-slate-900">
                Application Videos & Field Demonstrations
              </h2>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => (
              <article
                key={video.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xs transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <div>
                  <div className="relative h-48 w-full border-b border-slate-100 bg-slate-900">
                    <Image
                      src={video.poster}
                      alt={video.title}
                      fill
                      className="object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-sky-700 shadow-lg group-hover:scale-110 transition">
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-1.5">
                      {video.category}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-950">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition active:scale-[0.98]"
                  >
                    <span>Watch Case Study</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
