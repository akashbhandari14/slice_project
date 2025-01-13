"use client"

import React, { useState } from 'react';
import { Menu, Search, User, Heart, ShoppingBag, X } from 'lucide-react';
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
                <Link href="/"><li className="cursor-pointer hover:text-red-600 transition-colors">Home</li></Link>
                <Link href="/shop"><li className="cursor-pointer hover:text-red-600 transition-colors">Shop</li></Link>
                <Link href="#category_section"><li className="cursor-pointer hover:text-red-600 transition-colors">Category</li></Link>
                <Link href="/about"><li className="cursor-pointer hover:text-red-600 transition-colors">About</li></Link>
                <Link href="/contact"><li className="cursor-pointer hover:text-red-600 transition-colors">Contact Us</li></Link>
              </ul>
            </nav>

            <div className="navbar_icon hidden lg:flex gap-6 items-center">
              <Search className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)} />
              <User className="user_icon w-5 h-5 cursor-pointer hover:text-red-600 transition-colors" />
              <Heart className="whislist_icon w-5 h-5 cursor-pointer hover:text-red-600 transition-colors" />
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
                <User className="w-5 h-5 cursor-pointer" />
                <Heart className="w-5 h-5 cursor-pointer" />
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

      {/* Left Sidebar for Mobile/Tablet */}
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

              <nav className="mt-8">
                <ul className="space-y-4">
                <Link href="/" className="cursor-pointer hover:text-red-600 transition-colors"><li onClick={()=>{ setIsMenuOpen(false) }} >Home</li></Link>
                <Link href="/shop" className="cursor-pointer hover:text-red-600 transition-colors"><li onClick={()=>{ setIsMenuOpen(false) }}>Shop</li></Link>
                  <Link href="#category_section" scroll={true} className="cursor-pointer hover:text-red-600 transition-colors"><li onClick={()=>{ setIsMenuOpen(false) }} >Category</li></Link>
                  <Link href="/about" className="cursor-pointer hover:text-red-600 transition-colors"><li onClick={()=>{ setIsMenuOpen(false) }}>About</li></Link>
                  <Link href="/contact" className="cursor-pointer hover:text-red-600 transition-colors"><li onClick={()=>{ setIsMenuOpen(false) }}>Contact Us</li></Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}