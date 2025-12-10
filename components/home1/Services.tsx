"use client";
import service1 from "@/public/images/service-1.png";
import service2 from "@/public/images/service-2.png";
import service3 from "@/public/images/service-3.png";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const servicesData = [
  {
    id: 1,
    image: service1,
    title: "Solar Panel Installation",
    description: "Professional installation services to ensure your solar panels operate",
  },
  {
    id: 2,
    image: service2,
    title: "Maintenance & Repairs",
    description: "Comprehensive maintenance and fast repair services to keep your solar system",
  },
  {
    id: 3,
    image: service3,
    title: "Residential Solar Systems",
    description: "Scalable solar energy systems for businesses, reducing costs",
  },
  {
    id: 4,
    image: service2,
    title: "Maintenance & Repairs",
    description: "Comprehensive maintenance and fast repair services to keep your solar system",
  },
  {
    id: 5,
    image: service3,
    title: "Residential Solar Systems",
    description: "Scalable solar energy systems for businesses, reducing costs",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">services</h2>
      </div>

      <div className="container">
        <div className="row align-items-end g-3 gx-xl-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Solar Expertise You Can Trust</h2>
            <p className="fade_up_anim" data-delay=".3">
              Discover a comprehensive range of solar energy services designed to meet your unique needs. From initial consultations to installation
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="service-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="service-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".service-next",
            prevEl: ".service-prev",
          }}
          loop={true}
          autoplay={true}
          modules={[Navigation, Autoplay]}
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
          className="swiper ServiceSwiper"
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-card">
                <Image src={service.image} alt="" />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <span className="hr-line"></span>
                <div className="d-flex align-items-center gap-3">
                  <div className="readmore">
                    <Link href={`/services/${service.id}`} className="fw-semibold">
                      Read More
                    </Link>
                    <span className="hr-black"></span>
                  </div>
                  <Link href={`/services/${service.id}`} className="arrow-sm secondary">
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

export default Services;
