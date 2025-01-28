"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-orange-500 to-amber-700 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience Luxury on the Road
        </motion.h2>
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-gray-100"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Gradient Overlay for better visuals */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-10"></div>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./drivingVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Play Button (Optional) */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              className="p-4 bg-white rounded-full shadow-lg cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
