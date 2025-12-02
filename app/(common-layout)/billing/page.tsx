import Billing from "@/components/product/Billing";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const BillingPage = () => {
  return (
    <>
      <Banner title="Billing" bgImage="billing-hero-bg.webp" />
      <Billing />
      <BrandSlider />
    </>
  );
};

export default BillingPage;
