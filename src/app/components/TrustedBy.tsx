"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface CompanyLogo {
  id: number;
  name: string;
  imagePath: string;
  width?: string;
}

const TrustedBy: React.FC = () => {
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
      imagePath: "/images/trusted_by_img_5.avif",
      width: "w-28 md:w-36"
    },
    {
      id: 6,
      name: "Jabsons",
      imagePath: "/images/trusted_by_img_6.avif",
      width: "w-24 md:w-32"
    }
  ];

  return (
    <section className="bg-[#fff9f3] py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trusted By
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto">
          {companies.map((company) => (
            <div
              key={company.id}
              className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={company.imagePath}
                alt={company.name}
                className={`${company.width} object-contain`}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-gray-700 hover:text-gray-900 rounded-full transition-colors duration-300 group">
            View All Partners
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default TrustedBy;