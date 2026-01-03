import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

export const dynamicParams = true;

// 👉 Generate static paths (like services)
export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/careers`,
      { cache: "no-store" }
    );

    const careers = await res.json();

    // IMPORTANT — return only ids
    return careers.data.map((career: any) => ({
      id: career.id.toString(),
    }));
  } catch (err) {
    console.error("Error loading careers:", err);
    return [];
  }
}

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Navbar />
      <Banner title="Career Details" bgImage="CertificateDetailsBanner.jpg" />
      <CareerDetails careerId={params.id} />
      <BrandSlider />
    </>
  );
};

export default Page;
