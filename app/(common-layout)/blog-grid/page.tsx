import Grid from "@/components/blog/Grid";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <Banner title="Blog Grid" bgImage="MainBlogGridBanner.jpg" />
      <Grid type="main"/>
      <BrandSlider />
    </>
  );
};

export default page;
