"use client"

import React, { useState, useEffect } from 'react';
import { Leaf, Smile, Package, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 space-y-4 max-w-full mx-auto">
    <div className="text-gray-700">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const MiniSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Pure for Sure",
      description: "For years, we've been dedicated to providing our customers with the finest, unadulterated spices, and we'll continue to uphold this promise"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Flavourful",
      description: "Our cutting-edge technology ensures our blends retain their flavor, aroma, and color for an extended period, resulting in a longer shelf life and unparalleled freshness."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Hygienically Packed",
      description: "From cleaning to packaging, our fully automated process eliminates human contact, ensuring absolute purity and quality for our customers."
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSignificantSwipe = Math.abs(distance) > 75;

    if (isSignificantSwipe) {
      if (distance > 0 && currentSlide < features.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (distance < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < features.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-[#fff9f0]">
      <div className="w-[90%] max-sm:w-[95%] 2xl:w-[70%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Rai's Spices: Your Best Choice for Spices
        </h2>
        
        {isMobile ? (
          // Mobile/Tablet Slider View
          <div className="relative">
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="w-full flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevSlide}
              className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md ${
                currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={goToNextSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md ${
                currentSlide === features.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
              disabled={currentSlide === features.length - 1}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Dot Navigation */}
            <div className="flex justify-center items-center space-x-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MiniSection;