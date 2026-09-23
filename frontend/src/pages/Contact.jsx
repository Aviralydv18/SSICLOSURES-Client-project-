import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

import { openEmail } from "../utils/email";

function Contact() {
    const [searchParams] = useSearchParams();

    const productFromUrl = searchParams.get("product") || "";
    const industryFromUrl = searchParams.get("industry") || "";

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        product: productFromUrl,
        industry: industryFromUrl,
        quantity: "",
        requirement: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject =
            formData.product
                ? `Product Enquiry - ${formData.product}`
                : formData.industry
                    ? `Industry Enquiry - ${formData.industry}`
                    : "New Enquiry - SSICLOSURES";

        const body = `Hello SSICLOSURES,

I would like to make an enquiry.

CUSTOMER DETAILS
-------------------------
Name: ${formData.name}
Company Name: ${formData.company || "Not provided"}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

REQUIREMENT DETAILS
-------------------------
Product: ${formData.product || "Not specified"}
Industry: ${formData.industry || "Not specified"}
Quantity Required: ${formData.quantity || "Not specified"}

Requirement:
${formData.requirement}

Thank you.
`;

        openEmail(subject, body);
    };

    return (
        <main className="bg-[#F7FAFC] min-h-screen">

            {/* ================= HERO ================= */}

            <section className="bg-[#023E8A] text-white py-24 md:py-32">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="flex items-center gap-4 mb-8">

                        <span className="w-10 h-[2px] bg-white" />

                        <p className="text-white/60 text-sm font-semibold uppercase tracking-[0.25em]">
                            Contact SSICLOSURES
                        </p>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

                        <div className="lg:col-span-8">

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight">
                                Let's build the right
                                <span className="text-[#7dd3fc]">
                                    {" "}closure solution.
                                </span>
                            </h1>

                        </div>

                        <div className="lg:col-span-4">

                            <p className="text-white/70 text-lg leading-relaxed">
                                Tell us about your product, packaging
                                requirements and application. Our team will
                                get back to you through email.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CONTACT CONTENT ================= */}

            <section className="py-20 md:py-28">

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">

                        {/* ================= LEFT ================= */}

                        <div className="lg:col-span-5">

                            <div className="flex items-center gap-4 mb-8">

                                <span className="w-10 h-[2px] bg-[#023E8A]" />

                                <p className="text-[#023E8A] text-sm font-semibold uppercase tracking-[0.25em]">
                                    Get In Touch
                                </p>

                            </div>

                            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
                                Tell us what
                                <span className="text-[#023E8A]">
                                    {" "}you need.
                                </span>
                            </h2>

                            <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-xl">
                                Whether you are looking for product
                                information, customized closure solutions or
                                a quotation, send us your requirements and
                                our team will get in touch.
                            </p>


                            {/* Contact Information */}

                            <div className="mt-12 border-t border-gray-200">

                                {/* Email */}

                                <a
                                    href="mailto:Business@ssiclosures.com"
                                    className="group flex items-start gap-5 py-6 border-b border-gray-200"
                                >

                                    <div className="w-11 h-11 rounded-full bg-[#EAF4FB] text-[#023E8A] flex items-center justify-center shrink-0">
                                        <FiMail size={20} />
                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            Email
                                        </p>

                                        <p className="mt-1 text-gray-900 font-medium group-hover:text-[#023E8A] transition">
                                            Business@ssiclosures.com
                                        </p>

                                    </div>

                                </a>


                                {/* Phone */}

                                <a
                                    href="tel:+919873435324"
                                    className="group flex items-start gap-5 py-6 border-b border-gray-200"
                                >

                                    <div className="w-11 h-11 rounded-full bg-[#EAF4FB] text-[#023E8A] flex items-center justify-center shrink-0">
                                        <FiPhone size={19} />
                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            Phone
                                        </p>

                                        <p className="mt-1 text-gray-900 font-medium group-hover:text-[#023E8A] transition">
                                            +91 9873435324
                                        </p>

                                    </div>

                                </a>


                                {/* Address */}

                                <div className="flex items-start gap-5 py-6">

                                    <div className="w-11 h-11 rounded-full bg-[#EAF4FB] text-[#023E8A] flex items-center justify-center shrink-0">
                                        <FiMapPin size={19} />
                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            Factory
                                        </p>

                                        <p className="mt-1 text-gray-900 font-medium leading-relaxed">
                                            Plot No. 917/1, Rithala Industrial
                                            Area, Near Rice Mill,
                                            New Delhi 110085
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================= FORM ================= */}

                        <div className="lg:col-span-7">

                            <div className="bg-white border border-gray-200 rounded-3xl p-7 md:p-10 shadow-sm">

                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

                                    <div>

                                        <p className="text-[#023E8A] text-sm font-semibold uppercase tracking-[0.2em]">
                                            Enquiry Form
                                        </p>

                                        <h2 className="mt-2 text-3xl font-semibold text-gray-900">
                                            Send us your requirement
                                        </h2>

                                    </div>

                                    <div className="hidden sm:flex w-11 h-11 rounded-full bg-[#EAF4FB] text-[#023E8A] items-center justify-center">
                                        <FiMail size={20} />
                                    </div>

                                </div>


                                <p className="text-gray-500 leading-relaxed mb-8">
                                    Fill in the details below. Clicking
                                    <span className="font-medium text-gray-700">
                                        {" "}Send Enquiry
                                    </span>
                                    {" "}will open Gmail with your enquiry
                                    prepared for SSICLOSURES.
                                </p>


                                {/* Selected Product */}

                                {formData.product && (

                                    <div className="mb-6 bg-[#EAF4FB] border border-[#d5eaf7] rounded-2xl p-5">

                                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                                            Product Enquiry
                                        </p>

                                        <p className="mt-1 text-lg font-semibold text-[#023E8A]">
                                            {formData.product}
                                        </p>

                                    </div>

                                )}


                                {/* Selected Industry */}

                                {formData.industry && (

                                    <div className="mb-6 bg-[#EAF4FB] border border-[#d5eaf7] rounded-2xl p-5">

                                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                                            Industry Enquiry
                                        </p>

                                        <p className="mt-1 text-lg font-semibold text-[#023E8A]">
                                            {formData.industry}
                                        </p>

                                    </div>

                                )}


                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >

                                    {/* Name + Company */}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                        <div>

                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your name"
                                                className="
                                                    w-full
                                                    bg-[#F7FAFC]
                                                    border
                                                    border-gray-200
                                                    rounded-xl
                                                    px-4
                                                    py-3.5
                                                    text-gray-900
                                                    placeholder:text-gray-400
                                                    focus:outline-none
                                                    focus:border-[#023E8A]
                                                    focus:ring-2
                                                    focus:ring-[#023E8A]/10
                                                    transition
                                                "
                                            />

                                        </div>


                                        <div>

                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>

                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your company"
                                                className="
                                                    w-full
                                                    bg-[#F7FAFC]
                                                    border
                                                    border-gray-200
                                                    rounded-xl
                                                    px-4
                                                    py-3.5
                                                    text-gray-900
                                                    placeholder:text-gray-400
                                                    focus:outline-none
                                                    focus:border-[#023E8A]
                                                    focus:ring-2
                                                    focus:ring-[#023E8A]/10
                                                    transition
                                                "
                                            />

                                        </div>

                                    </div>


                                    {/* Phone + Email */}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                        <div>

                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number *
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your phone number"
                                                className="
                                                    w-full
                                                    bg-[#F7FAFC]
                                                    border
                                                    border-gray-200
                                                    rounded-xl
                                                    px-4
                                                    py-3.5
                                                    text-gray-900
                                                    placeholder:text-gray-400
                                                    focus:outline-none
                                                    focus:border-[#023E8A]
                                                    focus:ring-2
                                                    focus:ring-[#023E8A]/10
                                                    transition
                                                "
                                            />

                                        </div>


                                        <div>

                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your email address"
                                                className="
                                                    w-full
                                                    bg-[#F7FAFC]
                                                    border
                                                    border-gray-200
                                                    rounded-xl
                                                    px-4
                                                    py-3.5
                                                    text-gray-900
                                                    placeholder:text-gray-400
                                                    focus:outline-none
                                                    focus:border-[#023E8A]
                                                    focus:ring-2
                                                    focus:ring-[#023E8A]/10
                                                    transition
                                                "
                                            />

                                        </div>

                                    </div>


                                    {/* Product + Industry */}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                        <div>

                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Product
                                            </label>

                                            <input
                                                type="text"
                                                name="product"
                                                value={formData.product}
                                                onChange={handleChange}
                                                placeholder="Product name"
                                                className="
                                                    w-full
                                                    bg-[#F7FAFC]
                                                    border
                                                    border-gray-200
                                                    rounded-xl
                                                    px-4
                                                    py-3.5
                                                    text-gray-900
                                                    placeholder:text-gray-400
                                                    focus:outline-none
                                                    focus:border-[#023E8A]
                                                    focus:ring-2
                                                    focus:ring-[#023E8A]/10
                                                    transition
                                                "
                                            />

                                        </div>


                                        <div>

                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Industry
                                            </label>

                                            <select
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                                className="
                                                    w-full
                                                    bg-[#F7FAFC]
                                                    border
                                                    border-gray-200
                                                    rounded-xl
                                                    px-4
                                                    py-3.5
                                                    text-gray-900
                                                    focus:outline-none
                                                    focus:border-[#023E8A]
                                                    focus:ring-2
                                                    focus:ring-[#023E8A]/10
                                                    transition
                                                "
                                            >

                                                <option value="">
                                                    Select Industry
                                                </option>

                                                <option value="Pharmaceutical">
                                                    Pharmaceutical
                                                </option>

                                                <option value="Cosmetics">
                                                    Cosmetics
                                                </option>

                                                <option value="Distillery & Spirits">
                                                    Distillery & Spirits
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    {/* Quantity */}

                                    <div>

                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Approximate Quantity Required
                                        </label>

                                        <input
                                            type="text"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            placeholder="Example: 50,000 pieces"
                                            className="
                                                w-full
                                                bg-[#F7FAFC]
                                                border
                                                border-gray-200
                                                rounded-xl
                                                px-4
                                                py-3.5
                                                text-gray-900
                                                placeholder:text-gray-400
                                                focus:outline-none
                                                focus:border-[#023E8A]
                                                focus:ring-2
                                                focus:ring-[#023E8A]/10
                                                transition
                                            "
                                        />

                                    </div>


                                    {/* Requirement */}

                                    <div>

                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Requirement *
                                        </label>

                                        <textarea
                                            name="requirement"
                                            value={formData.requirement}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            placeholder="Tell us about your closure requirement..."
                                            className="
                                                w-full
                                                bg-[#F7FAFC]
                                                border
                                                border-gray-200
                                                rounded-xl
                                                px-4
                                                py-3.5
                                                text-gray-900
                                                placeholder:text-gray-400
                                                focus:outline-none
                                                focus:border-[#023E8A]
                                                focus:ring-2
                                                focus:ring-[#023E8A]/10
                                                transition
                                                resize-none
                                            "
                                        />

                                    </div>


                                    {/* Submit */}

                                    <button
                                        type="submit"
                                        className="
                                            group
                                            w-full
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                            bg-[#023E8A]
                                            text-white
                                            rounded-xl
                                            px-6
                                            py-4
                                            font-semibold
                                            hover:bg-[#012f68]
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <FiMail size={19} />

                                        <span>
                                            Send Enquiry by Email
                                        </span>

                                        <FiArrowUpRight
                                            size={18}
                                            className="
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                                transition-transform
                                            "
                                        />

                                    </button>


                                    <p className="text-center text-xs text-gray-400">
                                        Your enquiry will open in Gmail and
                                        be addressed to Business@ssiclosures.com.
                                    </p>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;