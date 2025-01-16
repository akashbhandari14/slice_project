"use client"

import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

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
    image: '/images/spice_img_1.JPG',
    backgroundColor: 'bg-blue-500',
  },
  {
    id: 'premium-dryfruits',
    title: 'Premium Dryfruits',
    image: '/images/spice_img_2.JPG',
    backgroundColor: 'bg-green-500',
  },
  {
    id: 'whole-masala',
    title: 'Whole Masala',
    image: '/images/spice_img_3.JPG',
    backgroundColor: 'bg-teal-500',
  },
  {
    id: 'immunity-masala',
    title: 'Immunity Masala',
    image: '/images/spice_img_4.JPG',
    backgroundColor: 'bg-green-500',
  },
  {
    id: 'dry-fruits',
    title: 'Dry Fruits',
    image: '/images/spice_img_5.JPG',
    backgroundColor: 'bg-amber-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const Category = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} id='category_section' className='w-full bg-bgColor'>
      <div className="w-[95%] 2xl:w-[70%] mx-auto py-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="w-full text-3xl font-bold text-center mb-8 text-gray-800"
        >
          Categories
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Link href="/shop" className={`${category.backgroundColor} h-32 relative`}>
                <motion.img 
                  src={category.image} 
                  className='w-full bg-cover h-full'
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
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
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Category;