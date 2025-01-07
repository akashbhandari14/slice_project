const HeroSection = () => {
  return (
    <div
      className="herosection_container w-full flex justify-end items-start bg-center bg-cover px-20"
      style={{
        backgroundImage: "url('/images/hero_section_img.jpg')",
        height: "580px",
      }}
    >
      <div className="text_content w-[40%] max-lg:w-full flex flex-col gap-4 text-white my-20">
        <h1 className="w-1/2 text-4xl font-semibold">Premium Poly Packs</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aut quo at. Aspernatur, ea, tenetur maiores magnam repudiandae quis eum quod id aut eaque aliquid veritatis enim iusto. Soluta reprehenderit repellat nobis earum obcaecati dolore ducimus, laboriosam ipsam corporis excepturi necessitatibus. Rerum unde dignissimos odit.
        </p>
        <button
          className="py-3 mx-6 w-32 bg-orange-300 text-xs mt-2"
          aria-label="Order Premium Poly Packs"
        >
          Order it
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
