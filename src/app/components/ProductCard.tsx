import { Eye, ShoppingCart } from "lucide-react";
import { Heart } from 'lucide-react';
import Link from "next/link";

// Define types
interface Image {
  id: number;
  url: string;
  alt: string;
}

interface ProductCardProps {
  id: string;
  title: string;
  image: Image[];
  discount: number;
  price: number;
  sizes: string[]
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, image, discount, price, sizes }) => (
  <div className="flex-shrink-0 w-[48%] sm:w-[48%] md:w-auto">
    <Link href={`/product/${id}`} className="flex flex-col items-center justify-start gap-3 cursor-pointer">
      <div
        key={id}
        className="group rounded-lg overflow-hidden"
      >
        <div className="relative">
          {/* Product Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={image[0]?.url}
              alt={image[0]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
            />
          </div>

          {/* Discount Badge */}
          {discount && (
            <span className="absolute top-3 left-3 rounded-full bg-bgColor px-4 py-1">
               {(((discount-price)/price)*100).toFixed(1)}%
            </span>
          )}

          {/* Quick Action Icons Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
              <button className="bg-white p-3 rounded-full hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </button>
              <button className="bg-white p-3 rounded-full hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Delete Icons Overlay
          <div className="absolute right-0 inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <MdDelete className="absolute top-6 right-0 -translate-x-1/2 -translate-y-1/2 flex gap-4 text-3xl text-black hover:text-red-600 cursor-pointer" />
          </div> */}

          {/* Size Options */}
          {sizes && (
            <div className="absolute bottom-0 left-0 right-0 bg-white py-2 px-4 flex justify-center gap-2 opacity-0 group-hover:opacity-60 transition-all duration-300 translate-y-full group-hover:translate-y-0">
              {sizes?.map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 text-sm font-semibold border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-gray-800 text-center font-medium mb-2 text-lg">
            {title}
          </h3>
          <div className="flex justify-center items-center gap-2">
            {discount && (
              <span className="text-gray-500 font-semibold line-through">
                ₹{discount}
              </span>
            )}
            <span className="text-red-500 font-semibold">
              {price ? 'From ' : ''}₹{price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default ProductCard