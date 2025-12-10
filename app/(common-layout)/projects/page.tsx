import Testimonial from "@/components/home1/Testimonial";
import Specialist from "@/components/home2/Specialist";
import Projects from "@/components/project/Projects";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
      <Banner title="Projects" bgImage="project-hero-bg.webp" />
      <Projects />
      <Testimonial />
      <Specialist />
    </>
  );
};

export default page;
