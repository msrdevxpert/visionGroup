import Grid from "@/components/blog/Grid";
import Navbar from "@/components/home2/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Blog Grid" bgImage="blog-hero-bg.webp" />
      <Grid />
      <BrandSlider />
    </>
  );
};

export default page;
