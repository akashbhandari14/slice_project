// types.ts
type Review = {
    id: string;
    rating: number;
    author: string;
    title: string;
    comment: string;
    date: string;
    verified: boolean;
};

// components/CustomerReviews.tsx
'use client';

import { useState } from 'react';
import { Star, ChevronDown, ChevronRight } from 'lucide-react';
import { FaRegUser } from "react-icons/fa";

export default function CustomerReviews() {
    const [currentPage, setCurrentPage] = useState(1);

    const reviews: Review[] = [
        {
            id: '1',
            rating: 5,
            author: 'Govind Yadav',
            title: 'Amazing service',
            comment: 'Good product',
            date: '07/12/2024',
            verified: true
        },
        {
            id: '2',
            rating: 5,
            author: 'Dhaval Solanki',
            title: 'Pure Masala',
            comment: 'We are using chilli powder from Hathi Masala more than 15 years',
            date: '28/11/2024',
            verified: true
        },
        {
            id: '3',
            rating: 5,
            author: 'Ashwani Kochhar',
            title: 'Quality',
            comment: 'Best quality all the variant which I ordered good flavoured.',
            date: '28/11/2024',
            verified: true
        }
    ];

    const ratingCounts = {
        5: 30,
        4: 2,
        3: 4,
        2: 0,
        1: 0
    };

    const totalReviews = 36;
    const averageRating = 4.72;

    const getRatingPercentage = (count: number) => {
        return (count / totalReviews) * 100;
    };

    return (
        <section className="w-full mx-auto px-4 py-12">
            <div className=" w-full flex flex-col justify-start items-start">
                {/* Summary Section */}
                <div className=" w-full md:col-span-1">
                    <h2 className="w-full text-2xl font-semibold mb-8 text-center">Customer Reviews</h2>
                    <div className="customer_data_graph w-full grid grid-cols-3 max-lg:grid-cols-1 pb-10 border-b border-gray-400">
                        <div className=" w-full flex flex-col items-center justify-center mb-2">
                            <div className=" w-[80%] flex justify-center items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`w-5 h-5 ${star <= Math.floor(averageRating)
                                            ? 'text-red-800 fill-red-900'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                                <span className="font-medium ml-3">{averageRating} out of 5</span>
                            </div>
                            <p className="text-gray-600 mb-6">Based on {totalReviews} reviews</p>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className="customer_review_visualization w-full grid grid-cols-[2fr_4fr_1fr] gap-6">
                                <div className="stars w-full flex flex-col items-end justify-between">
                                    <div className='flex'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.floor(averageRating)
                                                    ? 'text-red-800 fill-red-900'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className='flex justify-start'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.floor(averageRating)
                                                    ? 'text-red-800 fill-red-900'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className='flex justify-start'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.floor(averageRating)
                                                    ? 'text-red-800 fill-red-900'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className='flex justify-start'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.floor(averageRating)
                                                    ? 'text-red-800 fill-red-900'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className='flex justify-start'>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.floor(averageRating)
                                                    ? 'text-red-800 fill-red-900'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="rectangle_bars w-full flex flex-col items-center justify-between">
                                    <div className='w-full h-4 bg-gray-400'>
                                        <div className='h-full w-[80%] bg-red-900'></div>
                                    </div>
                                    <div className='w-full h-4 bg-gray-400'>
                                        <div className='h-full w-[20%] bg-red-900'></div>
                                    </div>
                                    <div className='w-full h-4 bg-gray-400'>
                                        <div className='h-full w-[30%] bg-red-900'></div>
                                    </div>
                                    <div className='w-full h-4 bg-gray-400'>
                                        <div className='h-full w-[0%] bg-red-900'></div>
                                    </div>
                                    <div className='w-full h-4 bg-gray-400'>
                                        <div className='h-full w-[0%] bg-red-900'></div>
                                    </div>
                                </div>
                                <div className="customer_rating_number">
                                    <ul className='flex flex-col justify-between'>
                                        <li>21</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>0</li>
                                        <li>0</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full flex justify-center items-center py-8'>
                            <button className='w-full py-2 text-white bg-red-800'>Write a review</button>
                        </div>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="md:col-span-2 w-full">
                    <div className=" w-full flex justify-between items-center py-2 mb-6 border-b border-gray-400">
                        <div className="relative">
                            <select className="appearance-none bg-transparent pr-8 py-2 outline-none">
                                <option>Most Recent</option>
                                <option>Highest Rating</option>
                                <option>Lowest Rating</option>
                            </select>
                            <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>

                    {/* Review Cards */}
                    <div className="space-y-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="border-b pb-6">
                                <div className="customer_star_and_date flex justify-between items-center">
                                    <div className="flex justify-center items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.floor(averageRating)
                                                    ? 'text-red-800 fill-red-900'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className='text-sm text-zinc-600'>{review.date}</p>
                                </div>
                                <div className="customer_info_and_comment w-full flex flex-col items-start justify-start my-3">
                                    <div className='flex justify-start items-center gap-4'><span className='w-10 h-10 flex justify-center items-center bg-gray-400'><FaRegUser className='text-xl text-red-600' /></span>{review.author}</div>
                                </div>
                                <p className='mt-2 text-gray-600 font-semibold'>{review.title}</p>
                                <p className='text-zinc-600 mt-2'>{review.comment}</p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 flex items-center justify-center rounded-md
                    ${currentPage === page
                                        ? 'bg-red-700 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button className="w-8 h-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>


            </div>
        </section>
    );
}