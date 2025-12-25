"use client";

import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogGridCard from "../cards/BlogGridCard";

type Blog = {
  blogId: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  isPublished: boolean;
  createdAt: string;
};

const News = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`)
      .then((res) => res.json())
      .then((res) => {
        const publishedBlogs = (res?.data || []).filter(
          (b: Blog) => b.isPublished
        );
        setBlogs(publishedBlogs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
    /* ================= DATE FORMAT ================= */
  const getDateParts = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString(),
      month: date.toLocaleString("en-US", { month: "short" }),
    };
  };

  if (loading) {
    return (
      <section className="services white">
        <div className="container text-center py-5">
          Loading agriculture news...
        </div>
      </section>
    );
  }

  return (
    <section className="services white">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">
              Agriculture News & Insights
            </h2>
            <p className="fade_up_anim" data-delay=".3">
              Stay updated with the latest news, innovations, and insights
              shaping modern agriculture and sustainable farming practices.
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
          loop={blogs.length > 3}
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
          {blogs.slice(0, 6).map((post) => (
            <SwiperSlide key={post.blogId}>
              <BlogGridCard
                id={post.blogId}
                  imgSrc={post.imageUrl}
                  title={post.title}
                  description={post.excerpt}
                  date={getDateParts(post.createdAt)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
