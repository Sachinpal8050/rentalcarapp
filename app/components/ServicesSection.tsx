"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Airport Transfers", icon: "✈️" },
  { name: "Corporate Travel", icon: "💼" },
  { name: "City Tours", icon: "🏙️" },
  { name: "Long-Distance Trips", icon: "🚗" },
  { name: "Customizable Packages", icon: "📦" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
     className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-5xl mb-4 text-[#EE8437]"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: -10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
