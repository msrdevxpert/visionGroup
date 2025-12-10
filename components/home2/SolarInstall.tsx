"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Story = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const SolarInstall = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://visiongreen-production.up.railway.app/api/v1/solar-energy/projects")
      .then((res) => res.json())
      .then((result) => {
        setStories(result?.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-5">Loading projects...</p>;
  }

  if (!stories.length) {
    return (
      <section className="success-story z-3" id="services">
        <div className="container py-5 text-center">
          <h3>No projects found</h3>
        </div>
      </section>
    );
  }

  return (
    <section className="success-story z-3" id="services">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Solar Excellence Installation</h2>
            <p className="fade_up_anim" data-delay=".3">
              Each project showcases our commitment to quality, efficiency, and a cleaner future. From rooftop installations to large-scale solar farms.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="success-story-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="success-story-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0">
        <Swiper
          navigation={{
            prevEl: ".success-story-prev",
            nextEl: ".success-story-next",
          }}
          loop
          autoplay
          centeredSlides
          modules={[Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 1.4, spaceBetween: 16 },
            1200: { slidesPerView: 1.6, spaceBetween: 24 },
            1350: { slidesPerView: 2, spaceBetween: 24 },
            1500: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
          className="swiper"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className="story-slide-box position-relative">
                <Image src={story.image} className="img-fluid" alt={story.title} />
                <div className="success-info">
                  <h3 className="mb-3 mb-xl-4">{story.title}</h3>
                  <p className="mb-4 d-none d-sm-block">{story.description}</p>
                  <Link href={`/projects/${story.id}`} className="black-btn p-2 fs-5">
                    <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SolarInstall;
