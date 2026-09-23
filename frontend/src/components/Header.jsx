import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

import logo from "../assets/logo.jpeg";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Products",
            path: "/products"
        },
        {
            name: "Infrastructure",
            path: "/infrastructure"
        },
        {
            name: "Who We Serve",
            path: "/who-we-serve"
        },
        {
            name: "Contact Us",
            path: "/contact"
        }
    ];

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="relative z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-4  bg-blue-100 ">

            {/* Outer floating pill */}
            <div
                className="
                    max-w-[1500px]
                    mx-auto
                    
                    bg-white
                    rounded-full
                    border-hidden
                    border-gray-600
                    shadow-sm
                "
            >

                {/* Same content width as the rest of the website */}
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    {/* Main Header */}
                    <div className="h-[72px] lg:h-[80px] flex items-center justify-between">

                        {/* Logo + Divider */}
                        <div className="flex items-center shrink-0">

                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="flex items-center"
                            >
                                <img
                                    src={logo}
                                    alt="SSICLOSURES"
                                    className="h-9 sm:h-10 lg:h-11 w-auto object-contain"
                                />
                            </Link>

                            <div className="hidden lg:block h-7 w-px bg-gray-300 ml-7" />

                        </div>


                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 ml-8">

                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-[15px] xl:text-base font-medium transition-colors duration-300 ${
                                            isActive
                                                ? "text-[#023E8A]"
                                                : "text-gray-800 hover:text-[#023E8A]"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                        </nav>


                        {/* Get a Quote */}
                        <div className="hidden lg:block ml-auto">

                            <Link
                                to="/contact"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    bg-[#111827]
                                    text-white
                                    rounded-full
                                    px-6
                                    py-3.5
                                    text-sm
                                    xl:text-base
                                    font-semibold
                                    hover:bg-[#023E8A]
                                    transition-all
                                    duration-300
                                "
                            >
                                <span>Get a Quote</span>

                                <FiArrowUpRight
                                    size={17}
                                    className="
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                        transition-transform
                                    "
                                />

                            </Link>

                        </div>


                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden text-gray-900 p-2"
                            aria-label={
                                menuOpen
                                    ? "Close menu"
                                    : "Open menu"
                            }
                        >
                            {menuOpen ? (
                                <FiX size={25} />
                            ) : (
                                <FiMenu size={25} />
                            )}
                        </button>

                    </div>


                    {/* Mobile Navigation */}
                    <div
                        className={`
                            lg:hidden
                            overflow-hidden
                            transition-all
                            duration-300
                            ${
                                menuOpen
                                    ? "max-h-[600px] opacity-100"
                                    : "max-h-0 opacity-0"
                            }
                        `}
                    >

                        <div className="px-1 pb-6">

                            <div className="border-t border-gray-200 pt-3">

                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `
                                            flex
                                            items-center
                                            justify-between
                                            py-4
                                            border-b
                                            border-gray-100
                                            text-base
                                            font-medium
                                            ${
                                                isActive
                                                    ? "text-[#023E8A]"
                                                    : "text-gray-800"
                                            }
                                            `
                                        }
                                    >
                                        {item.name}

                                        <span className="text-gray-400">
                                            →
                                        </span>

                                    </NavLink>
                                ))}

                            </div>


                            {/* Mobile Quote Button */}
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-[#111827]
                                    text-white
                                    rounded-full
                                    px-5
                                    py-3.5
                                    font-semibold
                                    hover:bg-[#023E8A]
                                    transition
                                "
                            >
                                Get a Quote
                                <FiArrowUpRight size={17} />
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Header;