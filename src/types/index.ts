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
};
export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedColor?: string
};
export type SortOption = "newest" | "price-low" | "price-high" | "bestselling";
export type CategoryFilter = "all" | "clothing" | "accessories" | "toys" | "home-living";

export interface CartContextType {
  items: CartItem[],
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void
  removeFromCart: (productId: string) => void,
  updateQuantity: (productId: string, quantity: number) => void,
  clearCart: () => void,
  getTotalItems: () => number,
  getTotalPrice: () => number
}