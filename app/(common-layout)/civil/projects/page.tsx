import Testimonial from "@/components/home1/Testimonial";
import Specialist from "@/components/home2/Specialist";
import Navbar from "@/components/home6/Navbar";
import Projects from "@/components/project/Projects";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Projects" bgImage="project-hero-bg.webp" />
      <Projects />
      <Testimonial />
      <Specialist />
    </>
  );
};

export default page;
