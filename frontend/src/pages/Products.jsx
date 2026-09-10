import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api,{BACKEND_URL} from "../services/api";
import SectionTitle from "../components/SectionTitle";
import { createSlug } from "../utils/productUtils";


function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await api.get("/products");

                setProducts(response.data);

            } catch (error) {

                console.error(error);

                setError("Unable to load products.");

            } finally {

                setLoading(false);
            }
        };

        fetchProducts();

    }, []);


    

    const groupedProducts = products.reduce((groups, product) => {

        const category = product.category?.trim() || "Other";

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;

    }, {});


    if (loading) {

        return (
            <div className="min-h-screen flex items-center justify-center">

                <p className="text-lg text-gray-600">
                    Loading products...
                </p>

            </div>
        );
    }


    if (error) {

        return (
            <div className="min-h-screen flex items-center justify-center">

                <p className="text-red-500">
                    {error}
                </p>

            </div>
        );
    }


    return (

        <main className="bg-[#F7FAFC] min-h-screen">

            <section className="py-16">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title="Our Products"
                        subtitle="Explore our range of closure solutions designed for different industries and applications."
                    />


                    {Object.keys(groupedProducts).length === 0 ? (

                        <div className="text-center py-16">

                            <p className="text-gray-500">
                                No products available.
                            </p>

                        </div>

                    ) : (

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {Object.entries(groupedProducts).map(
                                ([category, categoryProducts]) => {

                                    const firstProduct = categoryProducts[0];

                                    return (

                                        <Link
                                            key={category}
                                            to={`/products/${createSlug(category)}`}
                                            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition"
                                        >

                                            <div className="h-56 bg-gray-100 overflow-hidden">

                                                {firstProduct.imageUrl ? (

                                                    <img
                                                        src={`${BACKEND_URL}${firstProduct.imageUrl}`}
                                                        alt={category}
                                                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-300"
                                                    />

                                                ) : (

                                                    <div className="w-full h-full flex items-center justify-center">

                                                        <span className="text-gray-400">
                                                            No Image
                                                        </span>

                                                    </div>

                                                )}

                                            </div>


                                            <div className="p-6">

                                                <h2 className="text-xl font-bold text-[#023E8A] mb-2">
                                                    {category}
                                                </h2>


                                                <p className="text-gray-600 mb-4">
                                                    {categoryProducts.length}{" "}
                                                    {categoryProducts.length === 1
                                                        ? "Product"
                                                        : "Products"}
                                                </p>


                                                <span className="text-[#023E8A] font-semibold">
                                                    View Products →
                                                </span>

                                            </div>

                                        </Link>
                                    );
                                }
                            )}

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default Products;