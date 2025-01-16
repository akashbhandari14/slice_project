export default function Banner() {
  return (
    <>
      <div className="banner w-full grid grid-cols-2 gap-0 max-lg:grid-cols-1 min-h-[400px] max-lg:min-h-[700px]">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center items-start p-8 max-lg:p-6 space-y-4 bg-[#942c23] text-white h-[400px] max-lg:h-[400px]">
          <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl font-bold tracking-tight">
            Quality Promises
          </h1>
          
          <p className="text-base max-lg:text-base leading-relaxed opacity-90">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem possimus 
            incidunt molestias blanditiis dolores quasi, eveniet hic, sequi vel ipsum 
            dolor eum distinctio doloribus consectetur harum aut nisi totam beatae 
            dolorem laboriosam tempore omnis quod cupiditate! Asperiores facilis 
            consequatur obcaecati minus dicta officiis fuga amet.
          </p>
          
          <button className="mt-4 py-2.5 px-8 text-lg font-semibold text-white bg-[#cf934a] transition-colors duration-300 rounded-md shadow-lg hover:bg-btnHover">
            Shop Now
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="relative flex justify-center items-center bg-[#f5f5f5] overflow-hidden h-[400px] max-lg:h-[300px] bg-center">
          <img 
            src="/images/banner_img.png" 
            alt="Banner" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}