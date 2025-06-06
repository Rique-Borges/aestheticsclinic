const PricingItem = ({ name, price,discountedPrice, description, isHighlighted }) => {
  return (
    <li
      className={`p-4 rounded-md transition-all duration-500 ease-in-out 
        ${isHighlighted ? 'bg-[#8ED1FB] text-white' : 'bg-gray-100 text-gray-700'}`}
    >
      <h3 className="font-semibold text-lg md:text-xl">{name}</h3>
      <p className="text-sm md:text-base">{description}</p>
      <span className="line-through text-gray-400">{price}</span><span className="text-lg font-bold md:text-xl"><span/> {discountedPrice}</span>
    </li>
  );
};

export default PricingItem;
