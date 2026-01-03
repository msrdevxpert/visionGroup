import Navbar from "@/components/home4/NavBar";
import Details from "@/components/project/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import projects from "@/public/data/projects";
// import vdo from "../../../../../public/images/ProjectForAgri.mp4";
export async function generateStaticParams() {
  return projects.map(({ id }) => ({
    id: id.toString(),
    url: "../../../../../public/images/ProjectForAgri.mp4"
  }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>; // 🔥 params async
}) {
  const { id } = await params; // ✅ MUST await
const url = "/images/ProjectForAgri.mp4";
  return (
    <>
      <Navbar />
      <Banner title="Project Details" bgImage="AgriProjectIdBanner.jpg" />

      {/* ✅ pass id */}
      <Details  type="agri" url={url}/>

      <BrandSlider />
    </>
  );
}
