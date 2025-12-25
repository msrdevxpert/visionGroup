"use client"; // ⚠️ Important! Marks page as client-side only

import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import ApplyNowForm from "@/components/applyNow/ApplyNow";
import { Suspense } from "react";

const ApplyNowPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Apply Now" bgImage="CertificateDetailsBanner.jpg" />
    <Suspense fallback={<p>Loading form...</p>}>
  <ApplyNowForm />
</Suspense>
      <BrandSlider />
    </>
  );
};

export default ApplyNowPage;
