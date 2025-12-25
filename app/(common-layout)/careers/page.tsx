import Navbar from "@/components/shared/Navbar";
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
