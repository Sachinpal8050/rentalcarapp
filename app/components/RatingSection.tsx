"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function RatingSection() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle the rating submission here
    console.log("Rating:", rating, "Comment:", comment)
    // Reset the form
    setRating(0)
    setComment("")
  }

  return (
    <section id="rating" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Customers Rate Us Highly!
        </motion.h2>
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                className={`text-3xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setRating(star)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ★
              </motion.button>
            ))}
          </div>
          <p className="text-center mb-4">Average Rating: 4.8/5</p>
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full p-2 border rounded-md mb-4"
              rows={4}
              placeholder="Leave your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Rating
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

