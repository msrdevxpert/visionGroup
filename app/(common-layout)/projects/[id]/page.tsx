import Details from "@/components/project/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>; // 🔥 params is Promise
}) {
  const { id } = await params; // ✅ MUST await
const url = "/images/ProjectForAgri.mp4";
  return (
    <>
      <Navbar />
      <Banner title="Project Details" bgImage="VisonGroupProjectIdBanner.jpg" />

      {/* ✅ pass awaited id */}
      <Details id={id} type="main" url={url} />

      <BrandSlider />
    </>
  );
}
