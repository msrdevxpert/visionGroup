import Details from "@/components/serivces/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import services from "@/public/data/services";
import Navbar from "@/components/shared/Navbar";

// export async function generateStaticParams() {
//   return services.map(({ id }) => ({
//     id: id.toString(),
//   }));
// }

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>; // 🔥 IMPORTANT
}) {
  const { id } = await params; // ✅ MUST

  return (
    <>
      <Navbar />
      <Banner title="Services" bgImage="MainServicesBanner.jpg" />

      {/* ✅ Pass ID and TYPE */}
      <Details id={id} type="main" />

      <BrandSlider />
    </>
  );
}
