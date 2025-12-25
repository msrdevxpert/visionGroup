import Testimonial from "@/components/home1/Testimonial";
import Specialist from "@/components/home2/Specialist";
import Navbar from "@/components/home6/Navbar";
import Projects from "@/components/project/Projects";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Projects" bgImage="CivilProjectBanner.jpg" />
      <Projects type="civil"/>
      <Testimonial bgImage="/images/CivilProjectTestimon.png"/>
      <Specialist />
    </>
  );
};

export default page;
