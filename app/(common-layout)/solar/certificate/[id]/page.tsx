import Details from "@/components/certificate/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home2/Navbar";

// ⭐ Generate static paths for export
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://visiongreen-production.up.railway.app/api/v1/certificates",
      { cache: "no-store" }
    );

    const data = await res.json();

    if (!data?.data || !Array.isArray(data.data)) {
      return [];   // 👈 return empty list instead of crashing
    }

    return data.data.map((item: any) => ({
      id: item.id.toString(),
    }));
  } catch (err) {
    return []; // 👈 fail silently so build doesn't break
  }
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

      {/* Pass id to Details */}
      <Details certificateId={params.id} />

      <BrandSlider />
    </>
  );
}
