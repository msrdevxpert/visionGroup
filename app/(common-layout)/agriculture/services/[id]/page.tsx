import Navbar from "@/components/home4/NavBar";
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
  const { id } = await params; // ✅ MUST AWAIT

  return (
    <>
      <Navbar />
      <Banner title="Services" bgImage="AgricultureServiceBanner.jpg" />

      <Details id={id} type="agri" />

      <BrandSlider />
    </>
  );
}
