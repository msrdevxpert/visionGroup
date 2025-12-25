"use client"; // ensure this is at the very top
import ApplyNowForm from "@/components/applyNow/ApplyNow";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home2/Navbar";
import { Suspense } from "react";

const ApplyNowPage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Apply Now"
        bgImage="CertificateDetailsBanner.jpg"
      />
   <Suspense fallback={<p>Loading form...</p>}>
  <ApplyNowForm />
</Suspense>
      <BrandSlider />
    </>
  );
};

export default ApplyNowPage;
