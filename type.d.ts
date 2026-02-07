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

export type CartItem = {
  productId: string
  name: string
  slug: string

  image: string

  variant?: {
    label: string
    price: number
  }

  price: number        // base price
  salePrice: number | null
  onSale: boolean

  finalPrice: number   // calculated once when added
  quantity: number
}

