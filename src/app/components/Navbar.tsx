import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";

const Navbar = () => {
    return (
        <header className="bg-bgColor relative w-full flex flex-col justify-center items-end border-b border-gray-300 text-xs">
            {/* Upper Header */}
            <div className="upper_header w-[75%] flex justify-between items-center py-2 pl-6 pr-24 text-[0.5rem]">
                <div className="upper_header_left flex gap-2">
                    <div className="flex justify-start items-center gap-5">
                        <FaUsers className="text-sm" />
                        <p>Available</p>
                    </div>
                    <div className="flex justify-start items-center gap-5">
                        <RxTriangleRight className="text-sm" />
                        <p>Mildfire</p>
                    </div>
                </div>
                <div className="upper_header_right flex py-1.5 gap-2 text-gray-500">
                    <p>Item1</p>
                    <p>Item2</p>
                    <div className="vertical_bar w-px bg-red-600"></div>
                    {Array.from({ length: 8 }, (_, index) => (
                        <FaUsers key={index} className="text-sm text-black" />
                    ))}
                </div>
            </div>

            {/* Horizontal Bar */}
            <div className="horizontal_bar w-full h-0.5 bg-red-600"></div>

            {/* Lower Header */}
            <div className="lower_header py-2 w-[75%] flex flex-col justify-center items-start gap-3 pr-24">
                <div className="lower_header_top w-full flex justify-between items-center pl-6 gap-6">
                    <p>Searching</p>
                    <div className="w-full flex justify-between items-center gap-3 ml-4">
                        <input
                            type="text"
                            className="w-full py-2 bg-transparent border border-gray-400 rounded-lg px-2"
                            placeholder="Search spices here"
                            aria-label="Search spices"
                        />
                        <button
                            className="py-2 px-8 bg-red-600 text-white rounded-sm"
                            aria-label="Search button"
                        >
                            Search
                        </button>
                    </div>
                    <div className="flex justify-start items-center gap-2 overflow-hidden">
                        <Image
                            src="/images/spice_img_1.png"
                            width={24}
                            height={24}
                            alt="Spice"
                        />
                        <p className="text-[0.5rem] text-red-600">
                            Loremkfsjkjfdsdfdsgdgfgfgdsr
                        </p>
                    </div>
                </div>
                <div className="lower_header_bottom w-full flex justify-between items-center">
                    {Array.from({ length: 8 }, (_, i) => (
                        <p key={i}>Itemlorem{i + 1}</p>
                    ))}
                </div>
            </div>

            {/* Logo */}
            <div className="absolute top-2 left-16 h-[80%]">
                <Image
                    src="/images/navbar_logo.PNG"
                    alt="Logo"
                    width={150}
                    height={90}
                />
            </div>
        </header>
    );
};

export default Navbar;
