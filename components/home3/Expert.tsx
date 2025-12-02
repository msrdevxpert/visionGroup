"use client";
import expert4 from "@/public/images/expert-4.webp";
import expert5 from "@/public/images/expert-5.webp";
import expert6 from "@/public/images/expert-6.webp";
import expert7 from "@/public/images/expert-7.webp";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpertCard3 from "../cards/ExpertCard3";

const experts = [
  {
    id: 1,
    name: "Darrell Steward",
    position: "Solar Specialist",
    image: expert4,
  },
  {
    id: 2,
    name: "Courtney Henry",
    position: "Solar Specialist",
    image: expert5,
  },
  {
    id: 3,
    name: "Eleanor Pena",
    position: "Solar Specialist",
    image: expert6,
  },
  {
    id: 4,
    name: "Robert Fox",
    position: "Solar Specialist",
    image: expert7,
  },
  {
    id: 5,
    name: "Darlene Robertson",
    position: "Solar Specialist",
    image: expert4,
  },
  {
    id: 6,
    name: "Leslie Alexander",
    position: "Solar Specialist",
    image: expert5,
  },
  {
    id: 7,
    name: "Darrell Steward",
    position: "Solar Specialist",
    image: expert6,
  },
  {
    id: 8,
    name: "Darrell Steward",
    position: "Solar Specialist",
    image: expert7,
  },
];

const Expert = () => {
  return (
    <section className="experts-3 overflow-x-hidden" id="experts">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Our Renewable Energy Experts</h2>
            <p className="fade_up_anim" data-delay=".3">
              Our team is made up of highly skilled professionals, each dedicated to delivering exceptional renewable energy solutions.
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
          navigation={{
            nextEl: ".expert-next",
            prevEl: ".expert-prev",
          }}
          loop
          autoplay
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="swiper expertSwiper3"
        >
          {experts.map((expert) => (
            <SwiperSlide key={expert.id}>
              <ExpertCard3 {...expert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Expert;
