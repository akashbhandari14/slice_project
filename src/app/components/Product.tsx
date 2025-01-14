"use client";

import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import { productArray } from "../utils/temp";


console.log(productArray)

// Define types
interface Image {
    id: number;
    url: string;
    alt: string;
}


interface productArray {
  id: string;
  title: string;
  image:Image[];
  discount:number;
  price:number;
  sizes:string[]
}

const Product: React.FC = () => {

  const categories = [
    "Everyday Masala",
    "Immunity Masala",
    "Blended Spices",
    "Pre Mix",
    "Shop all"
  ];

  return (
    <div className="product_page bg-bgColor py-8">
      <div className="product_page_inner w-[95%] 2xl:w-[70%] mx-auto">
        <div className="product_page_heading mb-8 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-start lg:items-center">
          <h3 className="text-2xl md:text-4xl font-semibold">Popular products</h3>

          {/* Category buttons container with completely hidden scrollbar */}
          <div className="popular_product_category w-full lg:w-auto">
            <style jsx>{`
              .popular_product_category ::-webkit-scrollbar {
                display: none;
              }
              .popular_product_category {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <div className="relative w-full after:absolute after:right-0 after:top-0 after:h-full after:w-8 after:bg-gradient-to-l after:from-bgColor after:to-transparent lg:after:hidden">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="flex-shrink-0 py-1.5 px-4 text-sm rounded-full bg-gray-300 hover:bg-black hover:text-white transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product content with custom black scrollbar */}
        <div className="popular_product_content relative">
          <style jsx>{`
            .popular_product_content > div::-webkit-scrollbar {
              height: 4px;
            }
            .popular_product_content > div::-webkit-scrollbar-track {
              background: #f1f1f1;
            }
            .popular_product_content > div::-webkit-scrollbar-thumb {
              background: #000;
              border-radius: 4px;
            }
          `}</style>
          <div className="flex gap-4 max-md:overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {productArray.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.productName}
                image={product.images}
                discount={product.discountedPrice}
                price={product.mrp}
                sizes={product.productSize}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;