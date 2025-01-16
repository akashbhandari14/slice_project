"use client"

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DeliveryAddress {
    firstName: string;
    lastName: string;
    company?: string;
    address: string;
    apartment?: string;
    city: string;
    state: string;
    pinCode: string;
    phone: string;
}

const Page = () => {
    const [deliveryOption, setDeliveryOption] = useState('ship');
    const [email, setEmail] = useState('');
    const [billingAddressSame, setBillingAddressSame] = useState(true);

    // Refs for each section
    const contactRef = useRef(null);
    const deliveryRef = useRef(null);
    const paymentRef = useRef(null);
    const billingRef = useRef(null);
    const summaryRef = useRef(null);

    // Check if sections are in view
    const contactInView = useInView(contactRef, { once: true });
    const deliveryInView = useInView(deliveryRef, { once: true });
    const paymentInView = useInView(paymentRef, { once: true });
    const billingInView = useInView(billingRef, { once: true });
    const summaryInView = useInView(summaryRef, { once: true });

    return (
        <div className="min-h-screen bg-lightBgColor py-8">
            <div className="w-[90%] max-sm:w-[95%] 2xl:w-[70%] mx-auto">
                <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8">
                    {/* Left Column - Form */}
                    <div className="md:col-span-2">
                        {/* Contact Section */}
                        <motion.div
                            ref={contactRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="py-6 rounded-lg"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl">Contact</h2>
                                <button className="text-blue-600 text-sm">Log in</button>
                            </div>
                            <input
                                type="email"
                                placeholder="Email or mobile phone number"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mb-2 p-3 border border-gray-300 bg-bgColor rounded-md placeholder-black"
                            />
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="newsletter" className="text-sm text-gray-600">
                                    Email me with news and offers
                                </label>
                            </div>
                        </motion.div>

                        {/* Delivery Section */}
                        <motion.div
                            ref={deliveryRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={deliveryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="py-6 rounded-lg"
                        >
                            <h2 className="text-2xl mb-4">Delivery</h2>
                            <div className="space-y-4">
                                <select name="country" className='w-full p-4 rounded-md border border-gray-300 bg-bgColor' id="">
                                    <option value="" disabled>Country Region</option>
                                    <option value="India">India</option>
                                </select>
                            </div>

                            <div className="mt-6 space-y-3">
                                <div className='grid grid-cols-2 gap-4'>
                                    <input placeholder="First name" className="w-full p-3 border border-gray-300 rounded-md bg-bgColor placeholder-black" />
                                    <input placeholder="Last name" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-bgColor placeholder-black" />
                                </div>
                                <input placeholder="Address" className="w-full p-3 border border-gray-300 rounded-md bg-bgColor placeholder-black" />
                                <input placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border border-gray-300 rounded-md bg-bgColor placeholder-black" />
                                <div className="grid grid-cols-3 gap-4">
                                    <input placeholder="City" className="w-full p-3 border border-gray-300 rounded-md bg-bgColor placeholder-black" />
                                    <input placeholder="State" className="w-full p-3 border border-gray-300 rounded-md bg-bgColor placeholder-black" />
                                    <input placeholder="PIN code" className="w-full p-3 border border-gray-300 rounded-md bg-bgColor placeholder-black" />
                                </div>
                                <input placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-md bg-bgColor placeholder-black" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={deliveryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="shipping_Method flex flex-col gap-2"
                        >
                            <h2 className='text-lg'>Shipping Method</h2>
                            <div className='w-full flex items-center p-4 rounded-md bg-gray-200 text-sm'>
                                Enter your shipping address to view available shipping methods.
                            </div>
                        </motion.div>

                        {/* Payment Section */}
                        <motion.div
                            ref={paymentRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={paymentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="py-6 rounded-lg shadow-sm"
                        >
                            <h2 className="text-2xl mb-4">Payment</h2>
                            <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
                            <div className="border rounded-lg p-4 mb-4">
                                <div className="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                        <line x1="1" y1="10" x2="23" y2="10" />
                                    </svg>
                                    <span>Razorpay Secure (UPI, Cards, Wallets, NetBanking)</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Billing Address */}
                        <motion.div
                            ref={billingRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={billingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="py-6 rounded-lg shadow-sm"
                        >
                            <h2 className="text-xl mb-4">Billing address</h2>
                            <div className="space-y-4">
                                <div className="border p-4 rounded-lg">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="billing"
                                            value="same"
                                            checked={billingAddressSame}
                                            onChange={(e) => setBillingAddressSame(e.target.value === 'same')}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        <span>Same as shipping address</span>
                                    </label>
                                </div>
                                <div className="border p-4 rounded-lg">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="billing"
                                            value="different"
                                            checked={!billingAddressSame}
                                            onChange={(e) => setBillingAddressSame(e.target.value === 'same')}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        <span>Use a different billing address</span>
                                    </label>
                                </div>
                            </div>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                        >
                            Pay now
                        </motion.button>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="md:col-span-1">
                        <motion.div
                            ref={summaryRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={summaryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="bg-bg-lightestBgColor py-6 rounded-lg shadow-sm"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="w-full h-full flex justify-between items-center mb-6"
                            >
                                <div className='flex items-center gap-3'>
                                    <div className="h-16 w-16 bg-gray-200 rounded-lg"></div>
                                    <div className='text-sm h-full flex flex-col justify-center'>
                                        <p>Chilli Powder</p>
                                        <p>200g / Pouch</p>
                                    </div>
                                </div>
                                <p>₹268.00</p>
                            </motion.div>

                            <div className="mb-4">
                                <input
                                    placeholder="Discount code or gift card"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-4 border-t pt-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>₹268.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-gray-600">Enter shipping address</span>
                                </div>
                                <div className="flex justify-between font-semibold border-t pt-4">
                                    <span>Total</span>
                                    <span>₹268.00</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;