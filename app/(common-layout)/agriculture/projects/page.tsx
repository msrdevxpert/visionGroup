import Testimonial from "@/components/home4/Testimonial";
import Experts from "@/components/home4/Experts";
import Navbar from "@/components/home4/NavBar";
import Projects from "@/components/project/Projects";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Projects" bgImage="AgriProjectBanner.jpg" />
      <Projects type="agri" />
      <Testimonial />
      <Experts />
    </>
  );
};

export default page;
