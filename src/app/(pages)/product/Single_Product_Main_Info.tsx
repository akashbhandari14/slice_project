"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Minus, Plus, Share2, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

interface SingleProductMainInfoProps {
  title: string;
  features: string[];
  rating: number;
  reviews: number;
  sizes: string[];
  price: number;
  discountedPrice: number;
  description: string;
}

const Single_Product_Main_Info = ({
  title,
  features,
  rating,
  reviews,
  sizes,
  price,
  discountedPrice,
  description,
}: SingleProductMainInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const sizeOptions = sizes;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1 variants={itemVariants} className="text-3xl font-semibold mb-2">
        {title}
      </motion.h1>

      <motion.p variants={itemVariants} className="text-gray-400 font-semibold">
        {features.join(" | ")}
      </motion.p>

      <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xl ${
                i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-gray-600">{reviews} reviews</span>
      </motion.div>

      <motion.div variants={itemVariants} className="relative mb-6">
        <p
          className={`product_description text-gray-700 text-sm transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-red-600 text-sm font-medium flex items-center gap-1 hover:text-red-700 mt-1"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
        <span className="text-xl font-bold">₹{discountedPrice}</span>
        <span className="line-through">₹{price}</span>
        <span className="bg-red-600 text-white px-2 py-1 text-sm font-semibold rounded-full">
          {Math.round(((discountedPrice - price) / price) * 100)}% OFF
        </span>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-6">
        <p className="font-medium mb-2">Size:</p>
        <div className="flex gap-2">
          {sizeOptions.map((size) => (
            <motion.button
              key={size}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-0.5 rounded-full border ${
                size === sizes[0]
                  ? "bg-red-600 text-white border-red-700"
                  : "border-gray-300 hover:border-red-700"
              }`}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-8 mb-6">
        <div className="flex items-center border border-red-600 rounded-full py-1.5 px-0.5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleQuantityChange("decrease")}
            className="p-2 hover:bg-gray-100"
          >
            <Minus className="w-4 h-4" />
          </motion.button>
          <span className="w-12 text-center">{quantity}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleQuantityChange("increase")}
            className="p-2 hover:bg-gray-100"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "black", color: "white" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 max-sm:py-0 max-sm:text-xs border border-red-600 rounded-full"
        >
          ADD TO CART
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "black" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 max-sm:py-0 max-sm:text-xs bg-red-600 text-white rounded-full"
        >
          BUY IT NOW
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 border border-red-600 rounded-full hover:bg-gray-50"
        >
          <Heart className="w-6 h-6" />
        </motion.button>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-4 gap-4 mb-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center flex flex-col items-center"
          >
            <img
              src="/images/single_product_bulk_inquiry_img.svg"
              className="w-12"
              alt={feature}
            />
            <p className="text-sm text-gray-600">{feature}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Single_Product_Main_Info;