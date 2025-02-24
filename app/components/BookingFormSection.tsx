"use client";

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

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.dateTime || !formData.pickup || !formData.dropoff || !formData.carType) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    const toastId = toast.loading("Submitting your enquiry...");
    logEvent(analytics, "booking_initiated", { ...formData });

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
      toast.success("Booking request submitted successfully!");
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
          className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-[#EE8437] to-[#705541] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Book Your Ride Now!
        </motion.h2>

        <p className="text-lg text-gray-700 text-center mb-6">
          Fill in the details below to book a ride in Uttarakhand.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Enter your full name" },
              { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
              { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email (optional)" },
              { label: "Date & Time", name: "dateTime", type: "datetime-local" },
              { label: "Pickup Location", name: "pickup", type: "text", placeholder: "Enter pickup location" },
              { label: "Drop-off Location", name: "dropoff", type: "text", placeholder: "Enter drop-off location" },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label htmlFor={name} className="block mb-2 text-lg font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={name !== "email"}
                  placeholder={placeholder}
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
                />
              </div>
            ))}

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
                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6F00] text-gray-800 transition-all duration-300"
              >
                <option value="">Select Car Type</option>
                {["Kia Carens", "Swift Dzire", "Traveller 16 Seater", "Maruti Ertiga"].map((car) => (
                  <option key={car} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#EE8437] to-[#705541] text-white px-6 py-3 rounded-full hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enquire Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
