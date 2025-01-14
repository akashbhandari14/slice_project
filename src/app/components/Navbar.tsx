"use client"

import React, { useState } from 'react';
import { Menu, Search, User, Heart, ShoppingBag, X } from 'lucide-react';
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { TbCategoryPlus } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-bgColor shadow-sm">
        <div className="w-[95%] 2xl:w-[70%] mx-auto">
          {/* Main Navbar Row */}
          <div className="flex items-center justify-between py-2">
            {/* Desktop View - Same as original */}
            <Link href="/" className="navbar_logo hidden lg:block">
              <img src="/images/navbar_logo.PNG" alt="Logo" className="h-20 w-auto" />
            </Link>

            <nav className="navbar_info hidden lg:block">
              <ul className="flex gap-16">
                <li className="cursor-pointer hover:text-red-600 transition-colors"><Link href="/">Home</Link></li>
                <li className="cursor-pointer hover:text-red-600 transition-colors"><Link href="/shop">Shop</Link></li>
                <li className="cursor-pointer hover:text-red-600 transition-colors"><Link href="#category_section">Category</Link></li>
                <li className="cursor-pointer hover:text-red-600 transition-colors"><Link href="/about">About Us</Link></li>
                <li className="cursor-pointer hover:text-red-600 transition-colors"><Link href="/contact">Contact Us</Link></li>
              </ul>
            </nav>

            <div className="navbar_icon hidden lg:flex gap-6 items-center">
              <Search className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)} />
              <Link href="/login"><User className="user_icon w-5 h-5 cursor-pointer hover:text-red-600 transition-colors" /></Link>
              <Link href="/wishlist"><Heart className="whislist_icon w-5 h-5 cursor-pointer hover:text-red-600 transition-colors" /></Link>
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors" />
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden h-16 flex items-center justify-between w-full">
              {/* Left - Menu Icon */}
              <Menu
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />

              {/* Center - Logo */}
              <Link href="/" className="navbar_logo absolute left-1/2 transform -translate-x-1/2">
                <img src="/images/navbar_logo.PNG" alt="Logo" className="h-16 w-auto" />
              </Link>

              {/* Right - Icons */}
              <div className="flex gap-4 max-sm:gap-1.5 items-center">
                <Search
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
                <Link href="/login"><User className="w-5 h-5 cursor-pointer" /></Link>
                <Link href="/wishlist"><Heart className="w-5 h-5 cursor-pointer" /></Link>
                <ShoppingBag className="w-5 h-5 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Search Bar Row */}
          {isSearchOpen && (
            <div className="py-3 border-t">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border rounded-lg outline-none bg-[#fff9f3]"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modified Left Sidebar for Mobile/Tablet */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform">
            <div className="p-4">
              <div className="flex justify-end">
                <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>

              {/* Modified Navigation Menu */}
              <nav className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <IoHomeOutline />
                    <Link href="/" className="text-gray-800">Home</Link>
                  </li>
                  <li className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <FiShoppingBag /> 
                    <Link href="/shop" className="text-gray-800">Shop</Link>
                  </li>
                  <li className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <TbCategoryPlus />
                    <Link href="#category_section" className="text-gray-800">Category</Link>
                  </li>
                  <li className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <img src="/images/about_us_icon.png" className='w-4 h-auto' alt="about_us_icon" />
                    <Link href="/about" className="text-gray-800">About Us</Link>
                  </li>
                  <li className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <IoMdContact />
                    <Link href="/contact" className="text-gray-800">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}