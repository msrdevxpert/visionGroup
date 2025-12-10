import Payment from "@/components/product/Payment";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const CheckoutPage = () => {
  return (
    <>
      <Banner title="Payment" bgImage="payment-hero-bg.webp" />
      <Payment />
      <BrandSlider />
    </>
  );
};

export default CheckoutPage;
