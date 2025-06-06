import Link from "next/link";
const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="max-w-5xl mx-auto mt-4 p-4 md:p-6 bg-white rounded-2xl flex flex-col md:flex-row items-center"
    >
      {/* Clinic Image */}
      <div className="w-full md:w-2/5 mx-auto md:mx-0 md:ml-24">
        <img
          src="/Assets/image6.jpg"
          alt="Clinic Exterior"
          className="rounded-2xl w-full h-auto"
        />
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-gray-900">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <p className="mb-2">
          📍 <strong>Address:</strong> <a href="https://maps.app.goo.gl/7YYV8KSfB4yrxBbo8" className="text-blue-500 hover:text-blue-700">42 Richmond St, Portobello, Dublin 2, D02TV08.</a>
        </p>
        <p className="mb-2">
          ⏰ <strong>Business Hours:</strong> <span className="text-blue-500 hover:text-blue-700">Open Monday to Monday, 8 AM – 8 PM</span>, to accommodate your treatment bookings and consultations.
        </p>
        <p className="mb-2">
          📞 <strong>Phone:</strong> <span className="text-blue-500 hover:text-blue-700">087 403 8654</span> – Call us to schedule your aesthetic treatments and consultations.
        </p>
        <p className="mb-2">
  💬 <strong>WhatsApp:</strong> <Link href={"https://wa.link/dtawoe"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Message us</Link> to inquire about our aesthetic treatments and book your consultation.
</p>

        <p className="mb-2">
          📧 <strong>Email:</strong> <Link href="mailto:aestheticsclinicie@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">aestheticsclinicie@gmail.com</Link>
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
