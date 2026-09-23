import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import api, { BACKEND_URL } from "../services/api";

import pharmaImage from "../assets/Pharma1.jpg";
import cosmeticImage from "../assets/Cosmetic1.jpg";
import distImage from "../assets/Dist1.jpg";


function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [visibleCards, setVisibleCards] = useState([]);

    const cardRefs = useRef([]);


    /* ================= FETCH PRODUCTS ================= */

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


    /* ================= SCROLL ANIMATION ================= */

    useEffect(() => {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const index = Number(
                            entry.target.dataset.index
                        );

                        setVisibleCards((prev) => {

                            if (prev.includes(index)) {
                                return prev;
                            }

                            return [...prev, index];

                        });

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


        cardRefs.current.forEach((card) => {

            if (card) {
                observer.observe(card);
            }

        });


        return () => {

            cardRefs.current.forEach((card) => {

                if (card) {
                    observer.unobserve(card);
                }

            });

        };

    }, [products]);


    /* ================= GROUP PRODUCTS ================= */

    const groupedProducts = products.reduce(

        (groups, product) => {

            const category =
                product.category?.trim() || "Other";

            if (!groups[category]) {
                groups[category] = [];
            }

            groups[category].push(product);

            return groups;

        },

        {}

    );


    /* ================= CATEGORY IMAGES ================= */

    const getCategoryImage = (category) => {

        const name = category.toLowerCase();


        if (name.includes("pharma")) {
            return pharmaImage;
        }


        if (name.includes("cosmetic")) {
            return cosmeticImage;
        }


        if (
            name.includes("distillery") ||
            name.includes("spirit")
        ) {

            return distImage;

        }


        return null;

    };


    /* ================= LOADING ================= */

    if (loading) {

        return (

            <div className="
                min-h-screen
                flex
                items-center
                justify-center
            ">

                <p className="text-lg text-gray-600">
                    Loading products...
                </p>

            </div>

        );

    }


    /* ================= ERROR ================= */

    if (error) {

        return (

            <div className="
                min-h-screen
                flex
                items-center
                justify-center
            ">

                <p className="text-red-500">
                    {error}
                </p>

            </div>

        );

    }


    /* ================= PAGE ================= */

    return (

        <main className="bg-[#F7FAFC] min-h-screen">


            {/* ================= HERO ================= */}

            <section className="bg-white py-20">

                <div className="
                    max-w-7xl
                    mx-auto
                    px-6
                    sm:px-8
                    lg:px-12
                ">

                    <p className="
                        text-[#023E8A]
                        uppercase
                        tracking-[0.25em]
                        text-sm
                        font-semibold
                    ">

                        SSICLOSURES

                    </p>


                    <h1 className="
                        mt-5
                        text-5xl
                        md:text-6xl
                        font-semibold
                        text-gray-900
                    ">

                        Our Products

                    </h1>


                    <p className="
                        mt-6
                        max-w-2xl
                        text-lg
                        md:text-xl
                        text-gray-600
                        leading-8
                    ">

                        Explore our range of closure solutions
                        designed for different industries and
                        packaging applications.

                    </p>

                </div>

            </section>


            {/* ================= PRODUCTS ================= */}

            <section className="bg-white pb-20">

                <div className="
                    max-w-6xl
                    mx-auto
                    px-6
                    sm:px-8
                    lg:px-12
                ">


                    {Object.keys(groupedProducts).length === 0 ? (

                        <div className="text-center py-20">

                            <p className="text-gray-500">

                                No products available.

                            </p>

                        </div>

                    ) : (

                        <div>

                            {Object.entries(groupedProducts).map(

                                ([category, categoryProducts], index) => {


                                    const isLeft =
                                        index % 2 === 0;


                                    /* FIRST PRODUCT FROM DATABASE */

                                    const firstProduct =
                                        categoryProducts[0];


                                    /*
                                     * DATABASE IMAGE FIRST
                                     *
                                     * If database has imageUrl,
                                     * use that image.
                                     *
                                     * Otherwise use category
                                     * fallback image.
                                     */

                                    const categoryImage =
                                        firstProduct?.imageUrl
                                            ? `${BACKEND_URL}${firstProduct.imageUrl}`
                                            : getCategoryImage(category);


                                    return (

                                        <div

                                            key={category}

                                            ref={(element) => {

                                                cardRefs.current[index] =
                                                    element;

                                            }}

                                            data-index={index}

                                            className={`

                                                min-h-[560px]

                                                flex
                                                items-center

                                                py-10

                                                transition-all
                                                duration-1000
                                                ease-out

                                                ${
                                                    visibleCards.includes(index)

                                                        ? "opacity-100 translate-y-0"

                                                        : "opacity-0 translate-y-20"
                                                }

                                            `}

                                        >


                                            <div

                                                className={`

                                                    w-full

                                                    flex

                                                    ${
                                                        isLeft

                                                            ? "justify-start"

                                                            : "justify-end"
                                                    }

                                                `}

                                            >


                                                <div className="
                                                    w-full
                                                    md:w-[78%]
                                                ">


                                                    {/* ================= NUMBER ================= */}

                                                    <div className="
                                                        flex
                                                        items-center
                                                        gap-4
                                                        mb-3
                                                    ">


                                                        <span className="
                                                            text-[#023E8A]
                                                            text-sm
                                                            font-bold
                                                            tracking-[0.2em]
                                                        ">

                                                            0{index + 1}

                                                        </span>


                                                        <div className="
                                                            h-px
                                                            bg-gray-200
                                                            flex-1
                                                        " />


                                                    </div>


                                                    {/* ================= CARD ================= */}

                                                    <Link

                                                        to={`/products/${category
                                                            .toLowerCase()
                                                            .trim()
                                                            .replace(
                                                                /[^a-z0-9\s-]/g,
                                                                ""
                                                            )
                                                            .replace(
                                                                /\s+/g,
                                                                "-"
                                                            )}`}

                                                        className="
                                                            relative
                                                            block
                                                            min-h-[460px]
                                                            rounded-[2rem]
                                                            overflow-hidden
                                                            shadow-xl
                                                            group
                                                        "

                                                    >


                                                        {/* ================= BACKGROUND IMAGE ================= */}

                                                        {categoryImage ? (

                                                            <img

                                                                src={categoryImage}

                                                                alt={category}

                                                                className="
                                                                    absolute
                                                                    inset-0
                                                                    w-full
                                                                    h-full
                                                                    object-contain
                                                                    transition-transform
                                                                    duration-[1200ms]
                                                                    group-hover:scale-105
                                                                "

                                                            />

                                                        ) : (

                                                            <div className="
                                                                absolute
                                                                inset-0
                                                                bg-[#023E8A]
                                                            " />

                                                        )}


                                                        {/* ================= DARK OVERLAY ================= */}

                                                        <div className="
                                                            absolute
                                                            inset-0
                                                            bg-gradient-to-r
                                                            from-black/85
                                                            via-black/65
                                                            to-black/25
                                                        " />


                                                        {/* ================= BLUE GLOW ================= */}

                                                        <div className="
                                                            absolute
                                                            -right-24
                                                            -top-24
                                                            w-80
                                                            h-80
                                                            rounded-full
                                                            bg-[#023E8A]/40
                                                            blur-3xl
                                                        " />


                                                        {/* ================= BLUE STRIP ================= */}

                                                        <div className="
                                                            absolute
                                                            left-0
                                                            top-0
                                                            bottom-0
                                                            w-2
                                                            bg-[#023E8A]
                                                        " />


                                                        {/* ================= CONTENT ================= */}

                                                        <div className="
                                                            relative
                                                            z-10
                                                            min-h-[460px]
                                                            p-8
                                                            md:p-12
                                                            flex
                                                            flex-col
                                                            justify-between
                                                        ">


                                                            <div>


                                                                {/* ================= ICON ================= */}

                                                                <div className="
                                                                    w-16
                                                                    h-16
                                                                    rounded-2xl
                                                                    bg-[#023E8A]
                                                                    flex
                                                                    items-center
                                                                    justify-center
                                                                    mb-8
                                                                ">


                                                                    <span className="
                                                                        text-white
                                                                        text-2xl
                                                                        font-bold
                                                                    ">

                                                                        {category.charAt(0)}

                                                                    </span>


                                                                </div>


                                                                {/* ================= TITLE ================= */}

                                                                <h2 className="
                                                                    text-4xl
                                                                    md:text-5xl
                                                                    font-semibold
                                                                    text-white
                                                                ">

                                                                    {category}

                                                                </h2>


                                                                {/* ================= DESCRIPTION ================= */}

                                                                <p className="
                                                                    mt-6
                                                                    max-w-2xl
                                                                    text-lg
                                                                    text-white/80
                                                                    leading-8
                                                                ">

                                                                    Explore our{" "}

                                                                    {category.toLowerCase()}

                                                                    {" "}

                                                                    closure solutions
                                                                    designed for
                                                                    reliable
                                                                    packaging
                                                                    applications.

                                                                </p>


                                                                {/* ================= COUNT ================= */}

                                                                <div className="
                                                                    mt-8
                                                                    flex
                                                                    items-center
                                                                    gap-3
                                                                ">


                                                                    <span className="
                                                                        w-2
                                                                        h-2
                                                                        rounded-full
                                                                        bg-[#7dd3fc]
                                                                    " />


                                                                    <p className="
                                                                        text-white/70
                                                                        text-sm
                                                                        uppercase
                                                                        tracking-[0.15em]
                                                                    ">

                                                                        {
                                                                            categoryProducts.length
                                                                        }

                                                                        {" "}

                                                                        {
                                                                            categoryProducts.length === 1

                                                                                ? "Product"

                                                                                : "Products"
                                                                        }

                                                                    </p>


                                                                </div>


                                                            </div>


                                                            {/* ================= BOTTOM ================= */}

                                                            <div className="
                                                                mt-8
                                                                pt-5
                                                                border-t
                                                                border-white/20
                                                                flex
                                                                items-center
                                                                justify-between
                                                                gap-4
                                                            ">


                                                                <p className="
                                                                    text-white/50
                                                                    text-sm
                                                                    uppercase
                                                                    tracking-[0.15em]
                                                                ">

                                                                    SSICLOSURES

                                                                </p>


                                                                <span className="
                                                                    bg-white
                                                                    text-[#023E8A]
                                                                    px-6
                                                                    py-3
                                                                    rounded-full
                                                                    font-semibold
                                                                    group-hover:bg-[#EAF4FB]
                                                                    transition
                                                                ">

                                                                    View Products →

                                                                </span>


                                                            </div>


                                                        </div>


                                                    </Link>


                                                </div>


                                            </div>


                                        </div>

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