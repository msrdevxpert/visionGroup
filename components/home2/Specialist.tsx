"use client";
import expert1 from "@/public/images/expert-1.webp";
import expert2 from "@/public/images/expert-2.webp";
import expert3 from "@/public/images/expert-3.webp";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpertCard2 from "../cards/ExpertCard2";
const experts = [
  {
    id: 1,
    name: "Darrell Steward",
    position: "General Manager",
    image: expert1,
    socialLinks: [
      { platform: "facebook", link: "#", iconClass: "ti ti-brand-facebook" },
      { platform: "twitter", link: "#", iconClass: "ti ti-brand-twitter" },
      { platform: "instagram", link: "#", iconClass: "ti ti-brand-instagram" },
    ],
  },
  {
    id: 2,
    name: "Leslie Alexander",
    position: "Marketing Head",
    image: expert2,
    socialLinks: [
      { platform: "facebook", link: "#", iconClass: "ti ti-brand-facebook" },
      { platform: "twitter", link: "#", iconClass: "ti ti-brand-twitter" },
      { platform: "instagram", link: "#", iconClass: "ti ti-brand-instagram" },
    ],
  },
  {
    id: 3,
    name: "Cameron Williamson",
    position: "Product Designer",
    image: expert3,
    socialLinks: [
      { platform: "facebook", link: "#", iconClass: "ti ti-brand-facebook" },
      { platform: "twitter", link: "#", iconClass: "ti ti-brand-twitter" },
      { platform: "instagram", link: "#", iconClass: "ti ti-brand-instagram" },
    ],
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    position: "Software Engineer",
    image: expert1,
    socialLinks: [
      { platform: "facebook", link: "#", iconClass: "ti ti-brand-facebook" },
      { platform: "twitter", link: "#", iconClass: "ti ti-brand-twitter" },
      { platform: "instagram", link: "#", iconClass: "ti ti-brand-instagram" },
    ],
  },
  {
    id: 5,
    name: "Jane Cooper",
    position: "Human Resources",
    image: expert2,
    socialLinks: [
      { platform: "facebook", link: "#", iconClass: "ti ti-brand-facebook" },
      { platform: "twitter", link: "#", iconClass: "ti ti-brand-twitter" },
      { platform: "instagram", link: "#", iconClass: "ti ti-brand-instagram" },
    ],
  },
  {
    id: 6,
    name: "Eleanor Pena",
    position: "Finance Manager",
    image: expert3,
    socialLinks: [
      { platform: "facebook", link: "#", iconClass: "ti ti-brand-facebook" },
      { platform: "twitter", link: "#", iconClass: "ti ti-brand-twitter" },
      { platform: "instagram", link: "#", iconClass: "ti ti-brand-instagram" },
    ],
  },
];

const Specialist = ({ cls }: { cls?: string }) => {
  return (
    <section className={`services experts ${cls}`} id="experts">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Meet the Solar Specialists</h2>
            <p className="fade_up_anim" data-delay=".3">
              Our team is made up of dedicated professionals who share a passion for clean energy and a commitment to excellence.
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
          {experts.map((expert) => (
            <SwiperSlide key={expert.id}>
              <ExpertCard2 {...expert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Specialist;
