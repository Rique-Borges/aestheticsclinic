"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-12 px-6 md:px-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-3/5 text-center md:text-left px-6 md:px-16 mt-8 md:mt-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Rediscover your confidence
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              arcu maximus, faucibus erat nec, dapibus nunc. Nullam ut vestibulum
              libero. Praesent sodales scelerisque neque sit amet rhoncus. Nulla
              vitae ullamcorper ex.
          </p>
          <div className="flex justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6FC4FA] text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-[#8ED1FB] transition"
            >
              Book an Appointment
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side (Image) - Appears on Top on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-2/5 flex justify-center"
        >
          <img
            src="/Assets/image3(1).jpg"
            alt="Aesthetic treatment"
            className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
