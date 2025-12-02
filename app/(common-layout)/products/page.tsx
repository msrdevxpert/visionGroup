import ProductsPage from "@/components/product/Products";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
      <Banner title="Products" bgImage="products-hero-bg.webp" />
      <ProductsPage />
      <BrandSlider />
    </>
  );
};

export default page;
