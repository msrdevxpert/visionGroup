
import About from "@/components/home1/About";
import Banner from "@/components/home1/Banner";
import Experts from "@/components/home1/Experts";
import Faq from "@/components/home1/Faq";
import Footer from "@/components/home1/Footer";
import RecentProject from "@/components/home1/RecentProject";
import Services from "@/components/home1/Services";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home1/WhyChoose";
import CompanyProf from "@/components/home1/CompanyProf";
import Navbar from "@/components/shared/Navbar";
import Client from "@/components/home1/Clients"


export default function Home() {

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <CompanyProf />
      <Services />
      <WhyChoose />
      <RecentProject />
      <Experts />
      <Testimonial bgImage="/images/imageTestomonials.png"/>
      <Client />
      <Faq faqImg="/images/VisionGroupFAQBG.png" type="main"/>
      <Footer />
    </>
  );
}
