"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const cars = [
  {
    name: "Toyota Camry",
    features: "AC, spacious seating, luggage space",
    price: "Starting at $80 per day",
    image: "/car1.jpg",
  },
  {
    name: "Honda Accord",
    features: "AC, comfortable interior, ample trunk space",
    price: "Starting at $85 per day",
    image: "/car2.jpg",
  },
  {
    name: "Nissan Altima",
    features: "AC, fuel-efficient, smooth ride",
    price: "Starting at $75 per day",
    image: "/car3.jpg",
  },
]

export default function FleetSection() {
  return (
    <section id="fleet" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Fleet
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.features}</p>
                <p className="text-[#EE8437] font-semibold mb-4">{car.price}</p>
                <motion.button
                  className="w-full bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

