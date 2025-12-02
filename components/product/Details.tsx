"use client";
import comments from "@/public/data/comments";
import product1 from "@/public/images/product-1.webp";
import Image from "next/image";
import { useState } from "react";
import CommentCard from "../cards/CommentCard";
import Rating from "../shared/Rating";
import RSelect from "../shared/Select";
const options = [
  {
    value: "Default",
    label: "Default",
  },
  {
    value: "Name (A-Z)",
    label: "Name (A-Z)",
  },
  {
    value: "Name (Z-A)",
    label: "Name (Z-A)",
  },
  {
    value: "Newest",
    label: "Newest",
  },
];
const Details = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="pt-80 pb-80 bg1 z-3 position-relative">
      <div className="container">
        <div className="row g-4 position-relative">
          <div className="col-lg-8 z-3">
            <div className="product-details-left mb-3 mb-xl-4">
              <div className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap bb-dashed-32">
                <div className="product-details-img">
                  <Image src={product1} className="img-fluid" alt="" />
                </div>
                <div>
                  <h3 className="mb-3">Mono 130 Watt Solar panel</h3>
                  <div className="d-flex gap-2 text-yellow mb-3 fs-5">
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-half-filled"></i>
                  </div>
                  <p>The Mono 130 Watt Solar Panel is a high-efficiency, durable, and compact photovoltaic solution, ideal for residential, commercial, and off-grid applications.</p>
                </div>
              </div>
              <h4 className="mb-3">Key Features:</h4>
              <p className="mb-2">High Efficiency:</p>
              <ul className="mb-2">
                <li>Monocrystalline cells deliver up to 20% efficiency for optimal energy output.</li>
              </ul>
              <p className="mb-2">Durable Build:</p>
              <ul className="mb-2">
                <li>Encased in tempered glass with an aluminum frame for weather resistance.</li>
                <li>Designed to withstand wind loads up to 2400 Pa and snow loads up to 5400 Pa.</li>
              </ul>
              <p className="mb-2">Compact Design:</p>
              <ul className="mb-2">
                <li>Ideal for limited spaces like rooftops, RVs, and boats.</li>
                <p className="mb-2">Enhanced Low-Light Performance:</p>
                <li>Generates energy effectively during cloudy days or at dawn/dusk.</li>
                <p className="mb-2">Environmentally Friendly:</p>
                <li>Reduces carbon footprint by harnessing clean, renewable solar energy.</li>
              </ul>
              <h4 className="my-4">Specifications:</h4>
              <ul className="d-flex flex-column gap-2 bb-dashed-32">
                <li>Rated Power: 130 Watts</li>
                <li>Cell Type: Monocrystalline</li>
                <li>Efficiency: ~20%</li>
                <li>Open Circuit Voltage (Voc): 22.5V</li>
                <li>Short Circuit Current (Isc): 6.2A</li>
                <li>Dimensions: 1480 x 670 x 35 mm</li>
                <li>Weight: 8.5 kg</li>
                <li>Warranty: 10-year product warranty and 25-year performance guarantee</li>
              </ul>
              <h4 className="my-4">Applications:</h4>
              <ul className="d-flex flex-column gap-2 bb-dashed-32">
                <li>Residential rooftop installations</li>
                <li>Off-grid solar systems</li>
                <li>Camping and RVs</li>
                <li>Remote communication equipment</li>
                <li>Marine solar setups</li>
              </ul>
              <h4 className="my-4">Benefits :</h4>
              <ul className="d-flex flex-column gap-2 bb-dashed-32">
                <li>Affordable and reliable energy solution</li>
                <li>Easy to install with pre-drilled mounting holes</li>
                <li>Long-lasting performance with minimal maintenance</li>
              </ul>
              <div className="row g-4 d-flex flex-wrap align-items-center">
                <div className="col-xxl-6 d-flex flex-wrap justify-content-center justify-content-xxl-start flex-xl-nowrap gap-2 gap-lg-3">
                  <h6 className="d-flex align-items-center gap-2 mb-0">
                    Popular Tag <i className="fs-4 text-primary ti ti-arrow-move-right"></i>
                  </h6>
                  <div className="d-flex gap-2">
                    <a className="tag" href="#">
                      Solar
                    </a>
                    <a className="tag" href="#">
                      Hydropower
                    </a>
                  </div>
                </div>
                <div className="col-xxl-6 d-flex flex-wrap align-items-center gap-2 justify-content-center justify-content-xxl-end">
                  <h6 className="d-flex align-items-center gap-2 mb-0">
                    Follow <i className="fs-4 text-primary ti ti-arrow-move-right"></i>
                  </h6>
                  <ul className="social-links gap-3 p-0">
                    <li>
                      <a href="#">
                        <i className="ti ti-brand-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti ti-brand-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti ti-brand-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti ti-brand-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti ti-brand-twitch"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-details-left mb-3 mb-xl-4">
              <h4 className="bb-dashed-32">Average Reviews</h4>
              <div className="bb-dashed-32 rating-info">
                <div className="rating-box">
                  <div className="d-flex align-items-end">
                    <h2 className="mb-0">4.9</h2>
                    <p className="fs-4 mb-0">/5</p>
                  </div>
                  <div className="d-flex gap-1 justify-content-center mb-2">
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-filled"></i>
                    <i className="ti ti-star-half-filled"></i>
                  </div>
                  <p>26 Rating</p>
                </div>
                <div className="d-flex flex-column gap-2 w-100">
                  <div className="d-flex w-100 gap-2 gap-lg-3 align-items-center">
                    <p>
                      <i className="ti ti-star-filled text-yellow"></i> 5
                    </p>
                    <div className="rating-progress">
                      <div className="inner" style={{ width: "90%" }}></div>
                    </div>
                    <p>90%</p>
                  </div>
                  <div className="d-flex w-100 gap-2 gap-lg-3 align-items-center">
                    <p>
                      <i className="ti ti-star-filled text-yellow"></i> 4
                    </p>
                    <div className="rating-progress">
                      <div className="inner" style={{ width: "75%" }}></div>
                    </div>
                    <p>75%</p>
                  </div>
                  <div className="d-flex w-100 gap-2 gap-lg-3 align-items-center">
                    <p>
                      <i className="ti ti-star-filled text-yellow"></i> 3
                    </p>
                    <div className="rating-progress">
                      <div className="inner" style={{ width: "67%" }}></div>
                    </div>
                    <p>67%</p>
                  </div>
                  <div className="d-flex w-100 gap-2 gap-lg-3 align-items-center">
                    <p>
                      <i className="ti ti-star-filled text-yellow"></i> 2
                    </p>
                    <div className="rating-progress">
                      <div className="inner" style={{ width: "44%" }}></div>
                    </div>
                    <p>44%</p>
                  </div>
                  <div className="d-flex w-100 gap-2 gap-lg-3 align-items-center">
                    <p>
                      <i className="ti ti-star-filled text-yellow"></i> 1
                    </p>
                    <div className="rating-progress">
                      <div className="inner" style={{ width: "21%" }}></div>
                    </div>
                    <p>21%</p>
                  </div>
                </div>
              </div>
              <div className="mb-3 mb-xl-4 pb-xl-2 d-flex justify-content-between gap-4 flex-wrap align-items-center">
                <h5 className="mb-0">All Reviews</h5>
                <div className="d-flex align-items-center gap-2 flex-shrink-0">
                  <p className="mb-0 flex-shrink-0">Sort by:</p>
                  <RSelect options={options} />
                </div>
              </div>
              <div className="d-flex flex-column gap-3 gap-lg-4">
                {comments.map((comment) => (
                  <CommentCard key={comment.id} {...comment} />
                ))}
                <div className="d-flex mt-xl-4">
                  <a className="outline-btn" href="#">
                    View All Reviews <i className="ti ti-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="product-details-left">
              <h4 className="bb-dashed-32">Write a Review</h4>
              <form className="review-form">
                <label className="text-lg mb-2 pb-1 d-block fw-medium">Name</label>
                <input type="text" placeholder="Enter Name..." />
                <label className="text-lg mb-2 pb-1 d-block fw-medium">Email</label>
                <input type="email" placeholder="Enter Email..." />
                <label className="text-lg mb-2 pb-1 d-block fw-medium">Rating</label>
                <Rating />
                <label className="text-lg mb-2 pb-1 d-block fw-medium">Review</label>
                <textarea placeholder="Enter Comment..." rows={5}></textarea>
                <button className="outline-btn mt-3">
                  Submit Review <i className="ti ti-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4 details-right z-3">
            <div className="white-box">
              <p className="text-lg fw-medium mb-3">Price</p>
              <div className="mb-4 pb-xl-2 d-flex gap-2 align-items-center">
                <i className="ti ti-tag fs-3"></i>
                <p>From</p>
                <h3 className="mb-0">$455</h3>
                <i className="ti ti-info-circle align-self-start"></i>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                <p>Purchase Quantity</p>
                <div className="quantity">
                  <button onClick={() => setQuantity((p) => (p > 1 ? p - 1 : p))} className="quantity-minus">
                    -
                  </button>
                  <input type="text" className="quantity-input" value={quantity} readOnly />
                  <button onClick={() => setQuantity(quantity + 1)} className="quantity-plus">
                    +
                  </button>
                </div>
              </div>
              <div className="price-list mb-2">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-n500">Base Price</span>
                  <p className="fw-medium">$110</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-n500">State Tax</span>
                  <p className="fw-medium">$15</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4 pb-xl-3">
                <span className="text-n500">Total</span>
                <p className="fw-medium">$125</p>
              </div>
              <button className="buy-now mb-4">Buy Now</button>
              <div className="d-flex gap-3 justify-content-center">
                <button className="cart-btn">
                  <i className="ti ti-shopping-cart fs-4"></i>
                </button>
                <button className="cart-btn">
                  <i className="ti ti-share fs-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
