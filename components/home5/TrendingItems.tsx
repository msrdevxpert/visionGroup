"use client";
import product1 from "@/public/images/product-1.webp";
import product2 from "@/public/images/product-2.webp";
import product3 from "@/public/images/product-3.webp";
import product4 from "@/public/images/product-4.webp";
import product5 from "@/public/images/product-5.webp";
import product6 from "@/public/images/product-6.webp";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../cards/ProductCard";
const products = [
  {
    id: 1,
    title: "Mono 130 Watt Solar panel",
    image: product1,
    spPrice: "$25.56",
    mainPrice: "$25.56",
    rating: 4.5,
    discount: "50% off",
  },
  {
    id: 2,
    title: "Solar inverter For Panels",
    image: product2,
    spPrice: "$25.56",
    mainPrice: "$25.56",
    rating: 4.5,
    discount: "50% off",
  },
  {
    id: 3,
    title: "Grid-tie Power inverter",
    image: product3,
    spPrice: "$25.56",
    mainPrice: "$25.56",
    rating: 4.5,
    discount: "50% off",
  },
  {
    id: 4,
    title: "MC4 connector Solar energy",
    image: product4,
    spPrice: "$25.56",
    mainPrice: "$25.56",
    rating: 4.5,
    discount: "50% off",
  },
  {
    id: 5,
    title: "Solar Inverters Electric power",
    image: product5,
    spPrice: "$25.56",
    mainPrice: "$25.56",
    rating: 4.5,
    discount: "50% off",
  },
  {
    id: 6,
    title: "Solar Battery Controller",
    image: product6,
    spPrice: "$25.56",
    mainPrice: "$25.56",
    rating: 4.5,
    discount: "50% off",
  },
];
const TrendingItems = () => {
  return (
    <section className="services white">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Trending Items</h2>
            <p className="fade_up_anim" data-delay=".3">
              Welcome to our Online Shop, your one-stop destination for all your solar, Wind, Hydro energy needs.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="expert-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="expert-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".trending-next",
            prevEl: ".trending-prev",
          }}
          pagination={{
            el: ".trending-pagination",
            clickable: true,
          }}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          autoplay
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="swiper trendingSwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="trending-pagination"></div>
      </div>
    </section>
  );
};

export default TrendingItems;
