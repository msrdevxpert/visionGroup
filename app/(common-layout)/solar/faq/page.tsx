import Faqs from "@/components/faq/Faqs";
import Experts from "@/components/home1/Experts";
import WhyChoose from "@/components/home1/WhyChoose";
import Navbar from "@/components/home2/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Faq" bgImage="SolarFAQBanner.jpg" />
      <Faqs />
      <WhyChoose />
      <Experts />
      <BrandSlider />
    </>
  );
};

export default page;
