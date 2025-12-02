"use client";
import battery from "@/public/images/battery.png";
import hydropower from "@/public/images/hydropower.png";
import waterTurbine from "@/public/images/water-turbine.png";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: hydropower,
      title: "Hydropower Design",
      description: "Our team provides custom hydropower system designs that maximize energy.",
    },
    {
      id: 2,
      image: waterTurbine,
      title: "Water Turbine Installation",
      description: "Professional installation of state-of-the-art water turbines, ensuring seamless.",
    },
    {
      id: 3,
      image: battery,
      title: "Energy Storage Solutions",
      description: "Integration of advanced energy storage systems to capture excess power.",
    },
    {
      id: 4,
      image: hydropower,
      title: "Hydropower Design",
      description: "Our team provides custom hydropower system designs that maximize energy.",
    },
    {
      id: 5,
      image: waterTurbine,
      title: "Water Turbine Installation",
      description: "Professional installation of state-of-the-art water turbines, ensuring seamless.",
    },
    {
      id: 6,
      image: battery,
      title: "Energy Storage Solutions",
      description: "Integration of advanced energy storage systems to capture excess power.",
    },
  ];
  return (
    <section className="services white pb-0">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">services</h2>
      </div>
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Our Water Energy Service</h2>
            <p className="fade_up_anim" data-delay=".3">
              We specialize in delivering a wide range of water-based energy solutions designed to meet the demands of a sustainable future.
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
              <div className="service-card two">
                <Image src={service.image} alt="" />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <span className="hr-line"></span>
                <div className="d-flex align-items-center gap-3">
                  <Link href={`/services/${service.id}`} className="arrow-sm">
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
