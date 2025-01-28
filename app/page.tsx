"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import VideoSection from "./components/VideoSection";
import FleetSection from "./components/FleetSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import RatingSection from "./components/RatingSection";
import BookingFormSection from "./components/BookingFormSection";
import ContactSection from "./components/ContactSection";
import FloatingCTA from "./components/FloatingCTA";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <FleetSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <BookingFormSection />
      <TestimonialsSection />
      <RatingSection />
      <ContactSection />
      <FloatingCTA />
      <Toaster position="bottom-right"  />
    </main>
  );
}
