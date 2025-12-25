import Navbar from "@/components/home4/NavBar";
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
