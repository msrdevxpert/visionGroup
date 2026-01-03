import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home2/Navbar";

export const dynamicParams = true; // allow new ids after build

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/careers`,
      {
        // ensure build uses fresh data
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.log("❌ Careers fetch failed:", res.status);
      return [];
    }

    const careers = await res.json();

    if (!careers?.data) {
      console.log("❌ Careers response invalid");
      return [];
    }

    return careers.data.map((career: any) => ({
      id: career.id.toString(),
    }));
  } catch (err) {
    console.log("❌ Careers fetch error:", err);
    return [];
  }
}

export default async function CareerDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <Navbar />
      <Banner title="Career Details" bgImage="CertificateDetailsBanner.jpg" />
      <CareerDetails  />
      <BrandSlider />
    </>
  );
}
