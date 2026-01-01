import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home6/Navbar";

type CareerPageProps = {
  params: {
    id: string;
  };
};

// ✅ Generate static params for SSG
export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/careers`,
      {
        // important for Netlify / static build
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Career API failed:", res.status);
      return [];
    }

    const careers = await res.json();

    if (!careers?.data || !Array.isArray(careers.data)) {
      console.error("Invalid careers response format");
      return [];
    }

    return careers.data.map((career: any) => ({
      id: career.id?.toString(),
    }));
  } catch (err) {
    console.error("generateStaticParams error:", err);
    return [];
  }
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