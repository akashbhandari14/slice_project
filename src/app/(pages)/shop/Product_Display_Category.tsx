import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const Product_Display_Category = () => {
    return (
        <>
            <div className="all_section h-[210px] border-b border-gray-600 overflow-y-scroll pr-2"
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#000000 #ffffff'
                }}
            >
                <div className="category_heading w-full flex justify-between items-center">
                    <h3 className="text-xl">Product categories</h3>
                    <IoIosArrowUp />
                </div>
                <ul className="w-full flex flex-col justify-start items-start gap-3">
                    <li className="text-zinc-600">All</li>
                    <li>Best Seller</li>
                    <li>Blended Spices</li>
                    <li>Combo</li>
                    <li>Diwali Offer</li>
                    <li>Dry Fruit</li>
                    <li>Everyday Masala</li>
                    <li>Immunity Masala</li>
                    <li>Pre Mix</li>
                    <li>Premium Dry Fruit</li>
                    <li>Speciality Salts</li>
                    <li>Super Seed</li>
                    <li>Wester Spices</li>
                    <li>Whole Masala</li>
                </ul>
            </div>

            <style jsx>{`
                /* Custom scrollbar styles */
                .all_section::-webkit-scrollbar {
                    width: 4px;
                }

                .all_section::-webkit-scrollbar-track {
                    background: #f23sfs;
                }

                .all_section::-webkit-scrollbar-thumb {
                    background-color: #000000;
                    border-radius: 2px;
                }
            `}</style>
        </>
    )
}

export default Product_Display_Category