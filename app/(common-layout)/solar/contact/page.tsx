import ContactForm from "@/components/contact/ContactForm";
import MoreHelp from "@/components/contact/MoreHelp";
import Navbar from "@/components/home2/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Contact" bgImage="SolarContactBanner.jpg" />
      <ContactForm />
      <MoreHelp />
      <BrandSlider />
    </>
  );
};

export default page;
