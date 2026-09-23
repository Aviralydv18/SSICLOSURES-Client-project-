import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import pharmaImage from "../assets/Pharma1.jpg";
import cosmeticImage from "../assets/Cosmetic1.jpg";
import distImage from "../assets/Dist1.jpg";

function WhoWeServe() {

    const industries = [
        {
            name: "Pharmaceutical",
            image: pharmaImage,
            description:
                "Closure solutions designed for pharmaceutical packaging where reliability, consistency and secure sealing are important.",
            applications:
                "Pharmaceutical bottles, medicine containers and healthcare packaging.",
            color: "#023E8A"
        },
        {
            name: "Cosmetics",
            image: cosmeticImage,
            description:
                "Closure solutions for cosmetic and personal care packaging with a focus on appearance, functionality and dependable sealing.",
            applications:
                "Cosmetic bottles, personal care containers and beauty products.",
            color: "#7C3AED"
        },
        {
            name: "Distillery & Spirits",
            image: distImage,
            description:
                "Closure solutions for spirit and beverage packaging, designed to provide secure sealing and a professional finish.",
            applications:
                "Spirit bottles, beverage bottles and other liquid packaging.",
            color: "#B7791F"
        }
    ];

    const [visibleCards, setVisibleCards] = useState([]);

    const cardRefs = useRef([]);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    const index = Number(entry.target.dataset.index);

                    if (entry.isIntersecting) {

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

    }, []);

    return (

        <main className="bg-[#F7FAFC] min-h-screen">

            {/* ================= HERO ================= */}

            <section className="bg-[#023E8A] text-white py-20">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="max-w-4xl">

                        <p className="text-blue-200 uppercase tracking-[0.25em] text-sm font-semibold mb-5">
                            Industries
                        </p>

                        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                            Who We Serve
                        </h1>

                        <p className="mt-6 text-blue-100 text-lg md:text-xl max-w-2xl leading-8">
                            Serving diverse industries with reliable closure
                            solutions designed around their packaging needs.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section className="bg-white py-20">

                <div className="max-w-3xl mx-auto px-6 text-center">

                    <p className="text-[#023E8A] uppercase tracking-[0.2em] text-sm font-semibold">
                        Industries We Serve
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900">
                        Solutions built around
                        <br />
                        different industries.
                    </h2>

                    <p className="mt-6 text-gray-600 text-lg leading-8">
                        Our closure solutions support businesses across
                        pharmaceutical, cosmetics and distillery industries.
                    </p>

                </div>

            </section>


            {/* ================= INDUSTRY CARDS ================= */}

            <section className="bg-white pb-32">

                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

                    {industries.map((industry, index) => {

                        const isLeft = index % 2 === 0;

                        return (

                            <div
                                key={industry.name}
                                ref={(element) => {
                                    cardRefs.current[index] = element;
                                }}
                                data-index={index}
                                className={`
                                    min-h-[650px]
                                    flex
                                    items-center
                                    py-20
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

                                    <div className="w-full md:w-[78%]">

                                        {/* NUMBER */}

                                        <div className="flex items-center gap-4 mb-6">

                                            <span
                                                className="text-sm font-bold tracking-[0.2em]"
                                                style={{
                                                    color: industry.color
                                                }}
                                            >
                                                0{index + 1}
                                            </span>

                                            <div className="h-px bg-gray-200 flex-1" />

                                        </div>


                                        {/* ================= CARD ================= */}

                                        <div
                                            className="
                                                relative
                                                min-h-[520px]
                                                rounded-[2rem]
                                                overflow-hidden
                                                shadow-xl
                                                group
                                            "
                                        >

                                            {/* BACKGROUND IMAGE */}

                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    bg-cover
                                                    bg-center
                                                    transition-transform
                                                    duration-[1200ms]
                                                    group-hover:scale-105
                                                "
                                                style={{
                                                    backgroundImage:
                                                        `url(${industry.image})`
                                                }}
                                            />


                                            {/* DARK OVERLAY */}

                                            <div className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-r
                                                from-black/80
                                                via-black/60
                                                to-black/20
                                            " />


                                            {/* COLOR GLOW */}

                                            <div
                                                className="
                                                    absolute
                                                    -right-20
                                                    -top-20
                                                    w-72
                                                    h-72
                                                    rounded-full
                                                    blur-3xl
                                                    opacity-30
                                                "
                                                style={{
                                                    backgroundColor:
                                                        industry.color
                                                }}
                                            />


                                            {/* COLORED LEFT STRIP */}

                                            <div
                                                className="
                                                    absolute
                                                    left-0
                                                    top-0
                                                    bottom-0
                                                    w-2
                                                    z-20
                                                "
                                                style={{
                                                    backgroundColor:
                                                        industry.color
                                                }}
                                            />


                                            {/* CONTENT */}

                                            <div className="
                                                relative
                                                z-10
                                                min-h-[520px]
                                                p-8
                                                md:p-12
                                                flex
                                                flex-col
                                                justify-between
                                            ">

                                                <div>

                                                    {/* ICON */}

                                                    <div
                                                        className="
                                                            w-16
                                                            h-16
                                                            rounded-2xl
                                                            flex
                                                            items-center
                                                            justify-center
                                                            mb-8
                                                        "
                                                        style={{
                                                            backgroundColor:
                                                                industry.color
                                                        }}
                                                    >

                                                        <span className="
                                                            text-white
                                                            text-2xl
                                                            font-bold
                                                        ">
                                                            {industry.name.charAt(0)}
                                                        </span>

                                                    </div>


                                                    {/* TITLE */}

                                                    <h3 className="
                                                        text-4xl
                                                        md:text-5xl
                                                        font-semibold
                                                        text-white
                                                        leading-tight
                                                    ">
                                                        {industry.name}
                                                    </h3>


                                                    {/* DESCRIPTION */}

                                                    <p className="
                                                        mt-6
                                                        text-white/80
                                                        text-lg
                                                        leading-8
                                                        max-w-2xl
                                                    ">
                                                        {industry.description}
                                                    </p>


                                                    {/* APPLICATION */}

                                                    <div className="mt-8">

                                                        <p
                                                            className="
                                                                text-sm
                                                                font-semibold
                                                                uppercase
                                                                tracking-[0.15em]
                                                            "
                                                            style={{
                                                                color:
                                                                    index === 2
                                                                        ? "#F5D58A"
                                                                        : "#7DD3FC"
                                                            }}
                                                        >
                                                            Applications
                                                        </p>

                                                        <p className="
                                                            mt-2
                                                            text-white/75
                                                            leading-7
                                                            max-w-xl
                                                        ">
                                                            {industry.applications}
                                                        </p>

                                                    </div>

                                                </div>


                                                {/* BOTTOM */}

                                                <div className="
                                                    mt-10
                                                    pt-6
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
                                                        tracking-[0.15em]
                                                        uppercase
                                                    ">
                                                        SSICLOSURES
                                                    </p>

                                                    <Link
                                                        to={`/contact?industry=${encodeURIComponent(
                                                            industry.name
                                                        )}`}
                                                        className="
                                                            inline-flex
                                                            items-center
                                                            bg-white
                                                            text-gray-900
                                                            px-6
                                                            py-3
                                                            rounded-full
                                                            font-semibold
                                                            hover:bg-gray-100
                                                            hover:scale-105
                                                            transition-all
                                                        "
                                                    >
                                                        Enquire Now
                                                    </Link>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="py-20 bg-[#F7FAFC]">

                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="
                        bg-[#023E8A]
                        rounded-[2rem]
                        p-10
                        md:p-14
                        text-white
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        md:justify-between
                        gap-8
                    ">

                        <div>

                            <p className="text-blue-200 uppercase tracking-[0.2em] text-sm">
                                Have a requirement?
                            </p>

                            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
                                Let's discuss your closure needs.
                            </h2>

                        </div>

                        <Link
                            to="/contact"
                            className="
                                shrink-0
                                inline-flex
                                items-center
                                justify-center
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
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default WhoWeServe;