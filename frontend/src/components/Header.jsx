import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpeg";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <header className="relative bg-white border-b border-gray-200">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-20">

                    {/* Logo */}

                     <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-6"
                    >
                        <img
                            src={logo}
                            alt="SSI Closures Logo"
                            className="h-20 w-auto object-contain"
                        />

                        <span className="text-2xl font-bold text-[#023E8A]">
                            SSICLOSURES
                        </span>
                    </Link>


                    {/* Desktop Navigation */}

                    <nav className="hidden md:flex items-center gap-6">

                        <Link
                            to="/"
                            className="text-gray-700 hover:text-[#023E8A] font-medium transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-[#023E8A] font-medium transition"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/products"
                            className="text-gray-700 hover:text-[#023E8A] font-medium transition"
                        >
                            Products
                        </Link>

                        <Link
                            to="/infrastructure"
                            className="text-gray-700 hover:text-[#023E8A] font-medium transition"
                        >
                            Infrastructure
                        </Link>

                        <Link
                            to="/who-we-serve"
                            className="text-gray-700 hover:text-[#023E8A] font-medium transition"
                        >
                            Who We Serve
                        </Link>

                        <Link
                            to="/contact"
                            className="bg-[#023E8A] text-white px-5 py-2.5 rounded-lg hover:bg-[#012f68] transition"
                        >
                            Contact Us
                        </Link>

                    </nav>


                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-3xl text-[#023E8A]"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                </div>


                {/* Mobile Navigation */}

                {menuOpen && (

                    <nav className="md:hidden flex flex-col border-t border-gray-200 py-4">

                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="py-3 text-gray-700 hover:text-[#023E8A]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={closeMenu}
                            className="py-3 text-gray-700 hover:text-[#023E8A]"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/products"
                            onClick={closeMenu}
                            className="py-3 text-gray-700 hover:text-[#023E8A]"
                        >
                            Products
                        </Link>

                        <Link
                            to="/infrastructure"
                            onClick={closeMenu}
                            className="py-3 text-gray-700 hover:text-[#023E8A]"
                        >
                            Infrastructure
                        </Link>

                        <Link
                            to="/who-we-serve"
                            onClick={closeMenu}
                            className="py-3 text-gray-700 hover:text-[#023E8A]"
                        >
                            Who We Serve
                        </Link>

                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="mt-2 bg-[#023E8A] text-white text-center py-3 rounded-lg"
                        >
                            Contact Us
                        </Link>

                    </nav>

                )}

            </div>

        </header>
    );
}

export default Header;