import { Link } from "react-router-dom";

import ropp1 from "../assets/ropp1.png";
import jarr1 from "../assets/jarr1.png";
import spirit1 from "../assets/spirit1.png";

function ProductPreview() {

    const products = [
        {
            number: "01",
            name: "ROPP Caps",
            description:
                "Roll-on pilfer-proof closure solutions for applications requiring secure and consistent bottle sealing.",
            image: ropp1
        },
        {
            number: "02",
            name: "Jar Caps",
            description:
                "Closure solutions suitable for jars and wide-mouth packaging applications.",
            image: jarr1
        },
        {
            number: "03",
            name: "Distillery & Spirit Caps",
            description:
                "Closure solutions for bottles used across distillery and spirit applications.",
            image: spirit1
        }
    ];

    return (
        <section className="bg-white py-24 md:py-32">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

                    <div>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-10 h-[2px] bg-[#023E8A]" />

                            <p className="text-[#023E8A] text-sm font-semibold uppercase tracking-[0.25em]">
                                Our Products
                            </p>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.05] tracking-tight max-w-4xl">
                            Closure solutions across
                            <span className="text-[#023E8A]">
                                {" "}multiple applications.
                            </span>
                        </h2>

                    </div>

                    <Link
                        to="/products"
                        className="group inline-flex items-center gap-3 text-[#023E8A] font-semibold"
                    >
                        Explore all products
                        <span className="text-xl group-hover:translate-x-2 transition-transform">
                            →
                        </span>
                    </Link>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

                    <div className="lg:col-span-7">

                        <Link
                            to="/products"
                            className="group relative block h-[500px] md:h-[600px] overflow-hidden bg-[#EAF4FB]"
                        >

                            <img
                                src={products[0].image}
                                alt={products[0].name}
                                className="absolute inset-0 w-full h-full object-contain p-10 group-hover:scale-105 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                            <div className="absolute top-6 left-6">
                                <span className="text-gray-600 text-sm font-medium">
                                    {products[0].number}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">

                                <h3 className="text-3xl md:text-4xl font-semibold text-white">
                                    {products[0].name}
                                </h3>

                                <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
                                    {products[0].description}
                                </p>

                            </div>

                        </Link>

                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {products.slice(1).map((product) => (

                            <Link
                                key={product.number}
                                to="/products"
                                className="group relative min-h-[280px] overflow-hidden bg-[#F7FAFC]"
                            >

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                                <div className="absolute top-5 left-5">
                                    <span className="text-gray-500 text-sm font-medium">
                                        {product.number}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-5">

                                    <h3 className="text-xl font-semibold text-white">
                                        {product.name}
                                    </h3>

                                    <span className="inline-flex items-center gap-2 mt-3 text-sm text-white/80">
                                        View category →
                                    </span>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

                <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-gray-200 pt-8">

                    <p className="text-gray-500 max-w-xl">
                        Explore our complete range of closure solutions
                        and find products suited to your application.
                    </p>

                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center bg-[#023E8A] text-white px-7 py-4 font-semibold hover:bg-[#012f68] transition duration-300"
                    >
                        View Product Range
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default ProductPreview;