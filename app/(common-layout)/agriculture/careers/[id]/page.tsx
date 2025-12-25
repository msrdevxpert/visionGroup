import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home4/NavBar";

const CertificationDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Careers Details"
        bgImage="CertificateDetailsBanner.jpg"
      />
      <CareerDetails />
      <BrandSlider />
    </>
  );
};

export default CertificationDetailsPage;
