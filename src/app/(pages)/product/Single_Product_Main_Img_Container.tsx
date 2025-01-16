import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Image {
  id: number;
  url: string;
  alt: string;
}

interface ProductGalleryProps {
  images: Image[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const thumbnailVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const mainImageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="w-full lg:grid lg:grid-cols-[1fr_8fr] lg:gap-4 flex flex-col-reverse gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Thumbnails section */}
      <div className="side_img w-full px-2">
        <div className="grid grid-cols-6 gap-2 lg:grid-cols-1 lg:gap-3 lg:max-h-[600px] lg:overflow-y-auto">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              variants={thumbnailVariants}
              className={`relative flex justify-center items-center bg-center cursor-pointer transition-opacity duration-300 aspect-square ${
                currentIndex === index
                  ? 'border-2 border-black rounded-lg'
                  : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="rounded-md w-full h-full object-cover bg-center"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main image section */}
      <motion.div 
        className="w-full relative"
        variants={mainImageVariants}
      >
        <div className="aspect-square relative flex justify-center items-center bg-center">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="main_image rounded-md w-full h-full object-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Navigation container */}
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="relative h-full flex items-center justify-between px-4">
              {/* Previous button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-90 hover:opacity-100 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </motion.button>

              {/* Next button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-90 hover:opacity-100 focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductGallery;