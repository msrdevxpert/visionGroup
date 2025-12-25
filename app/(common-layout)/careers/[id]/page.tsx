// app/careers/[id]/page.tsx
// "use client"; // client-side dynamic fetch
import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

type CareerPageProps = {
  params: {
    id: string;
  };
};

// ✅ Generate static params for SSG
export async function generateStaticParams() {
  const res = await fetch(
    "https://visiongreen-production.up.railway.app/api/v1/careers"
  );
  const careers = await res.json();

  return careers.data.map((career: any) => ({
    id: career.id.toString(),
  }));
}

// ✅ Mark component as async to satisfy PageProps constraint
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
