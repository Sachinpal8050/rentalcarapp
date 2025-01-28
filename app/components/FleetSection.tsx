"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cars = [
  {
    name: "Swift Dzire",
    features: "AC, comfortable seating, fuel-efficient",
    price: "Starting at $60 per day",
    seatingCapacity: 5, // Updated seating capacity
    description:
      "The Swift Dzire is a compact sedan known for its fuel efficiency, easy handling, and comfortable ride.",
    image:
      "https://img.etimg.com/thumb/msid-46550299,width-640,height-480,imgsize-187842,resizemode-4/handling-and-braking.jpg",
  },
  {
    name: "Traveller 22 Seater",
    features: "AC, spacious seating for large groups, ample luggage space",
    price: "Starting at $250 per day",
    seatingCapacity: 22, // Updated seating capacity
    description:
      "The Traveller 22 Seater is ideal for group travel, providing spacious seating and excellent comfort for long journeys.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/5/CW/WV/TU/92345100/16-seater-tempo-traveler-rental-service.jpg",
  },
  {
    name: "Maruti Ertiga",
    features: "AC, fuel-efficient, smooth ride",
    price: "Starting at $75 per day",
    seatingCapacity: 7, // Same seating capacity
    description:
      "The Maruti Ertiga is a versatile MPV offering ample space and a comfortable ride for families or group travel.",
    image: "https://imgd.aeplcdn.com/1056x594/n/c6es93a_1572125.jpg",
  },
];

export default function FleetSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                <p className="text-gray-500 mb-4">{car.description}</p>
                <p className="text-gray-600 mb-4">
                  <strong>Seating Capacity: </strong>
                  {car.seatingCapacity} seats
                </p>{" "}
                <motion.button
                  className="w-full bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToBooking}
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
