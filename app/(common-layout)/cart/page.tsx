import Cart from "@/components/product/Cart";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
      <Banner title="Cart" bgImage={"cart-hero-bg.webp"} />
      <Cart />
      <BrandSlider />
    </>
  );
};

export default page;
