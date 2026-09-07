import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

function InfrastructurePreview() {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionTitle
                    title="Our Infrastructure"
                    subtitle="Modern manufacturing capabilities supporting consistent production."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div className="h-[350px] bg-gray-200 rounded-2xl flex items-center justify-center">
                        <span className="text-gray-500">
                            Factory Image
                        </span>
                    </div>

                    <div>

                        <h3 className="text-3xl font-bold text-gray-900">
                            Built For Consistent Production
                        </h3>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            Our infrastructure is designed to support
                            efficient production and maintain consistent
                            product quality.
                        </p>

                        <Link
                            to="/infrastructure"
                            className="inline-block mt-6 bg-[#023E8A] text-white px-6 py-3 rounded-lg font-semibold"
                        >
                            Explore Infrastructure
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default InfrastructurePreview;