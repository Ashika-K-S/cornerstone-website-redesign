"use client";

import { Check, Plus, Scale } from "lucide-react";
import { useComparison } from "@/context/ComparisonContext";

interface CompareButtonProps {
  productSlug: string;
  productName?: string;
  className?: string;
  variant?: "compact" | "full";
}

export function CompareButton({
  productSlug,
  productName,
  className = "",
  variant = "compact",
}: CompareButtonProps) {
  const { isCompared, toggleCompare } = useComparison();
  const active = isCompared(productSlug);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCompare(productSlug);
  };

  const accessibleLabel = active
    ? `Remove ${productName || "product"} from comparison`
    : `Add ${productName || "product"} to comparison`;

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={active}
        aria-label={accessibleLabel}
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
          active
            ? "border-sky-600 bg-sky-50 text-sky-800 shadow-2xs font-bold"
            : "border-slate-200 bg-white/95 text-slate-600 hover:border-slate-300 hover:text-slate-900 hover:bg-white backdrop-blur-xs"
        } ${className}`}
      >
        {active ? (
          <>
            <Check className="h-3 w-3 text-sky-700" />
            <span>Comparing</span>
          </>
        ) : (
          <>
            <Plus className="h-3 w-3 text-slate-400" />
            <span>Add to Compare</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      aria-label={accessibleLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 ${
        active
          ? "border-sky-600 bg-sky-50 text-sky-900 shadow-xs"
          : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
      } ${className}`}
    >
      {active ? (
        <>
          <Check className="h-4 w-4 text-sky-700" />
          <span>Selected for comparison</span>
        </>
      ) : (
        <>
          <Scale className="h-4 w-4 text-slate-500" />
          <span>Add to Compare</span>
        </>
      )}
    </button>
  );
}
