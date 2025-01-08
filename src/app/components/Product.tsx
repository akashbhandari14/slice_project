"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Product = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    { id: 1, image: '/images/spice_img.png', isNew: true, title: 'Product 1' },
    { id: 2, image: '/images/spice_img.png', isNew: true, title: 'Product 2' },
    { id: 3, image: '/images/spice_img.png', isNew: true, title: 'Product 3' },
    { id: 4, image: '/images/spice_img.png', isNew: true, title: 'Product 4' },
    { id: 5, image: '/images/spice_img.png', isNew: true, title: 'Product 5' },
    { id: 6, image: '/images/spice_img.png', isNew: true, title: 'Product 6' },
    { id: 7, image: '/images/spice_img.png', isNew: true, title: 'Product 7' },
    { id: 8, image: '/images/spice_img.png', isNew: true, title: 'Product 8' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev =>
      prev >= products.length - 2 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prev =>
      prev === 0 ? products.length - 2 : prev - 1
    );
  };

  // Get visible products for mobile slider
  const getVisibleProducts = () => {
    const visibleProducts = [];
    const firstIndex = currentSlide;
    const secondIndex = (currentSlide + 1) % products.length;

    visibleProducts.push(products[firstIndex]);
    visibleProducts.push(products[secondIndex]);

    return visibleProducts;
  };

  return (
    <div className="feature_container w-full bg-[#f9f3e5] py-8">
      <div className="feature_inner_container w-[85%] max-sm:w-[95%] mx-auto flex flex-col justify-start items-center gap-6">
        <div className="text-center">
          <h1 className="text-3xl text-darkRed">Features.</h1>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Mobile Slider */}
        {isMobile && (
          <div className="w-full relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronRight size={24} />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 50}%)` }}
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="w-1/2 px-2 flex-shrink-0 transition-all duration-500"
                  >
                    <div className="bg-[#f0ead4] relative p-4 flex flex-col items-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-60 object-cover"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 right-2 text-xs px-2 py-1 max-sm:py-0 max-sm:px-1 bg-red-800 text-white">
                          New
                        </span>
                      )}
                      <p className="text-xs mt-2 text-[#d7be8d]">Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div className="text-center mt-2">
                      <button className="bg-[#c78f42] text-white text-xs px-4 py-1 rounded">
                        Order it
                      </button>
                      <p className="text-xs mt-1">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${Math.floor(currentSlide / 2) === index ? 'w-6 bg-darkRed' : 'w-2 bg-gray-300'
                    }`}
                  onClick={() => setCurrentSlide(index * 2)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Desktop/Tablet Grid */}
        {!isMobile && (
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center"
              >
                <div className="bg-[#f0ead4] relative w-full p-4 flex flex-col justify-center items-center">
                    {/* <Image src={product.image} alt={product.title} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300" width={400} height={400} /> */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 right-6 text-xs px-2 py-1 bg-red-800 text-white">
                      New
                    </span>
                  )}
                  <p className="text-sm mt-2 text-[#d7be8d]">Lorem ipsum, dolor sit amet</p>
                </div>
                <div className="text-center">
                  <button className="bg-[#c78f42] text-white text-sm px-6 py-2 rounded hover:bg-[#b27832] transition-colors">
                    Order it
                  </button>
                  <p className="text-xs mt-2">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <button className="bg-darkestRed text-sm text-white py-3 px-8 rounded-md hover:bg-red-900 transition-colors">
          View in Cart
        </button>
      </div>
    </div>
  );
};

export default Product;