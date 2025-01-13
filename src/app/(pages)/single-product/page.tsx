// types.ts
type ProductImage = {
  id: number;
  url: string;
  alt: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  size: string;
  packType: string;
  reviews: number;
  rating: number;
  soldCount: number;
  soldTimeframe: string;
  features: string[];
  images: ProductImage[];
};

// page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Minus, Plus, Share2 } from 'lucide-react';
import ProductDescription from '@/app/components/ProductDescription';
import PeopleAlsoBought from '@/app/components/PeopleAlsoBought';
import CustomerReviews from '@/app/components/CustomerReview';
import Single_Product_Main_Img_Container from './Single_Product_Main_Img_Container';
import Single_Product_Main_Info from './Single_Product_Main_Info';

export default function page() {

  return (
    <div className="w-full mx-auto px-4 py-8 bg-[#fef9e5]">
      <div className='single_product_inner_container w-[90%] max-sm:w-[95%] mx-auto'>
        {/* This is the code for the Breadcrumb */}
        <div className="mb-6 text-gray-600">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span>Kashmiri Chilli Powder</span>
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 relative">
          {/* This the code for the Left Column - Images */}
          <Single_Product_Main_Img_Container />

          {/* This is the code for the Right Column - Product Details */}
          <Single_Product_Main_Info />

        </div>
        {/* <ProductDescription /> */}
        <PeopleAlsoBought />
        <CustomerReviews />
      </div>
    </div>
  );
}