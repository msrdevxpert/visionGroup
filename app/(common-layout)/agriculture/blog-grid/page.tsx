import Grid from "@/components/blog/Grid";
import Navbar from "@/components/home4/NavBar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Blog Grid" bgImage="AgriBlogGrid.jpg" />
      <Grid />
      <BrandSlider />
    </>
  );
};

export default page;
