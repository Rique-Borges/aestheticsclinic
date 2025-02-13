'use client';
import { useState, useEffect } from 'react';
import PricingItem from './pricingitem';
import { ChevronDown } from 'lucide-react';

const PricingCategory = ({ category, items, selectedTreatmentId, selectedCategory }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [flashItemId, setFlashItemId] = useState(null);

  useEffect(() => {
    let expandTimer;
    let flashTimer;
    if (selectedCategory && selectedCategory === category) {
      expandTimer = setTimeout(() => {
        setIsExpanded(true);
        const found = items.find(item => item.id === selectedTreatmentId);
        if (found) {
          setFlashItemId(selectedTreatmentId);
          flashTimer = setTimeout(() => {
            setFlashItemId(null);
          }, 1000);
        }
      }, 250);
    }
    return () => {
      clearTimeout(expandTimer);
      clearTimeout(flashTimer);
    };
  }, [selectedCategory, selectedTreatmentId, category, items]);

  const toggleCategory = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleCategory}
        className="flex justify-between items-center w-full text-2xl font-semibold text-gray-800 
                   py-3 px-6 rounded-lg border border-[#8ED1FB] bg-white transition-all duration-500 ease-in-out
                   shadow-md hover:bg-[#8ED1FB] hover:text-white hover:shadow-lg active:bg-[#8ED1FB] active:text-white active:scale-95 active:shadow-none"
      >
        {category}
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      <ul className={`space-y-2 pl-4 border-l-4 border-[#8ED1FB] transition-all duration-[1200ms] ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
        {items.map(item => (
          <PricingItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            isHighlighted={item.id === flashItemId}
          />
        ))}
      </ul>
    </div>
  );
};

export default PricingCategory;
