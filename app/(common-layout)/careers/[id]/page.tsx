import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

const CertificationDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Career Details"
        bgImage="CertificateDetailsBanner.jpg"
      />
      <CareerDetails />
      <BrandSlider />
    </>
  );
};

export default CertificationDetailsPage;
