export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  shortDescription: string;
  description: string;
  specifications: ProductSpecification[];
  featured?: boolean;
};

export type BrochureItem = {
  id: string;
  title: string;
  description: string;
  file: string;
  image: string;
};

export type VideoItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  poster: string;
  videoUrl: string;
};
