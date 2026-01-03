import Details from "@/components/certificate/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home4/NavBar";

// ⭐ Generate static paths for export
export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/certificates`,
      { cache: "no-store" }
    );

    const data = await res.json();

    if (!data?.data || !Array.isArray(data.data)) {
      return [];
    }

    return data.data.map((item: any) => ({
      id: item.id.toString(),
    }));
  } catch (err) {
    return [];
  }
}

// ⭐ Page receives params (NO "use client")
export default function CertificationDetailsPage(props: any) {
  const { params } = props as { params: { id: string } };

  return (
    <>
      <Navbar />
      <Banner
        title="Certification Details"
        bgImage="CertificateDetailsBanner.jpg"
      />

      <Details  />

      <BrandSlider />
    </>
  );
}
