import ApplyNowForm from "@/components/applyNow/ApplyNow";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

interface PageProps {
  searchParams: {
    id?: string;
  };
}

const ApplyNowPage = ({ searchParams }: PageProps) => {
  if (!searchParams.id) return null;

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
