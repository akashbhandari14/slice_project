import Link from "next/link";

interface ProductCardProps {
  discount: string;
  price: number;
  originalPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ discount, price, originalPrice }) => (
  <div className="flex-shrink-0 w-[48%] sm:w-[48%] md:w-auto">
    <Link href="/single-product" className="flex flex-col items-center justify-start gap-3 cursor-pointer">
      <div className="product_img relative rounded-md w-full group">
        <img
          src="/images/product_img_1.webp"
          className="w-full h-full object-cover rounded-md hover:scale-110"
          alt="Product"
        />
        <button className="py-0.5 px-3 absolute top-4 right-4 bg-green-600 rounded-full text-white text-sm">
          {discount}
        </button>
        <div className="product_price absolute bottom-0 w-full flex justify-center items-center gap-2 bg-red-600 py-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p>100g</p>
          <p>300g</p>
          <p>500g</p>
        </div>
      </div>
      <h3 className="font-semibold text-sm md:text-base">Product Title</h3>
      <p className="text-base md:text-xl font-semibold text-gray-500">
        <span className="line-through text-gray-600">₹ {originalPrice}</span>{" "}
        <span className="text-red-600">From</span> ₹ {price}
      </p>
    </Link>
  </div>
);

export default ProductCard