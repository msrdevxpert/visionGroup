import Details from "@/components/project/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

export async function generateStaticParams() {
  const res = await fetch(
    "https://visiongreen-production.up.railway.app/api/v1/projects"
  );

  const data = await res.json();

  return data.data.map((item: any) => ({
    id: item.id.toString(),
  }));
}

export default function ProjectDetailsPage(props: any) {
  const { params } = props as { params: { id: string } };

  const url = "/images/ProjectForAgri.mp4";

  return (
    <>
      <Navbar />
      <Banner title="Project Details" bgImage="VisonGroupProjectIdBanner.jpg" />

      <Details id={params.id} type="main" url={url} />

      <BrandSlider />
    </>
  );
}
