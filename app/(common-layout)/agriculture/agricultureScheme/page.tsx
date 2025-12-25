import Navbar from "@/components/home4/NavBar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import AgricultureSchemeList from "@/components/agriculture/AgricultureSchemeList";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner title="Agriculture Schemes" bgImage="SchemeBanner.jpg" />
      <AgricultureSchemeList />
      <BrandSlider />
    </>
  );
};

export default page;
