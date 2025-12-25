// app/careers/[id]/page.tsx
import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

export async function generateStaticParams() {
  // Fetch all careers from your API
  const res = await fetch("https://visiongreen-production.up.railway.app/api/v1/careers");
  const careers = await res.json();

  // Return params for each career
  return careers.data.map((career: any) => ({
    id: career.id.toString(),
  }));
}

const CareerDetailsPage = ({ params }: { params: { id: string } }) => {
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
