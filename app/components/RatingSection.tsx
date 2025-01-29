"use client";

import { makeApiCall } from "@/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RatingSection() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    const data = await makeApiCall("/rating/rating", "POST", {
      rating,
      review: comment,
    });
    toast.dismiss(toastId);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success("Thanks for your feedback!");
      setRating(0);
      setComment("");
    }
  };

  return (
    <section id="rating" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#D8843B] to-[#5A3D2F] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Customers Rate Us Highly!
        </motion.h2>
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Star Rating */}
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                className={`text-5xl ${
                  star <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                ★
              </motion.button>
            ))}
          </div>
          {/* Average Rating */}
          <p className="text-center text-lg mb-6 text-gray-700 font-medium">
            Average Rating:{" "}
            <span className="font-bold text-yellow-500">4.8/5</span>
          </p>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-xl mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D8843B] focus:border-[#D8843B] transition duration-300 text-black"
              rows={4}
              placeholder="Leave your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D8843B] to-[#5A3D2F] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Rating
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
