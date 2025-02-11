const AboutMe = () => {
    return (
      <section className="py-16 px-10 flex flex-col md:flex-row items-center justify-center gap-12 mx-48">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left m-8">
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
          <p className="text-gray-600 text-justify text-md mb-4">
            My approach is all about personalized care. I take the time to 
            understand your goals and design treatments that enhance your unique 
            beauty while prioritizing safety, transparency, and comfort.
          </p>
          <p className="text-gray-600 text-justify text-md mb-6">
            My journey in aesthetics began when I saw firsthand how even small 
            enhancements could transform not just looks, but confidence. Seeing my 
            clients leave feeling empowered and radiant is what drives me every 
            day. I’m here to help you achieve your aesthetic goals with harmony 
            and authenticity. Book a consultation, and let’s create a plan 
            tailored just for you!
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-2xl text-lg font-medium shadow-md hover:bg-gray-800 transition">
            Check our Treatments
          </button>
        </div>
  
        {/* Right Image with Label */}
        <div className="relative w-full md:w-1/2 m-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s"
            alt="Telma Borges Simoes"
            className="w-full rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-3 rounded-b-2xl text-lg">
            Telma Borges Simoes
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  