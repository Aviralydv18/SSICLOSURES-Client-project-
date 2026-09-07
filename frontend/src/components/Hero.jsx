import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="bg-[#F7FAFC]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[600px]">

                    {/* Left Content */}

                    <div>

                        <p className="text-[#023E8A] font-semibold uppercase tracking-wide">
    Precision Closure Solutions
</p>

<h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
    Reliable Closures
    <span className="text-[#023E8A]">
        {" "}For Every Industry
    </span>
</h1>

                       

                       <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
    We manufacture high-quality closure solutions
    designed to meet the demanding requirements of
    pharma, cosmetics and distillery industries.
</p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">

                            <Link
                                to="/products"
                                className="bg-[#023E8A] text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-[#012f68] transition"
                            >
                                Explore Products
                            </Link>

                            <Link
                                to="/contact"
                                className="border border-[#023E8A] text-[#023E8A] px-6 py-3 rounded-lg text-center font-semibold hover:bg-[#023E8A] hover:text-white transition"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>


                    {/* Right Image */}

                    <div className="flex justify-center">

                        <div className="w-full h-[350px] md:h-[450px] bg-gray-200 rounded-2xl flex items-center justify-center">

                            <p className="text-gray-500 text-center px-6">
                                Company / Product Image
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;