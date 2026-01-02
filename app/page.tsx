
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
import Partners from "@/components/home1/Partners";

export const metadata = {
  title: "Home | Vision Originn",
  description: "Vision Originn provides expert services, innovative solutions, and trusted partnerships.",
  keywords: [
  "Vision Originn",
  "Vision Originn India",
  "Vision Group",
  "business services",
  "consulting",
  "experts",
  "projects",
  "infrastructure",
  "civil construction company",
  "infrastructure development",
  "engineering company",
  "road and building construction",
  "industrial infrastructure services",
  "construction",
  "renewable energy",
  "solar projects",
  "green energy company",
  "agriculture",
  "modern farming solutions",
  "IT solutions",
  "software development company",
  "technology solutions provider"
]
,
  openGraph: {
    title: "Vision Originn",
    description: "Expert services and innovative solutions by Vision Originn",
    url: "https://visionoriginn.com/",
    siteName: "Vision Originn",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vision Originn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
      <Partners />
      <Footer />
    </>
  );
}
