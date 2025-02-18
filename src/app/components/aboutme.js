import Link from "next/link";

const AboutMe = () => {
  return (
    <section
      className="py-16 px-4 md:px-10 flex flex-col md:flex-row items-center justify-center gap-12 mx-4 md:mx-48"
      id="about-me"
    >
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Enhancing Your Natural Beauty <br /> with Confidence
        </h2>
        <p className="text-gray-600 text-justify text-md mb-4">
          I believe aesthetic care is more than just appearance—it’s about
          well-being, self-esteem, and feeling your best every day. With 4 years
          of experience, I specialize in fillers, polynucleotides and stay at
          the forefront of the latest techniques to ensure safe, natural-looking
          results.
        </p>
        <p className="text-gray-600 text-justify text-md mb-6">
          My approach is all about personalized care. I take the time to
          understand your goals and design treatments that enhance your unique
          beauty while prioritizing safety, transparency, and comfort.
        </p>
        <div className="w-full flex justify-center">
          <Link href="/pricing">
            <button className="bg-[#6FC4FA] text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-[#8ED1FB] transition">
              Check our Treatments
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image with Label */}
      <div className="relative w-full md:w-1/2 m-4">
        <img
          src="/Assets/image4.jpg"
          alt="Telma Borges Simoes"
          className="w-full rounded-2xl shadow-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-center py-3 rounded-b-2xl text-lg font-bold">
          Telma Borges Simões
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
