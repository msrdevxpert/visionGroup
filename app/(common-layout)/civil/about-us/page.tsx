import Banner from "@/components/about-us/Banner";

import Experts from "@/components/home1/Experts";
import Faq from "@/components/home1/Faq";
import Footer from "@/components/home1/Footer";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home6/WhyChoose";
import Navbar from "@/components/home6/Navbar";
import AboutBody from "@/components/about-us/aboutBody6";
import img from "../../../../public/images/CivilAboutUs.jpg"
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Banner bgImage={img.src}/>
<AboutBody />
      {/* <About /> */}
      <WhyChoose />
      <Experts />
      <Testimonial bgImage="/images/CivilTestimonialSide.png"/>
      <Faq faqImg="/images/CivilFagBg.png" type="civil"/>
      <Footer />
    </>
  );
};

export default AboutPage;
