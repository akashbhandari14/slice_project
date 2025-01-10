import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const Product_Display_Availablity = () => {
    return (
        <>
            <div className="product_display_category w-full flex flex-col">
                <div className="category_heading w-full flex justify-between items-center py-6">
                    <h3 className="text-xl">Availability</h3>
                    <IoIosArrowUp />
                </div>
                <div className="availablity_section pb-8 border-b border-gray-600">
                    <div className="flex items-center justify-start gap-3">
                        <input
                            type="checkbox"
                            className="bg-transparent border border-black"
                        />
                        In stock (63)
                    </div>
                    <div className="flex items-center justify-start gap-3 mt-3">
                        <input
                            type="checkbox"
                            className="bg-transparent border border-black"
                        />
                        Out of stock (9)
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product_Display_Availablity
