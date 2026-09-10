import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api,{BACKEND_URL} from "../services/api";
import { createSlug } from "../utils/productUtils";


function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await api.get(`/products/${id}`);

                setProduct(response.data);

            } catch (error) {

                console.error(error);

                setError("Unable to load product.");

            } finally {

                setLoading(false);
            }
        };

        fetchProduct();

    }, [id]);


    if (loading) {

        return (
            <div className="min-h-screen flex items-center justify-center">

                <p className="text-gray-600">
                    Loading product...
                </p>

            </div>
        );
    }


    if (error || !product) {

        return (
            <div className="min-h-screen flex flex-col items-center justify-center">

                <p className="text-red-500 mb-5">
                    {error || "Product not found."}
                </p>

                <Link
                    to="/products"
                    className="bg-[#023E8A] text-white px-5 py-2.5 rounded-lg"
                >
                    Back to Products
                </Link>

            </div>
        );
    }


    return (

        <main className="bg-[#F7FAFC] min-h-screen">

            <section className="py-16">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Back button */}

                    <Link
                        to={`/products/${createSlug(product.category)}`}
                        className="text-[#023E8A] font-medium hover:underline"
                    >
                        ← Back to {product.category}
                    </Link>


                    {/* Product */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">

                        {/* Image */}

                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">

                            {product.imageUrl ? (

                                <img
                                    src={`${BACKEND_URL}${product.imageUrl}`}
                                    alt={product.name}
                                    className="w-full h-[500px] object-contain p-6"
                                />

                            ) : (

                                <div className="w-full h-[500px] flex items-center justify-center bg-gray-100">

                                    <span className="text-gray-400">
                                        No Image Available
                                    </span>

                                </div>

                            )}

                        </div>


                        {/* Details */}

                        <div>

                            <p className="text-[#0077B6] font-semibold mb-3">
                                {product.category}
                            </p>


                            <h1 className="text-4xl font-bold text-[#023E8A] mb-6">
                                {product.name}
                            </h1>


                            <p className="text-gray-600 text-lg leading-8 mb-8">
                                {product.description}
                            </p>


                            {/* Specifications */}

                            <div className="bg-white rounded-xl border border-gray-200 p-6">

                                <h2 className="text-xl font-bold text-gray-900 mb-5">
                                    Product Specifications
                                </h2>


                                <div className="space-y-4">

                                    <div className="flex justify-between border-b pb-3">

                                        <span className="font-medium text-gray-600">
                                            Material
                                        </span>

                                        <span className="text-gray-900">
                                            {product.material || "N/A"}
                                        </span>

                                    </div>


                                    <div className="flex justify-between border-b pb-3">

                                        <span className="font-medium text-gray-600">
                                            Size
                                        </span>

                                        <span className="text-gray-900">
                                            {product.size || "N/A"}
                                        </span>

                                    </div>


                                    <div className="flex justify-between border-b pb-3">

                                        <span className="font-medium text-gray-600">
                                            Application
                                        </span>

                                        <span className="text-gray-900">
                                            {product.application || "N/A"}
                                        </span>

                                    </div>


                                    <div className="flex justify-between">

                                        <span className="font-medium text-gray-600">
                                            Price
                                        </span>

                                        <span className="font-bold text-[#023E8A]">
                                            {product.price !== null &&
                                            product.price !== undefined
                                                ? `₹${product.price} / piece`
                                                : "Contact for price"}
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* Enquiry */}

                            <div className="mt-8">

                                <Link
                                    to={`/contact?product=${encodeURIComponent(product.name)}`}
                                    className="inline-block bg-[#023E8A] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#012f68] transition"
                                >
                                    Send Product Enquiry
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default ProductDetails;