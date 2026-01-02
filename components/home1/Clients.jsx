"use client";
import client1 from "@/public/images/GroupSuurya.png";
import client2 from "@/public/images/evolve.png";
import client3 from "@/public/images/Asun.png";
import client4 from "@/public/images/KingSolar.jpeg";
import client5 from "@/public/images/ModiGroup.png";
import client6 from "@/public/images/MK.jpeg";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const clientCards = [
  {
    image: client1,
    link: "/",
  },
  {
    image: client2,
    link: "/solar/",
  },
  {
    image: client3,
    link: "https://msrdevxpert.com/",
  },
  {
    image: client4,
    link: "/agriculture/",
  },
  // {
  //   image: client5,
  //   link: "#",
  // },
  {
    image: client6,
    link: "/civil/",
  },
];

const Clients = () => {
  return (
    <section className="services experts" id="clients">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">our clients</h2>
      </div>

      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Meet Our Clients</h2>
            <p className="fade_up_anim" data-delay=".3">
              We are trusted by leading companies who rely on us for modern, innovative, and reliable solutions.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="client-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="client-next">
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
            nextEl: ".client-next",
            prevEl: ".client-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="swiper clientSwiper"
        >
          {clientCards.map((client, index) => (
            <SwiperSlide key={index}>
              {/* <a href={client.link} target="_blank" rel="noopener noreferrer"> */}
                <img
  src={client.image.src}
  alt="Client Logo"
  className="client-logo"
/>

              {/* </a> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
