"use client"

import React, { useState } from 'react';
import { Menu, Search, User, Heart, ShoppingBag, X } from 'lucide-react';

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
            <div className="navbar_logo hidden lg:block">
              <img src="/images/navbar_logo.PNG" alt="Logo" className="h-20 w-auto" />
            </div>

            <nav className="navbar_info hidden lg:block">
              <ul className="flex gap-16">
                <li className="cursor-pointer hover:text-blue-600 transition-colors">Home</li>
                <li className="cursor-pointer hover:text-blue-600 transition-colors">Shop</li>
                <li className="cursor-pointer hover:text-blue-600 transition-colors">Category</li>
                <li className="cursor-pointer hover:text-blue-600 transition-colors">About</li>
                <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact Us</li>
              </ul>
            </nav>

            <div className="navbar_icon hidden lg:flex gap-6 items-center">
              <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)} />
              <User className="user_icon w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden h-16 flex items-center justify-between w-full">
              {/* Left - Menu Icon */}
              <Menu
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />

              {/* Center - Logo */}
              <div className="navbar_logo absolute left-1/2 transform -translate-x-1/2">
                <img src="/images/navbar_logo.PNG" alt="Logo" className="h-16 w-auto" />
              </div>

              {/* Right - Icons */}
              <div className="flex gap-4 items-center">
                <Search
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
                <User className="w-5 h-5 cursor-pointer" />
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <li className="cursor-pointer hover:text-blue-600 transition-colors">Home</li>
                  <li className="cursor-pointer hover:text-blue-600 transition-colors">Shop</li>
                  <li className="cursor-pointer hover:text-blue-600 transition-colors">Category</li>
                  <li className="cursor-pointer hover:text-blue-600 transition-colors">About</li>
                  <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact Us</li>
                </ul>
              </nav>

              <div className="mt-8 flex gap-4">
                <Heart className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}