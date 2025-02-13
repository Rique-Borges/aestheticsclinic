
const TreatmentCard = ({ title, image, onClick }) => {
  return (
    <div
      className="relative bg-gradient-to-b from-[#6FC4FA] to-[#8ED1FB] rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto transition-transform duration-300 hover:scale-105 cursor-pointer group"
      onClick={onClick} 
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg font-semibold transition-transform duration-300 group-hover:scale-125">
        {title}
      </div>
    </div>
  );
};

export default TreatmentCard;
