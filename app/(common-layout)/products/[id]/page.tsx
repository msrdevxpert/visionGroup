import Details from "@/components/product/Details";
import Banner from "@/components/shared/Banner";
import BrandSlider from "@/components/shared/BrandSlider";
import { products } from "@/public/data/products";
import Navbar from "@/components/shared/Navbar";
export async function generateStaticParams() {
  return products.map(({ id }) => ({
    id: id.toString(),
  }));
}
const ProductDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Banner title="Product Details" bgImage="product-details-hero-bg.webp" />
      <Details />
      <BrandSlider />
    </>
  );
};

export default ProductDetailsPage;
