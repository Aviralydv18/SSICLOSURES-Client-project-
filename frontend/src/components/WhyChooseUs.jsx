import SectionTitle from "./SectionTitle";
import {
    FiCheckCircle,
    FiSettings,
    FiShield,
    FiUsers
} from "react-icons/fi";

function WhyChooseUs() {

    const features = [
        {
            icon: <FiCheckCircle />,
            title: "Quality Focused",
            description:
                "We focus on delivering consistent and reliable closure solutions."
        },
        {
            icon: <FiSettings />,
            title: "Precision Manufacturing",
            description:
                "Our manufacturing approach is designed around accuracy and consistency."
        },
        {
            icon: <FiShield />,
            title: "Reliable Products",
            description:
                "Closures are designed to meet demanding industrial requirements."
        },
        {
            icon: <FiUsers />,
            title: "Customer Focused",
            description:
                "We work closely with customers to understand their requirements."
        }
    ];

    return (
        <section className="py-20 bg-[#F7FAFC]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionTitle
                    title="Why Choose Us"
                    subtitle="Our focus is to deliver dependable products and build long-term customer relationships."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((feature, index) => (

                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
                        >

                            <div className="text-4xl text-[#023E8A]">
                                {feature.icon}
                            </div>

                            <h3 className="mt-5 text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;