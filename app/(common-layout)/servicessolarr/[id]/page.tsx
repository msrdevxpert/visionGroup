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

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Services" bgImage="service-details-hero-bg.webp" />
      <Details />
      <BrandSlider />
    </>
  );
};

export default page;
