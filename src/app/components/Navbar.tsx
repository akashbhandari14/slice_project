"use client";

import { useEffect, useState } from "react";
import { Menu, X, Users, ChevronRight, Search } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${isSidebarOpen ? "block" : "hidden"
          }`}
        onClick={toggleSidebar}
      />

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="nav_logo flex justify-between items-center p-4 border-b">
          <Image
            src="/images/navbar_logo.PNG"
            alt="LOGO"
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
              <Users className="h-4 w-4" />
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
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
        {/* Mobile Header - Only visible on small screens */}
        <div className="w-full flex justify-between items-center p-4 lg:hidden">
          <Image
            src="/images/navbar_logo.PNG"
            alt="LOGO"
            width={100}
            height={60}
            priority
          />
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSearch}
              className="p-2"
              aria-label="Toggle search"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Toggled by search icon */}
        <div
          className={`w-full lg:hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'h-16 opacity-100' : 'h-0 opacity-0 overflow-hidden'
            }`}
        >
          <div className="px-4 flex justify-start items-center border border-gray-400 rounded-full mx-6">
            <IoSearch className="text-2xl"/>
            <input
              type="text"
              className="flex-1 bg-transparent rounded-lg px-4 py-3 outline-none border-none text-lg"
              placeholder="Search spices here"
              aria-label="Search spices"
            />
            {/* <button
              className="px-4 py-2 bg-red-600 text-white rounded-sm"
              aria-label="Search button"
            >
              Search
            </button> */}
          </div>
        </div>

        {/* Logo - Original positioning for desktop */}
        <div className="absolute top-2 left-16 h-[90%] lg:block hidden">
          <Image
            src="/images/navbar_logo.PNG"
            alt="LOGO"
            width={100}
            height={80}
            priority
          />
        </div>

        {/* Upper Header - Original desktop layout */}
        <div className="upper_header w-3/4 hidden lg:flex justify-between items-center py-2 pl-6 pr-24 text-[0.5rem]">
          <div className="upper_header_left flex gap-2">
            <div className="flex justify-start items-center gap-5">
              <Users className="text-sm" aria-hidden="true" />
              <span>Available</span>
            </div>
            <div className="flex justify-start items-center gap-5">
              <ChevronRight className="text-sm" aria-hidden="true" />
              <span>Mildfire</span>
            </div>
          </div>
          <div className="upper_header_right flex py-1.5 gap-2 text-gray-500">
            <span>Item1</span>
            <span>Item2</span>
            <div className="vertical_bar w-px bg-red-600" aria-hidden="true"></div>
            {isClient &&
              Array.from({ length: 8 }, (_, index) => (
                <Users
                  key={index}
                  className="text-sm text-black"
                  aria-hidden="true"
                />
              ))}
          </div>
        </div>

        {/* Horizontal Bar */}
        <div className="horizontal_bar w-full h-0.5 bg-red-600 max-lg:hidden" aria-hidden="true"></div>

        {/* Lower Header - Original desktop layout */}
        <div className="lower_header py-2 w-full lg:w-3/4 flex flex-col justify-center items-start gap-3 px-4 lg:pr-24">
          <div className="lower_header_top w-full hidden lg:flex lg:flex-row justify-between items-center gap-4 lg:gap-6 lg:pl-6">
            <span>Searching</span>
            <div className="w-full flex lg:flex-row justify-between items-center gap-3 lg:ml-4">
              <input type="text" className="w-full py-2 bg-transparent border border-gray-400 rounded-lg px-2" placeholder="Search spices here" aria-label="Search spices"  />
              <button className="w-full max-sm:w-[88%] max-sm:ms-auto lg:w-auto py-2 px-8 bg-red-600 text-white rounded-sm" aria-label="Search button"> Search </button>
            </div>
            <div className="nav_logo_container flex justify-start items-center gap-2 overflow-hidden">
              <img src="/api/placeholder/24/24" alt="Spice" className="h-6 w-6" />
              <span className="text-[0.5rem] text-red-600"> Loremkfsjkjfdsdfdsgdgfgfgdsr </span>
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