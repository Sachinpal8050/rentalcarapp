"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience Luxury on the Road
        </motion.h2>
        <motion.div
          className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="https://file-examples.com/storage/fead9e46fa6797977976df6/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  )
}

