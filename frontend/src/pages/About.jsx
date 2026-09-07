import SectionTitle from "../components/SectionTitle";

function About() {
    return (
        <main>

            {/* Page Header */}

            <section className="bg-[#F7FAFC] py-20">

                <div className="max-w-4xl mx-auto px-4 text-center">

                    <p className="text-[#023E8A] font-semibold uppercase tracking-wide">
                        About Us
                    </p>

                    <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
                        About SSICLOSURES
                    </h1>

                    <p className="mt-5 text-lg text-gray-600">
                        Delivering reliable aluminium closure solutions
                        with a focus on quality and customer requirements.
                    </p>

                </div>

            </section>


            {/* Company Introduction */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div className="h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center">
                            <span className="text-gray-500">
                                Company Image
                            </span>
                        </div>

                        <div>

                            <h2 className="text-3xl font-bold text-gray-900">
                                Who We Are
                            </h2>

                            <p className="mt-5 text-gray-600 leading-relaxed">
                                SSICLOSURES is engaged in the manufacturing
                                of aluminium closure solutions for various
                                industrial applications.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We focus on quality, consistency and customer
                                satisfaction while developing products that
                                meet the specific requirements of our clients.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Our solutions serve pharmaceutical, cosmetic
                                and distillery industries.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Mission & Vision */}

            <section className="py-20 bg-[#F7FAFC]">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title="Our Mission & Vision"
                        subtitle="Building a reliable manufacturing partner for our customers."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="bg-white p-8 rounded-xl border border-gray-200">

                            <h3 className="text-2xl font-bold text-[#023E8A]">
                                Our Mission
                            </h3>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                To provide reliable and consistent aluminium
                                closure solutions while maintaining high
                                standards of quality and customer service.
                            </p>

                        </div>


                        <div className="bg-white p-8 rounded-xl border border-gray-200">

                            <h3 className="text-2xl font-bold text-[#023E8A]">
                                Our Vision
                            </h3>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                To build long-term relationships with customers
                                and become a trusted name in aluminium closure
                                manufacturing.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default About;