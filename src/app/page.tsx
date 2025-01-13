import HeroSection from "./components/HeroSection";
import Category from "./components/Category";
import Banner from "./components/Banner";
import Product from "./components/Product";
import MiniSection from "./components/Mini-Section";
import TrustedBy from "./components/TrustedBy";


const page = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Category />
        <Product />
        <MiniSection />
        <Banner />
        <TrustedBy />
      </div>
    </>
  )
}

export default page
