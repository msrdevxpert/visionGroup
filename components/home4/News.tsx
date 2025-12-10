"use client";
import blogPosts from "@/public/data/blogs";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogGridCard from "../cards/BlogGridCard";

const News = () => {
  return (
    <section className="services white">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Water Energy News and Articles</h2>
            <p className="fade_up_anim" data-delay=".3">
              Welcome to our blog, where we share the latest updates, trends, and insights on water energy and renewable energy solutions.
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
          loop
          autoplay
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".expert-next",
            prevEl: ".expert-prev",
          }}
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
          className="swiper expertSwiper"
        >
          {blogPosts.slice(0, 6).map((post) => (
            <SwiperSlide key={post.id}>
              <BlogGridCard {...post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
