import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ProductDisplayAvailability = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="product_display_category w-full flex flex-col">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="category_heading w-full flex justify-between items-center py-6 cursor-pointer"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg">Availability</h3>
                <IoIosArrowUp 
                    className={`transform transition-transform duration-300 ${
                        isOpen ? '' : 'rotate-180'
                    }`}
                />
            </button>
            
            <div 
                className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-40' : 'max-h-0'
                }`}
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#000000 #ffffff'
                }}
            >
                <div className="availablity_section pb-8 border-b border-gray-600">
                    <div className="flex items-center justify-start gap-3 mb-3">
                        <input
                            type="checkbox"
                            id="inStock"
                            className="bg-transparent border border-black cursor-pointer"
                        />
                        <label htmlFor="inStock" className="cursor-pointer">
                            In stock (63)
                        </label>
                    </div>
                    <div className="flex items-center justify-start gap-3">
                        <input
                            type="checkbox"
                            id="outOfStock"
                            className="bg-transparent border border-black cursor-pointer"
                        />
                        <label htmlFor="outOfStock" className="cursor-pointer">
                            Out of stock (9)
                        </label>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Custom scrollbar styles */
                .product_display_category::-webkit-scrollbar {
                    width: 4px;
                }

                .product_display_category::-webkit-scrollbar-track {
                    background: #ffffff;
                }

                .product_display_category::-webkit-scrollbar-thumb {
                    background-color: #000000;
                    border-radius: 2px;
                }
            `}</style>
        </div>
    );
};

export default ProductDisplayAvailability;