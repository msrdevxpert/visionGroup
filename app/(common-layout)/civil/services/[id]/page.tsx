import Navbar from "@/components/home6/Navbar";
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
  params: Promise<{ id: string }>; // 🔥 MUST
}) {
  const { id } = await params; // ✅ await params

  return (
    <>
      <Navbar />
      <Banner title="Services" bgImage="CivilServicesBanner.jpg" />

      {/* ✅ id + type passed properly */}
      <Details id={id} type="civil" />

      <BrandSlider />
    </>
  );
}
