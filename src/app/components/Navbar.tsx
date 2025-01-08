"use client";

import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      />
      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image
            src="/images/navbar_logo.PNG"
            alt="Logo"
            width={100}
            height={60}
            priority
          />
          <button onClick={toggleSidebar} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaUsers className="text-sm" />
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <RxTriangleRight className="text-sm" />
              <span className="text-sm">Mildfire</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="space-y-3">
              <span className="block text-sm">Item1</span>
              <span className="block text-sm">Item2</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            {isClient &&
              Array.from({ length: 8 }, (_, i) => (
                <a
                  key={i}
                  href="#"
                  className="block py-2 text-sm hover:text-red-600"
                >
                  Itemlorem{i + 1}
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-bgColor relative w-full flex flex-col justify-center items-end border-b border-gray-300 text-xs">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="absolute top-2 left-16 h-[80%] lg:block hidden">
          <Image
            src="/images/navbar_logo.PNG"
            alt="Logo"
            width={150}
            height={90}
            priority
          />
        </div>

        {/* Upper Header - Hidden on mobile */}
        <div className="upper_header w-3/4 hidden lg:flex justify-between items-center py-2 pl-6 pr-24 text-[0.5rem]">
          <div className="upper_header_left flex gap-2">
            <div className="flex justify-start items-center gap-5">
              <FaUsers className="text-sm" aria-hidden="true" />
              <span>Available</span>
            </div>
            <div className="flex justify-start items-center gap-5">
              <RxTriangleRight className="text-sm" aria-hidden="true" />
              <span>Mildfire</span>
            </div>
          </div>
          <div className="upper_header_right flex py-1.5 gap-2 text-gray-500">
            <span>Item1</span>
            <span>Item2</span>
            <div className="vertical_bar w-px bg-red-600" aria-hidden="true"></div>
            {isClient &&
              Array.from({ length: 8 }, (_, index) => (
                <FaUsers
                  key={index}
                  className="text-sm text-black"
                  aria-hidden="true"
                />
              ))}
          </div>
        </div>

        {/* Horizontal Bar */}
        <div className="horizontal_bar w-full h-0.5 bg-red-600" aria-hidden="true"></div>

        {/* Lower Header */}
        <div className="lower_header py-2 w-full lg:w-3/4 flex flex-col justify-center items-start gap-3 px-4 lg:pr-24">
          <div className="lower_header_top w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 lg:pl-6">
            <span className="hidden lg:block">Searching</span>
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3 lg:ml-4">
              <input
                type="text"
                className="w-full py-2 bg-transparent border border-gray-400 rounded-lg px-2"
                placeholder="Search spices here"
                aria-label="Search spices"
              />
              <button
                className="w-full max-sm:w-[88%] max-sm:ms-auto lg:w-auto py-2 px-8 bg-red-600 text-white rounded-sm"
                aria-label="Search button"
              >
                Search
              </button>
            </div>
            <div className="flex justify-start items-center gap-2 overflow-hidden">
              <Image
                src="/images/spice_img_1.png"
                width={24}
                height={24}
                alt="Spice"
                priority
              />
              <span className="text-[0.5rem] text-red-600">
                Loremkfsjkjfdsdfdsgdgfgfgdsr
              </span>
            </div>
          </div>
          
          {/* Navigation - Hidden on mobile (shown in sidebar instead) */}
          <nav className="lower_header_bottom w-full hidden lg:flex justify-between items-center">
            {isClient &&
              Array.from({ length: 8 }, (_, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-red-600"
                  aria-label={`Item lorem ${i + 1}`}
                >
                  Itemlorem{i + 1}
                </a>
              ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;