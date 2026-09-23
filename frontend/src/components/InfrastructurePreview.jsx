import { Link } from "react-router-dom";
import industry1 from "../assets/industry1.png";

function InfrastructurePreview() {
    return (
        <section className="bg-white py-24 md:py-32">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <div className="flex items-center gap-4 mb-10">
                    <span className="w-10 h-[2px] bg-[#023E8A]" />

                    <p className="text-[#023E8A] text-sm font-semibold uppercase tracking-[0.25em]">
                        Infrastructure
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

                    <div className="lg:col-span-7">

                        <div className="relative h-[450px] md:h-[600px] overflow-hidden bg-[#EAF4FB]">

                            <img
                                src={industry1}
                                alt="SSICLOSURES manufacturing infrastructure"
                                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-black/15" />

                            <div className="absolute bottom-0 left-0 bg-[#023E8A] text-white px-6 py-5">

                                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                                    SSICLOSURES
                                </p>

                                <p className="mt-1 font-semibold">
                                    Manufacturing Infrastructure
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-center">

                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
                            Infrastructure
                            <span className="text-[#023E8A]">
                                {" "}built around consistency.
                            </span>
                        </h2>

                        <p className="mt-8 text-xl text-gray-800 leading-relaxed font-medium">
                            Our manufacturing infrastructure is focused on
                            supporting dependable production and consistent
                            closure solutions.
                        </p>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            From manufacturing processes to product handling,
                            our approach is designed around the requirements
                            of customers and their packaging applications.
                        </p>

                        <div className="mt-10 border-t border-gray-200">

                            {[
                                "Manufacturing",
                                "Quality Focus",
                                "Production Support"
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center justify-between py-5 border-b border-gray-200"
                                >
                                    <span className="text-gray-900 font-medium">
                                        {item}
                                    </span>

                                    <span className="text-[#023E8A] text-xl">
                                        →
                                    </span>
                                </div>

                            ))}

                        </div>

                        <Link
                            to="/infrastructure"
                            className="inline-flex items-center gap-3 mt-10 text-[#023E8A] font-semibold w-fit group"
                        >
                            Explore Infrastructure

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

export default InfrastructurePreview;