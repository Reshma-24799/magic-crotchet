import type React from "react"
import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";
import type { CartItem, Product, CartContextType } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartState {
    items: CartItem[];
}

type CartAction =
    | { type: "ADD_TO_CART"; 
        payload: { product: Product; quantity: number; size?: string; color?: string }}
    | { type: "REMOVE_FROM_CART"; payload: { productId: string}}
    | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number }}
    | { type: "CLEAR_CART" };

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch(action.type) {
        case "ADD_TO_CART" : {
            const { product, quantity, size, color } = action.payload;
            const existingItemIndex = state.items.findIndex(
                item => item.product.id === product.id && item.selectedSize === size &&
                        item.selectedColor === color
            );
            // If item exists, update quantity
            if(existingItemIndex > -1){
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += quantity;
                return { ...state, items: updatedItems};
            } else {
                const newItem: CartItem = {
                    product,
                    quantity,
                    selectedSize: size,
                    selectedColor: color
                };
                return {...state, items: [...state.items, newItem]};
            }
        }
        case "REMOVE_FROM_CART": {
            const { productId } = action.payload;
            const filteredItems = state.items.filter( (item) =>
                item.product.id !== productId);
            return {...state, items: filteredItems}
        }
        case "UPDATE_QUANTITY": {
            const { productId, quantity } = action.payload;
            // remove if quantity is zero or less
            if(quantity <= 0) {
                return cartReducer(state, {type: "REMOVE_FROM_CART", payload: { productId}})
            }
            const updatedItems = state.items.map((item) => (
                item.product.id === productId ? {...item, quantity} : item
            ));
            return {...state, items: updatedItems};
        }
        case "CLEAR_CART": {
            return {...state, items: []};
        }
        default:
            return state;
    }
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Use the custom hook to manage persistence
    // We expect the hook to return the stored state (or default) and a setter
    const [savedCart, setSavedCart] = useLocalStorage<CartState>("cart-storage", { items: [] });

    // Initialize the reducer with the saved cart state
    const [state, dispatch] = useReducer(cartReducer, savedCart);

    // Sync reducer state back to local storage whenever it changes
    useEffect(() => {
        setSavedCart(state);
    }, [state, setSavedCart]);

    const addToCart = (product: Product, quantity:number = 1, size?: string, color?: string) => {
        dispatch({type: "ADD_TO_CART", payload: { product, quantity, size, color }});
    };
    const removeFromCart = (productId: string) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { productId } })
    };
    const updateQuantity = (productId: string, quantity: number) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } })
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    };
    const getTotalItems = () : number => {
        return state.items.reduce((total, item) => total+item.quantity,0);
    }
    const getTotalPrice = () : number => {
        return state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
    const value: CartContextType = {
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if(context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}