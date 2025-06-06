import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly flex-wrap gap-6 px-6">
        {/* Column 1: Navbar Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about-me" className="hover:text-gray-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#treatments" className="hover:text-gray-600">
                Treatments
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-gray-600">
                Prices
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-gray-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://maps.app.goo.gl/7YYV8KSfB4yrxBbo8" className="hover:text-gray-600">
            42 Richmond St, Portobello D02TV08</a>
            </li>
            <li>Monday to Monday: 8 AM - 8 PM</li>
            <li>
              <a href="tel:+3530874038654" className="hover:text-gray-600">
                087 403 8654
              </a>
            </li>
            <li>
              <a href="mailto:aestheticsclinicie@gmail.com" className="hover:text-gray-600">
                aestheticsclinicie@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-600">
                TikTok
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/the_aesthetic_clinic_dub/" className="hover:text-gray-600">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Book Appointment Button */}
        <div className="flex items-center">
        <Link href={"https://wa.link/dtawoe"} target="_blank" rel="noopener noreferrer">
      <button className="bg-[#6FC4FA] text-white px-6 py-3 rounded-3xl  hover:bg-[#8ED1FB] transition">
        Book an Appointment
      </button>
      </Link>
    </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        &copy; 2025 The Aesthetics Clinic | All rights reserved
      </div>
    </footer>
  );
}
