import product5 from "@/public/images/product-5.webp";
import product6 from "@/public/images/product-6.webp";
import product7 from "@/public/images/product-7.webp";
import product8 from "@/public/images/product-8.webp";
import Image from "next/image";
import Link from "next/link";
const Cart = () => {
  return (
    <div className="dropdown cart-dropdown">
      <button className="cart-open xl-text" data-bs-toggle="dropdown">
        <i className="ti ti-shopping-bag"></i>
      </button>
      <div className="dropdown-menu dropdown-menu-end">
        <p className="cart-title">Cart(3)</p>
        <div className="cart-item-list">
          <div className="cart-item">
            <Image src={product5} width="60" alt="" />
            <div className="cart-item-content">
              <h6>Solar Inverter</h6>
              <p>1 x $250.00</p>
            </div>
            <button className="cart-item-remove">
              <i className="ti ti-x"></i>
            </button>
          </div>
          <div className="cart-item">
            <Image src={product6} width="60" alt="" />
            <div className="cart-item-content">
              <h6>Battery Controller</h6>
              <p>1 x $250.00</p>
            </div>
            <button className="cart-item-remove">
              <i className="ti ti-x"></i>
            </button>
          </div>
          <div className="cart-item">
            <Image src={product7} width="60" alt="" />
            <div className="cart-item-content">
              <h6>Solar Package</h6>
              <p>1 x $250.00</p>
            </div>
            <button className="cart-item-remove">
              <i className="ti ti-x"></i>
            </button>
          </div>
          <div className="cart-item">
            <Image src={product8} width="60" alt="" />
            <div className="cart-item-content">
              <h6>Solar Inverter</h6>
              <p>1 x $250.00</p>
            </div>
            <button className="cart-item-remove">
              <i className="ti ti-x"></i>
            </button>
          </div>
          <Link href="/payment" className="checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
