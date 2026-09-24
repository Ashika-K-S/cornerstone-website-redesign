import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "menikini-cimex-eliminator",
    name: "Menikini Cimex Eliminator",
    slug: "menikini-cimex-eliminator",
    category: "Pest and Disinfecting Products",
    categorySlug: "pest-and-disinfecting-products",
    image: "/images/products/menikini-cimex-eliminator.webp",
    shortDescription: "Targeted pest-control solution developed for fast elimination and safer environments.",
    description:
      "Menikini Cimex Eliminator is designed for effective disinfection and pest management in spaces where hygiene, safety, and immediate control matter. The product supports facilities that need rapid, reliable treatment without compromising operational continuity.",
    specifications: [
      { label: "Application", value: "Residential, hospitality, healthcare" },
      { label: "Action", value: "Rapid suppression and surface sanitisation" },
      { label: "Use case", value: "Pest management and hygiene support" },
    ],
    featured: true,
  },
  {
    id: "polti-pest-solution",
    name: "Polti Pest Solution",
    slug: "polti-pest-solution",
    category: "Pest and Disinfecting Products",
    categorySlug: "pest-and-disinfecting-products",
    image: "/images/products/polti-pest-solution.webp",
    shortDescription: "Reliable insect control technology for health-sensitive spaces and high-use facilities.",
    description:
      "Polti solutions are built for challenging environments that require dependable, professional-grade pest control. They provide practical protection for homeowners, clinics, commercial kitchens, and service operations.",
    specifications: [
      { label: "Output", value: "Professional infestation control" },
      { label: "Environment", value: "Commercial and residential" },
      { label: "Coverage", value: "Focused room and perimeter treatment" },
    ],
  },
  {
    id: "bird-x-repeller",
    name: "Bird-X Repeller",
    slug: "bird-x-repeller",
    category: "Pest and Disinfecting Products",
    categorySlug: "pest-and-disinfecting-products",
    image: "/images/products/bird-x-repeller.webp",
    shortDescription: "Non-intrusive bird deterrent engineered to support cleaner outdoor and rooftop spaces.",
    description:
      "Bird-X offers a practical deterrent system suitable for sensitive building exteriors and public spaces. Designed to reduce nuisance birds without heavy maintenance or invasive interventions.",
    specifications: [
      { label: "System type", value: "Bird deterrent" },
      { label: "Best for", value: "Rooftops, facades, open spaces" },
      { label: "Benefits", value: "Cleaner facades and reduced risk of droppings" },
    ],
  },
  {
    id: "centralized-vacuum-cleaner",
    name: "Centralized Vacuum Cleaner",
    slug: "centralized-vacuum-cleaner",
    category: "Hygiene Products",
    categorySlug: "hygiene-products",
    image: "/images/products/centralized-vacuum-cleaner.webp",
    shortDescription: "High-capacity cleaning infrastructure for hospitals, hotels, and large public areas.",
    description:
      "Centralized vacuum systems simplify hygiene maintenance in large spaces by reducing manual effort and improving cleaning consistency. They are especially useful in healthcare, hospitality, and institutional environments with strict sanitation standards.",
    specifications: [
      { label: "Capacity", value: "High-volume cleaning system" },
      { label: "Applications", value: "Healthcare and hospitality" },
      { label: "Value", value: "Improved operational hygiene" },
    ],
    featured: true,
  },
  {
    id: "carbon-capture-unit",
    name: "Carbon Capture Unit",
    slug: "carbon-capture-unit",
    category: "Hygiene Products",
    categorySlug: "hygiene-products",
    image: "/images/products/carbon-capture-unit.webp",
    shortDescription: "Advanced capture technology that supports cleaner operations and sustainable indoor environments.",
    description:
      "This solution is engineered for facilities seeking improved air quality and greener operations. It supports better environmental control while promoting health and comfort across indoor spaces.",
    specifications: [
      { label: "Focus", value: "Air quality and sustainability" },
      { label: "Use case", value: "Modern commercial facilities" },
      { label: "Outcome", value: "Cleaner and healthier spaces" },
    ],
  },
  {
    id: "watergen-pure-water",
    name: "Watergen Pure Water",
    slug: "watergen-pure-water",
    category: "Water Solutions",
    categorySlug: "water-solutions",
    image: "/images/products/watergen-pure-water.webp",
    shortDescription: "Water generation and treatment system for safe, consistent hydration and supply.",
    description:
      "Watergen solutions support reliable access to clean water in environments where quality, continuity, and hygiene are non-negotiable. These units are suitable for offices, institutions, hospitality, and facilities seeking sustainable water independence.",
    specifications: [
      { label: "Output", value: "On-site purified water" },
      { label: "Ideal for", value: "Commercial, hospitality, institutional" },
      { label: "Benefit", value: "Dependable water quality" },
    ],
    featured: true,
  },
  {
    id: "cdi-water-treatment-plant",
    name: "CDI Water Treatment Plant",
    slug: "cdi-water-treatment-plant",
    category: "Water Solutions",
    categorySlug: "water-solutions",
    image: "/images/products/cdi-water-treatment-plant.webp",
    shortDescription: "Compact treatment plant for efficient, on-demand purification and filtration of water supply.",
    description:
      "The CDI treatment plant is designed to improve water quality in a compact footprint and is ideal for facility operators seeking practical and reliable treatment capacity. It supports clean water availability with minimal operational disruption.",
    specifications: [
      { label: "Plant type", value: "Compact treatment system" },
      { label: "Application", value: "Commercial and institutional use" },
      { label: "Outcome", value: "Filtered, safer water access" },
    ],
  },
  {
    id: "solar-roof-top-system",
    name: "Solar Roof Top System",
    slug: "solar-roof-top-system",
    category: "Power and Energy",
    categorySlug: "power-and-energy",
    image: "/images/products/solar-roof-top-system.webp",
    shortDescription: "Clean rooftop solar solution helping businesses reduce energy dependence and operating costs.",
    description:
      "Cornerstone’s solar rooftop offering supports modern energy planning with practical, scalable systems for commercial and industrial sites. The result is lower energy dependence and a stronger sustainability profile for growing businesses.",
    specifications: [
      { label: "System", value: "Rooftop solar installation" },
      { label: "Use case", value: "Commercial and industrial facilities" },
      { label: "Value", value: "Reduced energy spend" },
    ],
    featured: true,
  },
  {
    id: "fountain-of-life",
    name: "Fountain of Life",
    slug: "fountain-of-life",
    category: "Health and Wellness",
    categorySlug: "health-and-wellness",
    image: "/images/products/fountain-of-life.webp",
    shortDescription: "Wellness-focused product supporting clean hydration and modern health routines.",
    description:
      "Fountain of Life brings together water quality and wellness-conscious product design to improve everyday health outcomes. It is positioned for facilities and families looking for dependable hydration and wellness support.",
    specifications: [
      { label: "Category", value: "Health and wellness" },
      { label: "Use case", value: "Home, office, wellness spaces" },
      { label: "Experience", value: "Clean, convenient hydration" },
    ],
  },
  {
    id: "hpod",
    name: "hPod",
    slug: "hpod",
    category: "Health and Wellness",
    categorySlug: "health-and-wellness",
    image: "/images/products/hpod.webp",
    shortDescription: "Portable health and wellness technology for safer, more efficient environments.",
    description:
      "The hPod range addresses health and hygiene needs with straightforward, efficient product design. It combines modern functionality with practical use in environments seeking better wellness standards.",
    specifications: [
      { label: "Format", value: "Health technology" },
      { label: "Use case", value: "Wellness and hygiene-focused spaces" },
      { label: "Benefit", value: "Better everyday health support" },
    ],
  },
  {
    id: "emedica",
    name: "eMedica",
    slug: "emedica",
    category: "Health and Wellness",
    categorySlug: "health-and-wellness",
    image: "/images/products/emedica.webp",
    shortDescription: "Smart health support offering practical, accessible solutions for modern care environments.",
    description:
      "eMedica reflects Cornerstone’s emphasis on accessible, modern health technologies. It is designed for clinical, institutional, and lifestyle-oriented spaces where quality and ease of use matter.",
    specifications: [
      { label: "Category", value: "Digital health support" },
      { label: "Deployment", value: "Clinical and wellness settings" },
      { label: "Priority", value: "Convenience and quality of care" },
    ],
  },
  {
    id: "polyurea-coating",
    name: "Polyurea Coating",
    slug: "polyurea-coating",
    category: "Infrastructure",
    categorySlug: "infrastructure",
    image: "/images/products/polyurea-coating.webp",
    shortDescription: "Protective coating system for long-term durability in demanding infrastructure environments.",
    description:
      "Polyurea coating is designed for demanding surfaces requiring strong resilience, flexible performance, and reliable long-term coverage. It is suitable for infrastructure projects and industrial utility environments that need dependable protection.",
    specifications: [
      { label: "Type", value: "Protective coating system" },
      { label: "Best for", value: "Infrastructure and industrial surfaces" },
      { label: "Strength", value: "Durability and weather resilience" },
    ],
  },
  {
    id: "supreme-plumbing-system",
    name: "Supreme Plumbing System",
    slug: "supreme-plumbing-system",
    category: "Infrastructure",
    categorySlug: "infrastructure",
    image: "/images/products/supreme-plumbing-system.webp",
    shortDescription: "Comprehensive plumbing materials range for resilient, dependable building systems.",
    description:
      "Supreme plumbing materials support installation quality and long-term reliability in commercial and residential projects. The range is suited to projects demanding robust pressure handling and clean installation practices.",
    specifications: [
      { label: "Range", value: "Plumbing materials" },
      { label: "Use", value: "Construction and facility upgrades" },
      { label: "Priority", value: "Performance and longevity" },
    ],
  },
];

export const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
