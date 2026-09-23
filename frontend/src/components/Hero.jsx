import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import industry1 from "../assets/industry1.png";
import industry2 from "../assets/industry2.png";
import industry3 from "../assets/industry3.png";

function Hero() {

    const images = [
        industry1,
        industry2,
        industry3
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentImage((prev) => {
                return (prev + 1) % images.length;
            });

        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

            {/* Background Images */}
            {images.map((image, index) => (

                <div
                    key={image}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        index === currentImage
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                />

            ))}


            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Blue Tint */}
            <div className="absolute inset-0 bg-[#023E8A]/20" />


            {/* Content */}
            <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center">

                <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">

                    <div className="max-w-5xl">

                        {/* Small Label */}
                        <div className="flex items-center gap-4 mb-8">

                            <span className="w-12 h-[2px] bg-white" />

                            <p className="text-white uppercase tracking-[0.3em] text-sm font-medium">
                                SSICLOSURES
                            </p>

                        </div>


                        {/* Main Heading */}
                        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">

                            Precision Closures.

                            <br />

                            <span className="text-[#7dd3fc]">
                                Built for Industry.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">

                            Reliable closure solutions engineered for
                            pharma, cosmetics, distillery, beverage and
                            packaging applications.

                        </p>


                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">

                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center bg-white text-[#023E8A] px-7 py-4 font-semibold hover:bg-[#EAF4FB] transition duration-300"
                            >
                                Explore Products
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center border border-white/70 text-white px-7 py-4 font-semibold hover:bg-white hover:text-[#023E8A] transition duration-300"
                            >
                                Request a Quote
                            </Link>

                        </div>

                    </div>


                    {/* Bottom Information */}
                    <div className="absolute bottom-8 left-6 right-6 sm:left-8 sm:right-8 lg:left-12 lg:right-12">

                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                            <div className="text-white/70 text-sm max-w-md">

                                Closure solutions for demanding
                                industries and supply requirements.

                            </div>


                            <div className="flex items-center gap-4">

                                {/* Image Indicators */}
                                <div className="flex items-center gap-2">

                                    {images.map((_, index) => (

                                        <button
                                            key={index}
                                            onClick={() => setCurrentImage(index)}
                                            className={`h-[2px] transition-all duration-500 ${
                                                index === currentImage
                                                    ? "w-10 bg-white"
                                                    : "w-5 bg-white/40"
                                            }`}
                                            aria-label={`Show image ${index + 1}`}
                                        />

                                    ))}

                                </div>


                                <span className="text-white/70 uppercase tracking-widest text-sm">
                                    Explore
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;