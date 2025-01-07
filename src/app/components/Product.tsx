"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [ 
    { image: "/images/product1.png" }, 
    { image: "/images/product1.png" }, 
    { image: "/images/product1.png" }, 
    { image: "/images/product1.png" }, 
    { image: "/images/product1.png" }, 
    { image: "/images/product1.png" }, 
    { image: "/images/product1.png" }
  ];


  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: any) => {
    if (index <= slides.length - 4) {
      setCurrentIndex(index);
    }
  };

  return (
    <>
      <div className="feature_container w-full bg-[#f9f3e5]">
        <div className="feature_inner_container w-[85%] mx-auto flex flex-col justify-start items-center pt-4 pb-2 gap-2">
          <h1 className="text-3xl text-darkRed">Features.</h1>
          <p className="text-[0.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repudiandae.</p>
          <div className="relative w-full max-w-7xl mx-auto">

            <div className="relative w-full h-96">
              {/* Slides Container */}
              <div className="relative w-full h-full overflow-hidden">
                <div
                  className=" w-full grid grid-flow-col auto-cols-[20%] gap-8 transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex flex-col justify-start items-center">
                      <div className="bg-[#f5f1d8] relative flex flex-col justify-center items-center bg-center py-4">
                        {/* Replace img with Next.js Image component */}
                        <Image
                          src={slide.image} // Replace with actual image path
                          alt={`feature_product_${index + 1}`}
                          width={300} // Set appropriate width
                          height={100} // Set appropriate height
                          className="w-full object-cover"
                        />
                        <button className="absolute top-2 right-6 text-[0.5rem] p-1 bg-red-800 text-white">New</button>
                        <p className="text-[0.5rem] absolute bottom-2 text-[#d7be8d]">Lorem ipsum, dolor sit amet</p>
                      </div>
                      <button className="bg-[#c78f42] text-white text-xs px-6 py-1.5">Order it</button>
                      <p className="text-[0.5rem] text-center">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Arrow Navigation */}
              <button
                onClick={prevSlide}
                className="absolute -left-12 top-1/3 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center text-2xl"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-12 top-1/3 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center text-2xl"
                aria-label="Next slide"
              >
                →
              </button>

              {/* Navigation Dots */}
              <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.slice(0, slides.length - 3).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-black' : 'bg-gray-300'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product



// import { useState } from 'react';

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: "/api/placeholder/400/300",
//       title: "WILLIE MOSCONI",
//       description: "Known as 'Mr. Pocket Billiards', Willie Mosconi was among the first Billiards Hall of Fame inductees."
//     },
//     {
//       image: "/api/placeholder/400/300",
//       title: "EFREN REYES",
//       description: "Known as 'The Magician', Efren Reyes is well regarded by many professionals as the greatest all around player of all time."
//     },
//     {
//       image: "/api/placeholder/400/300",
//       title: "RONNIE O'SULLIVAN",
//       description: "Ronnie O'Sullivan, professional snooker player who is widely regarded as one of the greatest players in the history of the sport."
//     },
//     {
//       image: "/api/placeholder/400/300",
//       title: "STEVE DAVIS",
//       description: "Steve Davis dominated snooker in the 1980s, winning six World Championships."
//     },
//     {
//       image: "/api/placeholder/400/300",
//       title: "SHANE VAN BOENING",
//       description: "Shane Van Boening is considered one of the best American pool players of all time."
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex >= slides.length - 3 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 3 : prevIndex - 1
//     );
//   };

//   const goToSlide = (index) => {
//     if (index <= slides.length - 3) {
//       setCurrentIndex(index);
//     }
//   };

//   return (
//     <div className="relative w-full max-w-6xl mx-auto">
//       {/* Previous/Next Text Buttons */}
//       <div className="flex justify-between mb-4">
//         <button
//           onClick={prevSlide}
//           className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
//         >
//           <span className="text-xl">←</span>
//           Previous
//         </button>
//         <button
//           onClick={nextSlide}
//           className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
//         >
//           Next
//           <span className="text-xl">→</span>
//         </button>
//       </div>

//       <div className="relative h-96">
//         {/* Slides Container */}
//         <div className="relative h-full overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-out h-full"
//             style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className="w-1/3 flex-shrink-0 px-2"
//               >
//                 <div className="relative h-full bg-white shadow-md">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-full h-3/4 object-cover grayscale"
//                   />
//                   <div className="absolute bottom-0 w-full bg-white p-4 text-center">
//                     <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
//                     <p className="text-sm text-gray-600 line-clamp-2">{slide.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Side Arrow Navigation */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-12 top-1/3 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center text-2xl"
//           aria-label="Previous slide"
//         >
//           ←
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute -right-12 top-1/3 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center text-2xl"
//           aria-label="Next slide"
//         >
//           →
//         </button>

//         {/* Navigation Dots */}
//         <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {slides.slice(0, slides.length - 2).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2 h-2 rounded-full transition-colors duration-300 ${
//                 currentIndex === index ? 'bg-black' : 'bg-gray-300'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;




// <div className="feature_container w-full bg-[#f9f3e5]">
//       <div className="feature_inner_container w-[85%] mx-auto flex flex-col justify-start items-center pt-4 pb-2 gap-2">
//         <h1 className="text-3xl text-darkRed">Features.</h1>
//         <p className="text-[0.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repudiandae.</p>

//         {/* Product Grid */}
//         <div className="feature_product_container w-full grid grid-cols-4 gap-10 mt-4">
//           {[...Array(4)].map((_, index) => (
//             <div key={index} className="w-full h-full flex flex-col justify-start items-center">
//               <div className="bg-[#f5f1d8] relative flex flex-col justify-center items-center bg-center py-4">
//                 {/* Replace img with Next.js Image component */}
//                 <Image
//                   src="/images/product1.png" // Replace with actual image path
//                   alt={`feature_product_${index + 1}`}
//                   width={300} // Set appropriate width
//                   height={100} // Set appropriate height
//                   className="w-full object-cover"
//                 />
//                 <button className="absolute top-2 right-6 text-[0.5rem] p-1 bg-red-800 text-white">New</button>
//                 <p className="text-[0.5rem] absolute bottom-2 text-[#d7be8d]">Lorem ipsum, dolor sit amet</p>
//               </div>
//               <button className="bg-[#c78f42] text-white text-xs px-6 py-1.5">Order it</button>
//               <p className="text-[0.5rem] text-center">Lorem ipsum dolor sit amet consectetur.</p>
//             </div>
//           ))}
//         </div>

//         {/* Add to Cart Button */}
//         <button className="bg-darkestRed text-[0.5rem] text-white py-3 px-6 rounded-md">Add to Cart</button>
//       </div>
//     </div>