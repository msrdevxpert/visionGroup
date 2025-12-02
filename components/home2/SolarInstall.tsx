"use client";
import story1 from "@/public/images/story-1.webp";
import story2 from "@/public/images/story-2.webp";
import story3 from "@/public/images/story-3.webp";
import story4 from "@/public/images/story-4.webp";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SolarInstall = () => {
  const stories = [
    {
      id: 1,
      image: story1,
      title: "Greenwood Residential Solar Installation",
      description: "A customized rooftop solar panel system providing clean energy, reducing carbon footprint, and achieving 40% annual savings on electricity bills.",
    },
    {
      id: 2,
      image: story2,
      title: "Springfield Commercial Solar Project",
      description: "A large-scale solar solution for a commercial facility, cutting energy expenses by 50% and enhancing green branding for the business.",
    },
    {
      id: 3,
      image: story3,
      title: "Willow Creek Solar Farm Installation",
      description: "A sustainable energy project powering 200 homes, significantly reducing reliance on fossil fuels and promoting renewable energy adoption.",
    },
    {
      id: 4,
      image: story4,
      title: "Hilltop Community Solar Initiative",
      description: "A collaborative solar project delivering affordable and sustainable energy to an entire community, fostering environmental responsibility.",
    },
  ];

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
            768: {
              slidesPerView: 1.4,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 1.6,
              spaceBetween: 24,
            },
            1350: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1500: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
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
