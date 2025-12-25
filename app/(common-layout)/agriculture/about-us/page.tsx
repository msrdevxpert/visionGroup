import Banner from "@/components/about-us/Banner";

import Experts from "@/components/home4/Experts";
import Faq from "@/components/home1/Faq";
import Footer from "@/components/home1/Footer";
import Testimonial from "@/components/home4/Testimonial";
import WhyChoose from "@/components/home1/WhyChoose";
import Navbar from "@/components/home4/NavBar";
import AboutBody from "@/components/about-us/aboutBody4";
import img from "../../../../public/images/AgricultureAbout1.png"
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Banner bgImage={img.src}/>
<AboutBody />
      {/* <About /> */}
      <WhyChoose />
      <Experts />
      {/* try to pass bg to testimonial */}
      <Testimonial /> 
      <Faq />
      <Footer />
    </>
  );
};

export default AboutPage;
