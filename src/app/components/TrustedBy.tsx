"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface CompanyLogo {
  id: number;
  name: string;
  imagePath: string;
  width?: string;
}

const TrustedBy: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const companies: CompanyLogo[] = [
    {
      id: 1,
      name: "Haldiram's",
      imagePath: "/images/trusted_by_img_1.png",
      width: "w-24 md:w-32"
    },
    {
      id: 2,
      name: "Synthite",
      imagePath: "/images/trusted_by_img_2.avif",
      width: "w-28 md:w-36"
    },
    {
      id: 3,
      name: "DMart",
      imagePath: "/images/trusted_by_img_3.avif",
      width: "w-24 md:w-32"
    },
    {
      id: 4,
      name: "Amul",
      imagePath: "/images/trusted_by_img_4.webp",
      width: "w-20 md:w-28"
    },
    {
      id: 5,
      name: "Symega",
      imagePath: "/images/trusted_by_img_5.png",
      width: "w-28 md:w-36"
    },
    {
      id: 6,
      name: "Jabsons",
      imagePath: "/images/trusted_by_img_6.avif",
      width: "w-24 md:w-32"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-lightestBgColor py-12 md:py-16" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trusted By
          </h2>
        </motion.div>

        {/* Logos Grid - Desktop & Tablet */}
        <motion.div 
          className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={itemVariants}
              className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={company.imagePath}
                alt={company.name}
                className={`${company.width} object-contain`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Logos Horizontal Scroll - Mobile Only */}
        <motion.div 
          className="md:hidden overflow-x-auto custom-scrollbar"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="inline-flex gap-8 min-w-max px-4">
            {companies.map((company) => (
              <motion.div
                key={company.id}
                variants={itemVariants}
                className="relative group cursor-pointer place-content-center transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={company.imagePath}
                  alt={company.name}
                  className={`${company.width} object-contain`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <style jsx global>{`
          .custom-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
          /* Show scrollbar only when scrolling */
          .custom-scrollbar:hover::-webkit-scrollbar,
          .custom-scrollbar:active::-webkit-scrollbar,
          .custom-scrollbar:focus::-webkit-scrollbar {
            display: block;
            height: 4px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #000000;
            border-radius: 4px;
          }
          
          /* For Firefox */
          .custom-scrollbar:hover,
          .custom-scrollbar:active,
          .custom-scrollbar:focus {
            scrollbar-width: thin;
            scrollbar-color: #000000 transparent;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TrustedBy;