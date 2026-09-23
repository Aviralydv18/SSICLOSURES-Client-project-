import { Link } from "react-router-dom";
import industry2 from "../assets/industry2.png";

function AboutPreview() {
    return (
        <section className="bg-white py-24 md:py-32">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <div className="flex items-center gap-4 mb-10">
                    <span className="w-10 h-[2px] bg-[#023E8A]" />

                    <p className="text-[#023E8A] text-sm font-semibold uppercase tracking-[0.25em]">
                        About SSICLOSURES
                    </p>
                </div>

                <div className="max-w-5xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
                        Closure solutions designed
                        <span className="text-[#023E8A]">
                            {" "}for demanding industries.
                        </span>
                    </h2>
                </div>

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    <div className="lg:col-span-7">

                        <div className="relative h-[420px] md:h-[520px] overflow-hidden bg-[#EAF4FB]">

                            <img
                                src={industry2}
                                alt="SSICLOSURES manufacturing"
                                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-black/20" />

                            <div className="absolute bottom-0 left-0 bg-[#023E8A] text-white px-6 py-5">
                                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                                    SSICLOSURES
                                </p>

                                <p className="mt-1 font-semibold">
                                    Precision • Consistency • Reliability
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-center">

                        <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                            SSICLOSURES develops and supplies closure
                            solutions for industries where reliable
                            packaging performance matters.
                        </p>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Our focus is on delivering consistent products
                            that meet the requirements of pharmaceutical,
                            cosmetic, distillery, beverage and other
                            packaging applications.
                        </p>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            From product selection to customer requirements,
                            we aim to build dependable solutions for both
                            domestic and international supply.
                        </p>

                        <Link
                            to="/about"
                            className="group inline-flex items-center gap-3 mt-10 text-[#023E8A] font-semibold w-fit"
                        >
                            Discover SSICLOSURES
                            <span className="text-xl group-hover:translate-x-2 transition-transform">
                                →
                            </span>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutPreview;