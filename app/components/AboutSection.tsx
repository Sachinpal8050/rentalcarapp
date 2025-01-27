"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/about-image.jpg"
            alt="Professional driver"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text">
            Who We Are
          </h2>
          <p className="text-white mb-6">
            With a fleet of premium vehicles and experienced drivers, we ensure safe and comfortable travel for business
            or leisure.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white">Affordable Pricing</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white">Professional Drivers</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

