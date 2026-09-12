
function Infrastructure() {
    return (
        <main className="bg-[#F7FAFC] min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold text-[#023E8A]">
                Infrastructure
            </h1>
        </main>
    );
}

export default Infrastructure;

// function Infrastructure() {
//     const capabilities = [
//         {
//             title: "Manufacturing Facility",
//             description:
//                 "Our manufacturing facility supports the production of reliable closure solutions for diverse packaging requirements."
//         },
//         {
//             title: "Production Process",
//             description:
//                 "We focus on consistent production processes to deliver closures that meet customer requirements across different applications."
//         },
//         {
//             title: "Quality Focus",
//             description:
//                 "Quality checks are an important part of our production approach, helping maintain consistency and reliability in our closure solutions."
//         },
//         {
//             title: "Packaging & Handling",
//             description:
//                 "Finished products are handled and packed with care to help maintain product quality during storage and transportation."
//         }
//     ];

//     return (
//         <main className="bg-[#F7FAFC] min-h-screen">

//             {/* Hero Section */}
//             <section className="bg-[#023E8A] text-white py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                     <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                         Infrastructure
//                     </h1>

//                     <p className="text-blue-100 text-lg max-w-2xl">
//                         Our infrastructure supports consistent manufacturing
//                         and reliable closure solutions for diverse industries.
//                     </p>

//                 </div>
//             </section>


//             {/* Manufacturing Facility */}
//             <section className="py-16">

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                         {/* Image */}
//                         <div className="bg-gray-200 rounded-2xl overflow-hidden h-[400px]">

//                             <img
//                                 src={factoryImage}
//                                 alt="SSICLOSURES Manufacturing Facility"
//                                 className="w-full h-full object-cover"
//                             />

//                         </div>


//                         {/* Content */}
//                         <div>

//                             <p className="text-[#0077B6] font-semibold mb-3">
//                                 OUR FACILITY
//                             </p>

//                             <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A] mb-6">
//                                 Manufacturing Facility
//                             </h2>

//                             <p className="text-gray-600 leading-8 mb-5">
//                                 SSICLOSURES operates with a manufacturing-focused
//                                 approach to produce dependable closure solutions
//                                 for different packaging requirements.
//                             </p>

//                             <p className="text-gray-600 leading-8">
//                                 Our facility and production practices are focused
//                                 on maintaining consistency, quality and reliable
//                                 handling throughout the manufacturing process.
//                             </p>

//                         </div>

//                     </div>

//                 </div>

//             </section>


//             {/* Product + Machinery */}
//             <section className="py-16 bg-white">

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                     <div className="text-center max-w-3xl mx-auto mb-12">

//                         <p className="text-[#0077B6] font-semibold mb-3">
//                             PRODUCTION CAPABILITIES
//                         </p>

//                         <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A]">
//                             Production & Equipment
//                         </h2>

//                         <p className="text-gray-600 mt-4 leading-7">
//                             Our production environment is designed to support
//                             consistent manufacturing and dependable closure
//                             solutions.
//                         </p>

//                     </div>


//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                         {/* Product Image */}
//                         <div className="bg-[#F7FAFC] rounded-2xl border border-gray-200 overflow-hidden">

//                             <div className="h-80">

//                                 <img
//                                     src={productImage}
//                                     alt="SSICLOSURES Product"
//                                     className="w-full h-full object-contain p-6"
//                                 />

//                             </div>

//                             <div className="p-6">

//                                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                                     Closure Products
//                                 </h3>

//                                 <p className="text-gray-600 leading-7">
//                                     Our product range supports packaging
//                                     requirements across pharmaceutical,
//                                     cosmetics, distillery and other industries.
//                                 </p>

//                             </div>

//                         </div>


//                         {/* Machinery Image */}
//                         <div className="bg-[#F7FAFC] rounded-2xl border border-gray-200 overflow-hidden">

//                             <div className="h-80">

//                                 <img
//                                     src={machineryImage}
//                                     alt="SSICLOSURES Machinery"
//                                     className="w-full h-full object-cover"
//                                 />

//                             </div>

//                             <div className="p-6">

//                                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                                     Machinery & Equipment
//                                 </h3>

//                                 <p className="text-gray-600 leading-7">
//                                     Our manufacturing setup supports efficient
//                                     production and consistent closure quality.
//                                 </p>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </section>


//             {/* Factory Floor */}
//             <section className="py-16">

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                         <div className="order-2 lg:order-1">

//                             <p className="text-[#0077B6] font-semibold mb-3">
//                                 PRODUCTION ENVIRONMENT
//                             </p>

//                             <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A] mb-6">
//                                 Factory Floor
//                             </h2>

//                             <p className="text-gray-600 leading-8 mb-5">
//                                 Our production floor provides the working
//                                 environment for manufacturing and handling
//                                 closure products.
//                             </p>

//                             <p className="text-gray-600 leading-8">
//                                 We focus on organized production practices,
//                                 product consistency and careful handling of
//                                 finished products.
//                             </p>

//                         </div>


//                         <div className="order-1 lg:order-2 bg-gray-200 rounded-2xl overflow-hidden h-[400px]">

//                             <img
//                                 src={factoryFloorImage}
//                                 alt="SSICLOSURES Factory Floor"
//                                 className="w-full h-full object-cover"
//                             />

//                         </div>

//                     </div>

//                 </div>

//             </section>


//             {/* Location */}
//             <section className="py-16 bg-white">

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                         {/* Location Image */}
//                         <div className="bg-gray-200 rounded-2xl overflow-hidden h-[400px]">

//                             <img
//                                 src={locationImage}
//                                 alt="SSICLOSURES Factory Location"
//                                 className="w-full h-full object-cover"
//                             />

//                         </div>


//                         {/* Location Content */}
//                         <div>

//                             <p className="text-[#0077B6] font-semibold mb-3">
//                                 OUR LOCATION
//                             </p>

//                             <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A] mb-6">
//                                 Factory Location
//                             </h2>

//                             <p className="text-gray-600 leading-8 mb-6">
//                                 Our factory is located in Rithala Industrial
//                                 Area, New Delhi, providing a dedicated location
//                                 for our manufacturing operations.
//                             </p>


//                             <div className="bg-[#EAF4FB] rounded-xl p-6">

//                                 <h3 className="font-bold text-[#023E8A] mb-3">
//                                     SSICLOSURES
//                                 </h3>

//                                 <p className="text-gray-700 leading-7">
//                                     Plot No. 917/1,
//                                     Rithala Industrial Area,
//                                     Near Rice Mill,
//                                     New Delhi 110085
//                                 </p>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </section>


//             {/* Capabilities */}
//             <section className="py-16">

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                     <div className="text-center max-w-3xl mx-auto mb-12">

//                         <p className="text-[#0077B6] font-semibold mb-3">
//                             OUR INFRASTRUCTURE
//                         </p>

//                         <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A]">
//                             Supporting Reliable Production
//                         </h2>

//                         <p className="text-gray-600 mt-4 leading-7">
//                             Our infrastructure and production practices are
//                             focused on delivering dependable closure solutions
//                             for different packaging requirements.
//                         </p>

//                     </div>


//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//                         {capabilities.map((item) => (

//                             <div
//                                 key={item.title}
//                                 className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl transition"
//                             >

//                                 <div className="w-12 h-12 rounded-xl bg-[#EAF4FB] flex items-center justify-center mb-5">

//                                     <span className="text-[#023E8A] text-xl font-bold">
//                                         {item.title.charAt(0)}
//                                     </span>

//                                 </div>

//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                                     {item.title}
//                                 </h3>

//                                 <p className="text-gray-600 text-sm leading-7">
//                                     {item.description}
//                                 </p>

//                             </div>

//                         ))}

//                     </div>

//                 </div>

//             </section>


//             {/* CTA */}
//             <section className="py-16 bg-[#023E8A] text-white">

//                 <div className="max-w-4xl mx-auto px-4 text-center">

//                     <h2 className="text-3xl md:text-4xl font-bold mb-5">
//                         Looking For Reliable Closure Solutions?
//                     </h2>

//                     <p className="text-blue-100 leading-7 mb-8">
//                         Contact SSICLOSURES to discuss your packaging and
//                         closure requirements.
//                     </p>

//                     <a
//                         href="/contact"
//                         className="inline-block bg-white text-[#023E8A] px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//                     >
//                         Contact Us
//                     </a>

//                 </div>

//             </section>

//         </main>
//     );
// }

// export default Infrastructure;