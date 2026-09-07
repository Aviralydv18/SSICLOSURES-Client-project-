import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

function ProductPreview() {

    const products = [
        {
            name: "Aluminium ROPP Caps",
            description:
                "High-quality aluminium closures suitable for beverage and industrial applications."
        },
        {
            name: "Pharma Closures",
            description:
                "Reliable closure solutions designed for pharmaceutical packaging requirements."
        },
        {
            name: "Cosmetic Closures",
            description:
                "Premium aluminium closures designed for cosmetic packaging applications."
        }
    ];

    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionTitle
                    title="Our Products"
                    subtitle="Explore our range of aluminium closure solutions."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((product, index) => (

                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
                        >

                            <div className="h-56 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">
                                    Product Image
                                </span>
                            </div>

                            <div className="p-6">

                                <h3 className="text-xl font-bold text-gray-900">
                                    {product.name}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {product.description}
                                </p>

                                <Link
                                    to="/products"
                                    className="inline-block mt-5 text-[#023E8A] font-semibold hover:underline"
                                >
                                    View Products →
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default ProductPreview;