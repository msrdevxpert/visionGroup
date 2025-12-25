import Services from "@/components/home6/Services";
import Specialist from "@/components/home2/Specialist";
import Footer from "@/components/home2/Footer";
import Faq from "@/components/home4/Faq";
import News from "@/components/home4/News";
import ProjectShowcase from "@/components/home4/ProjectShowcase";
import Features from "@/components/home6/Features";
import Hero from "@/components/home6/Hero";
import Navbar from "@/components/home6/Navbar";
import Testimonial from "@/components/home6/Testimonial";

const HomeSix = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <ProjectShowcase type="agri"/>
      <Specialist />
      <Testimonial bgImage="/images/CivilTestimon.png" url="/images/CivilTestimonVdo.mp4"/>
      <Faq faqImg="/images/civilFaq.jpg" />
      <News />
      <Footer />
    </>
  );
};

export default HomeSix;
