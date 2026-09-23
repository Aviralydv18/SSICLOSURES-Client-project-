import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

function Preloader({ onComplete }) {
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const closeTimer = setTimeout(() => {
            setClosing(true);
        }, 2200);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearTimeout(closeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`
                fixed
                inset-0
                z-[9999]
                bg-[#111111]
                flex
                items-center
                justify-center
                overflow-hidden
                ${closing ? "preloader-exit" : ""}
            `}
        >

            {/* Soft moving glow */}

            <div
                className="
                    absolute
                    w-[550px]
                    h-[550px]
                    rounded-full
                    bg-[#8B7355]/15
                    blur-3xl
                    animate-pulse
                "
            />

            <div
                className="
                    absolute
                    w-[300px]
                    h-[300px]
                    rounded-full
                    bg-white/5
                    blur-3xl
                    -top-20
                    -right-20
                "
            />


            {/* Main content */}

            <div className="relative z-10 flex flex-col items-center">

                {/* Logo */}

                <div className="preloader-logo">

                    <div
                        className="
                            bg-white
                            rounded-2xl
                            px-6
                            py-4
                            shadow-2xl
                            shadow-black/30
                        "
                    >

                        <img
                            src={logo}
                            alt="SSICLOSURES"
                            className="
                                w-[180px]
                                sm:w-[220px]
                                h-auto
                                object-contain
                            "
                        />

                    </div>

                </div>


                {/* Company name */}

                <div className="mt-9 overflow-hidden">

                    <h1 className="preloader-title">

                        {"SSICLOSURES".split("").map((letter, index) => (
                            <span
                                key={index}
                                style={{
                                    animationDelay: `${index * 0.08}s`
                                }}
                            >
                                {letter}
                            </span>
                        ))}

                    </h1>

                </div>


                {/* Tagline */}

                <div className="mt-7 flex items-center gap-3 preloader-line">

                    <span className="w-10 h-[1px] bg-white/40" />

                    <p className="
                        text-white/60
                        text-xs
                        sm:text-sm
                        tracking-[0.35em]
                        uppercase
                    ">
                        Precision Closure Solutions
                    </p>

                    <span className="w-10 h-[1px] bg-white/40" />

                </div>

            </div>


            {/* Loading line */}

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

                <div className="w-32 h-[2px] bg-white/10 overflow-hidden">

                    <div className="preloader-progress" />

                </div>

            </div>

        </div>
    );
}

export default Preloader;