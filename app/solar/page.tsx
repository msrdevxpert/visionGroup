"use client";
import Partners from "@/components/home1/Partners";
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


export const metadata = {
  title: "VISIONSMART OLUS ENERGY PRIVATE LIMITED | Renewable & Solar Energy Solutions",
  description:
    "VISIONSMART OLUS ENERGY PRIVATE LIMITED provides reliable renewable and solar energy solutions, empowering homes, businesses, and industries with sustainable power.",
  keywords: [
    "VISIONSMART OLUS ENERGY PRIVATE LIMITED",
    "Vision Originn",
    "solar energy",
    "renewable energy",
    "solar installation",
    "green energy",
    "solar power systems",
    "solar company"
  ],
  openGraph: {
    title: "VISIONSMART OLUS ENERGY PRIVATE LIMITED",
    description:
      "Leading provider of smart, sustainable and affordable solar energy solutions for homes, industries and businesses.",
    type: "website"
  }
};

const HomeTwo = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BestSolar />
      <SolarInstall />
      <SmartSolar />

      {/* 👇 type passed here */}
      <WhyChoose type="SOLAR" />

      <Specialist />
      <Testimonial />
      <Faq />
      <Partners />
      <Footer />
    </>
  );
};

export default HomeTwo;
