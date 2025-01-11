"use client";

import React from "react";

interface ProductCardProps {
  discount: string;
  price: number;
  originalPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ discount, price, originalPrice }) => (
  <div className="flex-shrink-0 w-[48%] sm:w-[48%] md:w-auto">
    <div className="flex flex-col items-center justify-start gap-3">
      <div className="product_img relative rounded-md w-full group">
        <img
          src="/images/product_img_1.webp"
          className="w-full h-full object-cover rounded-md"
          alt="Product"
        />
        <button className="py-0.5 px-3 absolute top-4 right-4 bg-green-600 rounded-full text-white text-sm">
          {discount}
        </button>
        {/* Added group-hover and transition for smooth appearance */}
        <div className="product_price absolute bottom-0 w-full flex justify-center items-center gap-2 bg-red-600 py-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p>100g</p>
          <p>300g</p>
          <p>500g</p>
        </div>
      </div>
      <h3 className="font-semibold text-sm md:text-base">Product Title</h3>
      <p className="text-base md:text-xl font-semibold text-gray-500">
        <span className="line-through text-gray-600">₹ {originalPrice}</span>{" "}
        <span className="text-red-600">From</span> ₹ {price}
      </p>
    </div>
  </div>
);

interface ProductData {
  id: number;
  discount: string;
  price: number;
  originalPrice: number;
}

const Product: React.FC = () => {
  const products: ProductData[] = [
    { id: 1, discount: "-28%", price: 73, originalPrice: 101 },
    { id: 2, discount: "-28%", price: 73, originalPrice: 101 },
    { id: 3, discount: "-28%", price: 73, originalPrice: 101 },
    { id: 4, discount: "-28%", price: 73, originalPrice: 101 },
  ];

  return (
    <div className="product_page bg-bgColor py-8">
      <div className="product_page_inner w-[95%] 2xl:w-[70%] mx-auto">
        <div className="product_page_heading mb-8 flex max-lg:flex-col max-lg:gap-4 justify-between items-center">
          <h3 className="text-2xl w-full md:text-4xl font-semibold">Popular products</h3>
          <div className="product_type w-full flex justify-end items-center gap-3 max-lg:text-xs max-md:w-[100vw] overflow-x-scroll">
            <button className="py-1 px-4 rounded-full bg-gray-300">Everyday Masala</button>
            <button className="py-1 px-4 rounded-full bg-gray-300">Immunity Masala</button>
            <button className="py-1 px-4 rounded-full bg-gray-300">Blended Spices</button>
            <button className="py-1 px-4 rounded-full bg-gray-300">Pre Mix</button>
            <button className="py-1 px-4 rounded-full bg-gray-300">Shop all</button>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                discount={product.discount}
                price={product.price}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;