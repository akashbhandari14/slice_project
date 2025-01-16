"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  unit: string;
}

const ShoppingCartPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Coriander Cumin Powder",
      quantity: 1,
      price: 30,
      image: "/images/product_img_1.webp",
      unit: "100g / Pouch",
    },
    {
      id: 2,
      name: "Cumin Powder",
      quantity: 1,
      price: 68,
      image: "/images/product_display_page_img.webp",
      unit: "100g / Box",
    },
  ]);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const updateQuantity = (id: number, increment: boolean) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: increment ? product.quantity + 1 : Math.max(1, product.quantity - 1),
            }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const selectedItemVariants = {
    unselected: {
      scale: 1,
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
    },
    selected: {
      scale: 1.02,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      backgroundColor: "#f8f9fa",
    },
  };

  return (
    <div className="w-full bg-lightBgColor min-h-screen">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-center font-semibold text-4xl py-6 max-sm:text-3xl"
          variants={itemVariants}
        >
          Shopping Cart
        </motion.h1>
        <motion.p
          className="text-center text-xl max-sm:text-lg mb-8"
          variants={itemVariants}
        >
          These products are limited, so checkout immediately
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 py-8">
          <div className="space-y-4">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="rounded-lg shadow-sm p-4"
                variants={itemVariants}
                animate={selectedProductId === product.id ? "selected" : "unselected"}
                initial="unselected"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProductId(product.id)}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover rounded sm:w-28 sm:h-28"
                  />
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.unit}</p>
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeProduct(product.id);
                      }}
                      className="text-sm text-blue-600 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Remove
                    </motion.button>
                  </div>
                  <div className="flex sm:flex-col items-center gap-3 w-full sm:w-auto justify-between">
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(product.id, false);
                        }}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        -
                      </motion.button>
                      <span className="w-8 text-center">{product.quantity}</span>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(product.id, true);
                        }}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        +
                      </motion.button>
                    </div>
                    <motion.div
                      className="text-right font-medium text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={product.price * product.quantity}
                    >
                      ₹ {product.price * product.quantity}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="h-fit rounded-lg bg-lightestBgColor shadow-lg border border-gray-200 p-6 sticky top-6"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <motion.div
                className="flex justify-between items-center text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={subtotal}
              >
                <span className="font-medium">Subtotal</span>
                <span className="font-semibold">₹ {subtotal}</span>
              </motion.div>
              <p className="text-gray-500">Tax included. Shipping calculated at checkout.</p>
              <Link href="/checkout">
                <motion.button
                  className="w-full bg-darkRed hover:bg-black text-white py-3 px-4 rounded transition-colors duration-200 text-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Check out
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShoppingCartPage;
