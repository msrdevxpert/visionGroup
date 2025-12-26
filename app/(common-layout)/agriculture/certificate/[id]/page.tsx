import Details from "@/components/certificate/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home4/NavBar";

// ⭐ Generate static paths for export
export async function generateStaticParams() {
  const res = await fetch(
    "https://visiongreen-production.up.railway.app/api/v1/certificates"
  );

  const data = await res.json();

  return data.data.map((item: any) => ({
    id: item.id.toString(),
  }));
}

// ⭐ Page receives params (NO "use client")
export default function CertificationDetailsPage(
  props: any
) {
  const { params } = props as { params: { id: string } };

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

