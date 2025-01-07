import Image from 'next/image'
import React from 'react'




const Category = () => {
  return (
    <>
      <div className="category_container -mt-[13.4rem] w-full bg-bgColor bg-opacity-90">
        <div className="category_inner_container w-[85%] mx-auto flex flex-col justify-start items-center py-6 gap-2">
          <h1 className='text-3xl text-[#942b24]'>Categraries</h1>
          <p className='text-[0.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quia ad, modi deserunt voluptatem impedit cum voluptate ab aperiam repellat.</p>

          <div className="category_product_container w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 mt-4">
            {
              [1, 2, 3, 4].map((currElem, index) => {
                return (
                  <>
                    <div key={index} className='w-full flex flex-col justify-start items-center'>
                      <div className='bg-[#f0ead4] relative w-full flex flex-col justify-center items-center bg-center'>
                        <div className="category_product_main_info w-full bg-darkRed flex flex-col justify-center items-center text-white py-6 text-center">
                          <span className='text-2xl font-semibold m-0'>Regular Pack</span>
                          <button className='text-[0.5rem] w-5 px-8 py-0.5 rounded-md flex justify-center items-center border border-white m-0'>Buy Now</button>
                          <img src="/images/spice_img_1.png" className=' absolute -top-2 w-5 h-5 rounded-full' alt="" />
                        </div>
                        <Image src="/images/product1.png" alt="Feature Product 1" width={400} height={400} className="w-full" />
                        <p className='text-[0.5rem] absolute top-28 text-[#d7be8d]'>Lorem ipsum, dolor sit amet</p>
                        <p className='text-[0.5rem] absolute bottom-0 text-[#d7be8d]'>Lorem ipsum, dolor sit amet</p>
                      </div>
                      <button className='bg-[#c78f42] text-white text-xs px-6 py-1.5'>Order it</button>
                      <p className='text-[0.5rem] text-center'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </>
                )
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Category
