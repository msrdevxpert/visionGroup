import Grid from "@/components/blog/Grid";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
      <Banner title="Blog Grid" bgImage="blog-hero-bg.webp" />
      <Grid />
      <BrandSlider />
    </>
  );
};

export default page;
