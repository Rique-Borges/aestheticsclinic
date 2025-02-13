'use client'
import { useState } from 'react';
import PricingItem from './pricingitem';
import { ChevronDown } from 'lucide-react'; // Import arrow icon

const PricingCategory = ({ category, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCategory = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <button
        className={`flex justify-between items-center w-full text-2xl font-semibold text-gray-800 
          py-3 px-6 rounded-lg border border-[#8ED1FB] bg-white
          transition-all duration-500 ease-in-out shadow-md 
          hover:bg-[#8ED1FB] hover:text-white hover:shadow-lg
          active:bg-[#8ED1FB] active:text-white active:scale-95 active:shadow-none
        `}
        onClick={toggleCategory}
      >
        {category}
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      
      <ul
        className={`space-y-2 pl-4 border-l-4 border-[#8ED1FB] transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {items.map((item, index) => (
          <PricingItem
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default PricingCategory;
