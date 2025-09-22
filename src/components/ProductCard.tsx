"use client"

import type React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
    product: Product,
    className?: string
}

const ProductCard = ({product, className = ""}: ProductCardProps) => {
    const {addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
    }
    return (
        <div className={`group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
            <Link to={`/product/${product.id}`}>
                <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                    <img
                        src={product.images[0] || "/plceholder.png"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.featured && (
                        <span className="bg-primary-600 text-white text-xs pz-2 py-1 rounded-full">
                            Featured
                        </span>
                    )}
                    {product.bestseller && (
                        <span className="bg-primary-600 text-white text-xs pz-2 py-1 rounded-full">
                            Bestseller
                        </span>
                    )}
                </div>
                <button className="absolute top-2right-2 bg-white p-2 rounded-full 
                shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-200">
                        {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                        {product.materials.slice(0,2).map((material, index) =>(
                            <span 
                                key={index} 
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                                {material}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900">
                            ${product.price}
                        </span>
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center space-x-1 bg-primary-600  text-white text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            <span>Add</span>
                        </button>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default ProductCard;