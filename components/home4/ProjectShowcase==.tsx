"use client";
import showcase1 from "@/public/images/showcase-1.webp";
import showcase2 from "@/public/images/showcase-2.webp";
import showcase3 from "@/public/images/showcase-3.webp";
import showcase4 from "@/public/images/AgricultureAbout1.png";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    id: 1,
    image: showcase1,
    title: "BlueWave Community Power",
    description: "A small-scale project that provides reliable renewable energy to a rural community, reducing dependence on traditional power sources.",
  },
  {
    id: 2,
    image: showcase2,
    title: "Springfield Commercial Solar Project",
    description: "A small-scale project that provides reliable renewable energy to a rural community, reducing dependence on traditional power sources.",
  },
  {
    id: 3,
    image: showcase3,
    title: "Willow Creek Solar Farm Installation",
    description: "A small-scale project that provides reliable renewable energy to a rural community, reducing dependence on traditional power sources.",
  },
  {
    id: 4,
    image: showcase4,
    title: "Hilltop Community Solar Initiative",
    description: "A small-scale project that provides reliable renewable energy to a rural community, reducing dependence on traditional power sources.",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="success-story two z-3">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Showcasing Our Projects</h2>
            <p className="fade_up_anim" data-delay=".3">
              We take pride in our ability to deliver exceptional water energy projects that meet the highest standards of quality, efficiency, and sustainability.
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
          className="swiper success-story-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="story-slide-box two">
                <Image src={project.image} className="img-fluid" alt={project.title} />
                <div className="success-info">
                  <h3 className="mb-3 mb-xl-4">{project.title}</h3>
                  <p className="mb-4 d-none d-sm-block pb-xl-3">{project.description}</p>
                  <Link href={`/projects/${project.id}`} className="bg-primary d-inline-block text-n500 p-2 fs-5">
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

export default ProjectShowcase;
