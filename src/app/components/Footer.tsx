"use client"


import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#942c23] text-white py-8 md:py-16">
      {/* Main Content */}
      <div className="w-[90%] mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Every day<br />
            counts towards<br />
            <span className="text-yellow-400">your flavors</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">Zero</span>
                <span>delivery charges on bulk orders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">No</span>
                <span>minimum order quantity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">100%</span>
                <span>pure and authentic spices</span>
              </div>
            </div>

            <button className="bg-[#c78f42] text-white px-6 py-3 rounded-full w-fit hover:bg-green-600 transition-colors">
              Shop premium spices today
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#942c23] rounded-lg p-4 md:p-6 mb-8 md:mb-16">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
            <p className="text-base md:text-lg flex-grow">Weekly recipes and exclusive spice blend tips</p>
            <div className="flex w-full md:w-auto gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-[#f0ead4]/50 px-4 py-2 rounded-lg flex-grow md:w-64"
              />
              <button type="submit" className="bg-[#c78f42] px-4 md:px-6 py-2 rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap">
                Sign up!
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-16">
          <div>
            <h3 className="font-semibold mb-3 md:mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-400 text-sm md:text-base">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-green-400 text-sm md:text-base">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-green-400 text-sm md:text-base">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 text-sm md:text-base">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/whole-spices" className="hover:text-green-400 text-sm md:text-base">Whole Spices</Link></li>
              <li><Link href="/ground-spices" className="hover:text-green-400 text-sm md:text-base">Ground Spices</Link></li>
              <li><Link href="/blends" className="hover:text-green-400 text-sm md:text-base">Spice Blends</Link></li>
              <li><Link href="/specialty" className="hover:text-green-400 text-sm md:text-base">Specialty Items</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4">Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/guides/cooking" className="hover:text-green-400 text-sm md:text-base">Cooking Guide</Link></li>
              <li><Link href="/guides/storage" className="hover:text-green-400 text-sm md:text-base">Storage Tips</Link></li>
              <li><Link href="/recipes" className="hover:text-green-400 text-sm md:text-base">Recipe Collection</Link></li>
              <li><Link href="/guides/pairing" className="hover:text-green-400 text-sm md:text-base">Spice Pairing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-green-400 text-sm md:text-base">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-green-400 text-sm md:text-base">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-green-400 text-sm md:text-base">Returns</Link></li>
              <li><Link href="/wholesale" className="hover:text-green-400 text-sm md:text-base">Wholesale</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-green-800">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-6 w-6 md:h-8 md:w-8 bg-green-700 rounded mr-2"></div>
            <span className="text-xl md:text-2xl">SpiceHouse</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2024 SpiceHouse. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}