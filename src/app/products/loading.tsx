import { ProductCardSkeleton } from "@/components/products/ProductCardSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ProductsLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-10">
      {/* Header skeleton */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <Skeleton className="h-4 w-28 rounded-full" />
        <Skeleton className="h-10 w-72 rounded-xl" />
        <Skeleton className="h-4 w-full max-w-xl rounded" />
      </div>

      {/* Controls skeleton */}
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Skeleton className="h-12 w-full sm:max-w-md rounded-2xl" />
          <Skeleton className="h-9 w-36 rounded-full" />
        </div>

        {/* Category pills skeleton */}
        <div className="flex flex-wrap gap-2.5">
          <Skeleton className="h-9 w-28 rounded-full" />
          <Skeleton className="h-9 w-36 rounded-full" />
          <Skeleton className="h-9 w-32 rounded-full" />
          <Skeleton className="h-9 w-40 rounded-full" />
          <Skeleton className="h-9 w-28 rounded-full" />
        </div>
      </div>

      {/* Product grid skeleton */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 pt-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={`skeleton-${i}`} />
        ))}
      </div>
    </main>
  );
}
