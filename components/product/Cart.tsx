import product1 from "@/public/images/product-1.webp";
import product2 from "@/public/images/product-2.webp";
import product3 from "@/public/images/product-3.webp";
import product4 from "@/public/images/product-4.webp";
import Link from "next/link";
import CartItem from "./CartItem";
const cartItems = [
  {
    name: "130 Watt Solar Panel",
    image: product1,
    rating: 4.5,
    price: 11.7,
    quantity: 2,
    total: 66.7,
    available: 72,
  },
  {
    name: "1000 watt Solar Inverter",
    image: product2,
    rating: 4.5,
    price: 11.7,
    quantity: 2,
    total: 66.7,
    available: 72,
  },
  {
    name: "Solar MC4 connector",
    image: product3,
    rating: 4.5,
    price: 11.7,
    quantity: 3,
    total: 66.7,
    available: 72,
  },
  {
    name: "Electric Drill Machine",
    image: product4,
    rating: 4.5,
    price: 11.7,
    quantity: 1,
    total: 66.7,
    available: 72,
  },
];

const Cart = () => {
  return (
    <>
      <section className="pt-80 pb-80 bg1 z-3 position-relative">
        <div className="container">
          <div className="row g-4 position-relative">
            <div className="col-lg-8 z-3">
              <div className="product-details-left">
                <div className="d-flex gap-1 align-items-center bb-dashed-24">
                  <h4 className="mb-0">Cart</h4>
                  <p className="fs-5 fw-normal text-n100">(4 Item)</p>
                </div>
                <div className="overflow-x-auto bb-dashed-24">
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th className="text-n500">Product</th>
                        <th className="text-n500">Price</th>
                        <th className="text-n500">Quantity</th>
                        <th className="text-n500">Total Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <CartItem key={index} {...item} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link href="/products" className="d-flex align-items-center gap-2">
                  <i className="ti ti-arrow-left text-black"></i>
                  <h6 className="fw-semibold mb-0">Continue Shopping</h6>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 details-right z-3">
              <div className="white-box">
                <p className="text-lg fw-medium mb-3">Price</p>
                <div className="mb-4 pb-xl-2 d-flex gap-2 align-items-center">
                  <i className="ti ti-tag fs-3"></i>
                  <p>From</p>
                  <h3 className="mb-0">$39.99</h3>
                  <i className="ti ti-info-circle align-self-start"></i>
                </div>
                <div className="price-list mb-2">
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <span className="text-n500">Base Price</span>
                    <p className="fw-medium">$39.99</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-n500">State Tax</span>
                    <p className="fw-medium">$5</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-n500">Shipping</span>
                    <p className="fw-medium">Free</p>
                  </div>
                  <div className="coupon-input mb-3">
                    <input type="text" placeholder="DISCOUNT9" />
                    <button>
                      <i className="ti ti-arrow-right"></i>
                    </button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-n500">Discount</span>
                    <span className="fw-medium text-secondary3">$5.99</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-n500">Total</span>
                    <p className="fw-medium">$39.00</p>
                  </div>
                </div>
                <button className="buy-now mt-4">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
