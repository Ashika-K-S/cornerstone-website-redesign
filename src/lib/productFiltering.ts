import type { Product } from "@/types/product";

export interface FilterOptions {
  query?: string;
  categorySlug?: string;
  applicationId?: string;
}

export interface ApplicationRequirement {
  id: string;
  label: string;
  description: string;
  productIds: string[];
}

/**
 * Category to application requirement mapping based strictly on existing Cornerstone product specifications.
 */
export const categoryApplications: Record<string, ApplicationRequirement[]> = {
  "pest-and-disinfecting-products": [
    {
      id: "rapid-steam-sanitisation",
      label: "Rapid Dry Steam Sanitisation & Disinfection",
      description: "Non-chemical dry steam suppression for healthcare, hospitality, and commercial spaces.",
      productIds: ["menikini-cimex-eliminator"],
    },
    {
      id: "clinical-infestation-control",
      label: "Focused Infestation & Insect Control",
      description: "Targeted thermal eradication for health-sensitive facilities and residential rooms.",
      productIds: ["polti-pest-solution"],
    },
    {
      id: "outdoor-bird-deterrence",
      label: "Outdoor Facade & Rooftop Bird Deterrence",
      description: "Non-invasive electronic deterrents protecting building envelopes and open spaces.",
      productIds: ["bird-x-repeller"],
    },
  ],
  "hygiene-products": [
    {
      id: "central-vacuum",
      label: "High-Capacity Central Vacuum Systems",
      description: "Built-in cleaning infrastructure for hospitals, hotels, and large public spaces.",
      productIds: ["centralized-vacuum-cleaner"],
    },
    {
      id: "air-carbon-capture",
      label: "Indoor Air Quality & Carbon Capture",
      description: "Advanced filtration technology promoting healthier indoor commercial environments.",
      productIds: ["carbon-capture-unit"],
    },
  ],
  "power-and-energy": [
    {
      id: "rooftop-solar",
      label: "Commercial & Industrial Rooftop Solar Installations",
      description: "Reliable rooftop photovoltaic power generation reducing site energy operating costs.",
      productIds: ["solar-roof-top-system"],
    },
  ],
  "health-and-wellness": [
    {
      id: "health-screening-kiosk",
      label: "Preventive Biometric Health Screening",
      description: "Stationary health pods enabling non-invasive vital checks and wellness screening.",
      productIds: ["hpod"],
    },
    {
      id: "electrotherapy-wellness",
      label: "Digital Microcirculation & Electrotherapy",
      description: "Modern wellness technology supporting therapy routines in clinical and home environments.",
      productIds: ["emedica"],
    },
    {
      id: "antioxidant-hydration",
      label: "Natural Antioxidant & Wellness Hydration",
      description: "Specialist natural spruce extract formulations for everyday antioxidant support.",
      productIds: ["fountain-of-life"],
    },
  ],
  "infrastructure": [
    {
      id: "protective-coating",
      label: "High-Durability Protective Surface Coating",
      description: "Weather-resilient polyurea coatings for roofs, civil infrastructure, and heavy-use floors.",
      productIds: ["polyurea-coating"],
    },
    {
      id: "commercial-plumbing",
      label: "Commercial Building Plumbing & Piping Materials",
      description: "Comprehensive range of pressure pipes, overhead tanks, and architectural fittings.",
      productIds: ["supreme-plumbing-system"],
    },
  ],
  "water-solutions": [
    {
      id: "atmospheric-water",
      label: "On-Site Atmospheric Water Generation",
      description: "Plug-and-play drinking water generators creating pure mineral water directly from air.",
      productIds: ["watergen-pure-water"],
    },
    {
      id: "water-treatment-plant",
      label: "Compact Water Deionization & Treatment Plants",
      description: "High-efficiency CDI treatment systems delivering continuous pure water access.",
      productIds: ["cdi-water-treatment-plant"],
    },
  ],
};

/**
 * Filter products by search text (name, category, shortDescription, specifications).
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return products;

  return products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(trimmed);
    const matchCategory = p.category.toLowerCase().includes(trimmed);
    const matchShortDesc = p.shortDescription.toLowerCase().includes(trimmed);
    const matchDesc = p.description.toLowerCase().includes(trimmed);
    const matchSpecs = p.specifications?.some(
      (s) =>
        s.label.toLowerCase().includes(trimmed) ||
        s.value.toLowerCase().includes(trimmed)
    );

    return matchName || matchCategory || matchShortDesc || matchDesc || matchSpecs;
  });
}

/**
 * Filter products by category slug.
 */
export function getProductsByCategory(products: Product[], categorySlug: string): Product[] {
  if (!categorySlug || categorySlug === "all") return products;
  return products.filter((p) => p.categorySlug === categorySlug);
}

/**
 * Count how many products belong to each category.
 */
export function getCategoryProductCounts(products: Product[]): Record<string, number> {
  const counts: Record<string, number> = { all: products.length };
  for (const product of products) {
    counts[product.categorySlug] = (counts[product.categorySlug] || 0) + 1;
  }
  return counts;
}

/**
 * Combined filter for search, category, and optional application requirement.
 */
export function filterProducts(products: Product[], options: FilterOptions): Product[] {
  let result = products;

  if (options.categorySlug && options.categorySlug !== "all") {
    result = getProductsByCategory(result, options.categorySlug);
  }

  if (options.query) {
    result = searchProducts(result, options.query);
  }

  if (options.applicationId && options.categorySlug) {
    const appList = categoryApplications[options.categorySlug] || [];
    const targetApp = appList.find((a) => a.id === options.applicationId);
    if (targetApp && targetApp.productIds.length > 0) {
      result = result.filter((p) => targetApp.productIds.includes(p.id));
    }
  }

  return result;
}
