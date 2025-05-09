"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-8 px-6 md:px-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-3/5 text-center md:text-left px-6 md:px-16 mt-8 md:mt-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
  Rediscover Your Confidence
</h2>
<p className="text-lg text-gray-600 mb-8 text-justify">
Elevate your natural beauty with advanced, non-invasive aesthetic treatments at our renowned Dublin clinic. At <strong>The Aesthetics Clinic</strong>, we provide expert care for your face, skin, and body, helping you achieve radiant, refreshed, and confident results in your own skin. Beyond enhancing your appearance, our Dublin clinic understands the importance of boosting self-esteem and ensuring well-being through personalized aesthetic care tailored to each individual. Every person deserves to feel empowered in their own skin.
</p>

          <div className="flex justify-center md:justify-center"> 
            <Link href={"https://wa.link/dtawoe"} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6FC4FA] text-white text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-[#8ED1FB] transition"
            >
              Book an Appointment
            </motion.button>
            </Link>
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
