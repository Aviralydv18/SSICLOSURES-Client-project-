function Footer() {

    return (

        <footer className="bg-[#023E8A] text-white mt-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>

                        <h2 className="text-2xl font-bold mb-4">
                            SSICLOSURES
                        </h2>

                        <p className="text-blue-100 leading-relaxed">
                            Premium aluminium closures serving
                            pharma, cosmetics and distillery industries.
                        </p>

                    </div>


                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-2 text-blue-100">

                            <span>Home</span>
                            <span>About Us</span>
                            <span>Products</span>
                            <span>Contact Us</span>

                        </div>

                    </div>


                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            Contact
                        </h3>

                        <p className="text-blue-100">
                            Email: info@ssiclosures.com
                        </p>

                        <p className="text-blue-100 mt-2">
                            Phone: +91 XXXXX XXXXX
                        </p>

                    </div>

                </div>


                <div className="border-t border-blue-400 mt-10 pt-6 text-center text-blue-100">

                    <p>
                        © 2026 SSICLOSURES. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;