import Navbar from "@/components/home6/Navbar";
import Details from "@/components/project/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import projects from "@/public/data/projects";

export async function generateStaticParams() {
  return projects.map(({ id }) => ({
    id: id.toString(),
  }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>; // 🔥 params async
}) {
  const { id } = await params; // ✅ MUST await
const url = "/images/CivilProject.mp4";
  return (
    <>
      <Navbar />
      <Banner title="Project Details" bgImage="CivilProjectBanner.jpg" />

      {/* ✅ pass id */}
      <Details  type="civil" url={url}/>

      <BrandSlider />
    </>
  );
}
