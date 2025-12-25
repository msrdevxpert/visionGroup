import ContactForm from "@/components/contact/ContactForm";
import MoreHelp from "@/components/contact/MoreHelp";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <Banner title="Contact" bgImage="ContactBanner.jpg" />
      <ContactForm />
      <MoreHelp />
      <BrandSlider />
    </>
  );
};

export default page;
