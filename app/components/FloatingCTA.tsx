"use client"

import { motion } from "framer-motion"

export default function FloatingCTA() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={scrollToBooking}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Book Now
    </motion.button>
  )
}

