"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import type { CategoryFilter } from "../types";

interface FilterSidebarProps {
    selectedCategory: CategoryFilter;
    onCategoryChange:( category: CategoryFilter) => void;
    priceRange: [number, number];
    onPriceRangeChange: (range: [number, number]) => void;
    isOpen: boolean;
    // clearFilters: () => void;
    onClose: () => void;
};

const FilterSidebar = ({
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    isOpen,
    onClose,
}: FilterSidebarProps) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isPriceOpen, setIsPriceOpen] = useState(true);
    const categories = [
        { value: "all" as CategoryFilter, label: "All Products", count: 8 },
        { value: "clothing" as CategoryFilter, label: "Clothing", count: 2 },
        { value: "accessories" as CategoryFilter, label: "Accessories", count: 2 },
        { value: "toys" as CategoryFilter, label: "Toys", count: 1 },
        { value: "home-living" as CategoryFilter, label: "Home & Living", count: 3 },
    ];
    
    const handlePriceChange = ( type: "min" | "max", value: string) => {
        const numValue = Number.parseFloat(value) || 0;
        if (type === "min") {
            onPriceRangeChange([numValue, priceRange[1]])
        } else {
            onPriceRangeChange([priceRange[0], numValue])
        }
    }
    return (
        <>
        {/* mobile overlay */}
        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose}>
                <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Filters
                            </h2>
                            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
                                <X className="w-5 h-5" />"
                            </button>
                        </div>
                    </div>
                    <FilterContent
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={onCategoryChange}
                        isCategoryOpen={isCategoryOpen}
                        setIsCategoryOpen={setIsCategoryOpen}
                        priceRange={priceRange}
                        handlePriceChange={handlePriceChange}
                        isPriceOpen={isPriceOpen}
                        setIsPriceOpen={setIsPriceOpen}
                    />
                </div>
            </div>
        )}
        {/* desktop sidebar */}
        <div className="hidden lg:block w-64 bg-white rounded-lg shadow-sm border border-gray-200 h-fit sticky top-20">
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            </div>
            <FilterContent
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
                isCategoryOpen={isCategoryOpen}
                setIsCategoryOpen={setIsCategoryOpen}
                priceRange={priceRange}
                handlePriceChange={handlePriceChange}
                isPriceOpen={isPriceOpen}
                setIsPriceOpen={setIsPriceOpen}
            />
        </div>
        </>
    )
}
interface FilterContentProps {
  categories: Array<{ value: CategoryFilter; label: string; count: number }>
  selectedCategory: CategoryFilter
  onCategoryChange: (category: CategoryFilter) => void
  isCategoryOpen: boolean
  setIsCategoryOpen: (open: boolean) => void
  priceRange: [number, number]
  handlePriceChange: (type: "min" | "max", value: string) => void
  isPriceOpen: boolean
  setIsPriceOpen: (open: boolean) => void
};

const FilterContent = ({
    categories,
    selectedCategory,
    onCategoryChange,
    isCategoryOpen,
    setIsCategoryOpen,
    priceRange,
    handlePriceChange,
    isPriceOpen,
    setIsPriceOpen,
}: FilterContentProps) => {
    return (
         <div className="p-4 space-y-6">
      {/* Categories */}
      <div>
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Categories
          {isCategoryOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {isCategoryOpen && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.value}
                  checked={selectedCategory === category.value}
                  onChange={() => onCategoryChange(category.value)}
                  className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700 flex-1">{category.label}</span>
                <span className="text-xs text-gray-500">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          Price Range
          {isPriceOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {isPriceOpen && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0] || ""}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1] || ""}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="text-xs text-gray-500">
              Current range: ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
        )}
      </div>
    </div>
    )
}

export default FilterSidebar;