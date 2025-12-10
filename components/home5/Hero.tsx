"use client";
import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <section className="hero-5">
      <div className="container-big position-relative">
        <Swiper
          pagination={{
            el: ".hero5-pagination",
            clickable: true,
          }}
          loop
          effect="fade"
          speed={1500}
          autoplay={{
            delay: 2000,
          }}
          modules={[Pagination, Autoplay, EffectFade]}
          className="swiper hero5-slider"
        >
          <SwiperSlide style={{ backgroundImage: "url(/images/hero5-1.webp)" }}>
            <div className="hero5-banner-content">
              <div className="container">
                <p className="deal-heading fade_up_anim">Exclusive Deal</p>
                <div className="d-flex gap-3 align-items-center fade_up_anim" data-delay="0.2">
                  <h1 className="discount mb-0">35</h1>
                  <div className="d-flex flex-column text-center">
                    <h2 className="percent mb-0">%</h2>
                    <h2 className="off mb-0">off</h2>
                  </div>
                </div>
                <h3 className="subheading fade_up_anim" data-delay=".4">
                  Hydro Solutions
                </h3>
                <Link href="/products" className="primary-btn">
                  Explore Our Shop <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: "url(/images/hero5-2.webp)" }}>
            <div className="hero5-banner-content">
              <div className="container">
                <p className="deal-heading fade_up_anim">Exclusive Deal</p>
                <div className="d-flex gap-3 align-items-center fade_up_anim" data-delay="0.2">
                  <h1 className="discount mb-0">25</h1>
                  <div className="d-flex flex-column text-center">
                    <h2 className="percent mb-0">%</h2>
                    <h2 className="off mb-0">off</h2>
                  </div>
                </div>
                <h3 className="subheading fade_up_anim" data-delay=".4">
                  Solar Installation
                </h3>
                <Link href="/products" className="primary-btn">
                  Explore Our Shop <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: "url(/images/hero5-3.webp)" }}>
            <div className="hero5-banner-content">
              <div className="container">
                <p className="deal-heading fade_up_anim">Exclusive Deal</p>
                <div className="d-flex gap-3 align-items-center fade_up_anim" data-delay="0.2">
                  <h1 className="discount mb-0">45</h1>
                  <div className="d-flex flex-column text-center">
                    <h2 className="percent mb-0">%</h2>
                    <h2 className="off mb-0">off</h2>
                  </div>
                </div>
                <h3 className="subheading fade_up_anim" data-delay=".4">
                  Wind Installation
                </h3>
                <Link href="/products" className="primary-btn">
                  Explore Our Shop <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="hero5-pagination"></div>
      </div>
    </section>
  );
};

export default Hero;
