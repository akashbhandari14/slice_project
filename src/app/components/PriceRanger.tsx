import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const PriceRanger: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(6971);
    const [leftThumbPosition, setLeftThumbPosition] = useState<number>(0);
    const [rightThumbPosition, setRightThumbPosition] = useState<number>(100);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Math.min(Number(e.target.value), maxPrice);
        setMinPrice(value);
        const percentage = (value / 6971) * 100;
        setLeftThumbPosition(percentage);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Math.max(Number(e.target.value), minPrice);
        setMaxPrice(Math.min(value, 6971));
        const percentage = (Math.min(value, 6971) / 6971) * 100;
        setRightThumbPosition(percentage);
    };

    return (
        <div className="w-full max-w-md py-4 bg-cream-50">
            {/* Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between mb-6"
            >
                <h2 className="text-lg font-medium text-gray-900">Price</h2>
                <ChevronUp
                    className={`w-5 h-5 transition-transform duration-200 ${isOpen ? '' : 'transform rotate-180'
                        }`}
                />
            </button>

            {isOpen && (
                <>
                    {/* Slider Track */}
                    <div className="relative w-[93%]  h-1 bg-gray-200 rounded-full mb-6">
                        {/* Selected Range */}
                        <div
                            className="absolute h-full bg-gray-400 rounded-full"
                            style={{
                                left: `${leftThumbPosition}%`,
                                right: `${100 - rightThumbPosition}%`
                            }}
                        />

                        {/* Slider Thumbs */}
                        <div
                            className="absolute w-4 h-4 bg-gray-500 rounded-full -mt-1.5 cursor-pointer"
                            style={{ left: `${leftThumbPosition}%` }}
                        />
                        <div
                            className="absolute w-4 h-4 bg-gray-500 rounded-full -mt-1.5 cursor-pointer"
                            style={{ left: `${rightThumbPosition}%` }}
                        />
                    </div>

                    {/* Price Input Fields */}
                    <div className="flex items-center gap-2 text-gray-600">
                        <span>Price:</span>
                        <span className="text-gray-400">₹</span>
                        <input
                            type="number"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                            className="w-20 px-4 py-1 border border-gray-300 rounded text-center"
                            min="0"
                            max={maxPrice}
                        />
                        <span>-</span>
                        <span className="text-gray-400">₹</span>
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
                            min={minPrice}
                            max="6971"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default PriceRanger;
