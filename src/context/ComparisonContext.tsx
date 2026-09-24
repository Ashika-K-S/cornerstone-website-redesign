"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { products } from "@/data/products";

interface ComparisonContextType {
  selectedSlugs: string[];
  addToCompare: (slug: string) => boolean;
  removeFromCompare: (slug: string) => void;
  toggleCompare: (slug: string) => void;
  clearCompare: () => void;
  isCompared: (slug: string) => boolean;
  warningMessage: string | null;
  dismissWarning: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

const STORAGE_KEY = "cornerstone_compared_products";
const MAX_COMPARE_LIMIT = 3;

export function ComparisonProvider({ children }: { children: React.ReactNode }) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSelectedSlugs(parsed.slice(0, MAX_COMPARE_LIMIT));
        }
      }
    } catch {
      // Ignore localStorage errors
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save to localStorage when updated
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedSlugs));
    } catch {
      // Ignore localStorage write errors
    }
  }, [selectedSlugs, isInitialized]);

  // Auto-dismiss warning after 4.5 seconds
  useEffect(() => {
    if (!warningMessage) return;
    const timer = setTimeout(() => {
      setWarningMessage(null);
    }, 4500);
    return () => clearTimeout(timer);
  }, [warningMessage]);

  const addToCompare = (slug: string): boolean => {
    if (selectedSlugs.includes(slug)) {
      return true;
    }

    // Limit check
    if (selectedSlugs.length >= MAX_COMPARE_LIMIT) {
      setWarningMessage(`Comparison is limited to a maximum of ${MAX_COMPARE_LIMIT} products.`);
      return false;
    }

    // Meaningful comparison check: ensure products belong to the same sector/category family
    if (selectedSlugs.length > 0) {
      const firstProduct = products.find((p) => p.slug === selectedSlugs[0]);
      const targetProduct = products.find((p) => p.slug === slug);

      if (firstProduct && targetProduct && firstProduct.categorySlug !== targetProduct.categorySlug) {
        setWarningMessage(
          `To ensure a meaningful comparison, select solutions from the same industry division (${firstProduct.category}).`
        );
        return false;
      }
    }

    setWarningMessage(null);
    setSelectedSlugs((prev) => [...prev, slug]);
    return true;
  };

  const removeFromCompare = (slug: string) => {
    setSelectedSlugs((prev) => prev.filter((s) => s !== slug));
    setWarningMessage(null);
  };

  const toggleCompare = (slug: string) => {
    if (selectedSlugs.includes(slug)) {
      removeFromCompare(slug);
    } else {
      addToCompare(slug);
    }
  };

  const clearCompare = () => {
    setSelectedSlugs([]);
    setWarningMessage(null);
  };

  const isCompared = (slug: string) => selectedSlugs.includes(slug);

  const dismissWarning = () => setWarningMessage(null);

  return (
    <ComparisonContext.Provider
      value={{
        selectedSlugs,
        addToCompare,
        removeFromCompare,
        toggleCompare,
        clearCompare,
        isCompared,
        warningMessage,
        dismissWarning,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
}
