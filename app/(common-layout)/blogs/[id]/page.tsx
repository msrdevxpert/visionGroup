import Details from "@/components/blog/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import blogPosts from "@/public/data/blogs";
import Navbar from "@/components/shared/Navbar";
export async function generateStaticParams() {
  return blogPosts.map(({ id }) => ({
    id: id.toString(),
  }));
}

const BlogDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Blog Details" bgImage="MainBlogBanner.jpg" />
      <Details />
      <BrandSlider />
    </>
  );
};

export default BlogDetailsPage;
