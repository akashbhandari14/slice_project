'use client';

import { productArray } from '@/app/utils/temp';
import ProductDescription from '@/app/components/ProductDescription';
import PeopleAlsoBought from '@/app/components/PeopleAlsoBought';
import CustomerReviews from '@/app/components/CustomerReview';
import Single_Product_Main_Info from '../Single_Product_Main_Info';
import Single_Product_Main_Img_Container from '../Single_Product_Main_Img_Container';
import React, { useState, useEffect } from 'react';

interface PageProps {
  params: { slug: string };
}

interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

interface Product {
  id: string;
  productName: string;
  productFeatures: string[];
  productRating: number;
  productDescription: string;
  productReviews: number;
  productSize: string[];
  images: ProductImage[];
  mrp: number;
  discountedPrice: number;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [slug, setSlug] = useState<string | null>(null);
  const [specificProduct, setSpecificProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Unwrap `params` asynchronously
    (async () => {
      const unwrappedParams = await params;
      if (unwrappedParams && unwrappedParams.slug) {
        setSlug(unwrappedParams.slug);

        // Find the product based on the slug
        const product = productArray.find((currElem) => currElem.id === unwrappedParams.slug);
        setSpecificProduct(product || null);
      } else {
        console.error('Params are missing or invalid.');
      }
    })();
  }, [params]);

  // Handle loading or product not found cases
  if (!slug) {
    return <div>Loading...</div>;
  }

  if (!specificProduct) {
    console.error(`Product not found for the slug: ${slug}`);
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full mx-auto px-4 py-8 bg-[#fef9e5]">
      <div className="single_product_inner_container w-[90%] max-sm:w-[95%] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-gray-600">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span>{specificProduct?.productName}</span>
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 relative">
          {/* Left Column - Images */}
          <Single_Product_Main_Img_Container images={specificProduct.images} />

          {/* Right Column - Product Details */}
          <Single_Product_Main_Info
            title={specificProduct.productName}
            description={specificProduct.productDescription}
            features={specificProduct.productFeatures}
            rating={specificProduct.productRating}
            reviews={specificProduct.productReviews}
            sizes={specificProduct.productSize}
            price={specificProduct.mrp}
            discountedPrice={specificProduct.discountedPrice}
          />
        </div>

        {/* Additional Components */}
        <PeopleAlsoBought />
        <CustomerReviews />
      </div>
    </div>
  );
};

export default Page;
