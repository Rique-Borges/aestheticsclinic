// src/app/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-around items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-900">
        <Link href="/">The Aesthetic Clinic</Link>
      </div>

      <nav className="flex space-x-6">
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

      <div>
        <button className="bg-[#6FC4FA] text-white py-2 px-6 rounded-3xl hover:bg-[#8ED1FB] transition">
          Book an Appointment
        </button>
      </div>
    </header>
  );
}
