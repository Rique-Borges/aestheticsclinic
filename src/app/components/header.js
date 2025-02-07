// src/app/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-around items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-900">
        <span>The Aesthetic Clinic</span>
      </div>

      <nav className="flex space-x-6">
        <Link href="#treatments" className="text-gray-700 hover:text-blue-600">
          Treatments
        </Link>
        <Link href="#pricing" className="text-gray-700 hover:text-blue-600">
          Pricing
        </Link>
        <Link href="#about-us" className="text-gray-700 hover:text-blue-600">
          About Us
        </Link>
        <Link href="#contact-us" className="text-gray-700 hover:text-blue-600">
          Contact Us
        </Link>
      </nav>

      <div className="">
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800">
          Book an Appointment
        </button>
      </div>
    </header>
  );
}
