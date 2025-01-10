import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Eye, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

type Product = {
    id: string;
    name: string;
    price: number;
    fromPrice: number;
    discount?: number;
    image: string;
    packSizes: string[];
};

export default function PeopleAlsoBought() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productsPerSlide, setProductsPerSlide] = useState(4);

    // Update products per slide based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) { // mobile
                setProductsPerSlide(2);
            } else if (window.innerWidth < 1024) { // tablet
                setProductsPerSlide(3);
            } else { // desktop
                setProductsPerSlide(4);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const products: Product[] = [
        {
            id: '1',
            name: 'Secret Garam Masala',
            price: 108,
            fromPrice: 108,
            image: '/images/single_product_img.webp',
            packSizes: ['100g', '500g']
        },
        {
            id: '2',
            name: 'Kashmiri Chilli Powder',
            price: 423,
            fromPrice: 84,
            discount: 21,
            image: '/images/single_product_img.webp',
            packSizes: ['500g', '1kg', '5kg', '20kg']
        },
        {
            id: '3',
            name: 'Chaat Masala',
            price: 76,
            fromPrice: 76,
            image: '/images/single_product_img.webp',
            packSizes: ['100g', '500g', '1kg']
        },
        {
            id: '4',
            name: 'Chilli Powder',
            price: 101,
            fromPrice: 73,
            discount: 28,
            image: '/images/single_product_img.webp',
            packSizes: ['500g', '1kg', '5kg', '20kg']
        },
        {
            id: '5',
            name: 'Secret Garam Masala',
            price: 108,
            fromPrice: 108,
            image: '/images/product_display_page_img.webp',
            packSizes: ['100g', '500g']
        },
        {
            id: '6',
            name: 'Kashmiri Chilli Powder',
            price: 423,
            fromPrice: 84,
            discount: 21,
            image: '/images/product_display_page_img.webp',
            packSizes: ['500g', '1kg', '5kg', '20kg']
        },
        {
            id: '7',
            name: 'Chaat Masala',
            price: 76,
            fromPrice: 76,
            image: '/images/product_display_page_img.webp',
            packSizes: ['100g', '500g', '1kg']
        },
        {
            id: '8',
            name: 'Chilli Powder',
            price: 101,
            fromPrice: 73,
            discount: 28,
            image: '/images/product_display_page_img.webp',
            packSizes: ['500g', '1kg', '5kg', '20kg']
        }
    ];

    const totalSlides = Math.ceil(products.length / productsPerSlide);

    // Reset currentIndex when productsPerSlide changes to avoid empty slides
    useEffect(() => {
        const maxIndex = (Math.ceil(products.length / productsPerSlide) - 1) * productsPerSlide;
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [productsPerSlide, products.length, currentIndex]);

    const showNext = () => {
        const nextIndex = currentIndex + productsPerSlide;
        if (nextIndex < products.length) {
            setCurrentIndex(nextIndex);
        }
    };

    const showPrev = () => {
        const prevIndex = currentIndex - productsPerSlide;
        if (prevIndex >= 0) {
            setCurrentIndex(prevIndex);
        }
    };

    // Get current visible products
    const visibleProducts = products.slice(currentIndex, currentIndex + productsPerSlide);

    // Calculate if buttons should be disabled
    const isNextDisabled = currentIndex + productsPerSlide >= products.length;
    const isPrevDisabled = currentIndex === 0;

    return (
        <section className="w-full mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold text-center mb-8">People Also Bought</h2>

            <div className="relative">
                {/* Navigation Buttons */}
                <button
                    onClick={showPrev}
                    disabled={isPrevDisabled}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md transition-opacity ${
                        isPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                    }`}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={showNext}
                    disabled={isNextDisabled}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md transition-opacity ${
                        isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                    }`}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {visibleProducts.map((product) => (
                        <div key={product.id} className="relative group">
                            {/* Product Card */}
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />

                                {product.discount && (
                                    <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md text-sm">
                                        -{product.discount}%
                                    </span>
                                )}

                                {/* Action Buttons */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                                    <button className="bg-red-600 p-2 rounded-md">
                                        <ShoppingCart className="w-5 h-5 text-white" />
                                    </button>
                                    <button className="bg-white p-2 rounded-md">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="bg-white p-2 rounded-md">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Pack Sizes */}
                                <div className="absolute bottom-0 w-full flex gap-4 justify-center text-sm bg-white bg-opacity-30 gap-1">
                                    {product.packSizes.map((size) => (
                                        <span
                                            key={size}
                                            className="text-red-600 font-semibold text-xs rounded-md py-2"
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="text-center mt-4">
                                <h3 className="font-medium mb-2">{product.name}</h3>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-gray-500">From</span>
                                    <span className="text-green-700">₹{product.fromPrice}</span>
                                    {product.price !== product.fromPrice && (
                                        <span className="text-gray-500 line-through">₹{product.price}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rectangle Navigation */}
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalSlides }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i * productsPerSlide)}
                            className={`h-1 rounded-sm transition-all ${
                                Math.floor(currentIndex / productsPerSlide) === i
                                    ? 'w-8 bg-red-700'
                                    : 'w-4 bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}