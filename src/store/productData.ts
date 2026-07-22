export type Variant = {
  name: string;
  price: number;
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  images: string[];
  basePrice: number;
  variants: Variant[];
  finishes: string[];
  available: boolean;
  visible: boolean;
  featured: boolean;
  badge?: string;
  rating: number;
  reviews: number;
  turnaround: string;
  updatedAt?: string;
  createdAt?: string;
};

export const defaultProductCategories = [
  'T-Shirt Printing',
  'Stickers & Labels',
  'Posters',
  'Banners',
  'Business Cards',
  'Packaging',
  'Engraving',
  'Wall Canvases',
  'Promotional Items',
];

export const formatCurrency = (price: number) =>
  new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace('GH₵', 'GH₵ ');
