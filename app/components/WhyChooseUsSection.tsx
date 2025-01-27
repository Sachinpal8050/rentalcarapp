"use client";

import { motion } from "framer-motion";

const reasons = [
  { title: "Affordable Pricing", description: "Competitive rates without compromising on quality.", icon: "💲" },
  { title: "Punctual and Professional Drivers", description: "Experienced chauffeurs ensuring a smooth journey.", icon: "⏱️" },
  { title: "Clean and Well-Maintained Cars", description: "Regularly serviced vehicles for your comfort and safety.", icon: "🚗" },
  { title: "24/7 Customer Support", description: "Round-the-clock assistance for your peace of mind.", icon: "☎️" },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="py-20 bg-gradient-to-br from-[#F1D0A9] to-[#F9C79C] text-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        
        {/* Grid Layout for Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon Section */}
              <div className="text-6xl text-[#EE8437] mb-4 p-4 rounded-full bg-gray-100 shadow-md hover:bg-[#F9C79C] transition-all duration-300">
                {reason.icon}
              </div>
              {/* Text Section */}
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{reason.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed font-[Inter]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
