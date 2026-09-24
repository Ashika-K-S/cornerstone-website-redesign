"use client";

import { useState } from "react";
import Image from "next/image";
import { Package } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fallbackTitle?: string;
}

export function ProductImage({
  src,
  alt,
  fill = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "object-contain p-4",
  fallbackTitle,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 p-6 text-center text-slate-400">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
          <Package className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="mt-2 text-xs font-semibold text-slate-500">
          {fallbackTitle || alt || "Product Image"}
        </span>
        <span className="text-[10px] text-slate-400">Image available upon enquiry</span>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && !priority && (
        <div
          className="absolute inset-0 animate-pulse bg-slate-100/70"
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        loading={priority ? undefined : "lazy"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${
          isLoaded || priority ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
