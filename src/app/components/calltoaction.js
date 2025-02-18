const CTA = () => {
  return (
    <section className="py-0 px-10 flex flex-col md:flex-row items-center justify-center gap-0 md:mx-24 md:ml-48">
      {/* Left Image */}
      <div className="w-full md:w-1/2 md:mx-24 mb-6 md:mb-0">
        <img
          src="/Assets/image1.jpeg"
          alt="Aesthetic treatment"
          className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md"
        />
      </div>

      {/* Right Text + Button */}
      <div className="w-full md:w-1/2 text-center md:mr-48">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to transform your look?
        </h2>
        <p className="text-gray-600 text-xl mb-6">
          Limited slots available. <br /> Book your appointment today!
        </p>
        <button className="bg-[#6FC4FA] text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-[#8ED1FB] transition">
          Book An Appointment
        </button>
      </div>
    </section>
  );
};

export default CTA;
