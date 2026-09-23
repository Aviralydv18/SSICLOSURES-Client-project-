import { Link } from "react-router-dom";
import industry3 from "../assets/industry3.png";

function WhoWeServePreview() {

    const industries = [
        {
            number: "01",
            name: "Pharmaceutical",
            description:
                "Closure solutions designed to support pharmaceutical packaging applications."
        },
        {
            number: "02",
            name: "Cosmetics & Personal Care",
            description:
                "Closure solutions for cosmetic and personal care packaging."
        },
        {
            number: "03",
            name: "Distillery & Spirits",
            description:
                "Closure solutions for bottles used across distillery and spirit applications."
        }
    ];

    return (
        <section className="relative bg-[#023E8A] py-24 md:py-32 overflow-hidden">

            {/* Real SSICLOSURES image */}
            <div className="absolute inset-0 opacity-15">

                <img
                    src={industry3}
                    alt=""
                    className="w-full h-full object-cover"
                />

            </div>

            <div className="absolute inset-0 bg-[#023E8A]/80" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">

                    <div className="lg:col-span-7">

                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-10 h-[2px] bg-white" />

                            <p className="text-white/70 text-sm font-semibold uppercase tracking-[0.25em]">
                                Industries
                            </p>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
                            Solutions built for
                            <span className="text-[#7dd3fc]">
                                {" "}different applications.
                            </span>
                        </h2>

                    </div>

                    <div className="lg:col-span-5 lg:flex lg:items-end">

                        <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                            Our closure solutions support packaging
                            requirements across different industries
                            and applications.
                        </p>

                    </div>

                </div>

                <div className="border-t border-white/20">

                    {industries.map((industry) => (

                        <div
                            key={industry.number}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-9 md:py-11 border-b border-white/20 hover:bg-white/5 transition duration-300"
                        >

                            <div className="md:col-span-1">
                                <span className="text-sm font-semibold text-white/40 group-hover:text-[#7dd3fc]">
                                    {industry.number}
                                </span>
                            </div>

                            <div className="md:col-span-4">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                    {industry.name}
                                </h3>
                            </div>

                            <div className="md:col-span-6">
                                <p className="text-white/65 leading-relaxed max-w-xl">
                                    {industry.description}
                                </p>
                            </div>

                            <div className="md:col-span-1 flex md:justify-end items-center">
                                <span className="text-2xl text-white/50 group-hover:text-white group-hover:translate-x-2 transition duration-300">
                                    →
                                </span>
                            </div>

                        </div>

                    ))}

                </div>

                <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                    <p className="text-white/60">
                        Looking for a closure solution for your application?
                    </p>

                    <Link
                        to="/who-we-serve"
                        className="inline-flex items-center justify-center bg-white text-[#023E8A] px-7 py-4 font-semibold hover:bg-[#EAF4FB] transition duration-300"
                    >
                        Explore Industries
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default WhoWeServePreview;