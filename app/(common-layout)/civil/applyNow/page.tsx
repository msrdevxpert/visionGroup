"use client"; // ensure this is at the very top
import ApplyNowForm from "@/components/applyNow/ApplyNow";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home6/Navbar";

const ApplyNowPage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Apply Now"
        bgImage="CertificateDetailsBanner.jpg"
      />
      <ApplyNowForm />
      <BrandSlider />
      
    </>
  );
};

export default ApplyNowPage;
