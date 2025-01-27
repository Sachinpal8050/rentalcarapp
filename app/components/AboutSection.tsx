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
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
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
            Professional Drivers at Your Service
          </h2>
          <p className="text-white mb-6">
            Our team of highly skilled and experienced drivers ensures a safe, comfortable, and luxurious journey for
            every client. With extensive training and a commitment to excellence, our chauffeurs provide:
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white">Punctuality and reliability for all your transportation needs</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437] flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white">Extensive knowledge of local routes and traffic patterns</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437] flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white">Personalized service tailored to your preferences</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-[#EE8437] flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white">Professionalism and discretion for business and leisure travel</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

