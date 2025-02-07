import TreatmentCard from "./treatmentcard";

const treatments = [
  { title: "Fillers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s" },
  { title: "Polynucleotides", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s" },
  { title: "Profhilo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s" },
  { title: "Skin Boosters", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s" },
  { title: "Mesotherapy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s" },
  { title: "Lumi Eyes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4txBl0W8iNYxHR5w6fXliE5bhQSKXaszTiw&s" },
];

const Treatments = () => {
  return (
    <section className="py-16 bg-gray-50 mx-32">
      <h2 className="text-center text-5xl font-bold text-gray-900 mb-8">
        Our Treatments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} title={treatment.title} image={treatment.image} />
        ))}
      </div>
    </section>
  );
};

export default Treatments;
