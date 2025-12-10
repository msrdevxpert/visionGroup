"use client";
import arrowDown from "@/public/images/arrow-down.png";
import solution1 from "@/public/images/solution-1.png";
import solution2 from "@/public/images/solution-2.png";
import solution3 from "@/public/images/solution-3.png";
import solutionBg from "@/public/images/solution-bg.webp";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    id: 1,
    image: solution1,
    title: "Water Energy",
    description: "Our experienced criminal defense attorneys are committed to protecting your rights",
  },
  {
    id: 2,
    image: solution2,
    title: "Solar Energy",
    description: "From divorce and child custody disputes to adoption and prenuptial agreements",
  },
  {
    id: 3,
    image: solution3,
    title: "Wind Energy",
    description: "Our business law services cover everything from contract drafting to legal dispute",
  },
  {
    id: 4,
    image: solution1,
    title: "Wind Consultation",
    description: "Our experienced criminal defense attorneys are committed to protecting your rights",
  },
  {
    id: 5,
    image: solution2,
    title: "Water Turbine",
    description: "From divorce and child custody disputes to adoption and prenuptial agreements",
  },
  {
    id: 6,
    image: solution3,
    title: "Energy Storage",
    description: "Our business law services cover everything from contract drafting to legal dispute",
  },
];

const SmartSolar = () => {
  return (
    <section className="legal-solution">
      <div className="container-fluid px-xl-0">
        <div className="row">
          <div className="col-md-5 px-xxl-0 position-relative">
            <Image src={solutionBg} className="smart-solution-img" alt="" />
            <div className="d-none d-lg-flex pe-0 d-flex justify-content-end">
              <a href="#experts" className="scroll-card">
                <h3 className="vertical-sm">Scroll</h3>
                <div className="arrow-down">
                  <Image src={arrowDown} alt="" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-7 px-0">
            <div className="solution-content">
              <h2 className="pb-1 fade_up_anim">Smart Solar Solutions for All</h2>
              <p className="pb-lg-3 mb-3 mb-xl-4 fade_up_anim" data-delay=".3">
                Discover a comprehensive range of solar energy services designed to meet your unique needs. From initial consultations to installation
              </p>
              <Swiper
                loop
                autoplay
                navigation={{
                  prevEl: ".solution-prev",
                  nextEl: ".solution-next",
                }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  480: {
                    slidesPerView: 1.4,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 1.4,
                    spaceBetween: 24,
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1600: {
                    slidesPerView: 2.3,
                    spaceBetween: 24,
                  },
                }}
                className="swiper solution-swiper"
              >
                {data.map(({ id, image, title, description }) => (
                  <SwiperSlide key={id}>
                    <div className="service-card">
                      <Image src={image} alt="" />
                      <h4>{title}</h4>
                      <p className="mb-3 mb-xl-4">{description}</p>
                      <span className="hr-line"></span>
                      <div className="d-flex align-items-center gap-3">
                        <div className="readmore">
                          <Link href={`/servicesSolar/${id}`} className="fw-semibold">
                            Read More <i className="ti ti-arrow-narrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="btns-client mt-3 mt-lg-4 pt-lg-4">
                <button className="solution-prev">
                  <i className="ti ti-arrow-narrow-left"></i>
                </button>
                <button className="solution-next">
                  <i className="ti ti-arrow-narrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolar;
