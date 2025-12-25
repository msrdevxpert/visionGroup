import Details from "@/components/certificate/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home2/Navbar";

const CertificationDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Certification Details"
        bgImage="CertificateDetailsBanner.jpg"
      />
      <Details />
      <BrandSlider />
    </>
  );
};

export default CertificationDetailsPage;
