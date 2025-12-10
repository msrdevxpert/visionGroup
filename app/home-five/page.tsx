import Footer from "@/components/home4/Footer";
import About from "@/components/home5/About";
import Discounts from "@/components/home5/Discounts";
import Features from "@/components/home5/Features";
import Hero from "@/components/home5/Hero";
import Navbar from "@/components/home5/Navbar";
import Products from "@/components/home5/Products";
import TrendingItems from "@/components/home5/TrendingItems";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Discounts />
      <Products />
      <About />
      <TrendingItems />
      <Features />
      <Footer />
    </>
  );
};

export default page;
