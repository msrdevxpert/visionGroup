import Payment from "@/components/product/Payment";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";
const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Payment" bgImage="payment-hero-bg.webp" />
      <Payment />
      <BrandSlider />
    </>
  );
};

export default CheckoutPage;
