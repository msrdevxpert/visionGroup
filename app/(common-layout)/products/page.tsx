import ProductsPage from "@/components/product/Products";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";
const page = () => {
  return (
    <>
<Navbar />
      <Banner title="Products" bgImage="products-hero-bg.webp" />
      <ProductsPage />
      <BrandSlider />
    </>
  );
};

export default page;
