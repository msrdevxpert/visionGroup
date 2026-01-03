import Details from "@/components/project/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`,
      { cache: "no-store" }
    );
    const data = await res.json();

    // ✅ Guard against null or invalid data
    if (!data?.data || !Array.isArray(data.data)) return [];

    return data.data.map((item: any) => ({ id: item.id.toString() }));
  } catch (err) {
    return [];
  }
}


export default function ProjectDetailsPage(props: any) {
  const { params } = props as { params: { id: string } };

  const url = "/images/ProjectForAgri.mp4";

  return (
    <>
      <Navbar />
      <Banner title="Project Details" bgImage="VisonGroupProjectIdBanner.jpg" />

      <Details  type="main" url={url} />

      <BrandSlider />
    </>
  );
}
