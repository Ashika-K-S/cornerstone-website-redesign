import { Skeleton } from "@/components/ui/Skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 shadow-xs">
      {/* Image skeleton */}
      <div className="relative h-64 w-full border-b border-slate-200 bg-slate-50 p-6 flex items-center justify-center">
        <Skeleton className="h-44 w-44 rounded-2xl" />
      </div>

      {/* Content skeleton */}
      <div className="flex flex-1 flex-col p-5 space-y-3">
        {/* Category pill */}
        <Skeleton className="h-3 w-24 rounded-full" />

        {/* Title */}
        <Skeleton className="h-6 w-3/4 rounded-lg" />

        {/* Short description */}
        <div className="space-y-2 pt-1 flex-1">
          <Skeleton className="h-3.5 w-full rounded" />
          <Skeleton className="h-3.5 w-5/6 rounded" />
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-4 w-16 rounded" />
        </div>
      </div>
    </div>
  );
}
