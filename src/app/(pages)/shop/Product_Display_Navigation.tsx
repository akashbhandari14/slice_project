"use client";


import React, { useState } from "react";
import { LayoutGrid } from "lucide-react"
import { FaList } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { PiDotsSixBold } from "react-icons/pi"


const Product_Display_Navigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [sortType, setSortType] = useState("grid-col-3");

    return (
        <>
            <div className="product_display_navigation w-full flex justify-between items-center gap-6 my-6">
                <div className="flex-1 items-center text-center">
                    <div className="w-full flex justify-center items-center gap-6">
                        <FaList onClick={()=>{setSortType("grid-col-1")}} className="text-lg cursor-pointer" />
                        <LayoutGrid onClick={()=>{setSortType("grid-col-2")}} className="text-xs cursor-pointer" />
                        <PiDotsSixBold onClick={()=>{setSortType("grid-col-3")}} className="text-3xl cursor-pointer" />
                        <img onClick={()=>{setSortType("grid-col-4")}} src="/images/four_dot_img.png" className="w-8 cursor-pointer" alt="" />
                    </div>
                </div>
                <div className="relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        id="dropdownDefaultButton"
                        className="border border-black py-2 px-4 w-full flex justify-between items-center gap-10 rounded-md"
                    >
                        Best Selling <IoIosArrowDown />
                    </button>
                    <div
                        className={`z-10 ${showDropdown ? "" : "hidden"
                            } absolute top-14 left-0 bg-bgColor divide-y divide-gray-100 shadow w-44`}
                    >
                        <ul className="py-2 text-zinc-600 font-medium">
                            {
                                ["Featured", "Best Selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to hight", "Price, high to low", "Date, old to new", "Date, new to old"].map((currElem, index) => {
                                    return (
                                        <li key={index}> <a href="#" onClick={() => setShowDropdown(false)} className="block px-4 py-1 hover:text-black dark:hover:bg-gray- hover:border-l-2 hover:border-black" > {currElem} </a> </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product_Display_Navigation
