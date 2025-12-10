import Details from "@/components/blog/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import blogPosts from "@/public/data/blogs";

export async function generateStaticParams() {
  return blogPosts.map(({ id }) => ({
    id: id.toString(),
  }));
}

const BlogDetailsPage = () => {
  return (
    <>
      <Banner title="Blog Details" bgImage="blog-details-hero-bg.webp" />
      <Details />
      <BrandSlider />
    </>
  );
};

export default BlogDetailsPage;
