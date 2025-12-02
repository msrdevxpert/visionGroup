import Specialist from "@/components/home2/Specialist";
import Navbar from "@/components/home6/Navbar";
import Testimonial from "@/components/home6/Testimonial";
import Services from "@/components/serivces/Services";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Services" bgImage="service-banner-bg.webp" />
      <Services />
      <Specialist cls="n0" />
      <Testimonial />
    </>
  );
};

export default page;
