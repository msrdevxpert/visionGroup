import AgricultureSchemeDetails from "@/components/agriculture/AgricultureSchemeDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home4/NavBar";

export async function generateStaticParams() {
  const res = await fetch(
    "https://visiongreen-production.up.railway.app/api/v1/agriculture/schemes"
  );

  const data = await res.json();

  return data.data.map((item: any) => ({
    id: item.id.toString(),
  }));
}

export default function AgricultureSchemeDetailsPage(props: any) {
  const { params } = props as { params: { id: string } };

  return (
    <>
      <Navbar />
      <Banner
        title="Agriculture Scheme Details"
        bgImage="SchemeDetailsBanner.jpg"
      />

      <AgricultureSchemeDetails id={params.id} />

      <BrandSlider />
    </>
  );
}
