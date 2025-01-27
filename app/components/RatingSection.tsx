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
    <section id="rating" className="py-20 bg-gradient-to-br from-[#FCE5D8] to-[#F6D1B1] text-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Customers Rate Us Highly!
        </motion.h2>
        <motion.div
          className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                className={`text-4xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setRating(star)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ★
              </motion.button>
            ))}
          </div>
          <p className="text-center text-lg mb-6 text-gray-700">Average Rating: 4.8/5</p>
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full p-4 border-2 border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-[#EE8437] focus:border-[#EE8437] transition duration-300"
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
