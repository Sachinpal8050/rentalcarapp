import { motion } from "framer-motion"
import { useState } from "react"

export default function BookingFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dateTime: "",
    pickup: "",
    dropoff: "",
    carType: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      phone: "",
      email: "",
      dateTime: "",
      pickup: "",
      dropoff: "",
      carType: "",
    })
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-[#1e1e1e] to-[#434343] text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#FF6F00] to-[#FF9E3D] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Book Your Ride Now!
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="dateTime" className="block mb-2 text-lg font-medium text-gray-700">
                Date and Time
              </label>
              <input
                type="datetime-local"
                id="dateTime"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="pickup" className="block mb-2 text-lg font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                required
                placeholder="Enter pickup location"
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="dropoff" className="block mb-2 text-lg font-medium text-gray-700">
                Drop-off Location
              </label>
              <input
                type="text"
                id="dropoff"
                name="dropoff"
                value={formData.dropoff}
                onChange={handleChange}
                required
                placeholder="Enter drop-off location"
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="carType" className="block mb-2 text-lg font-medium text-gray-700">
                Car Type
              </label>
              <select
                id="carType"
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] transition-all duration-300"
              >
                <option value="">Select Car Type</option>
                <option value="car1">Car 1</option>
                <option value="car2">Car 2</option>
                <option value="car3">Car 3</option>
              </select>
            </div>
          </div>
          <motion.button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-3 rounded-full hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
