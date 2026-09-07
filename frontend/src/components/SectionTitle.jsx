function SectionTitle({ title, subtitle }) {
    return (
        <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A]">
                {title}
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                {subtitle}
            </p>

        </div>
    );
}

export default SectionTitle;