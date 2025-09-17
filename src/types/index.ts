export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: "clothing" | "accessories" | "toys" | "home-living"
  materials: string[]
  careInstructions: string[]
  sizes?: string[]
  colors?: string[]
  inStock: boolean
  featured: boolean
  bestseller: boolean
}