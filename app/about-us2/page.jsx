import Banner from "@/components/about-us/Banner";
import About from "@/components/home1/About";
import Experts from "@/components/home2/Specialist";
import Faq from "@/components/home1/Faq";
import Footer from "@/components/home1/Footer";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home1/WhyChoose";
import Navbar from "@/components/home2/Navbar";
import AboutBody2 from "@/components/about-us/aboutBody2";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
<AboutBody2 />
      {/* <About /> */}
      <WhyChoose />
      <Experts />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default AboutPage;
