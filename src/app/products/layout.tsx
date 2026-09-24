import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue | Cornerstone International",
  description:
    "Explore Cornerstone International's certified industrial sanitisation equipment, atmospheric water generation, commercial rooftop solar, and resilient infrastructure materials across India.",
  openGraph: {
    title: "Product Catalogue | Cornerstone International",
    description:
      "Explore Cornerstone International's certified industrial sanitisation equipment, atmospheric water generation, commercial rooftop solar, and resilient infrastructure materials across India.",
    type: "website",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
