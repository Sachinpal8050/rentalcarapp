"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sachin",
    photo: "/avatar-placeholder.svg",
    rating: 5,
    review:
      "Fantastic service, the airport transfer from Dehradun was smooth and easy!",
  },
  {
    name: "Vipin Verma",
    photo: "/avatar-placeholder.svg",
    rating: 4,
    review:
      "Great experience with the corporate travel service in Mussoorie. The vehicle was comfortable, and the driver was professional.",
  },
  {
    name: "Aman Singh",
    photo: "/avatar-placeholder.svg",
    rating: 5,
    review:
      "Booked a city tour in Haridwar and Rishikesh. It was amazing! Highly recommend the tour guides.",
  },
  {
    name: "Priya Sharma",
    photo: "/avatar-placeholder.svg",
    rating: 5,
    review:
      "The long-distance trip from Delhi to Uttarakhand was smooth. Great driving and the vehicle was very comfortable.",
  },
  {
    name: "Raj Kumar",
    photo: "/avatar-placeholder.svg",
    rating: 4,
    review:
      "Chardham Yatra package was perfectly arranged. All the details were taken care of, and the experience was spiritual and peaceful.",
  },
  {
    name: "Anita Saini",
    photo: "/avatar-placeholder.svg",
    rating: 5,
    review:
      "The adventure tour was incredible! Trekking in the hills and rafting in Rishikesh were experiences I will never forget.",
  },
  {
    name: "Karan Mehta",
    photo: "/avatar-placeholder.svg",
    rating: 5,
    review:
      "The wildlife safari in Jim Corbett was a memorable experience. The guide was very knowledgeable, and we saw so many animals!",
  },
  {
    name: "Neha Joshi",
    photo: "/avatar-placeholder.svg",
    rating: 5,
    review:
      "The customizable religious and spiritual tour was just what I needed for my spiritual retreat. Highly recommend to anyone looking for peace.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="relative">
          <motion.div
            key={currentIndex}
            className="relative bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonials[currentIndex].photo}
                alt={testimonials[currentIndex].name}
                height={50}
                width={50}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{testimonials[currentIndex].review}</p>
          </motion.div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white rounded-full p-3 shadow-md"
            onClick={prevTestimonial}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white rounded-full p-3 shadow-md"
            onClick={nextTestimonial}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
