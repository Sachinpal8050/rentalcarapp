"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-200"
      aria-label="Luxury car rental video showcase"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-orange-500 to-amber-700 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Luxury Car Experience in Haridwar
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Experience the ultimate comfort and convenience with our premium
          chauffeur-driven cars. Watch the video to see what sets us apart.
        </motion.p>

        <motion.div
          className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-gray-100"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Gradient Overlay for Visual Appeal */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-10"></div>

          {/* Video Player */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/drivingVideoPoster.jpg" // Placeholder image for faster loading
          >
            <source src="./drivingVideo.mp4" type="video/mp4" />
            <p className="text-center text-white">
              Your browser does not support the video tag. Please{" "}
              <a href="./drivingVideo.mp4" className="underline">
                download the video
              </a>
              .
            </p>
          </video>

          {/* Play Button as a CTA */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.button
              className="p-4 bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              aria-label="Play luxury car experience video"
              title="Play Video"
              onClick={() => videoRef.current?.play()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-6.804-3.919A1 1 0 007 8.07v7.86a1 1 0 001.488.868l6.804-3.919a1 1 0 000-1.736z"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
