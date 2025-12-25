import Standard from "@/components/blog/Standard";
import Navbar from "@/components/home2/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const BlogStandard = () => {
  return (
    <>
    <Navbar />
      <Banner title="Blog Standard" bgImage="SolarBlogBanner.jpg" />
      <Standard />
      <BrandSlider />
    </>
  );
};

export default BlogStandard;
