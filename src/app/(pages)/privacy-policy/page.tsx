"use client"


import React, { useState } from 'react';

const page = () => {

  return (
    <div className="w-full bg-[#fefce8]">
      <div className="privacy_policy_inner w-[90%] mx-auto">
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl text-center">Privacy Policy</h1>
            <p className="text-center text-sm opacity-90">Protecting your data is our top priority</p>
          </div>
        </div>

        <div className="shipping_policy">
          <h3 className='text-3xl font-semibold'>Shipping Info</h3>
          <p>We offer the following shipping options:</p>
          <ol>
            <li>
              1. Standard Shipping
            </li>
            <li>
              2. Express Shipping
              Delivery within 2-3 business days
              ₹100 for all orders
            </li>
          </ol>

          <h3 className='text-2xl font-semibold'>Order Processing</h3>
          Orders are processed within 1-2 business days after payment confirmation.
          You'll receive a shipping confirmation email with tracking information once your order is dispatched.
          Shipping Destinations
          We currently ship to all major cities and towns across India. For international shipping, please contact our customer service team.

          Tracking Your Order
          Once your order is shipped, you'll receive a tracking number via email. You can also track your order by logging into your account on our website.
        </div>
      </div>
    </div>
  );
};

export default page;