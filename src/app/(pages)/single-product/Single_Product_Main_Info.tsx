"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Minus, Plus, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import ProductDescription from '@/app/components/ProductDescription';
import PeopleAlsoBought from '@/app/components/PeopleAlsoBought';
import CustomerReviews from '@/app/components/CustomerReview';
import Single_Product_Main_Img_Container from './Single_Product_Main_Img_Container';

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

const Single_Product_Main_Info = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleQuantityChange = (action: 'increase' | 'decrease') => {
        if (action === 'increase') {
            setQuantity(prev => prev + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const sizeOptions = ['500g', '1kg', '5kg', '20kg'];
    const packOptions = ['Pouch'];

    const product: Product = {
        id: '1',
        name: 'Kashmiri Chilli Powder',
        price: 333,
        originalPrice: 423,
        description: 'Indian cuisines are incomplete without dash of chilli powder. But, when you need moderate spiciness with enticing color than Hathi Kashmiri Chilli is the best choice. Its exotic aroma with fiery color in your cuisine will surely enhance your appetite.',
        size: '500g',
        packType: 'Pouch',
        reviews: 26,
        rating: 4.5,
        soldCount: 23,
        soldTimeframe: '13 hours',
        features: [
            'High in Volatile Oil',
            '100% Natural',
            'Upto 20% Less Usage'
        ],
        images: [
            {
                id: 1,
                url: '/images/single_product_img.webp',
                alt: 'Kashmiri Chilli Powder Package Front'
            },
            // Add more images as needed
        ]
    };

    return (
        <>
            <div>
                <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

                <p className="text-gray-400 font-semibold">{product.features.join(' | ')}</p>

                <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-xl ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="text-gray-600">{product.reviews} reviews</span>
                </div>

                {/* Modified Product Description with Show More/Less */}
                <div className="relative mb-6">
                    <p className={`product_description text-gray-700 text-sm transition-all duration-300 ${
                        isExpanded ? '' : 'line-clamp-2'
                    }`}>
                        {product.description}
                    </p>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-red-600 text-sm font-medium flex items-center gap-1 hover:text-red-700 mt-1"
                    >
                        {isExpanded ? (
                            <>
                                Show Less 
                                <ChevronUp className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                Show More 
                                <ChevronDown className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    <span className="line-through">₹{product.originalPrice}</span>
                    <span className="bg-red-600 text-white px-2 py-1 text-sm font-semibold rounded-full">21% OFF</span>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                    <p className="font-medium mb-2">Size: {product.size}</p>
                    <div className="flex gap-2">
                        {sizeOptions.map(size => (
                            <button
                                key={size}
                                className={`px-4 py-0.5 rounded-full border ${size === product.size
                                    ? 'bg-red-600 text-white border-red-700'
                                    : 'border-gray-300 hover:border-red-700'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-8 mb-6">
                    <div className="flex items-center border border-red-600 rounded-full py-1.5 px-0.5">
                        <button onClick={() => handleQuantityChange('decrease')} className="p-2 hover:bg-gray-100" >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center">{quantity}</span>
                        <button onClick={() => handleQuantityChange('increase')} className="p-2 hover:bg-gray-100" >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                    <button className="px-8 py-3 max-sm:py-0 max-sm:text-xs border border-red-600 rounded-full hover:bg-black hover:text-white hover:border-none">
                        ADD TO CART
                    </button>
                    <button className="px-8 py-3 max-sm:py-0 max-sm:text-xs bg-red-600 text-white rounded-full hover:bg-black">
                        BUY IT NOW
                    </button>
                    <button className="p-3 border border-red-600 rounded-full hover:bg-gray-50">
                        <Heart className="w-6 h-6" />
                    </button>
                </div>

                <button className="w-full text-left text-gray-700 font-semibold underline hover:text-red-700 mb-6">
                    Bulk Inquiry
                </button>

                {/* Product Features */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                        { icon: '/images/single_product_bulk_inquiry_img.svg', text: 'No artificial colour added.' },
                        { icon: '/images/single_product_bulk_inquiry_img.svg', text: 'Microbiologically tested.' },
                        { icon: '/images/single_product_bulk_inquiry_img.svg', text: 'Scientifically graded.' },
                        { icon: '/images/single_product_bulk_inquiry_img.svg', text: 'Hygienically packed.' }
                    ].map((feature, index) => (
                        <div key={index} className="text-center flex flex-col items-center">
                            <img src={feature.icon} className='w-12' />
                            <p className="text-sm text-gray-600">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Single_Product_Main_Info