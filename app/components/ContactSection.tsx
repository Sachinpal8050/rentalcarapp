"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#1e1e1e] to-[#2a2a2a] text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#EE8437] to-[#FF6F00] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#EE8437] to-[#FF6F00] text-transparent bg-clip-text">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center text-lg">
                <Phone className="w-7 h-7 mr-3 text-[#EE8437]" />
                <a
                  href="tel:+7500353702"
                  className="text-white hover:text-[#EE8437] transition-colors duration-300"
                >
                  7500353702
                </a>
                <span className="mx-2">{` / `}</span>
                <a
                  href="tel:+7017434062"
                  className="text-white hover:text-[#EE8437] transition-colors duration-300"
                >
                  7017434062
                </a>
              </div>
              <div className="flex items-center text-lg">
                <Mail className="w-7 h-7 mr-3 text-[#EE8437]" />
                <a
                  href="mailto:nitinpalmzn8855@gmail.com"
                  className="text-white hover:text-[#EE8437] transition-colors duration-300"
                >
                  nitinpalmzn8855@gmail.com
                </a>
              </div>
              <div className="flex items-center text-lg">
                <MessageCircle className="w-7 h-7 mr-3 text-[#EE8437]" />
                <a
                  href="https://wa.me/7017434062"
                  className="text-white hover:text-[#EE8437] transition-colors duration-300"
                >
                  7500353702
                </a>
              </div>
              <div className="flex items-center text-lg mt-4">
                <MapPin className="w-7 h-7 mr-3 text-[#EE8437]" />
                <span className="text-white">
                  4012, Sidcul, Bahadrabad , Uttarakhand, India
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#EE8437] to-[#FF6F00] text-transparent bg-clip-text">
              Our Location
            </h3>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d78.0409!3d29.9195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2s!5e0!3m2!1sen!2sus!4v1616562517447!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
