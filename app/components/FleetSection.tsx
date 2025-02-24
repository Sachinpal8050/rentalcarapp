"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { logEvent, analytics } from "../../firebase";

const cars = [
  {
    name: "Kia Carens",
    features: "AC, luxurious seating, premium comfort, advanced safety features",
    seatingCapacity: 7,
    description:
      "The Kia Carens redefines luxury travel with its premium interiors, advanced safety features, and spacious seating. Ideal for business trips or high-end family travel.",
    image: "/kiaCarnival.jpeg",
    comingSoon: true,
  },
  {
    name: "Swift Dzire",
    features: "AC, comfortable seating, easy to navigate, smooth ride",
    seatingCapacity: 5,
    description:
      "Ideal for city tours or short trips, the Swift Dzire offers a smooth ride, easy handling, and a comfortable interior. Perfect for small families or groups exploring the city with a dedicated driver.",
    image: "/swiftCarImg.jpeg",
  },
  {
    name: "Traveller 16 Seater",
    features:
      "AC, spacious seating for large groups, ample luggage space, comfortable long rides",
    seatingCapacity: 16,
    description:
      "Perfect for large groups or family outings, the Traveller 16 Seater provides plenty of space for both passengers and luggage. Enjoy long journeys in comfort with a dedicated driver at the wheel.",
    image: "/traveller16Seater.jpeg",
  },
  {
    name: "Maruti Ertiga",
    features: "AC, smooth ride, family-friendly, spacious interior",
    seatingCapacity: 7,
    description:
      "The Maruti Ertiga offers a comfortable and spacious ride, making it ideal for family trips or small group travel. Relax in the smooth interior and enjoy the journey with the convenience of a driver.",
    image: "/eartiga.jpeg",
  },
];

export default function FleetSection() {
  const scrollToBooking = () => {
    logEvent(analytics, "book_now_car_card_press");
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

        <p className="text-lg text-gray-700 text-center mb-8">
          Choose from our fleet of luxury and comfortable cars, perfect for your travels in Uttarakhand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Car Image */}
              <div className="relative h-56">
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={`Luxury rental - ${car.name}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index < 2} // Load first 2 images with priority
                  className="transition-transform duration-300 transform hover:scale-105"
                />
                {car.comingSoon && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Car Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {car.name}
                </h3>
                <p className="text-gray-600 mb-4">{car.description}</p>

                <h4 className="text-gray-700">
                  <strong>Features:</strong> {car.features}
                </h4>

                <h4 className="text-gray-700 mt-3">
                  <strong>Seating Capacity:</strong> {car.seatingCapacity} seats
                </h4>

                {/* Enquire Now Button */}
                <motion.button
                  className="mt-6 w-full bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToBooking}
                  aria-label={`Enquire now about ${car.name}`}
                >
                  Enquire Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
