import Experts from "@/components/home1/Experts";
import Testimonial from "@/components/home3/Testimonial";
import Services from "@/components/serivces/Services";
import Banner from "@/components/shared/Banner";
import Navbar from "@/components/shared/Navbar";
const page = () => {
  return (
    <>
<Navbar />
      <Banner title="Services" bgImage="MainServicesBanner.jpg" />
      <Services type="main"/>
      <Experts />
      <Testimonial />
    </>
  );
};

export default page;
