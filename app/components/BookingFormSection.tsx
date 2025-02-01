import { makeApiCall } from "@/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { logEvent, analytics } from "../../firebase";

export default function BookingFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dateTime: "",
    pickup: "",
    dropoff: "",
    carType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    logEvent(analytics, "booking_initiated", {
      ...formData,
    });
    const data = await makeApiCall("/lead/lead", "POST", {
      name: formData.name,
      phoneNumber: formData.phone,
      email: formData.email,
      dateTime: formData.dateTime,
      pickupLocation: formData.pickup,
      dropLocation: formData.dropoff,
      carType: formData.carType,
    });
    toast.dismiss(toastId);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success("Booking successful!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        dateTime: "",
        pickup: "",
        dropoff: "",
        carType: "",
      });
    }
  };

  return (
    <section id="booking" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
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
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
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
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
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
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="dateTime"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                Date and Time
              </label>
              <input
                type="datetime-local"
                id="dateTime"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="pickup"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
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
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="dropoff"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
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
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="carType"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                Car Type
              </label>
              <select
                id="carType"
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
              >
                <option value="">Select Car Type</option>
                <option value="Swift Dzire">Swift Dzire</option>
                <option value="Traveller 16 Seater">Traveller 16 Seater</option>
                <option value="Maruti Ertiga">Maruti Ertiga</option>
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
  );
}
