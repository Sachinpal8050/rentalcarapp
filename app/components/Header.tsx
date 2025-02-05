"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { logEvent, analytics } from "../../firebase";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    logEvent(analytics, "book_now_header_press");
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          >
            MBT-Travels
          </Link>
          <div className="flex items-center px-3 py-1 bg-gradient-to-r from-[#EE8437] to-[#705541] text-white text-xs md:text-sm font-semibold rounded-lg shadow-md w-fit">
            <span>Haridwar (U.K)</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          {[
            "Home",
            "About",
            "Fleet",
            "Services",
            "Testimonials",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-800 hover:text-[#EE8437]"
                  : "text-white hover:text-[#EE8437]"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <motion.button
          onClick={scrollToBooking}
          className="bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Inquire Now
        </motion.button>
      </div>
    </motion.header>
  );
}
