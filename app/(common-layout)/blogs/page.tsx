import Standard from "@/components/blog/Standard";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";
const BlogStandard = () => {
  return (
    <>
      <Navbar />
      <Banner title="Blog Standard" bgImage="MainBlogBanner.jpg" />
      <Standard type="main"/>
      <BrandSlider />
    </>
  );
};

export default BlogStandard;
