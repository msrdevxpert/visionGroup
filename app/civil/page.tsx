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
import Partners from "@/components/home1/Partners";

/* ✅ META TAGS */
export const metadata = {
  title:
    "VISIONPLUS INFRATEC PRIVATE LIMITED | Infrastructure & Civil Construction — Vision Originn",
  description:
    "VISIONPLUS INFRATEC PRIVATE LIMITED, a subsidiary of Vision Originn, delivers innovative civil engineering, infrastructure, and construction solutions with quality, safety, and sustainability.",
  keywords: [
  "VISIONPLUS INFRATEC PRIVATE LIMITED",
  "Vision Originn",
  "civil construction company",
  "infrastructure development",
  "engineering company",
  "road and building construction",
  "industrial infrastructure services",

  // added SEO boosters
  "building construction company",
  "civil engineering services",
  "house construction services",
  "commercial construction company",
  "industrial construction company",
  "turnkey construction services",
  "civil contractor",
  "construction company near me",
  "best civil construction company",
  "infrastructure company",
  "structural engineering services"
]
,
  openGraph: {
    title:
      "VISIONPLUS INFRATEC PRIVATE LIMITED — A Vision Originn Company",
    description:
      "Trusted civil engineering and infrastructure development partner under Vision Originn.",
    url: "https://visionoriginn.com/civil/",
    siteName: "Vision Originn",
    images: [
      {
        url: "/images/civil-og.jpg",   // 👉 replace with your real OG image
        width: 1200,
        height: 630,
        alt: "VISIONPLUS INFRATEC PRIVATE LIMITED",
      },
    ],
    type: "website",
  },
};


const HomeSix = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <ProjectShowcase type="civil" />
      <Specialist />
      <Testimonial
        bgImage="/images/CivilTestimon.png"
        url="/images/CivilTestimonVdo.mp4"
      />
      <Faq faqImg="/images/civilFaq.jpg" />
      <News />
      <Partners />
      <Footer />
    </>
  );
};

export default HomeSix;
