"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um item
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <Link href="/">The Aesthetic Clinic</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/#treatments" className="text-gray-700 hover:text-[#8ED1FB] transition">
            Treatments
          </Link>
          <Link href="/pricing#pricing" className="text-gray-700 hover:text-[#8ED1FB] transition">
            Pricing
          </Link>
          <Link href="/#about-me" className="text-gray-700 hover:text-[#8ED1FB] transition">
            About Me
          </Link>
          <Link href="/#contact-us" className="text-gray-700 hover:text-[#8ED1FB] transition">
            Contact Us
          </Link>
        </nav>

        {/* Desktop "Book an Appointment" Button */}
        <div className="hidden md:block">
          <button className="bg-[#6FC4FA] text-white py-2 px-6 rounded-3xl hover:bg-[#8ED1FB] transition">
            Book an Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-6 items-start z-50"
          >
            <Link
              href="/#treatments"
              onClick={handleMenuItemClick}
              className="text-gray-700 hover:text-[#8ED1FB] transition"
            >
              Treatments
            </Link>
            <Link
              href="/pricing#pricing"
              onClick={handleMenuItemClick}
              className="text-gray-700 hover:text-[#8ED1FB] transition"
            >
              Pricing
            </Link>
            <Link
              href="/#about-me"
              onClick={handleMenuItemClick}
              className="text-gray-700 hover:text-[#8ED1FB] transition"
            >
              About Me
            </Link>
            <Link
              href="/#contact-us"
              onClick={handleMenuItemClick}
              className="text-gray-700 hover:text-[#8ED1FB] transition"
            >
              Contact Us
            </Link>

            {/* Mobile "Book an Appointment" Button */}
            <button
              onClick={handleMenuItemClick}
              className="bg-[#6FC4FA] text-white py-2 px-6 rounded-3xl hover:bg-[#8ED1FB] transition mt-4 w-full"
            >
              Book an Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
