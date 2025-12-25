import Faqs from "@/components/faq/Faqs";
import Experts from "@/components/home1/Experts";
import WhyChoose from "@/components/home1/WhyChoose";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <Banner title="Faq" bgImage="MainFAQBanner.jpg" />
      <Faqs />
      <WhyChoose />
      <Experts />
      <BrandSlider />
    </>
  );
};

export default page;
