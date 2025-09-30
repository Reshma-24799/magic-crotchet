import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MC</span>
            </div>
            <span className="font-serif text-xl font-semibold text-gray-900">Magic Crochet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary-600 border-b-2 border-primary-600 pb-1"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-600  hover:text-primary-500 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
                )
              }
            </Link>

            <button   
              className="md:hidden p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </button>
          </div>
        </div>

        { isOpen && (
            <div className="md:hidden border-t border-gray-200 px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-primary-600 "
                        : "text-gray-700 hover:text-primary-600"
                    }`}
                  >
                    {item.name}
                  </Link> 
                ))}
              </div>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;
