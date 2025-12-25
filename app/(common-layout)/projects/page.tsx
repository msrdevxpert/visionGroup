import Testimonial from "@/components/home1/Testimonial";
import Specialist from "@/components/home2/Specialist";
import Projects from "@/components/project/Projects";
import Banner from "@/components/shared/Banner";
import Navbar from "@/components/shared/Navbar";
const page = () => {
  return (
    <>
<Navbar />
      <Banner title="Projects" bgImage="VisionGropProjectBanner.jpg" />
      <Projects type="main" />
      <Testimonial />
      <Specialist />
    </>
  );
};

export default page;
