import ApplyNowForm from "@/components/applyNow/ApplyNow";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";

// No id, just accept searchParams optionally
const ApplyNowPage = async () => {
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
