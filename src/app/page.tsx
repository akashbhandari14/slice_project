import HeroSection from "./components/HeroSection";
import Category from "./components/Category";
import Banner from "./components/Banner";
import Product from "./components/Product";
import MiniSection from "./components/Mini-Section";


const page = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Category />
        <MiniSection />
        <Banner />
        <Product />
      </div>
    </>
  )
}

export default page
