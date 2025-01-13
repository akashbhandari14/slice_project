"use client";


import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import PaginationExample from "@/app/components/Pagination";
import PriceRanger from "@/app/components/PriceRanger";
import Product_Display_Navigation from "./Product_Display_Navigation";
import Product_Display_Category from "./Product_Display_Category";
import Product_Display_Availablity from "./Product_Display_Availablity";
import { BsWindowSidebar } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const ProductPage = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            <section className="product_display_page relative bg-[#fef9e5]">
                <div className="product_display_container w-[90%] mx-auto flex flex-col justify-start items-start">
                    <Product_Display_Navigation />
                    <div className="product_display_main w-full grid grid-cols-[3fr_8fr] max-lg:grid-cols-1 gap-8">
                        <div className="product_display_category max-lg:hidden w-full flex flex-col">
                            <Product_Display_Category />
                            <Product_Display_Availablity />
                            <PriceRanger />
                        </div>

                        {/* This is the mobile section of the sidebar of the product detail  */}
                        <div className="product_display_mobile_btn fixed left-1 bg-white p-4 top-72 hidden max-lg:flex">
                            <BsWindowSidebar onClick={() => { setShowDropdown(!showDropdown); }} className="text-3xl" />
                        </div>
                        <div className={`product_display_category_in_mobile ${(showDropdown) ? "flex" : "hidden"} flex-col w-[350px] max-sm:w-[300px] min-h-screen bg-bgColor p-4 fixed top-0 left-0 lg:hidden `}>
                            <div className="product_display_mobile_heading flex justify-between items-center bg-gray-200">
                                <p className="uppercase">Sidebar Product</p>
                                <IoClose onClick={() => { setShowDropdown(false) }} className="text-2xl" />
                            </div>
                            <div className="category_heading w-full flex justify-between items-center py-6">
                                <h3 className="text-xl">Product categories</h3>
                                <IoIosArrowUp />
                            </div>
                            <Product_Display_Category />
                            <Product_Display_Availablity />
                            <PriceRanger />
                        </div>


                        <div className="product_display_product w-full flex flex-col justify-center">
                            <div className="all_product_container w-full grid grid-cols-3 max-md:grid-cols-2 gap-8">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((currElem, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="rounded-lg flex flex-col justify-center items-center bg-center"
                                        >
                                            <Image
                                                src="/images/product_display_page_img.webp"
                                                width={200}
                                                height={200}
                                                alt="product_img"
                                                className="w-full bg-cover bg-center rounded-xl"
                                            />
                                            <p className="my-2 text-lg">Garlic Powder</p>
                                            <p className="font-semibold flex justify-center items-baseline gap-3">
                                                From<span className="text-zinc-600">99</span>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <PaginationExample />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;
