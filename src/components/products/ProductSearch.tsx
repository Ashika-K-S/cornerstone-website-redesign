"use client";

import { Search, X } from "lucide-react";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
}

export function ProductSearch({
  value,
  onChange,
  onClear,
  placeholder = "Search products by name, category, or description...",
  className = "",
}: ProductSearchProps) {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else {
      onChange("");
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <label htmlFor="product-search-input" className="sr-only">
        Search products
      </label>
      <div className="relative flex items-center">
        <div className="pointer-events-none absolute left-4 flex items-center justify-center text-slate-400">
          <Search className="h-5 w-5" aria-hidden="true" />
        </div>

        <input
          id="product-search-input"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search products"
          className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100"
        />

        {value.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear product search"
            className="absolute right-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
