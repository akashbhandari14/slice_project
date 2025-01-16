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
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { productArray } from "@/app/utils/temp";

const ProductPage = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const sidebarVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const productVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <section className="product_display_page relative bg-[#fef9e5]" ref={ref}>
                <motion.div
                    className="product_display_container 2xl:w-[70%] w-[90%] mx-auto flex flex-col justify-start items-start"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Product_Display_Navigation />
                    <div className="product_display_main w-full grid grid-cols-[3fr_8fr] max-lg:grid-cols-1 gap-8">
                        <motion.div
                            className="product_display_category max-lg:hidden w-full flex flex-col"
                            variants={sidebarVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <Product_Display_Category />
                            <Product_Display_Availablity />
                            <PriceRanger />
                        </motion.div>

                        {/* Mobile sidebar section */}
                        <div className="product_display_mobile_btn fixed left-1 bg-white p-4 top-72 hidden max-lg:flex">
                            <BsWindowSidebar onClick={() => { setShowDropdown(!showDropdown); }} className="text-3xl" />
                        </div>
                        <motion.div
                            className={`product_display_category_in_mobile ${(showDropdown) ? "flex" : "hidden"} flex-col w-[350px] max-sm:w-[300px] min-h-screen bg-bgColor p-4 fixed top-0 left-0 lg:hidden`}
                            initial={{ x: -350 }}
                            animate={{ x: showDropdown ? 0 : -350 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="product_display_mobile_heading flex justify-between items-center text-xl">
                                <p className="uppercase">Sidebar Product</p>
                                <IoClose onClick={() => { setShowDropdown(false) }} className="text-2xl" />
                            </div>
                            <Product_Display_Category />
                            <Product_Display_Availablity />
                            <PriceRanger />
                        </motion.div>

                        <motion.div
                            className="product_display_product w-full flex flex-col justify-center"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="all_product_container w-full grid grid-cols-3 max-md:grid-cols-2 gap-8">
                                {productArray?.map((currElem, index) => (
                                    <motion.div
                                        key={index}
                                        variants={productVariants}
                                        className="rounded-lg flex flex-col justify-center items-center bg-center"
                                    >
                                        <Link href={`/product/${currElem?.id}`}>
                                            <Image
                                                src={currElem.images[0].url}
                                                width={200}
                                                height={200}
                                                alt="product_img"
                                                className="w-auto h-72 bg-cover bg-center rounded-xl"
                                            />
                                            <p className="my-2 text-lg text-center">{currElem?.productName}</p>
                                            <p className="font-semibold flex justify-center items-baseline gap-3">
                                                From<span className="text-zinc-600">{currElem?.mrp}</span>
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <PaginationExample />
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default ProductPage;