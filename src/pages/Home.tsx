import { Link } from "react-router-dom"
import { ArrowRight, Star, Truck, Shield, Heart } from "lucide-react"
import ProductCard from "../components/ProductCard"
import { getFeaturedProducts, getBestsellingProducts } from "../data/products" 

const Home = () => {
    const featuredProducts = getFeaturedProducts();
    const bestSellingProducts = getBestsellingProducts();

    return(
        <div className="min-h-screen">
            <section className="relative bg-gradient-to-r from-primary-100 to-secondary-100 py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 text-balance">
                                Handcrafted with <span className="text-primary-600">Love</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 text-pretty">
                                Discover our collection of beautiful, handmade crochet items. Each piece is carefully crafted with
                                premium materials and attention to detail that brings warmth to your everyday life.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                to="/shop" 
                                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 group"
                            >
                                Shop Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-primary-600 font-medium py-3 px-8 rounded-lg border border-primary-300 transition-colors duration-200"
                            >
                                Our Story
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/Viral-Shawl.webp"
                            alt="Beautiful handmade crochet sweater"
                            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_,i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-900">500+ Happy Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary-100 text-primary-600 rounded-lg"> 
                                <Heart className="w-6 h-6" />   
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Handmade with Love</h3>
                            <p className="text-gray-600">
                                Every piece is carefully crafted by skilled artisans using traditional techniques passed down through
                                generations.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Materials</h3>
                            <p className="text-gray-600">
                                We use only the finest yarns and materials, ensuring durability and comfort in every product.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
                            <p className="text-gray-600">
                                Free shipping on orders over 50 PLN. Your handmade treasures will arrive safely and quickly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Featured Products</h2>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                            Discover our most popular handcrafted pieces, each one unique and made with exceptional care.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                         {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="/shop"
                            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 group"
                        >
                            View All Products
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Customer Favorites</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These bestselling items have captured the hearts of our customers worldwide.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bestSellingProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                        Ready to Find Your Perfect Piece?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8">
                        Browse our full collection of handmade crochet items and discover something special for you or your loved
                        ones.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 group"
                    >
                        Start Shopping
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                </div>
            </section>
        </div>
    )


}

export default Home;