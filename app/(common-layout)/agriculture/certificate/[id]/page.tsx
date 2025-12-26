"use client";

import { useParams } from "next/navigation";
import Details from "@/components/certificate/Details";
import Navbar from "@/components/home4/NavBar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const AgricultureCertificatePage = () => {
  const { id } = useParams();
  if (!id) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <Banner title="Certificate Details" bgImage="CertificateDetailsBanner.jpg" />
      <Details certificateId={id} />
      <BrandSlider />
    </>
  );
};

export default AgricultureCertificatePage;
