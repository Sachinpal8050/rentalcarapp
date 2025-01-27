"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cars = [
  {
    name: "Toyota Camry",
    features: "AC, spacious seating, luggage space",
    price: "Starting at $80 per day",
    image:
      "https://img.etimg.com/thumb/msid-46550299,width-640,height-480,imgsize-187842,resizemode-4/handling-and-braking.jpg",
    description:
      "The Toyota Camry is a reliable, fuel-efficient sedan with modern features and a smooth driving experience.",
  },
  {
    name: "Honda Accord",
    features: "AC, comfortable interior, ample trunk space",
    price: "Starting at $85 per day",
    image:
      "https://img.etimg.com/thumb/msid-46550299,width-640,height-480,imgsize-187842,resizemode-4/handling-and-braking.jpg",
    description:
      "The Honda Accord offers premium comfort, advanced safety features, and a luxurious interior.",
  },
  {
    name: "Nissan Altima",
    features: "AC, fuel-efficient, smooth ride",
    price: "Starting at $75 per day",
    image:
      "https://img.etimg.com/thumb/msid-46550299,width-640,height-480,imgsize-187842,resizemode-4/handling-and-braking.jpg",
    description:
      "The Nissan Altima combines fuel efficiency with a smooth ride, perfect for long drives.",
  },
];

export default function FleetSection() {
  return (
    <section id="fleet" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {car.name}
                </h3>
                <p className="text-gray-600 mb-4">{car.features}</p>
                <p className="text-gray-500 italic mb-4">{car.description}</p>
                <p className="text-[#EE8437] font-bold mb-6 text-lg">
                  {car.price}
                </p>
                <motion.button
                  className="w-full bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
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
  );
}
