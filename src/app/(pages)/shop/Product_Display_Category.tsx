import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';


const ProductCategories = () => {
  const [isOpen, setIsOpen] = useState(true);
  const categories = [
    'All',
    'Best Sellers',
    'Blended Spices',
    'Combo',
    'Diwali Offer',
    'Dry Fruits',
    'Everyday Masala',
    'Immunity Masala',
    'Pre Mix',
    'Premium Dry Fruit',
    'Speciality Salts',
    'Super Seed',
    'Western Spices',
    'Whole Masala'
  ];

  return (
    <div className="w-full max-w-xs bg-transparent">
      <div className="border-b border-gray-200">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-4 px-2 flex justify-between items-center group"
        >
          <h2 className="text-lg font-normal text-gray-800">Product categories</h2>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-black [&::-webkit-scrollbar-thumb]:rounded-full">
          <ul className="py-2">
            {categories.map((category, index) => (
              <li key={index}>
                <button 
                  className={`w-full px-2 py-2 text-left hover:bg-gray-50 transition-colors
                    ${index === 0 ? 'text-gray-400' : 'text-gray-800'}
                  `}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductCategories;