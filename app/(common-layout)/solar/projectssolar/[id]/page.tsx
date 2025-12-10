import Navbar from "@/components/home2/Navbar";
import Details from "@/components/project/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import projects from "@/public/data/projects";

export async function generateStaticParams() {
  return projects.map(({ id }) => ({
    id: id.toString(),
  }));
}

const ProjectDetailsPage = () => {
  return (
    <><Navbar />
      <Banner title="Project Details" bgImage="project-hero-bg.webp" />
      <Details />
      <BrandSlider />
    </>
  );
};

export default ProjectDetailsPage;
