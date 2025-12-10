import Banner from "@/components/home3/Banner";
import Counter from "@/components/home3/Counter";
import Empower from "@/components/home3/Empower";
import Expert from "@/components/home3/Expert";
import Footer from "@/components/home3/Footer";
import Services from "@/components/home3/Services";
import Testimonial from "@/components/home3/Testimonial";
import WindEnergy from "@/components/home3/WindEnergy";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";
import logoDark from "@/public/images/logo-black.png";

const page = () => {
  return (
    <>
      <Navbar cls="index-3" logo={logoDark} />
      <Banner />
      <BrandSlider />
      <WindEnergy />
      <Empower />
      <Services />
      <Counter />
      <Testimonial />
      <Expert />
      <Footer />
    </>
  );
};

export default page;
