import Navbar from "@/components/home2/Navbar";
import Details from "@/components/serivces/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import services from "@/public/data/services";

export async function generateStaticParams() {
  return services.map(({ id }) => ({
    id: id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>; // 🔥 IMPORTANT
}) {
  const { id } = await params; // ✅ MUST

  return (
    <>
      <Navbar />
      <Banner title="Services" bgImage="ServiceIdBanner.jpg" />

      {/* ✅ Pass awaited id */}
      <Details id={id} type="solar" />

      <BrandSlider />
    </>
  );
}
