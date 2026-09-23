import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FiArrowUpRight,
    FiCheckCircle,
    FiTarget,
    FiEye
} from "react-icons/fi";

import industry2 from "../assets/industry2.png";
import industry3 from "../assets/industry3.png";
import spirit1 from "../assets/spirit1.png";

function About() {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev === 0 ? 1 : 0));
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <main className="bg-[#F7FAFC]">

            {/* HERO SECTION */}

            <section className="relative h-[620px] md:h-[700px] overflow-hidden bg-[#111827]">

                {/* Industry 3 */}
                <div
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        currentImage === 0
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url(${industry3})`
                    }}
                />

                {/* Industry 2 */}
                <div
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        currentImage === 1
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url(${industry2})`
                    }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#111827]/75" />

                {/* Blue glow */}
                <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-[#023E8A]/40 blur-3xl" />

                {/* Hero content */}
                <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">

                    <div className="max-w-4xl">

                        <div className="flex items-center gap-4 mb-7">

                            <span className="w-12 h-[2px] bg-[#7dd3fc]" />

                            <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-sm font-semibold">
                                About SSICLOSURES
                            </p>

                        </div>

                        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.95] tracking-tight">

                            Built around
                            <br />

                            <span className="text-[#7dd3fc]">
                                precision & reliability.
                            </span>

                        </h1>

                        <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
                            SSICLOSURES develops reliable closure solutions
                            for demanding packaging applications across
                            pharmaceutical, cosmetic, distillery and other
                            industries.
                        </p>

                    </div>

                </div>

                {/* Image indicators */}
                <div className="absolute bottom-8 left-6 sm:left-8 lg:left-12 z-20 flex gap-3">

                    <span
                        className={
                            currentImage === 0
                                ? "w-12 h-[2px] bg-white"
                                : "w-6 h-[2px] bg-white/30"
                        }
                    />

                    <span
                        className={
                            currentImage === 1
                                ? "w-12 h-[2px] bg-white"
                                : "w-6 h-[2px] bg-white/30"
                        }
                    />

                </div>

            </section>


            {/* WHO WE ARE */}

          {/* ================= WHO WE ARE ================= */}

<section className="py-20 md:py-28 bg-white">

    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* TEXT */}

            <div>

                <div className="flex items-center gap-3 mb-6">

                    <span className="w-9 h-[2px] bg-[#023E8A]" />

                    <p className="text-[#023E8A] uppercase tracking-[0.2em] text-sm font-semibold">
                        Who We Are
                    </p>

                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                    A closure partner
                    <br />
                    focused on what matters.
                </h2>

                <div className="mt-7 space-y-5 text-gray-600 text-lg leading-8">

                    <p>
                        SSICLOSURES is engaged in the manufacturing
                        of closure solutions for a range of
                        industrial packaging applications.
                    </p>

                    <p>
                        We focus on quality, consistency and
                        customer requirements while developing
                        products suited to the needs of our clients.
                    </p>

                    <p>
                        Our closure solutions support applications
                        across pharmaceutical, cosmetic, distillery,
                        beverage and packaging segments.
                    </p>

                </div>

                <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="flex items-start gap-3">
                        <FiCheckCircle
                            className="text-[#023E8A] mt-1"
                            size={19}
                        />

                        <span className="text-gray-700">
                            Consistent manufacturing
                        </span>
                    </div>

                    <div className="flex items-start gap-3">
                        <FiCheckCircle
                            className="text-[#023E8A] mt-1"
                            size={19}
                        />

                        <span className="text-gray-700">
                            Customer-focused solutions
                        </span>
                    </div>

                    <div className="flex items-start gap-3">
                        <FiCheckCircle
                            className="text-[#023E8A] mt-1"
                            size={19}
                        />

                        <span className="text-gray-700">
                            Industrial applications
                        </span>
                    </div>

                    <div className="flex items-start gap-3">
                        <FiCheckCircle
                            className="text-[#023E8A] mt-1"
                            size={19}
                        />

                        <span className="text-gray-700">
                            Custom requirements
                        </span>
                    </div>

                </div>

            </div>


            {/* IMAGE SLIDER CARD */}

            <div>

                <div className="
                    relative
                    h-[380px]
                    md:h-[450px]
                    rounded-3xl
                    overflow-hidden
                    bg-[#F7FAFC]
                    border
                    border-gray-200
                    shadow-sm
                ">

                    {/* Industry 3 */}

                    <div
                        className={
                            currentImage === 0
                                ? "absolute inset-0 opacity-100 transition-opacity duration-1000"
                                : "absolute inset-0 opacity-0 transition-opacity duration-1000"
                        }
                    >

                        <img
                            src={industry3}
                            alt="SSICLOSURES industrial operations"
                            className="w-full h-full object-cover"
                        />

                    </div>


                    {/* Industry 2 */}

                    <div
                        className={
                            currentImage === 1
                                ? "absolute inset-0 opacity-100 transition-opacity duration-1000"
                                : "absolute inset-0 opacity-0 transition-opacity duration-1000"
                        }
                    >

                        <img
                            src={industry2}
                            alt="SSICLOSURES manufacturing"
                            className="w-full h-full object-cover"
                        />

                    </div>


                    {/* Soft overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />


                    {/* Card Label */}

                    <div className="absolute bottom-6 left-6">

                        <p className="text-white/70 text-xs uppercase tracking-[0.2em]">
                            SSICLOSURES
                        </p>

                        <p className="mt-1 text-white text-xl font-semibold">
                            Manufacturing with purpose.
                        </p>

                    </div>


                    {/* Slider Indicators */}

                    <div className="absolute bottom-6 right-6 flex gap-2">

                        <button
                            onClick={() => setCurrentImage(0)}
                            className={
                                currentImage === 0
                                    ? "w-8 h-1 rounded-full bg-white transition-all"
                                    : "w-4 h-1 rounded-full bg-white/40 transition-all"
                            }
                        />

                        <button
                            onClick={() => setCurrentImage(1)}
                            className={
                                currentImage === 1
                                    ? "w-8 h-1 rounded-full bg-white transition-all"
                                    : "w-4 h-1 rounded-full bg-white/40 transition-all"
                            }
                        />

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

            {/* OUR APPROACH */}

            <section className="py-20 md:py-28 bg-[#F7FAFC]">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Content */}

                        <div>

                            <p className="text-[#023E8A] uppercase tracking-[0.2em] text-sm font-semibold">
                                Our Approach
                            </p>

                            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                                From requirement
                                <br />
                                to reliable closure.
                            </h2>

                            <p className="mt-7 text-lg text-gray-600 leading-8 max-w-xl">
                                Every packaging requirement is different.
                                Our approach is centered around understanding
                                customer needs and delivering closure
                                solutions with consistency and attention to
                                detail.
                            </p>

                            <div className="mt-9">

                                <Link
                                    to="/products"
                                    className="group inline-flex items-center gap-3 bg-[#023E8A] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#012f68] transition"
                                >
                                    Explore Our Products

                                    <FiArrowUpRight
                                        size={18}
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    />
                                </Link>

                            </div>

                        </div>


                        {/* Image */}

                        <div>

                            <div className="relative h-[500px] rounded-[2rem] overflow-hidden group">

                                <img
                                    src={industry3}
                                    alt="SSICLOSURES industrial operations"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/30 to-transparent" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* CLOSURE SOLUTIONS */}

            <section className="py-20 md:py-28 bg-white">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Product */}

                        <div>

                            <div className="relative bg-[#F7FAFC] rounded-[2rem] border border-gray-200 overflow-hidden h-[500px] flex items-center justify-center group">

                                <div className="absolute w-72 h-72 rounded-full bg-[#EAF4FB] blur-3xl" />

                                <img
                                    src={spirit1}
                                    alt="SSICLOSURES spirit closure"
                                    className="relative z-10 w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                                />

                            </div>

                        </div>


                        {/* Content */}

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="w-9 h-[2px] bg-[#023E8A]" />

                                <p className="text-[#023E8A] uppercase tracking-[0.2em] text-sm font-semibold">
                                    Closure Solutions
                                </p>

                            </div>

                            <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                                Designed for
                                <br />
                                diverse applications.
                            </h2>

                            <p className="mt-7 text-lg text-gray-600 leading-8">
                                From pharmaceutical and cosmetic packaging
                                to distillery, beverage and jar applications,
                                SSICLOSURES provides closure solutions
                                developed around the requirements of
                                different industries.
                            </p>

                            <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-4">

                                {[
                                    "Pharma",
                                    "Cosmetics",
                                    "Distillery",
                                    "Packaging"
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="border border-gray-200 rounded-2xl px-4 py-5 text-center hover:border-[#023E8A] hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <p className="text-sm font-semibold text-gray-800">
                                            {item}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* MISSION AND VISION */}

            <section className="py-20 md:py-28 bg-[#111827] text-white">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="max-w-3xl mb-14">

                        <p className="text-[#7dd3fc] uppercase tracking-[0.25em] text-sm font-semibold">
                            Our Direction
                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                            Focused on building
                            <br />
                            lasting partnerships.
                        </h2>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Mission */}

                        <div className="border border-white/10 bg-white/[0.04] rounded-[2rem] p-8 md:p-10">

                            <div className="w-12 h-12 rounded-full bg-[#023E8A] flex items-center justify-center">
                                <FiTarget size={22} />
                            </div>

                            <h3 className="mt-7 text-2xl font-semibold">
                                Our Mission
                            </h3>

                            <p className="mt-5 text-white/60 leading-7">
                                To provide reliable and consistent closure
                                solutions while maintaining strong standards
                                of quality and customer service.
                            </p>

                        </div>


                        {/* Vision */}

                        <div className="border border-white/10 bg-white/[0.04] rounded-[2rem] p-8 md:p-10">

                            <div className="w-12 h-12 rounded-full bg-[#0077B6] flex items-center justify-center">
                                <FiEye size={22} />
                            </div>

                            <h3 className="mt-7 text-2xl font-semibold">
                                Our Vision
                            </h3>

                            <p className="mt-5 text-white/60 leading-7">
                                To build long-term relationships with
                                customers and become a trusted name in
                                closure manufacturing.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="py-20 bg-[#F7FAFC]">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="relative overflow-hidden bg-[#023E8A] rounded-[2rem] px-8 py-14 md:px-14 md:py-16 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative z-10">

                            <p className="text-white/60 uppercase tracking-[0.2em] text-sm">
                                Work with SSICLOSURES
                            </p>

                            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
                                Have a closure requirement?
                            </h2>

                        </div>

                        <Link
                            to="/contact"
                            className="relative z-10 inline-flex items-center gap-2 bg-white text-[#023E8A] px-7 py-4 rounded-full font-semibold hover:bg-[#EAF4FB] transition"
                        >
                            Get In Touch
                            <FiArrowUpRight size={18} />
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default About;