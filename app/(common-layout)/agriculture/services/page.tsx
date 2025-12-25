import Specialist from "@/components/home2/Specialist";
import Navbar from "@/components/home4/NavBar";
import Testimonial from "@/components/home6/Testimonial";
import Services from "@/components/serivces/Services";
import Banner from "@/components/shared/Banner";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Services" bgImage="AgricultureServiceBanner.jpg" />
      <Services type="agri" />
      <Specialist cls="n0"  />
      <Testimonial type="agri" url="/images/AgriTestiMonVdo.mp4" bgImage="/images/AgriTestimo1.png" />
    </>
  );
};

export default page;
