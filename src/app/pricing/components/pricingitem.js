const PricingItem = ({ name, price, description, isHighlighted }) => {
  return (
    <li className={`p-4 rounded-md transition-all duration-500 ease-in-out ${isHighlighted ? 'bg-[#8ED1FB] text-white' : 'bg-gray-100 text-gray-700'}`}>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm">{description}</p>
      <p className="text-lg font-bold">{price}</p>
    </li>
  );
};

export default PricingItem;
