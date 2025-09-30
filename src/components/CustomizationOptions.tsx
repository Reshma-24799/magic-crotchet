"use client"

interface CustomizationOptionsProps {
  sizes?: string[]
  colors?: string[]
  selectedSize?: string
  selectedColor?: string
  onSizeChange: (size: string) => void
  onColorChange: (color: string) => void
}

const CustomizationOptions = ({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}: CustomizationOptionsProps) => {
  return (
    <div className="space-y-6">
      {/* Size Selection */}
      {sizes && sizes.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedSize === size
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color Selection */}
      {colors && colors.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedColor === color
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-50"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomizationOptions;
