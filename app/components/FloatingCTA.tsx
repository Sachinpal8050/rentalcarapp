"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:+1234567890"
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#EE8437] to-[#705541] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Phone className="w-6 h-6" />
      <span className="ml-2 hidden md:inline">Call Now</span>
    </motion.a>
  )
}

