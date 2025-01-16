import HeroSection from "./components/HeroSection";
import Category from "./components/Category";
import Banner from "./components/Banner";
import Product from "./components/Product";
import MiniSection from "./components/Mini-Section";
import TrustedBy from "./components/TrustedBy";
import Cart from "./components/ShoppingCart_Sidebar";


const page = () => {
  return (
    <>
      <div>
        <Cart />
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
