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
    // categories,
    // selectedCategory,
    // onCategoryChange,
    // isCategoryOpen,
    // setIsCategoryOpen,
    // priceRange,
    // handlePriceChange,
    // isPriceOpen,
    // setIsPriceOpen,
}: FilterContentProps) => {
    return (
        <div className="p-4 space-y-6">
        </div>
    )
}

export default FilterSidebar;