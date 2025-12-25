// app/(common-layout)/careers/[id]/page.tsx

import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

// Generate static paths for SSG
export async function generateStaticParams() {
  const res = await fetch(
    "https://visiongreen-production.up.railway.app/api/v1/careers"
  );
  const careers = await res.json();

  return careers.data.map((career: any) => ({
    id: career.id.toString(),
  }));
}

// Page component: async, params inferred by Next
const CareerDetailsPage = async ({ params }: { params: { id: string } }) => {
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
