// app/(common-layout)/agriculture/careers/[id]/page.tsx
import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home4/NavBar";

// Generate static params for SSG
export async function generateStaticParams() {
  const res = await fetch(
    "https://visiongreen-production.up.railway.app/api/v1/careers"
  );
  const careers = await res.json();

  return careers.data.map((career: any) => ({
    id: career.id.toString(),
  }));
}

// ✅ No explicit type annotation for props
const CareerDetailsPage = async ({ params }:any) => {
  return (
    <>
      <Navbar />
      <Banner title="Career Details" bgImage="CertificateDetailsBanner.jpg" />
      <CareerDetails careerId={params.id} />
      <BrandSlider />
    </>
  );
};

export default CareerDetailsPage;
