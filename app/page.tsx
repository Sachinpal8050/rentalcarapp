"use client"

import { motion } from "framer-motion"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import FleetSection from "./components/FleetSection"
import ServicesSection from "./components/ServicesSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import RatingSection from "./components/RatingSection"
import BookingFormSection from "./components/BookingFormSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#EE8437] to-[#705541]">
      <Header />
      <HeroSection />
      <AboutSection />
      <FleetSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <RatingSection />
      <BookingFormSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

