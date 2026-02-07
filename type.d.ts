export interface Variant {
  label: string;
  sku: string;
  stock: number;
}

export interface productType {
  _id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number | null;
  onSale?: boolean;
  category: string;
  description: string;
  keywords: string[];
  images: string[];
  hasVariants: boolean;
  fragranceType?: string | null;
  variants: Variant[];
}
