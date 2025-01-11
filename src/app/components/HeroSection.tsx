"use client"

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SpicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Poly Packs",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aut quo et. Aspernatur ea, tenetur maiores magnam repudiandae quis eum quod id aut eaque aliquid veritatis enim iusto.",
      image: "images/hero_section_img.jpg",
      buttonText: "Order It"
    },
    {
      title: "This is the Second Slider",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aut quo et. Aspernatur ea, tenetur maiores magnam repudiandae quis eum quod id aut eaque aliquid veritatis enim iusto.",
      image: "/api/placeholder/1920/600",
      buttonText: "Order It"
    },
    {
      title: "This is the Third Slider",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aut quo et. Aspernatur ea, tenetur maiores magnam repudiandae quis eum quod id aut eaque aliquid veritatis enim iusto.",
      image: "/api/placeholder/1920/600",
      buttonText: "Order It"
    },
    {
      title: "This is the Fourth Slider",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aut quo et. Aspernatur ea, tenetur maiores magnam repudiandae quis eum quod id aut eaque aliquid veritatis enim iusto.",
      image: "/api/placeholder/1920/600",
      buttonText: "Order It"
    },
    // Add more slides here as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] max-lg:h-[80vh] overflow-hidden">
      {/* Main carousel container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full relative"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 w-full flex items-center">
              <div className="container w-full flex justify-end mx-auto px-6 md:px-12">
                <div className="max-w-lg w-full">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 w-full">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-200 mb-8">
                    {slide.description}
                  </p>
                  <button className="px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-md transition-colors">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Rectangle indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-2 transition-colors ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpicesCarousel;