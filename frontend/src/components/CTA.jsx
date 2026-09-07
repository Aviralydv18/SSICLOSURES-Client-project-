import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="py-20 bg-[#023E8A]">

            <div className="max-w-4xl mx-auto px-4 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Looking For Reliable  Closures?
                </h2>

                <p className="mt-5 text-blue-100 text-lg">
                    Talk to our team about your product and packaging requirements.
                </p>

                <Link
                    to="/contact"
                    className="inline-block mt-8 bg-white text-[#023E8A] px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    Get In Touch
                </Link>

            </div>

        </section>
    );
}

export default CTA;