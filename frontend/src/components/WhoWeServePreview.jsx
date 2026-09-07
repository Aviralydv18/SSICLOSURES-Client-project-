import SectionTitle from "./SectionTitle";

function WhoWeServePreview() {

    const industries = [
        {
            name: "Pharma",
            description:
                "Closure solutions designed to support pharmaceutical packaging requirements."
        },
        {
            name: "Cosmetics",
            description:
                "Premium closure solutions for cosmetic and personal care packaging."
        },
        {
            name: "Distillery",
            description:
                "Reliable aluminium closures for beverage and distillery applications."
        }
    ];

    return (
        <section className="py-20 bg-[#F7FAFC]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SectionTitle
                    title="Who We Serve"
                    subtitle="Our closure solutions support multiple industries."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {industries.map((industry, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition"
                        >

                            <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                                <span className="text-gray-500">
                                    {industry.name} Image
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                {industry.name}
                            </h3>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                {industry.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhoWeServePreview;