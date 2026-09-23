import { Link } from "react-router-dom";

function CTA() {

    return (
        <section className="bg-[#023E8A] py-24 md:py-32">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

                    {/* Main statement */}
                    <div className="lg:col-span-8">

                        <div className="flex items-center gap-4 mb-8">

                            <span className="w-10 h-[2px] bg-white" />

                            <p className="text-white/60 text-sm font-semibold uppercase tracking-[0.25em]">
                                Let's Work Together
                            </p>

                        </div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[0.95] tracking-tight">
                            Looking for the right
                            <span className="text-[#7dd3fc]">
                                {" "}closure solution?
                            </span>
                        </h2>

                    </div>


                    {/* CTA content */}
                    <div className="lg:col-span-4">

                        <p className="text-white/70 text-lg leading-relaxed">
                            Tell us about your product, application and
                            packaging requirements. Our team can help you
                            explore the right closure solution.
                        </p>

                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-4 mt-8 bg-white text-[#023E8A] px-7 py-4 font-semibold hover:bg-[#EAF4FB] transition duration-300"
                        >

                            <span>
                                Start an Enquiry
                            </span>

                            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                                →
                            </span>

                        </Link>

                    </div>

                </div>


                {/* Bottom line */}
                <div className="mt-20 pt-6 border-t border-white/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <p className="text-white/50 text-sm">
                        SSICLOSURES
                    </p>

                    <p className="text-white/50 text-sm">
                        Closure solutions for demanding applications.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default CTA;