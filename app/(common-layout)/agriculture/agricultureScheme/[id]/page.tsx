import AgricultureSchemeDetails from "@/components/agriculture/AgricultureSchemeDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home4/NavBar";

const CertificationDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Agriculture Scheme Details"
        bgImage="SchemeDetailsBanner.jpg"
      />
      <AgricultureSchemeDetails />
      <BrandSlider />
    </>
  );
};

export default CertificationDetailsPage;
