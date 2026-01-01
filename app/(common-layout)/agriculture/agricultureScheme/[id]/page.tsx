import AgricultureSchemeDetails from "@/components/agriculture/AgricultureSchemeDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home4/NavBar";

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/agriculture/schemes`
  );

  const data = await res.json();

  return data.data.map((item: any) => ({
    id: item.id.toString(),
  }));
}

const AgricultureSchemeDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Agriculture Scheme Details" bgImage="SchemeDetailsBanner.jpg" />
      <AgricultureSchemeDetails />
      <BrandSlider />
    </>
  );
};

export default AgricultureSchemeDetailsPage;
