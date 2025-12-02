import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type ProductType = {
  id: number;
  title: string;
  discount: string;
  image: StaticImageData | string;
  spPrice: string;
  mainPrice: string;
  rating: number;
};
const ProductCard = ({ id, title, discount, image, mainPrice, rating, spPrice }: ProductType) => {
  return (
    <div className="product-card">
      <div className="img">
        <span className="off">{discount}</span>
        <div className="action-btns">
          <button>
            <i className="ti ti-heart"></i>
          </button>
          <button>
            <i className="ti ti-eye"></i>
          </button>
          <button>
            <i className="ti ti-shopping-cart"></i>
          </button>
        </div>
        <Image src={image} alt={title} />
      </div>
      <Link href={`/products/${id}`} className="desc">
        <h4 className="mb-1 mb-xxl-2">{title}</h4>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="sp-price">{spPrice}</span>
            <span className="main-price">{mainPrice}</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <i className="ti ti-star-filled"></i>
            <span className="rating">{rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
