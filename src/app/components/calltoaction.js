const CTA = () => {
    return (
      <section className="py-8 px-10 flex flex-col md:flex-row items-center justify-center gap-12 mx-12 ml-48">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mx-32">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s"
            alt="Aesthetic treatment"
            className=" rounded-2xl shadow-lg w-full max-w-sm md:max-w-md"
          />
        </div>
  
        {/* Right Text + Button */}
        <div className="w-full md:w-1/2 text-center md:text-center mr-48">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to transform your look?
          </h2>
          <p className="text-gray-600 text-xl mb-6">
            Limited slots available. <br /> Book your appointment today!
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-2xl text-lg font-medium shadow-md hover:bg-gray-800 transition">
            Book An Appointment
          </button>
        </div>
      </section>
    );
  };
  
  export default CTA;
  