"use client";

import React, { useState } from "react";
import { Menu, Search, User, Heart, ShoppingBag, X } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { TbCategoryPlus } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import ShoppingCart_Sidebar from "./ShoppingCart_Sidebar";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const menuItems = [
    { Icon: IoHomeOutline, text: "Home", href: "/" },
    { Icon: FiShoppingBag, text: "Shop", href: "/shop" },
    { Icon: TbCategoryPlus, text: "Category", href: "#category_section" },
    { text: "About Us", href: "/about", imgSrc: "/images/about_us_icon.png" },
    { Icon: IoMdContact, text: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full bg-bgColor shadow-sm">
        <div className="w-[95%] 2xl:w-[70%] mx-auto">
          {/* Main Navbar Row */}
          <div className="flex items-center justify-between py-2">
            {/* Desktop View - NavLogo */}
            <Link href="/" className="navbar_logo hidden lg:block transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/navbar_logo.PNG"
                width={100}
                height={80}
                alt="Logo"
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="navbar_info hidden lg:block">
              <ul className="flex gap-16">
                {[{name : "Home", link : "/"}, {name : "Shop", link : "/shop"}, {name : "Category", link : "#category_section"}, {name : "About Us", link : "/about"}, {name : "Contact Us", link : "/contact"}].map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      href={item.link}
                      className="cursor-pointer hover:text-lightRed transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lightRed transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Right Side Icons */}
            <div className="navbar_icon hidden lg:flex gap-6 items-center">
              <Search
                className="w-5 h-5 cursor-pointer hover:text-lightRed transition-colors duration-300 transform hover:scale-110"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              <Link href="/login">
                <User className="user_icon w-5 h-5 cursor-pointer hover:text-lightRed transition-colors duration-300 transform hover:scale-110" />
              </Link>
              <Link href="/wishlist">
                <Heart className="wishlist_icon w-5 h-5 cursor-pointer hover:text-lightRed transition-colors duration-300 transform hover:scale-110" />
              </Link>
              <ShoppingBag
                className="w-5 h-5 cursor-pointer hover:text-lightRed transition-colors duration-300 transform hover:scale-110"
                onClick={() => setIsCartOpen(true)}
              />
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden h-16 flex items-center justify-between w-full">
              <Menu
                className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-300"
                onClick={() => setIsMenuOpen(true)}
              />
              <Link
                href="/"
                className="navbar_logo absolute left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/navbar_logo.PNG"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="h-16 w-auto"
                />
              </Link>
              <div className="flex gap-4 max-sm:gap-1.5 items-center">
                {[
                  { Icon: Search, action: () => setIsSearchOpen(!isSearchOpen) },
                  { Icon: User, href: "/login" },
                  { Icon: Heart, href: "/wishlist" },
                  { Icon: ShoppingBag },
                ].map((item, index) => (
                  item.href ? (
                    <Link key={index} href={item.href}>
                      <item.Icon className="w-5 h-5 cursor-pointer transform hover:scale-110 transition-transform duration-300" />
                    </Link>
                  ) : (
                    <item.Icon
                      key={index}
                      className="w-5 h-5 cursor-pointer transform hover:scale-110 transition-transform duration-300"
                      onClick={()=>{setIsCartOpen(true)}}
                    />
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Search Bar Row */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="py-3 border-t">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border rounded-lg outline-none bg-lightBgColor focus:ring-2 focus:ring-lightRed transition-shadow duration-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-0 transition-opacity duration-300"
            style={{ animation: "fadeIn 0.3s forwards" }}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className="fixed left-0 top-0 h-full w-64 bg-bgColor shadow-lg transform -translate-x-full"
            style={{ animation: "slideIn 0.3s forwards" }}
          >
            <div className="p-4">
              <div className="flex justify-end">
                <X
                  className="w-6 h-6 cursor-pointer transform hover:scale-110 transition-transform duration-300"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <nav className="mt-8">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-50 transition-colors duration-300 transform hover:translate-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.Icon ? (
                        <item.Icon className="w-5 h-5" />
                      ) : (
                        <Image width={5} height={5} src={item.imgSrc} alt="Icon" className="w-5 h-auto" />
                      )}
                      <Link href={item.href} className="text-gray-800">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            background-opacity: 0;
          }
          to {
            background-opacity: 0.5;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      <ShoppingCart_Sidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
