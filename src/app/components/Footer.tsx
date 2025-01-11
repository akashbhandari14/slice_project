"use client"

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <footer className="bg-[#942c23] text-white">
      {/* Hero Section - Stacks better on mobile */}
      <div className="w-full px-4 md:w-[90%] md:mx-auto 2xl:w-[70%] pt-12 pb-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Every day<br />
            counts towards<br />
            <span className="text-yellow-400">your flavors</span>
          </h2>

          <div className="mt-8 space-y-6 md:space-y-8">
            <div className="grid gap-3 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-semibold">Zero</span>
                <span>delivery charges on bulk orders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-semibold">No</span>
                <span>minimum order quantity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-semibold">100%</span>
                <span>pure and authentic spices</span>
              </div>
            </div>

            <button className="bg-[#c78f42] text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors text-sm md:text-base w-full md:w-auto">
              Shop premium spices today
            </button>
          </div>
        </div>

        {/* Newsletter Section - Full width on mobile */}
        <div className="bg-[#942c23] rounded-lg mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-base md:text-lg font-medium">Weekly recipes and exclusive spice blend tips</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-[#f0ead4]/50 placeholder-white px-4 py-3 rounded-lg flex-grow text-sm md:text-base"
              />
              <button type="submit" 
                className="bg-[#c78f42] px-6 py-3 rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap text-sm md:text-base">
                Sign up!
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links - Accordion on mobile */}
        <div className="mb-12">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {/* Company Section */}
            <div className="border-b md:border-none border-[#ffffff20]">
              <button
                className="flex items-center justify-between w-full py-4 md:py-0 md:mb-4"
                onClick={() => toggleSection('company')}
              >
                <h3 className="font-semibold text-base md:text-lg">Company</h3>
                <ChevronDown className={`w-5 h-5 md:hidden transition-transform ${
                  expandedSection === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              <ul className={`space-y-3 overflow-hidden transition-all duration-300 ${
                expandedSection === 'company' ? 'max-h-48 pb-4' : 'max-h-0 md:max-h-full'
              }`}>
                <li><Link href="/" className="hover:text-yellow-400 text-sm md:text-base block py-1">About Us</Link></li>
                <li><Link href="/terms" className="hover:text-yellow-400 text-sm md:text-base block py-1">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-yellow-400 text-sm md:text-base block py-1">Privacy Policy</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-400 text-sm md:text-base block py-1">Contact Us</Link></li>
              </ul>
            </div>

            {/* Products Section */}
            <div className="border-b md:border-none border-[#ffffff20]">
              <button
                className="flex items-center justify-between w-full py-4 md:py-0 md:mb-4"
                onClick={() => toggleSection('products')}
              >
                <h3 className="font-semibold text-base md:text-lg">Products</h3>
                <ChevronDown className={`w-5 h-5 md:hidden transition-transform ${
                  expandedSection === 'products' ? 'rotate-180' : ''
                }`} />
              </button>
              <ul className={`space-y-3 overflow-hidden transition-all duration-300 ${
                expandedSection === 'products' ? 'max-h-48 pb-4' : 'max-h-0 md:max-h-full'
              }`}>
                <li><Link href="/whole-spices" className="hover:text-yellow-400 text-sm md:text-base block py-1">Whole Spices</Link></li>
                <li><Link href="/ground-spices" className="hover:text-yellow-400 text-sm md:text-base block py-1">Ground Spices</Link></li>
                <li><Link href="/blends" className="hover:text-yellow-400 text-sm md:text-base block py-1">Spice Blends</Link></li>
                <li><Link href="/specialty" className="hover:text-yellow-400 text-sm md:text-base block py-1">Specialty Items</Link></li>
              </ul>
            </div>

            {/* Guides Section */}
            <div className="border-b md:border-none border-[#ffffff20]">
              <button
                className="flex items-center justify-between w-full py-4 md:py-0 md:mb-4"
                onClick={() => toggleSection('guides')}
              >
                <h3 className="font-semibold text-base md:text-lg">Guides</h3>
                <ChevronDown className={`w-5 h-5 md:hidden transition-transform ${
                  expandedSection === 'guides' ? 'rotate-180' : ''
                }`} />
              </button>
              <ul className={`space-y-3 overflow-hidden transition-all duration-300 ${
                expandedSection === 'guides' ? 'max-h-48 pb-4' : 'max-h-0 md:max-h-full'
              }`}>
                <li><Link href="/guides/cooking" className="hover:text-yellow-400 text-sm md:text-base block py-1">Cooking Guide</Link></li>
                <li><Link href="/guides/storage" className="hover:text-yellow-400 text-sm md:text-base block py-1">Storage Tips</Link></li>
                <li><Link href="/recipes" className="hover:text-yellow-400 text-sm md:text-base block py-1">Recipe Collection</Link></li>
                <li><Link href="/guides/pairing" className="hover:text-yellow-400 text-sm md:text-base block py-1">Spice Pairing</Link></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="border-b md:border-none border-[#ffffff20]">
              <button
                className="flex items-center justify-between w-full py-4 md:py-0 md:mb-4"
                onClick={() => toggleSection('support')}
              >
                <h3 className="font-semibold text-base md:text-lg">Support</h3>
                <ChevronDown className={`w-5 h-5 md:hidden transition-transform ${
                  expandedSection === 'support' ? 'rotate-180' : ''
                }`} />
              </button>
              <ul className={`space-y-3 overflow-hidden transition-all duration-300 ${
                expandedSection === 'support' ? 'max-h-48 pb-4' : 'max-h-0 md:max-h-full'
              }`}>
                <li><Link href="/faq" className="hover:text-yellow-400 text-sm md:text-base block py-1">FAQs</Link></li>
                <li><Link href="/shipping" className="hover:text-yellow-400 text-sm md:text-base block py-1">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-yellow-400 text-sm md:text-base block py-1">Returns</Link></li>
                <li><Link href="/wholesale" className="hover:text-yellow-400 text-sm md:text-base block py-1">Wholesale</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered on mobile */}
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 pt-6 border-t border-[#ffffff20]">
          <div className="flex items-center order-2 md:order-1">
            <div className="h-8 w-8 rounded flex justify-center items-center mr-2">
              <img src="/images/navbar_logo.PNG" alt="" className='h-full w-full' />
            </div>
            <span className="text-xl md:text-2xl">Rai's Spices</span>
          </div>
          <div className="text-sm text-gray-300 order-1 md:order-2">
            © 2024 Rai's Spices. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}