'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TreatmentCard from './treatmentcard';

const treatments = [
  { title: "Fillers", image: "/Assets/image10.jpg", id: 20, category: "Dermal Fillers" },
  { title: "Polynucleotides", image: "/Assets/image11.jpg", id: 11, category: "Regenerative & Skin Treatments" },
  { title: "Profhilo", image: "/Assets/image5.jpg", id: 7, category: "Regenerative & Skin Treatments" },
  { title: "Skin Boosters", image: "/Assets/image9.jpg", id: 12, category: "Regenerative & Skin Treatments" },
  { title: "Mesotherapy", image: "/Assets/image12.jpeg", id: 10, category: "Mesotherapy" },
  { title: "Lumi Eyes", image: "/Assets/image7.jpg", id: 6, category: "Regenerative & Skin Treatments" },
];

const Treatments = () => {
  return (
    <section className="py-8 mx-4 sm:mx-8 md:mx-32" id="treatments">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        Our Treatments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 md:px-32 place-items-center">
        {treatments.map((treatment, index) => (
          <motion.div
            key={index}
            className="cursor-pointer w-full max-w-xs"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.25 }}
          >
            <Link href={`/pricing?selected=${treatment.id}&category=${encodeURIComponent(treatment.category)}`} passHref>
              <TreatmentCard title={treatment.title} image={treatment.image} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Treatments;
