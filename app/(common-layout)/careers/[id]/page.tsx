import CareerDetails from "@/components/careers/CareerDetails";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

export const dynamic = "force-dynamic";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Navbar />
      <Banner title="Career Details" bgImage="CertificateDetailsBanner.jpg" />
      <CareerDetails  />
      <BrandSlider />
    </>
  );
};

export default Page;
