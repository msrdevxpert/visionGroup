"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
type Props = {
  name: string;
  image: StaticImageData;
  rating: number;
  price: number;
  quantity: number;
  total: number;
  available: number;
};
const CartItem = ({ available, image, name, price, quantity, rating, total }: Props) => {
  const [productQuantity, setProcutQuantity] = useState(quantity);
  return (
    <tr>
      <td>
        <div className="d-flex gap-3 align-items-center">
          <div className="product-img">
            <Image src={image} className="img-fluid" alt="" />
          </div>
          <div>
            <p className="fw-medium mb-1 text-n500">{name}</p>
            <p className="text-n500">
              <i className="ti ti-star-filled text-yellow"></i> {rating}
            </p>
          </div>
        </div>
      </td>
      <td>
        <p>${price}</p>
      </td>
      <td>
        <div>
          <div className="quantity">
            <button onClick={() => setProcutQuantity((p) => (p > 1 ? p - 1 : p))} className="quantity-minus white">
              -
            </button>
            <input type="text" className="quantity-input" value={productQuantity} readOnly />
            <button onClick={() => setProcutQuantity(productQuantity + 1)} className="quantity-plus white">
              +
            </button>
          </div>
          <p className="available">Available: {available}</p>
        </div>
      </td>
      <td>
        <p>${total}</p>
      </td>
      <td>
        <button className="delete-item fs-5">
          <i className="ti ti-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
