import Specialist from "@/components/home2/Specialist";
import Testimonial from "@/components/home3/Testimonial";
import Services from "@/components/serivces/Services";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
      <Banner title="Services" bgImage="service-banner-bg.webp" />
      <Services />
      <Specialist cls="n0" />
      <Testimonial />
    </>
  );
};

export default page;
