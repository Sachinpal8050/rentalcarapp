"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#1e1e1e] to-[#2a2a2a]"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://media.zigcdn.com/media/model/2024/Jun/maruti-swift-dzire-tour_600x400.jpg"
            alt="Professional driver"
            width={500}
            height={500}
            className="rounded-[1rem] shadow-lg border border-gray-200"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#EE8437] to-[#FF6F00] text-transparent bg-clip-text">
            Professional Drivers at Your Service in Haridwar
          </h2>
          <p className="text-gray-300 mb-6">
            Our team of highly skilled and experienced drivers ensures a safe,
            comfortable, and luxurious journey for every client in Haridwar.
            With extensive training and a commitment to excellence, our local
            chauffeurs provide:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437] flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">
                Punctual and reliable transportation across Uttarakhand, Uttar
                Pradesh,Haryana and Himachal Pradesh
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437] flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">
                In-depth knowledge of Haridwar’s roads, traffic patterns, and
                shortcuts
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437] flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">
                Personalized service tailored to your preferences and travel
                needs
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437] flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">
                Professionalism and discretion for business and leisure travel
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
