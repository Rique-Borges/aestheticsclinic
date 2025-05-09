import Link from "next/link";

const AboutMe = () => {
  return (
    <section
      className="py-16 px-4 md:px-10 flex flex-col md:flex-row items-center justify-center gap-12 mx-4 md:mx-48"
      id="about-me"
    >
      {/* Left Text Content */}
      <div className="w-full  text-center md:text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Enhancing Your Natural Beauty <br /> with Confidence
        </h2>
        <p className="text-gray-600 text-justify text-md mb-4">
        I believe aesthetic care for the face and body is more than just appearance—it’s about well-being,
         self-esteem, and feeling your best every day.
          With years of experience, our Dublin clinic specializes in dermal fillers, polynucleotides,
           and stays at the forefront of the latest aesthetic techniques to ensure safe, natural-looking results.
          At The Aesthetics Clinic, we focus on creating subtle but noticeable enhancements to your natural beauty,
            utilizing treatments that stimulate collagen and lift the skin, ensuring realistic outcomes that instill confidence.
        </p>
        <p className="text-gray-600 text-justify text-md mb-6">
        My approach is all about personalized aesthetic care. I take the time to conduct thorough consultations to understand your skin and beauty goals, and design customized treatments that enhance your unique appearance while prioritizing safety, transparency, and comfort. Every step of your journey at our Dublin clinic is guided by expert consultations, tailored advice, and follow-up reviews to track your progress and ensure successful, natural-looking results that align with your aesthetic goals.
        </p>
        <div className="w-full flex justify-center">
          <Link href="/pricing">
            <button className="bg-[#6FC4FA] text-white px-6 py-3 rounded-full text-xl font-medium shadow-md hover:bg-[#8ED1FB] transition">
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
  className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-lg mx-auto"
/>

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs md:max-w-sm bg-gradient-to-t from-black/70 to-transparent text-white text-center py-3 rounded-b-2xl text-lg font-bold">
  Telma Borges Simões
</div>

      </div>
    </section>
  );
};

export default AboutMe;
