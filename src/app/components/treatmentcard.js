const TreatmentCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-20 my-8">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="bg-gray-900 text-white text-center py-2 font-medium">
        {title}
      </div>
    </div>
  );
};

export default TreatmentCard;
