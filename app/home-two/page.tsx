import Banner from "@/components/home2/Banner";
import BestSolar from "@/components/home2/BestSolar";
import Faq from "@/components/home2/Faq";
import Footer from "@/components/home2/Footer";
import Navbar from "@/components/home2/Navbar";
import SmartSolar from "@/components/home2/SmartSolar";
import SolarInstall from "@/components/home2/SolarInstall";
import Specialist from "@/components/home2/Specialist";
import Testimonial from "@/components/home2/Testimonial";
import WhyChoose from "@/components/home2/WhyChoose";

const HomeTwo = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BestSolar />
      <SolarInstall />
      <SmartSolar />
      <WhyChoose />
      <Specialist />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default HomeTwo;
