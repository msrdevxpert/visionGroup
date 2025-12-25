import Experts from "@/components/home4/Experts";
import Banner from "@/components/home4/Banner";
import Counter from "@/components/home4/Counter";
import Faq from "@/components/home4/Faq";
import Footer from "@/components/home4/Footer";
import News from "@/components/home4/News";
import ProjectShowcase from "@/components/home4/ProjectShowcase";
import Services from "@/components/home4/Services";
import Testimonial from "@/components/home4/Testimonial";
import Navbar from "@/components/home4/NavBar";

const HomeFour = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Counter />
      <ProjectShowcase type="agri"/>
      <Testimonial />
      <Experts />
      <Faq faqImg="/images/AgriHomefaq.jpg"/>
      <News />
      <Footer />
    </>
  );
};

export default HomeFour;
