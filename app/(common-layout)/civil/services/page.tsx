import Specialist from "@/components/home2/Specialist";
import Navbar from "@/components/home6/Navbar";
import Testimonial from "@/components/home6/Testimonial";
import Services from "@/components/serivces/Services";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Services" bgImage="CivilServicesBanner.jpg" />
      <Services />
      <Specialist cls="n0" />
      <Testimonial type="civil" url="/images/CivilTestiVdo.mp4" bgImage="/images/CivilTesti.png" />
    </>
  );
};

export default page;
