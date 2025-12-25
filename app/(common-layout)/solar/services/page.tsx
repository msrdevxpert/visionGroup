import Navbar from "@/components/home2/Navbar";
import Specialist from "@/components/home2/Specialist";
import Testimonial from "@/components/home3/Testimonial";
import Services from "@/components/serivces/Services";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Services" bgImage="SolarServiceBanner.jpg" />
      <Services type="solar"/>
      <Specialist cls="n0" />
      <Testimonial />
    </>
  );
};

export default page;
