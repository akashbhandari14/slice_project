import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CategoryArray {
  id: string;
  title: string;
  image: string;
  backgroundColor: string;
}

const categories: CategoryArray[] = [
  {
    id: 'everyday-masala',
    title: 'Everyday Masala',
    image: '/images/category_img_1.webp',
    backgroundColor: 'bg-blue-500',
  },
  {
    id: 'premium-dryfruits',
    title: 'Premium Dryfruits',
    image: '/images/category_img_2.webp',
    backgroundColor: 'bg-green-500',
  },
  {
    id: 'whole-masala',
    title: 'Whole Masala',
    image: '/images/category_img_4.webp',
    backgroundColor: 'bg-teal-500',
  },
  {
    id: 'immunity-masala',
    title: 'Immunity Masala',
    image: '/images/category_img_5.webp',
    backgroundColor: 'bg-green-500',
  },
  {
    id: 'dry-fruits',
    title: 'Dry Fruits',
    image: '/images/category_img_4.webp',
    backgroundColor: 'bg-amber-500',
  },
];

const Category = () => {
  return (
    <div className='w-full bg-bgColor'>
      <div className="w-[95%] max-sm:w-[95%] 2xl:w-[70%] mx-auto px-4 py-8">
        <h2 className=" w-full text-3xl font-bold text-center mb-8 text-gray-800">
          Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className={` ${category.backgroundColor} h-32 relative`}>
                <img src="/images/category_img_1.webp" className=' w-full bg-cover h-full' alt="" />
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {category.title}
                    </h3>
                    <div className="flex items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="mr-1">View all</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;