import Faqs from "@/components/faq/Faqs";
import Experts from "@/components/home1/Experts";
import WhyChoose from "@/components/home1/WhyChoose";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
      <Banner title="Faq" bgImage="faq-hero-bg.webp" />
      <Faqs />
      <WhyChoose />
      <Experts />
      <BrandSlider />
    </>
  );
};

export default page;
