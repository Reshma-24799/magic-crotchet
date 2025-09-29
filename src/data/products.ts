import type { Product } from "../types"

export const products: Product[] = [
  {
    id: "1",
    name: "Hand-Crocheted Baby Beanie: Soft Ribbed Cuffed Hat",
    description:
      "A beautifully handcrafted beanie made with premium wool yarn. Perfect for chilly evenings and casual outings. Features intricate cable patterns and a comfortable relaxed fit.",
    price: 29.99,
    images: ["/beanie-1.webp", "/beanie-2.webp", ],
    category: "clothing",
    materials: ["100% Merino Wool", "Hypoallergenic"],
    careInstructions: ["Hand wash in cold water", "Lay flat to dry", "Do not bleach"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Dusty Rose", "Sage Green"],
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: "2",
    name: "Chunky Infinity Scarf",
    description:
      "Luxuriously soft infinity scarf crocheted with chunky yarn. Provides warmth and style for any winter outfit. Can be worn multiple ways for versatile styling.",
    price: 34.99,
    images: ["/scarf1.webp"],
    category: "accessories",
    materials: ["Chunky Acrylic Yarn", "Machine Washable"],
    careInstructions: ["Machine wash cold", "Tumble dry low", "Do not iron"],
    colors: ["Charcoal Gray", "Burgundy", "Navy Blue", "Cream"],
    inStock: true,
    featured: true,
    bestseller: false,
  },
  {
    id: "3",
    name: "Amigurumi Teddy Bear",
    description:
      "Adorable handmade teddy bear perfect for children and collectors. Crafted with love using soft cotton yarn and filled with hypoallergenic stuffing. Each bear has its own unique personality.",
    price: 80.99,
    images: ["/teddy-brown.webp"],
    category: "toys",
    materials: ["100% Cotton Yarn", "Hypoallergenic Stuffing", "Safety Eyes"],
    careInstructions: ["Spot clean only", "Air dry", "Brush gently to maintain texture"],
    colors: ["Brown", "Cream", "Gray"],
    inStock: true,
    featured: false,
    bestseller: true,
  },
  {
    id: "4",
    name: "Cozy Blanket",
    description:
      "Classic and cozy blanket with heart. It is crocheted to create a cozy throw perfect for snuggling. A timeless piece that brings warmth to any space.",
    price: 78.99,
    images: ["/blanket.webp"],
    category: "home-living",
    materials: ["Fluffy Yarn", "Machine Washable"],
    careInstructions: ["Machine wash warm", "Tumble dry medium", "Do not bleach"],
    colors: ["Pastels", "Earth Tones"],
    inStock: true,
    featured: false,
    bestseller: true,
  },
  {
    id: "5",
    name: "Granny Square Blanket",
    description:
      "Classic granny square blanket in vibrant colors. Each square is carefully crocheted and joined to create a cozy throw perfect for snuggling. A timeless piece that brings warmth and color to any space.",
    price: 78.99,
    images: ["/colorful-granny-square-crochet-blanket.jpg", "/granny-square-pattern-detail.jpg", "/cozy-blanket-on-sofa.jpg"],
    category: "home-living",
    materials: ["Acrylic Yarn Blend", "Machine Washable"],
    careInstructions: ["Machine wash warm", "Tumble dry medium", "Do not bleach"],
    colors: ["Rainbow", "Pastels", "Earth Tones"],
    inStock: true,
    featured: false,
    bestseller: true,
  },
  {
    id: "6",
    name: "Amigurumi Bunny",
    description:
      "Adorable handmade bunny perfect for children and collectors. Crafted with love using soft cotton yarn and filled with hypoallergenic stuffing. Each bear has its own unique personality.",
    price: 80.99,
    images: ["/bunny-green.webp"],
    category: "toys",
    materials: ["100% Cotton FluffyYarn", "Hypoallergenic Stuffing", "Safety Eyes"],
    careInstructions: ["Spot clean only", "Air dry", "Brush gently to maintain texture"],
    colors: ["Brown", "Cream", "Gray"],
    inStock: true,
    featured: false,
    bestseller: true,
  },
  {
    id: "7",
    name: "Checked Beanie Hat",
    description:
      "Trendy checked beanie perfect for casual wear. Soft and comfortable with just the right amount of stretch. Great for bad hair days or adding a cozy touch to any outfit.",
    price: 22.99,
    images: [
      "/checkedBeanie-1.webp",
      "/checkedBeanie-2.webp",
      "/checkedBeanie-3.webp",
    ],
    category: "clothing",
    materials: ["Soft Acrylic Yarn", "Stretchy Ribbed Band"],
    careInstructions: ["Machine wash cold", "Reshape while damp", "Air dry"],
    colors: ["Gray", "Black", "Burgundy", "Mustard"],
    inStock: true,
    featured: false,
    bestseller: true,
  },
  {
    id: "8",
    name: "Baby Cardigan Set",
    description:
      "Adorable 3-piece baby set including cardigan, hat, and booties. Made with the softest baby yarn in gentle colors. Perfect gift for new parents or baby showers.",
    price: 52.99,
    images: [
      "/babycardigan.webp",
    
    ],
    category: "clothing",
    materials: ["Baby Soft Yarn", "Hypoallergenic", "Machine Washable"],
    careInstructions: ["Machine wash gentle cycle", "Use baby detergent", "Tumble dry low"],
    sizes: ["0-3M", "3-6M", "6-12M"],
    colors: ["Pink", "Blue", "Yellow", "White"],
    inStock: true,
    featured: true,
    bestseller: false,
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured)
}

export const getBestsellingProducts = (): Product[] => {
  return products.filter((product) => product.bestseller)
}
