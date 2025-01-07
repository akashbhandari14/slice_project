import HeroSection from "./components/HeroSection";
import Category from "./components/Category";
import Banner from "./components/Banner";
import Product from "./components/Product";


const page = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Category />
        <Banner />
        <Product />
      </div>
    </>
  )
}

export default page
