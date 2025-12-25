import Standard from "@/components/blog/Standard";
import Navbar from "@/components/home6/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const BlogStandard = () => {
  return (
    <>
    <Navbar />
      <Banner title="Blog Standard" bgImage="CivilBlogBanner.jpg" />
      <Standard />
      <BrandSlider />
    </>
  );
};

export default BlogStandard;
