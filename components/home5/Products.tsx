import { products } from "@/public/data/products";
import Link from "next/link";
import ProductCard from "../cards/ProductCard";

const Products = () => {
  return (
    <section className="pt-120 pb-120 products">
      <div className="section-title">
        <h2 className="mb-3 fade_up_anim">Our Recent Product</h2>
        <p className="fade_up_anim" data-delay=".3">
          Welcome to our Online Shop, your one-stop destination for all your solar, Wind, Hydro energy needs.
        </p>
      </div>
      <div className="container-big">
        <div className="row g-3 g-xxl-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4 col-xxl-3">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <div className="mt-4 pt-lg-3 d-flex justify-content-center">
          <Link href="/products" className="outline-btn">
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
