import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api,{BACKEND_URL} from "../services/api";
import { createSlug } from "../utils/productUtils";


function CategoryProducts() {

    const { category } = useParams();

    const [products, setProducts] = useState([]);
    const [selectedMaterial, setSelectedMaterial] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    /*
       Fetch ALL products
    */

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


    /*
       Find products belonging to current category
    */

    const categoryProducts = useMemo(() => {

        return products.filter((product) => {

            return createSlug(product.category || "Other") === category;

        });

    }, [products, category]);


    /*
       Get unique materials
    */

    const materials = useMemo(() => {

        const uniqueMaterials = new Set();

        categoryProducts.forEach((product) => {

            if (product.material) {
                uniqueMaterials.add(product.material);
            }

        });

        return ["All", ...uniqueMaterials];

    }, [categoryProducts]);


    /*
       Apply material filter
    */

    const filteredProducts = useMemo(() => {

        if (selectedMaterial === "All") {
            return categoryProducts;
        }

        return categoryProducts.filter(
            (product) => product.material === selectedMaterial
        );

    }, [categoryProducts, selectedMaterial]);


    /*
       Find readable category name
    */

    const categoryName =
        categoryProducts.length > 0
            ? categoryProducts[0].category
            : category.replace(/-/g, " ");


    if (loading) {

        return (
            <div className="min-h-screen flex items-center justify-center">

                <p className="text-gray-600">
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

                    {/* Heading */}

                    <div className="mb-10">

                        <Link
                            to="/products"
                            className="text-[#023E8A] font-medium hover:underline"
                        >
                            ← Back to Products
                        </Link>

                        <h1 className="text-4xl font-bold text-[#023E8A] mt-5">
                            {categoryName}
                        </h1>

                        <p className="text-gray-600 mt-3">
                            Explore our {categoryName.toLowerCase()} collection.
                        </p>

                    </div>


                    {/* Material filter */}

                    {materials.length > 1 && (

                        <div className="mb-10">

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Filter by Material
                            </label>

                            <select
                                value={selectedMaterial}
                                onChange={(e) =>
                                    setSelectedMaterial(e.target.value)
                                }
                                className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                            >

                                {materials.map((material) => (

                                    <option
                                        key={material}
                                        value={material}
                                    >
                                        {material}
                                    </option>

                                ))}

                            </select>

                        </div>

                    )}


                    {/* No products */}

                    {categoryProducts.length === 0 ? (

                        <div className="bg-white rounded-xl p-10 text-center">

                            <p className="text-gray-500">
                                No products found in this category.
                            </p>

                        </div>

                    ) : filteredProducts.length === 0 ? (

                        <div className="bg-white rounded-xl p-10 text-center">

                            <p className="text-gray-500">
                                No products found for this material.
                            </p>

                        </div>

                    ) : (

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {filteredProducts.map((product) => (

                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition"
                                >

                                    {/* Image */}

                                    <div className="h-56 bg-gray-100 overflow-hidden">

                                        {product.imageUrl ? (

                                            <img
                                                src={`${BACKEND_URL}${product.imageUrl}`}
                                                alt={product.name}
                                               className="w-full h-full object-contain p-4 hover:scale-105 transition duration-300"
                                            />

                                        ) : (

                                            <div className="w-full h-full flex items-center justify-center">

                                                <span className="text-gray-400">
                                                    No Image
                                                </span>

                                            </div>

                                        )}

                                    </div>


                                    {/* Content */}

                                    <div className="p-6">

                                        <p className="text-sm text-[#0077B6] font-medium mb-2">
                                            {product.material}
                                        </p>


                                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                                            {product.name}
                                        </h2>


                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {product.description}
                                        </p>


                                        {product.price !== null &&
                                            product.price !== undefined && (

                                                <p className="font-semibold text-[#023E8A] mb-4">
                                                    ₹{product.price} / piece
                                                </p>

                                            )}


                                        <Link
                                            to={`/products/${createSlug(product.category)}/${product.id}`}
                                            className="inline-block bg-[#023E8A] text-white px-5 py-2.5 rounded-lg hover:bg-[#012f68] transition"
                                        >
                                            View Details
                                        </Link>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default CategoryProducts;