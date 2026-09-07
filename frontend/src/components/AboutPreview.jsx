import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

function AboutPreview() {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionTitle
                    title="About SSICLOSURES"
                    subtitle="A trusted manufacturer focused on quality, precision and reliable aluminium closure solutions."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}

                    <div className="h-[350px] bg-gray-200 rounded-2xl flex items-center justify-center">
                        <p className="text-gray-500">
                            Manufacturing Facility Image
                        </p>
                    </div>


          

                    <div>

                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Quality Manufacturing With Precision
                        </h3>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            SSICLOSURES is focused on manufacturing reliable
                            aluminium closure solutions for industries where
                            quality, consistency and performance matter.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Our products are designed to support the specific
                            requirements of pharmaceutical, cosmetic and
                            distillery applications.
                        </p>

                        <Link
                            to="/about"
                            className="inline-block mt-6 bg-[#023E8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#012f68] transition"
                        >
                            Learn More
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutPreview;