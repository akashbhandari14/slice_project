




export default function Banner(){
  return (
    <>
      <div className="banner w-full grid grid-cols-2 max-md:grid-cols-1 ">
            <div className="flex flex-col justify-center items-start pl-10 pr-12 max-lg:pl-10 max-md:py-6 max-lg:gap-2 gap-4 bg-[#942c23] text-white">
                <h1 className="text-xl font-semibold">Quality Promines</h1>
                <p className="text-sm max-lg:text-[0.5rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem possimus incidunt molestias blanditiis dolores quasi, eveniet hic, sequi vel ipsum dolor eum distinctio doloribus consectetur harum aut nisi totam beatae dolorem laboriosam tempore omnis quod cupiditate! Asperiores facilis consequatur obcaecati minus dicta officiis fuga amet. Reiciendis ad eligendi aperiam animi tenetur soluta.</p>
                <button className="w-fit mt-2 py-2 px-8 text-white bg-[#cf934a] text-[0.5rem]">Order now</button>
            </div>
            
            <div className="flex justify-center items-center bg-center">
                <img src="/images/banner_img.png" alt="" className="w-full" />
            </div>
      </div>
    </>
  )
}

// max-lg:grid-cols-1
// max-lg:py-6 max-lg:px-8 max-lg:items-center 