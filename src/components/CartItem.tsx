"use client"

import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "../types";
import { useCart } from "../context/CartContext";

interface CartItemProps {
  item: CartItemType
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(item.product.id);
    } else {
      updateQuantity(item.product.id, newQuantity);
    }
  }

  return (
    <div className="flex items-center space-x-4 py-6 border-b border-gray-200">
      {/* Product Image */}
      <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
        <img
          src={item.product.images[0] || "/placeholder.svg"}
          alt={item.product.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/product/${item.product.id}`}
          className="text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors duration-200"
        >
          {item.product.name}
        </Link>
        <div className="mt-1 space-y-1">
          {item.selectedSize && (
            <p className="text-sm text-gray-600">
              Size: <span className="font-medium">{item.selectedSize}</span>
            </p>
          )}
          {item.selectedColor && (
            <p className="text-sm text-gray-600">
              Color: <span className="font-medium">{item.selectedColor}</span>
            </p>
          )}
          <p className="text-lg font-semibold text-gray-900">${item.product.price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Total Price */}
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-900">${(item.product.price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.product.id)}
        className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}

export default CartItem;
