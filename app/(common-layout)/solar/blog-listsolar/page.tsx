import List from "@/components/blog/List";
import Navbar from "@/components/home2/Navbar";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";

const page = () => {
  return (
    <>
    <Navbar />
      <Banner title="Blog List" bgImage="blog-list-hero-bg.webp" />
      <List />
      <BrandSlider />
    </>
  );
};

export default page;
