// page.tsx
import Details from "@/components/certificate/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home6/Navbar";

// ✅ Must have generateStaticParams()
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://visiongreen-production.up.railway.app/api/v1/certificates",
      { cache: "no-store" }
    );

    const data = await res.json();

    if (!data?.data || !Array.isArray(data.data)) return [];

    return data.data.map((item: any) => ({
      id: item.id.toString(),
    }));
  } catch {
    return [];
  }
}

// ✅ Page receives params
export default function CertificationDetailsPage(props: any) {
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
