import Banner from "@/components/about-us/Banner";

import Experts from "@/components/home1/Experts";
import Faq from "@/components/home1/Faq";
import Footer from "@/components/home1/Footer";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home6/WhyChoose";
import Navbar from "@/components/home6/Navbar";
import AboutBody from "@/components/about-us/aboutBody6";
import img from "../../../../public/images/CivilAboutUs.jpg";

// ✅ META TAGS FOR ABOUT PAGE (VISIONPLUS INFRATEC PRIVATE LIMITED)
export const metadata = {
  title:
    "About — VISIONPLUS INFRATEC PRIVATE LIMITED | Civil & Infrastructure Solutions",
  description:
    "VISIONPLUS INFRATEC PRIVATE LIMITED specializes in civil construction, infrastructure development, project management, and smart engineering solutions — building reliable, sustainable, and future-ready structures.",
  keywords: [
    "VISIONPLUS INFRATEC PRIVATE LIMITED",
    "civil construction company",
    "infrastructure development",
    "construction services",
    "project management",
    "engineering solutions",
    "building contractors",
    "infrastructure company"
  ],
  openGraph: {
    title:
      "VISIONPLUS INFRATEC PRIVATE LIMITED — Civil & Infrastructure Experts",
    description:
      "Delivering high-quality civil construction and infrastructure solutions with commitment, safety, and engineering excellence.",
    type: "website"
  }
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Banner bgImage={img.src} />
      <AboutBody />
      <WhyChoose />
      <Experts />
      <Testimonial bgImage="/images/CivilTestimonialSide.png" />
      <Faq faqImg="/images/CivilFagBg.png" type="civil" />
      <Footer />
    </>
  );
};

export default AboutPage;
