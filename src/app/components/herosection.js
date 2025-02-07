export default function HeroSection() {
    return (
      <section className="py-10 px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side (Text) */}
          <div className="md:w-3/5 text-justify px-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Rediscover your confidence
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              arcu maximus, faucibus erat nec, dapibus nunc. Nullam ut vestibulum
              libero. Praesent sodales scelerisque neque sit amet rhoncus. Nulla
              vitae ullamcorper ex.
            </p>
            <div className="flex md:justify-center justify-center">
              <button className="bg-black text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-gray-900 transition">
                Book an Appointment
              </button>
            </div>
          </div>
  
          {/* Right Side (Image) */}
          <div className="md:w-2/5 mt-10 md:mt-0">
            <img
              src="/Assets/10001724.jpg"
              alt="Aesthetic treatment"
              className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </section>
    );
  }
  