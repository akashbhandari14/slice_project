"use client"


import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  unit: string;
  measure: string;
  image: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart_Sidebar: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Coriander Cumin Powder',
      price: 30,
      originalPrice: 34,
      quantity: 1,
      unit: '100g',
      measure: 'Pouch',
      image: '/images/product_img_1.webp'
    },
    {
      id: '2',
      name: 'Cumin Powder',
      price: 68,
      quantity: 1,
      unit: '100g',
      measure: 'Box',
      image: '/images/product_display_page_img.webp'
    },
    {
      id: '3',
      name: 'Coriander Cumin Powder',
      price: 30,
      originalPrice: 34,
      quantity: 1,
      unit: '100g',
      measure: 'Pouch',
      image: '/images/product_img_1.webp'
    },
    {
      id: '4',
      name: 'Cumin Powder',
      price: 68,
      quantity: 1,
      unit: '100g',
      measure: 'Box',
      image: '/images/product_display_page_img.webp'
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-sm:w-[85vw] max-w-md bg-lightestBgColor shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl">Shopping cart</h2>
            <button onClick={onClose} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 mb-6">
                <div className="w-24 h-24 bg-gray-100 rounded">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-gray-600">
                    {item.unit} / {item.measure}
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="text-lg">₹ {item.price}</span>
                    {item.originalPrice && (
                      <span className="ml-2 text-gray-500 line-through">
                        ₹ {item.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Subtotal</span>
              <span className="text-xl">₹ {subtotal}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Tax included. Shipping calculated at checkout.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={()=>{onClose()}} className="p-3 border rounded-md text-center">
                <Link href="/cart">
                  View cart
                </Link>
              </button>
              <button onClick={()=>{onClose()}} className="p-3 bg-green-700 text-white rounded-md text-center flex items-center justify-center gap-2">

                <Link href="/checkout">
                Check out
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart_Sidebar;
