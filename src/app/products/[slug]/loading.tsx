import { Skeleton } from "@/components/ui/Skeleton";

export default function ProductDetailLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-12">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-16 rounded" />
        <span className="text-slate-300">/</span>
        <Skeleton className="h-4 w-20 rounded" />
        <span className="text-slate-300">/</span>
        <Skeleton className="h-4 w-32 rounded" />
      </div>

      {/* Main 2-column layout */}
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
        {/* Left image skeleton */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="h-[380px] sm:h-[460px] w-full flex items-center justify-center bg-slate-50 rounded-2xl">
            <Skeleton className="h-64 w-64 rounded-2xl" />
          </div>
        </div>

        {/* Right info skeleton */}
        <div className="space-y-6">
          <div className="space-y-3">
            <Skeleton className="h-5 w-28 rounded-full" />
            <Skeleton className="h-10 w-3/4 rounded-xl" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <Skeleton className="h-4 w-4/6 rounded" />
          </div>

          <div className="flex gap-4 pt-2">
            <Skeleton className="h-12 w-44 rounded-full" />
            <Skeleton className="h-12 w-44 rounded-full" />
          </div>

          {/* Document section skeleton */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 space-y-3">
            <Skeleton className="h-5 w-40 rounded" />
            <Skeleton className="h-16 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
