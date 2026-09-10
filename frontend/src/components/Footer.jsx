import { Link } from "react-router-dom";
import {
    FiMail,
    FiPhone,
    FiMapPin
} from "react-icons/fi";

function Footer() {
    return (
        <footer className="bg-[#023E8A] text-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Company */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            SSICLOSURES
                        </h2>

                        <p className="text-blue-100 leading-7">
                            Reliable closure solutions designed for
                            different industries and applications.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">

                            <Link
                                to="/"
                                className="text-blue-100 hover:text-white transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                className="text-blue-100 hover:text-white transition"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/products"
                                className="text-blue-100 hover:text-white transition"
                            >
                                Products
                            </Link>

                            <Link
                                to="/infrastructure"
                                className="text-blue-100 hover:text-white transition"
                            >
                                Infrastructure
                            </Link>

                            <Link
                                to="/who-we-serve"
                                className="text-blue-100 hover:text-white transition"
                            >
                                Who We Serve
                            </Link>

                            <Link
                                to="/contact"
                                className="text-blue-100 hover:text-white transition"
                            >
                                Contact Us
                            </Link>

                        </div>
                    </div>


                    {/* Contact Information */}
                    <div>

                        <h3 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h3>

                        <div className="space-y-4">

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <FiMail className="text-xl mt-1 flex-shrink-0" />

                                <a
                                    href="mailto:Business@ssiclosures.com"
                                    className="text-blue-100 hover:text-white transition break-all"
                                >
                                    Business@ssiclosures.com
                                </a>
                            </div>


                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <FiPhone className="text-xl flex-shrink-0" />

                                <a
                                    href="tel:+919873435324"
                                    className="text-blue-100 hover:text-white transition"
                                >
                                    +91 9873435324
                                </a>
                            </div>


                            {/* Factory Location */}
                            <div className="flex items-start gap-3">
                                <FiMapPin className="text-xl mt-1 flex-shrink-0" />

                                <p className="text-blue-100 leading-6">
                                    Plot No. 917/1, Rithala Industrial Area,
                                    Near Rice Mill, New Delhi 110085
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Bottom */}
                <div className="border-t border-blue-400/40 mt-10 pt-6 text-center">

                    <p className="text-blue-100 text-sm">
                        © {new Date().getFullYear()} SSICLOSURES.
                        All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;