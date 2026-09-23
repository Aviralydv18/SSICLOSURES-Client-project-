import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    FiArrowLeft,
    FiArrowUpRight,
    FiMail,
    FiCheckCircle
} from "react-icons/fi";

import api, { BACKEND_URL } from "../services/api";
import { createSlug } from "../utils/productUtils";
import { openEmail } from "../utils/email";

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

    const handleEmailEnquiry = () => {
        openEmail(
            `Product Enquiry - ${product.name}`,
            `Hello SSICLOSURES,

I am interested in the following product:

Product: ${product.name}
Category: ${product.category || "Not specified"}
Material: ${product.material || "Not specified"}
Size: ${product.size || "Not specified"}
Application: ${product.application || "Not specified"}

Please share more details and quotation for this product.

Thank you.`
        );
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-[#F7FAFC] flex items-center justify-center">
                <div className="text-center">

                    <div className="w-12 h-12 border-4 border-[#EAF4FB] border-t-[#023E8A] rounded-full animate-spin mx-auto" />

                    <p className="mt-5 text-gray-500">
                        Loading product...
                    </p>

                </div>
            </main>
        );
    }

    if (error || !product) {
        return (
            <main className="min-h-screen bg-[#F7FAFC] flex flex-col items-center justify-center px-6">

                <p className="text-red-500 mb-5">
                    {error || "Product not found."}
                </p>

                <Link
                    to="/products"
                    className="bg-[#023E8A] text-white px-6 py-3 rounded-full font-medium"
                >
                    Back to Products
                </Link>

            </main>
        );
    }

    return (
        <main className="bg-[#F7FAFC] min-h-screen">

            {/* =====================================================
                HERO / PRODUCT INTRO
            ====================================================== */}

            <section className="relative overflow-hidden bg-[#023E8A] text-white">

                {/* Decorative moving glow */}

                <div
                    className="
                        absolute
                        -top-40
                        -right-40
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-[#0077B6]/40
                        blur-3xl
                        animate-pulse
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-40
                        -left-40
                        w-[450px]
                        h-[450px]
                        rounded-full
                        bg-[#7dd3fc]/20
                        blur-3xl
                        animate-pulse
                    "
                />

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">

                    {/* Back */}

                    <Link
                        to={`/products/${createSlug(product.category)}`}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-white/70
                            hover:text-white
                            transition
                            mb-12
                        "
                    >
                        <FiArrowLeft size={17} />

                        <span>
                            Back to {product.category}
                        </span>
                    </Link>


                    <div className="max-w-4xl">

                        <div className="flex items-center gap-4 mb-6">

                            <span className="w-10 h-[2px] bg-[#7dd3fc]" />

                            <p className="uppercase tracking-[0.25em] text-sm text-white/70">
                                {product.category}
                            </p>

                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">

                            {product.name}

                        </h1>

                        <p className="mt-7 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">

                            Precision-engineered closure solutions designed
                            for demanding packaging applications.

                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PRODUCT MAIN SECTION
            ====================================================== */}

            <section className="py-16 md:py-24">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">


                        {/* =================================================
                            PRODUCT IMAGE
                        ================================================== */}

                        <div className="lg:col-span-6">

                            <div className="sticky top-8">

                                <div
                                    className="
                                        relative
                                        bg-white
                                        rounded-[2rem]
                                        border
                                        border-gray-200
                                        overflow-hidden
                                        min-h-[500px]
                                        flex
                                        items-center
                                        justify-center
                                        shadow-sm
                                    "
                                >

                                    {/* Moving background */}

                                    <div
                                        className="
                                            absolute
                                            w-72
                                            h-72
                                            bg-[#EAF4FB]
                                            rounded-full
                                            blur-2xl
                                            animate-pulse
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            w-44
                                            h-44
                                            bg-[#7dd3fc]/20
                                            rounded-full
                                            blur-2xl
                                            top-10
                                            right-10
                                        "
                                    />

                                    {product.imageUrl ? (

                                        <img
                                            src={`${BACKEND_URL}${product.imageUrl}`}
                                            alt={product.name}
                                            className="
                                                relative
                                                z-10
                                                w-full
                                                h-[500px]
                                                object-contain
                                                p-10
                                                transition-all
                                                duration-700
                                                hover:scale-105
                                            "
                                        />

                                    ) : (

                                        <div className="relative z-10 text-gray-400">
                                            No Image Available
                                        </div>

                                    )}

                                    {/* Category badge */}

                                    <div
                                        className="
                                            absolute
                                            top-6
                                            left-6
                                            z-20
                                            bg-white/90
                                            backdrop-blur
                                            border
                                            border-gray-200
                                            rounded-full
                                            px-4
                                            py-2
                                            text-sm
                                            font-medium
                                            text-[#023E8A]
                                        "
                                    >
                                        {product.category}
                                    </div>

                                </div>


                                {/* Image caption */}

                                <p className="mt-4 text-sm text-gray-400">
                                    SSICLOSURES • Precision Closure Solutions
                                </p>

                            </div>

                        </div>


                        {/* =================================================
                            PRODUCT INFORMATION
                        ================================================== */}

                        <div className="lg:col-span-6">

                            <div className="flex items-center gap-3 mb-5">

                                <span className="w-8 h-[2px] bg-[#023E8A]" />

                                <span className="text-[#023E8A] text-sm font-semibold uppercase tracking-[0.2em]">
                                    Product Details
                                </span>

                            </div>


                            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.05] tracking-tight">

                                Built for
                                <span className="text-[#023E8A]">
                                    {" "}performance.
                                </span>

                            </h2>


                            <p className="mt-7 text-lg text-gray-600 leading-8">

                                {product.description}

                            </p>


                            {/* =================================================
                                SPECIFICATIONS
                            ================================================== */}

                            <div className="mt-10">

                                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                                    Product Specifications
                                </h3>


                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                    {/* Material */}

                                    <div
                                        className="
                                            bg-white
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            p-5
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <p className="text-xs uppercase tracking-wider text-gray-400">
                                            Material
                                        </p>

                                        <p className="mt-2 text-lg font-semibold text-gray-900">
                                            {product.material || "N/A"}
                                        </p>

                                    </div>


                                    {/* Size */}

                                    <div
                                        className="
                                            bg-white
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            p-5
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <p className="text-xs uppercase tracking-wider text-gray-400">
                                            Size
                                        </p>

                                        <p className="mt-2 text-lg font-semibold text-gray-900">
                                            {product.size || "N/A"}
                                        </p>

                                    </div>


                                    {/* Application */}

                                    <div
                                        className="
                                            bg-white
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            p-5
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <p className="text-xs uppercase tracking-wider text-gray-400">
                                            Application
                                        </p>

                                        <p className="mt-2 text-lg font-semibold text-gray-900">
                                            {product.application || "N/A"}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                HIGHLIGHTS
                            ================================================== */}

                            <div className="mt-10 space-y-4">

                                <div className="flex items-center gap-3">

                                    <FiCheckCircle
                                        className="text-[#023E8A]"
                                        size={20}
                                    />

                                    <span className="text-gray-700">
                                        Designed for industrial packaging applications
                                    </span>

                                </div>


                                <div className="flex items-center gap-3">

                                    <FiCheckCircle
                                        className="text-[#023E8A]"
                                        size={20}
                                    />

                                    <span className="text-gray-700">
                                        Available for customized requirements
                                    </span>

                                </div>


                                <div className="flex items-center gap-3">

                                    <FiCheckCircle
                                        className="text-[#023E8A]"
                                        size={20}
                                    />

                                    <span className="text-gray-700">
                                        Enquire directly with SSICLOSURES
                                    </span>

                                </div>

                            </div>


                            {/* =================================================
                                ENQUIRY BUTTONS
                            ================================================== */}

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">

                                <Link
                                    to={`/contact?product=${encodeURIComponent(product.name)}`}
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-3
                                        bg-[#023E8A]
                                        text-white
                                        px-7
                                        py-4
                                        rounded-full
                                        font-semibold
                                        hover:bg-[#012f68]
                                        hover:-translate-y-0.5
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <span>
                                        Request a Quote
                                    </span>

                                    <FiArrowUpRight
                                        size={18}
                                        className="
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                            transition-transform
                                        "
                                    />

                                </Link>


                                <button
                                    onClick={handleEmailEnquiry}
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-3
                                        border
                                        border-gray-300
                                        bg-white
                                        text-gray-900
                                        px-7
                                        py-4
                                        rounded-full
                                        font-semibold
                                        hover:border-[#023E8A]
                                        hover:text-[#023E8A]
                                        hover:-translate-y-0.5
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <FiMail size={19} />

                                    <span>
                                        Email Product Enquiry
                                    </span>

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BOTTOM CTA
            ====================================================== */}

            <section className="pb-20 md:pb-28">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[2rem]
                            bg-[#111827]
                            px-8
                            py-12
                            md:px-14
                            md:py-16
                        "
                    >

                        {/* Moving glow */}

                        <div
                            className="
                                absolute
                                -right-20
                                -top-20
                                w-72
                                h-72
                                bg-[#023E8A]
                                rounded-full
                                blur-3xl
                                opacity-60
                                animate-pulse
                            "
                        />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                            <div>

                                <p className="text-[#7dd3fc] uppercase tracking-[0.2em] text-sm font-semibold">
                                    Need this closure?
                                </p>

                                <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
                                    Let's discuss your requirement.
                                </h2>

                                <p className="mt-4 text-white/60 max-w-xl">
                                    Contact SSICLOSURES for specifications,
                                    customization and quotation.
                                </p>

                            </div>


                            <Link
                                to={`/contact?product=${encodeURIComponent(product.name)}`}
                                className="
                                    shrink-0
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-white
                                    text-[#023E8A]
                                    px-7
                                    py-4
                                    rounded-full
                                    font-semibold
                                    hover:bg-[#EAF4FB]
                                    transition
                                "
                            >

                                Get In Touch

                                <FiArrowUpRight size={18} />

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default ProductDetails;