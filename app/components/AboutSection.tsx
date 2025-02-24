"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#1e1e1e] to-[#2a2a2a]"
      aria-label="Professional car rental services in Haridwar"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://media.zigcdn.com/media/model/2024/Jun/maruti-swift-dzire-tour_600x400.jpg"
            alt="Experienced driver ready for rental service"
            width={500}
            height={500}
            className="rounded-[1rem] shadow-lg border border-gray-200"
            loading="lazy"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#EE8437] to-[#FF6F00] text-transparent bg-clip-text">
            Reliable & Professional Car Rental Services in Haridwar
          </h2>
          <p className="text-gray-300 mb-6">
            Enjoy stress-free travel with our experienced drivers, ensuring a
            smooth and luxurious ride across Haridwar and beyond.
          </p>

          <ul className="space-y-4">
            {[
              {
                title: "Punctual & Reliable Transportation",
                description:
                  "Available in Uttarakhand, Uttar Pradesh, Haryana, and Himachal Pradesh.",
              },
              {
                title: "Expert Local Drivers",
                description:
                  "Deep knowledge of Haridwar’s roads, traffic patterns, and best routes.",
              },
              {
                title: "Customized Travel Experience",
                description:
                  "Tailored services to meet your personal and business travel needs.",
              },
              {
                title: "Professional & Private",
                description:
                  "Discreet and professional drivers for both corporate and leisure travel.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 mr-2 text-[#EE8437] flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
