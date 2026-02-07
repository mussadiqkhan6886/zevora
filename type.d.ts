interface Variant {
  label: string;
  sku: string;
  price: number;
  salePrice?: number | null;
  onSale?: boolean;
  stock: number;
  attributes: {
    size: string | null;
    volume: string | null;
  };
}

export interface productType {
  _id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  keywords: string[];
  images: string[];
  hasVariants: boolean;
  variantType: "size" | "volume" | null;
  fragranceType?: string | null;
  variants: Variant[];
}
