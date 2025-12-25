import Banner from "@/components/about-us/Banner";
import Experts from "@/components/home1/Experts";
import Faq from "@/components/home1/Faq";
import Footer from "@/components/home1/Footer";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home1/WhyChoose";
import Navbar from "@/components/shared/Navbar";
import AboutBody from "@/components/about-us/aboutBody";

import img from "../../public/images/Gemini_Generated_Image_wik40gwik40gwik4.png";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* ✅ PASS STRING URL */}
      <Banner bgImage={img.src} />

      <AboutBody />
      <WhyChoose />
      <Experts />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default AboutPage;
