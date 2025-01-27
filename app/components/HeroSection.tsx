"use client"

import { motion } from "framer-motion"
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <Image src="/carWithDriver.png" alt="Premium car with driver" layout="fill" objectFit="cover" quality={100} priority />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ride in Comfort with Our Chauffeur-Driven Cars!
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Affordable, reliable, and luxurious travel solutions.
        </motion.p>
        <div className="space-x-4">
          <motion.button
            className="bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#EE8437] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  )
}

