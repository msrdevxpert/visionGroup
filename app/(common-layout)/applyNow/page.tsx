import ApplyNowForm from "@/components/applyNow/ApplyNow";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const ApplyNowPage = ({ searchParams }: PageProps) => {
  const id = searchParams.id as string | undefined; // cast to string if needed
  if (!id) return null;

  return (
    <>
      <Navbar />
      <Banner
        title="Apply Now"
        bgImage="CertificateDetailsBanner.jpg"
      />
      <ApplyNowForm />
      <BrandSlider />
    </>
  );
};

export default ApplyNowPage;
