import Navbar from "@/components/home6/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Certification from "@/components/certificate/Certificate";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner title="Certifications" bgImage="CertificateBanner.jpg" />
      <Certification />
      <BrandSlider />
      
    </>
  );
};

export default page;
