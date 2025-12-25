import Services from "@/components/home1/Services";
import Specialist from "@/components/home2/Specialist";
import Footer from "@/components/home3/Footer";
import Faq from "@/components/home4/Faq";
import News from "@/components/home4/News";
import ProjectShowcase from "@/components/home4/ProjectShowcase";
import Features from "@/components/home6/Features";
import Hero from "@/components/home6/Hero";
import Navbar from "@/components/home6/Navbar";
import Testimonial from "@/components/home6/Testimonial";
import faqbg6 from "@/public/images/faq-bg-6.webp";
const HomeSix = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <ProjectShowcase type="civil" />
      <Specialist />
      <Testimonial />
      <Faq faqImg={faqbg6} />
      <News />
      <Footer />
    </>
  );
};

export default HomeSix;
