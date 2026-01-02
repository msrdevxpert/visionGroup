import Experts from "@/components/home4/Experts";
import Banner from "@/components/home4/Banner";
import Counter from "@/components/home4/Counter";
import Faq from "@/components/home4/Faq";
import Footer from "@/components/home2/Footer";
import News from "@/components/home4/News";
import ProjectShowcase from "@/components/home4/ProjectShowcase";
import Services from "@/components/home4/Services";
import Testimonial from "@/components/home4/Testimonial";
import Navbar from "@/components/home4/NavBar";
import Partners from "@/components/home1/Partners";


export const metadata = {
  title: "VISION AGRIFUTURE | Smart Agriculture & Sustainable Farming Solutions",
  description:
    "VISION AGRIFUTURE delivers innovative agritech solutions, modern farming practices, irrigation systems, and sustainable agriculture services to help farmers increase productivity and profitability.",
  keywords: [
  "VISION AGRIFUTURE",
  "agriculture technology",
  "smart farming",
  "sustainable farming",
  "agritech solutions",
  "irrigation systems",
  "organic farming",
  "modern agriculture",

  // Core agriculture & services
  "agriculture company",
  "agribusiness services",
  "agriculture solutions",
  "farming company",
  "agriculture service provider",
  "agricultural consulting services",
  "agri company near me",

  // Production & modern farming
  "precision farming",
  "greenhouse farming services",
  "contract farming company",
  "smart agriculture solutions",

  // Inputs & supplies
  "hybrid seeds supplier",
  "fertilizer supplier",
  "organic manure supplier",
  "crop protection products",

  // Irrigation & equipment
  "drip irrigation system",
  "sprinkler irrigation system",
  "irrigation installation company",
  "agriculture equipment supplier",

  // Sustainability
  "climate smart agriculture",
  "regenerative agriculture",
  "eco friendly farming",

  // Business & projects
  "agriculture project consultancy",
  "farm management services",
  "turnkey agriculture projects"
]
,
  openGraph: {
    title: "VISION AGRIFUTURE — Smart & Sustainable Agriculture Solutions",
    description:
      "Empowering farmers with technology-driven, eco-friendly and profitable agriculture practices.",
    type: "website"
  }
};

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
      <Partners />
      <Footer />
    </>
  );
};

export default HomeFour;
