// src/app/pricing/components/pricingitem.js
const PricingItem = ({ name, price, description }) => {
    return (
      <li className="p-4 bg-gray-100 rounded-md text-gray-700">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-lg font-bold text-gray-800">{price}</p>
      </li>
    );
  };
  
  export default PricingItem;
  