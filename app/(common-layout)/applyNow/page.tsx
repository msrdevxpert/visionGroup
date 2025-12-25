"use client"; // ⚠️ Important! Marks page as client-side only

import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import ApplyNowForm from "@/components/applyNow/ApplyNow";

const ApplyNowPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Apply Now" bgImage="CertificateDetailsBanner.jpg" />
      <ApplyNowForm />
      <BrandSlider />
    </>
  );
};

export default ApplyNowPage;
