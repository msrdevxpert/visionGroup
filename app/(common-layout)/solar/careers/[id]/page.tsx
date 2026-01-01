import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home2/Navbar";

type CareerPageProps = {
  params: {
    id: string;
  };
};

// ✅ Generate static params for SSG
export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/careers`
  );
  const careers = await res.json();

  return careers.data.map((career: any) => ({
    id: career.id.toString(),
  }));
}

// ✅ Mark component as async to satisfy PageProps constraint
const CareerDetailsPage = async ({ params }: any) => {
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
