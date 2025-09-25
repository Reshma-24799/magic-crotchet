"use client"

import { useState, useMemo } from "react";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import type { SortOption, CategoryFilter } from "../types";
import FilterSidebar from "../components/FilterSidebar";

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
    const [sortBy, setSortBy] = useState<SortOption>("newest");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const sortOptions = [
        { value: "newest" as SortOption, label: "Newest" },
        { value: "price-low" as SortOption, label: "Price: Low to High" },
        { value: "price-high" as SortOption, label: "Price: High to Low" },
        { value: "bestselling" as SortOption, label: "Bestselling" },
    ];

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products;
        // Filter by category
        if(selectedCategory !== "all") {
            filtered = filtered.filter((product) => product.category === selectedCategory);
        }
        // Filter by price range
        filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);
        // Sort products
        const sorted = [...filtered].sort((a,b) => {
            switch(sortBy) {
                // case "newest":
                //     return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                case "bestselling":
                    return b.bestseller === a.bestseller ? 0 : b.bestseller ? 1 : -1;
                    default:
                        return 0;
            }
        });
        return sorted;
    }, [selectedCategory, sortBy, priceRange]);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Shop All Products</h1>
                    <p className="text-lg text-gray-600">
                         Discover our complete collection of handmade crochet items, each crafted with love and attention to detail.
                    </p>
                </div>
                {/* Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        {/* Mobile Filter button */}
                        <button
                            onClick={(() => setIsFilterOpen(!isFilterOpen))}
                            className="lg:hidden flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                        >
                            <Filter className="w-4 h-4" />
                            <span>Filters</span>
                        </button>

                        {/* Results Count */}
                        <span className="text-sm text-gray-600">
                            {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? "product" : "products"} found
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Sort dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                 className="appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))
                                }
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>

                        {/* View mode toggle */}
                        <div className="hidden sm:flex items-center bg-white border border-gray-300 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded ${viewMode === "grid" ? "bg-primary-600 text-white" : "text-gray-600 hover:text-gray-900"}`}
                            >
                                <Grid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded ${viewMode === "list" ? "bg-primary-600 text-white" : "text-gray-600 hover:text-gray-900"}`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                     {/* Sidebar */}
                    <FilterSidebar
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        priceRange={priceRange}
                        onPriceRangeChange={setPriceRange}
                        isOpen={isFilterOpen}
                        onClose={() => setIsFilterOpen(false)}
                    />

                    {/* Products Grid */}
                    <div className="flex-1">
                        {filteredAndSortedProducts.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Filter className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                                <button
                                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                                    onClick={() => {
                                        setSelectedCategory("all")
                                        setPriceRange([0, 100])
                                    }}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        ): (
                            <div
                                className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}
                            >
                                {filteredAndSortedProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        className={viewMode === "list" ? "flex flex-row" : ""}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop;