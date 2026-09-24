"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, ChevronRight, HelpCircle, RotateCcw, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { categoryApplications, type ApplicationRequirement } from "@/lib/productFiltering";
import type { Product, ProductCategory } from "@/types/product";

interface SolutionFinderProps {
  className?: string;
  onSelectProduct?: (product: Product) => void;
}

export function SolutionFinder({ className = "" }: SolutionFinderProps) {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

  const selectedCategory: ProductCategory | undefined = categories.find(
    (c) => c.slug === selectedCategorySlug
  );

  const availableApplications: ApplicationRequirement[] = selectedCategorySlug
    ? categoryApplications[selectedCategorySlug] || []
    : [];

  const handleSelectCategory = (slug: string) => {
    setSelectedCategorySlug(slug);
    setSelectedAppId(null);
  };

  const handleSelectApplication = (appId: string) => {
    setSelectedAppId(appId);
  };

  const handleReset = () => {
    setSelectedCategorySlug(null);
    setSelectedAppId(null);
  };

  // Determine recommended products
  let recommendedProducts: Product[] = [];
  if (selectedCategorySlug) {
    if (selectedAppId && selectedAppId !== "all") {
      const selectedApp = availableApplications.find((a) => a.id === selectedAppId);
      if (selectedApp) {
        recommendedProducts = products.filter((p) => selectedApp.productIds.includes(p.id));
      }
    } else {
      // Recommends all products in that category
      recommendedProducts = products.filter((p) => p.categorySlug === selectedCategorySlug);
    }
  }

  // Current step calculation
  // Step 1: No category selected
  // Step 2: Category selected, but no requirement selected (or if no sub-apps exist, jump straight to recommended)
  // Step 3: Requirement selected -> shows recommendations
  const step = !selectedCategorySlug ? 1 : !selectedAppId && availableApplications.length > 0 ? 2 : 3;

  return (
    <section
      id="find-solution"
      aria-labelledby="solution-finder-title"
      className={`relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 p-6 sm:p-10 shadow-sm ${className}`}
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-3 py-1 text-xs font-semibold text-sky-800">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Guided Solution Finder</span>
            </div>
            <h2 id="solution-finder-title" className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Find the Right Solution
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Tell us what you need and explore the solutions that match.
            </p>
          </div>

          {selectedCategorySlug && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 self-start md:self-end rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-900"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Start over
            </button>
          )}
        </div>

        {/* Step Indicator */}
        <div className="mt-6 mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span
            className={`inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold ${
              step >= 1 ? "bg-sky-700 text-white" : "bg-slate-200 text-slate-600"
            }`}
          >
            1
          </span>
          <span className={step >= 1 ? "text-slate-900 font-bold" : ""}>Category</span>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />

          <span
            className={`inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold ${
              step >= 2 ? "bg-sky-700 text-white" : "bg-slate-200 text-slate-600"
            }`}
          >
            2
          </span>
          <span className={step >= 2 ? "text-slate-900 font-bold" : ""}>Application</span>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />

          <span
            className={`inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold ${
              step === 3 ? "bg-sky-700 text-white" : "bg-slate-200 text-slate-600"
            }`}
          >
            3
          </span>
          <span className={step === 3 ? "text-slate-900 font-bold" : ""}>Recommended Solutions</span>
        </div>

        {/* STEP 1: What are you looking for? */}
        {step === 1 && (
          <div>
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Step 1: What are you looking for?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Select an operational domain from Cornerstone&apos;s enterprise divisions:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const categoryProductsCount = products.filter(
                  (p) => p.categorySlug === category.slug
                ).length;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleSelectCategory(category.slug)}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-sky-100"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-sky-700">Division</span>
                        <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-sky-600" />
                      </div>
                      <h4 className="mt-2 text-base font-bold text-slate-900 group-hover:text-sky-700">
                        {category.name}
                      </h4>
                      <p className="mt-1.5 text-xs line-clamp-2 text-slate-500">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>{categoryProductsCount > 0 ? `${categoryProductsCount} solutions` : "Enterprise division"}</span>
                      <span className="font-semibold text-sky-600 opacity-0 group-hover:opacity-100 transition">Select &rarr;</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: What is your application or requirement? */}
        {step === 2 && selectedCategory && (
          <div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedCategorySlug(null)}
                  className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back to Categories
                </button>
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Step 2: What is your application or requirement?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Targeted requirements for{" "}
                  <span className="font-semibold text-sky-700">{selectedCategory.name}</span>:
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl bg-sky-50 border border-sky-200 px-3 py-1.5 text-xs font-medium text-sky-900">
                <span>Selected:</span>
                <span className="font-bold">{selectedCategory.name}</span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {availableApplications.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => handleSelectApplication(app.id)}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-sky-100"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-700">
                        {app.label}
                      </h4>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-sky-600 transition" />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {app.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-sky-700 font-semibold">
                    <span>View matching products</span>
                    <span className="transition group-hover:translate-x-1">&rarr;</span>
                  </div>
                </button>
              ))}

              {/* Option to see all products in category */}
              <button
                type="button"
                onClick={() => handleSelectApplication("all")}
                className="group flex flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-5 text-left transition hover:border-sky-400 hover:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-700">
                      Explore All {selectedCategory.name}
                    </h4>
                    <HelpCircle className="h-4 w-4 shrink-0 text-slate-400" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Browse all available enterprise equipment and systems under this category without filtering by application.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-700 font-semibold">
                  <span>Show all items</span>
                  <span className="transition group-hover:translate-x-1">&rarr;</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Recommended Products */}
        {step === 3 && selectedCategory && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (availableApplications.length > 0) {
                        setSelectedAppId(null);
                      } else {
                        setSelectedCategorySlug(null);
                      }
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
                  >
                    <ArrowLeft className="h-3 w-3" />
                    Back
                  </button>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs font-medium text-slate-500">
                    Category: <strong className="text-slate-800">{selectedCategory.name}</strong>
                  </span>
                  {selectedAppId && selectedAppId !== "all" && (
                    <>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs font-medium text-slate-500">
                        Requirement:{" "}
                        <strong className="text-slate-800">
                          {availableApplications.find((a) => a.id === selectedAppId)?.label}
                        </strong>
                      </span>
                    </>
                  )}
                </div>

                <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                  Recommended Products
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {recommendedProducts.length > 0
                    ? `Showing ${recommendedProducts.length} certified solution${recommendedProducts.length > 1 ? "s" : ""} matching your selection:`
                    : "No specific products currently listed for this selection in the digital catalogue."}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedAppId(null)}
                  className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Change requirement
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl border border-sky-200 bg-sky-50 px-3.5 py-2 text-xs font-semibold text-sky-800 transition hover:bg-sky-100"
                >
                  Start over
                </button>
              </div>
            </div>

            <div className="mt-6">
              {recommendedProducts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {recommendedProducts.map((product) => (
                    <ProductCard key={`rec-${product.id}`} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                  <p className="text-sm font-semibold text-slate-800">
                    Custom Enterprise Specification Required
                  </p>
                  <p className="mt-1 text-xs text-slate-500 max-w-md mx-auto">
                    Solutions in {selectedCategory.name} are engineered directly for custom industrial and architectural specifications.
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-sky-800"
                    >
                      <RotateCcw className="h-3.5 w-3.5" /> Explore other categories
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
