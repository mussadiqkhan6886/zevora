export interface productType {
    _id: string
    name: string
    slug: string
    price: number
    salePrice: number | null
    onSale: boolean
    description: string
    category: string
    stock: number
    keywords: string[]
    sizes: string[] | null
    volume: string | null
    fragranceType: string | null
    images: string[]
    createdAt: string
    updatedAt: string
}

