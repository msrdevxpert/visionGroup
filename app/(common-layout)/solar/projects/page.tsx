import Testimonial from "@/components/home1/Testimonial";
import Navbar from "@/components/home2/Navbar";
import Specialist from "@/components/home2/Specialist";
import Projects from "@/components/project/Projects";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Projects" bgImage="SolarProjectBanner.jpg" />
      <Projects type="solar"/>
      <Testimonial />
      <Specialist />
    </>
  );
};

export default page;
