// app/certificate/[id]/page.tsx

import Details from "@/components/certificate/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

// ⭐ 1. Generate static paths
export async function generateStaticParams() {
  const res = await fetch(
    "https://visiongreen-production.up.railway.app/api/v1/certificates"
  );

  const data = await res.json();

  return data.data.map((item: any) => ({
    id: item.id.toString(),
  }));
}

// ⭐ 2. Page component (don't type params manually)
export default function CertificationDetailsPage({ params }) {
  return (
    <>
      <Navbar />
      <Banner
        title="Certification Details"
        bgImage="CertificateDetailsBanner.jpg"
      />
      <Details certificateId={params.id} />
      <BrandSlider />
    </>
  );
}
