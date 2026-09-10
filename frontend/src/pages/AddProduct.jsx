import { useState } from "react";
import api from "../services/api";

function AddProduct() {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        material: "",
        size: "",
        application: "",
        price: ""
    });

    const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {

            // Step 1: Upload image
            let imageUrl = "";

            if (image) {

                const imageData = new FormData();

                imageData.append("file", image);

                const imageResponse = await api.post(
                    "/upload/image",
                    imageData
                );

                imageUrl = imageResponse.data;
            }


            // Step 2: Create product
            const productData = {
                ...formData,
                price: formData.price
                    ? Number(formData.price)
                    : null,
                imageUrl: imageUrl
            };

            await api.post("/products", productData);


            setMessage("Product added successfully!");


            // Clear form
            setFormData({
                name: "",
                description: "",
                category: "",
                material: "",
                size: "",
                application: "",
                price: ""
            });

            setImage(null);

        } catch (error) {

            console.error("FULL ERROR:", error);
    console.error("RESPONSE:", error.response);
    console.error("DATA:", error.response?.data);

    setMessage(
        error.response?.data || "Failed to add product."
    );
        } finally {

            setLoading(false);

        }
    };


    return (
        <main className="bg-[#F7FAFC] min-h-screen py-16">

            <div className="max-w-3xl mx-auto px-4">

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

                    <h1 className="text-3xl font-bold text-[#023E8A] mb-2">
                        Add New Product
                    </h1>

                    <p className="text-gray-600 mb-8">
                        Add a new product to the SSICLOSURES catalogue.
                    </p>


                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Product Name */}
                        <div>

                            <label className="block font-medium text-gray-700 mb-2">
                                Product Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Example: 28mm ROPP Cap"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                            />

                        </div>


                        {/* Category */}
                        <div>

                            <label className="block font-medium text-gray-700 mb-2">
                                Category
                            </label>

                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                placeholder="Example: ROPP Caps"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                            />

                        </div>


                        {/* Material */}
                        <div>

                            <label className="block font-medium text-gray-700 mb-2">
                                Material
                            </label>

                            <input
                                type="text"
                                name="material"
                                value={formData.material}
                                onChange={handleChange}
                                placeholder="Example: Aluminium"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                            />

                        </div>


                        {/* Size */}
                        <div>

                            <label className="block font-medium text-gray-700 mb-2">
                                Size
                            </label>

                            <input
                                type="text"
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                placeholder="Example: 28mm"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                            />

                        </div>


                        {/* Application */}
                        <div>

                            <label className="block font-medium text-gray-700 mb-2">
                                Application
                            </label>

                            <input
                                type="text"
                                name="application"
                                value={formData.application}
                                onChange={handleChange}
                                placeholder="Example: Spirit Bottles"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                            />

                        </div>


                        {/* Price */}
                        <div>

                            <label className="block font-medium text-gray-700 mb-2">
                                Price / Piece
                            </label>

                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                step="0.01"
                                min="0"
                                placeholder="Example: 1.40"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                            />

                        </div>


                        {/* Description */}
                        <div>

                            <label className="block font-medium text-gray-700 mb-2">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Enter product description..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
                            />

                        </div>


                        {/* Image */}
                        <div>

                            <label className="block font-medium text-gray-700 mb-2">
                                Product Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                            />

                        </div>


                        {/* Message */}
                        {message && (
                            <p className="font-medium text-[#023E8A]">
                                {message}
                            </p>
                        )}


                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#023E8A] text-white py-3 rounded-lg font-semibold hover:bg-[#012f68] transition disabled:opacity-50"
                        >
                            {loading
                                ? "Adding Product..."
                                : "Add Product"}
                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
}

export default AddProduct;