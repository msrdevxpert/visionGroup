import Standard from "@/components/blog/Standard";
import Navbar from "@/components/home4/NavBar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const BlogStandard = () => {
  return (
    <>
    <Navbar />
      <Banner title="Blog Standard" bgImage="AgriBlogStandard.jpg" />
      <Standard type="agri"/>
      <BrandSlider />
    </>
  );
};

export default BlogStandard;
