"use client";

import { motion } from "framer-motion";
import { logEvent, analytics } from "../../firebase";

export default function HeroSection() {
  const scrollToBooking = () => {
    logEvent(analytics, "book_now_hero_press");
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLearnMore = () => {
    logEvent(analytics, "learn_more_hero_press");
    const learnMoreSection = document.getElementById("about");
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/carWithDriver.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-[#FFA500] via-[#EE8437] to-[#FF4500] text-transparent bg-clip-text">
            Hire a Car with a Driver
          </span>
          <br />
          <span className="text-white">for Easy Travel in Haridwar!</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Affordable, reliable, and luxurious travel solutions.
        </motion.p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          <motion.button
            className="bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBooking}
          >
            Enquire Now
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#EE8437] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToLearnMore}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
}
