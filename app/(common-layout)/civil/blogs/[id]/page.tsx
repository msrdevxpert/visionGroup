import Details from "@/components/blog/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import Navbar from "@/components/home6/Navbar";
import blogPosts from "@/public/data/blogs";

export async function generateStaticParams() {
  return blogPosts.map(({ id }) => ({
    id: id.toString(),
  }));
}

const BlogDetailsPage = () => {
  return (
    <>
    <Navbar />
      <Banner title="Blog Details" bgImage="CivilBlogBanner.jpg" />
      <Details />
      <BrandSlider />
    </>
  );
};

export default BlogDetailsPage;
