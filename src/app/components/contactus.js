const ContactUs = () => {
    return (
      <section className="max-w-5xl mx-auto p-6 bg-white rounded-2xl flex flex-col md:flex-row items-center">
        {/* Clinic Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s" // Change this path to your actual image
            alt="Clinic Exterior"
            className="rounded-2xl w-full h-auto"
          />
        </div>
  
        {/* Contact Info */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-gray-900">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="mb-2">📍 <strong>Address:</strong> 42 Richmond St, Portobello, D02TV08.</p>
          <p className="mb-2">⏰ <strong>Business Hours:</strong> Open Tuesday to Saturday, 8 AM – 8 PM.</p>
          <p className="mb-2">📞 <strong>Phone:</strong> 087 403 8654</p>
          <p className="mb-2">💬 <strong>WhatsApp:</strong> Message us</p>
          <p className="mb-2">📧 <strong>Email:</strong> aestheticsclinicie@gmail.com</p>
        </div>
      </section>
    );
  };
  
  export default ContactUs;