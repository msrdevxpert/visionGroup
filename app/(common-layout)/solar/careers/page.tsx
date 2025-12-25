import Navbar from "@/components/home2/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Careers from "@/components/careers/Careers";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner title="Careers" bgImage="CertificateBanner.jpg" />
      <Careers />
      <BrandSlider />
    </>
  );
};

export default page;
