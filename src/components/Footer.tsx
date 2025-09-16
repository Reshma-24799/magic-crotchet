import { Link } from "react-router-dom"
import { Globe  ,Mail } from "lucide-react"
import { SiInstagram } from '@icons-pack/react-simple-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white ">
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">MC</span>
                            </div>
                            <span className="font-serif text-xl font-semibold">Magic Crochet</span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Handcrafted with love, each piece tells a story. We create beautiful crochet items that bring warmth and
                            joy to your everyday life.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="https://www.instagram.com/reshmacrotchets" 
                                target="_blank" 
                                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                            >
                                <SiInstagram size={24} className="w-5 h-5"/>
                            </a>
                            <a 
                                href="https://mern-blog-4-cz6o.onrender.com/" 
                                target="_blank" 
                                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                            >
                                <Globe   className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>

                    <div >
                        <h3 className="text-lg font-semibold mb-4">Quick links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-gray-300"/>
                                <span>reshma24799@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-t border-gray-700 pt-4 mt-4 text-center text-gray-400 text-sm md:col-span-4">
                        <p>
                            &copy; {new Date().getFullYear()} Crochet Creations. All rights reserved. Made with love and yarn.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;