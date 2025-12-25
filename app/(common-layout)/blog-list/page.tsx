import List from "@/components/blog/List";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/shared/Navbar";
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
