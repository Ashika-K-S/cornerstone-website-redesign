import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-600">
        No products match the selected category.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
