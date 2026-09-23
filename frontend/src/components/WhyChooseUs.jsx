import {
    FiCheckCircle,
    FiSettings,
    FiShield,
    FiUsers
} from "react-icons/fi";

function WhyChooseUs() {

    const features = [
        {
            number: "01",
            icon: <FiCheckCircle />,
            title: "Consistent Quality",
            description:
                "A focused approach to maintaining consistency across closure solutions and customer requirements."
        },
        {
            number: "02",
            icon: <FiSettings />,
            title: "Precision Manufacturing",
            description:
                "Manufacturing processes focused on accuracy, consistency and dependable product performance."
        },
        {
            number: "03",
            icon: <FiShield />,
            title: "Application Focused",
            description:
                "Closure solutions developed around the requirements of different packaging applications."
        },
        {
            number: "04",
            icon: <FiUsers />,
            title: "Customer Collaboration",
            description:
                "Working closely with customers to understand specifications, applications and supply requirements."
        }
    ];

    return (
        <section className="bg-[#F7FAFC] py-24 md:py-32">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Section heading */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">

                    <div className="lg:col-span-7">

                        <div className="flex items-center gap-4 mb-8">

                            <span className="w-10 h-[2px] bg-[#023E8A]" />

                            <p className="text-[#023E8A] text-sm font-semibold uppercase tracking-[0.25em]">
                                Why SSICLOSURES
                            </p>

                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
                            Built around
                            <span className="text-[#023E8A]">
                                {" "}quality and reliability.
                            </span>
                        </h2>

                    </div>

                    <div className="lg:col-span-5 lg:flex lg:items-end">

                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                            Our approach combines manufacturing precision,
                            application understanding and close customer
                            collaboration to deliver dependable closure
                            solutions.
                        </p>

                    </div>

                </div>


                {/* Features */}
                <div className="border-t border-gray-300">

                    {features.map((feature) => (

                        <div
                            key={feature.number}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-b border-gray-300 hover:bg-white transition duration-300"
                        >

                            {/* Number */}
                            <div className="md:col-span-1">

                                <span className="text-sm font-semibold text-gray-400 group-hover:text-[#023E8A] transition">
                                    {feature.number}
                                </span>

                            </div>


                            {/* Icon */}
                            <div className="md:col-span-1">

                                <div className="w-12 h-12 border border-gray-300 flex items-center justify-center text-[#023E8A] group-hover:border-[#023E8A] transition">
                                    <span className="text-xl">
                                        {feature.icon}
                                    </span>
                                </div>

                            </div>


                            {/* Title */}
                            <div className="md:col-span-4">

                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {feature.title}
                                </h3>

                            </div>


                            {/* Description */}
                            <div className="md:col-span-6">

                                <p className="text-gray-600 leading-relaxed max-w-xl">
                                    {feature.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;