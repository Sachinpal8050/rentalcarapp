"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const reasons = [
  { title: "Affordable Pricing", description: "Competitive rates without compromising on quality." },
  { title: "Punctual and Professional Drivers", description: "Experienced chauffeurs ensuring a smooth journey." },
  { title: "Clean and Well-Maintained Cars", description: "Regularly serviced vehicles for your comfort and safety." },
  { title: "24/7 Customer Support", description: "Round-the-clock assistance for your peace of mind." },
]

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                <Image
                  src={`/reason-${index + 1}.jpg`}
                  alt={reason.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text">
                  {reason.title}
                </h3>
                <p className="text-white">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

