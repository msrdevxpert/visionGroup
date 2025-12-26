import Details from "@/components/certificate/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home6/Navbar";

// ⭐ Generate static routes
export async function generateStaticParams() {
  const res = await fetch(
    "https://visiongreen-production.up.railway.app/api/v1/certificates"
  );

  const data = await res.json();

  return data.data.map((item: any) => ({
    id: item.id.toString(),
  }));
}

// ⭐ Dynamic page receives params
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

      {/* pass the id */}
      <Details certificateId={params.id} />

      <BrandSlider />
    </>
  );
}
