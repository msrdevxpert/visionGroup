"use client";
import expert1 from "@/public/images/expert-1.webp";
import expert2 from "@/public/images/expert-2.webp";
import expert3 from "@/public/images/expert-3.webp";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpertCard from "../cards/ExpertCard1";
const expertCards = [
  {
    name: "Darrell Steward",
    title: "General Manager",
    number: "01",
    image: expert1,
    facebookLink: "#",
    twitterLink: "#",
  },
  {
    name: "Courtney Henry",
    title: "Marketing Director",
    number: "02",
    image: expert2,
    facebookLink: "#",
    twitterLink: "#",
  },
  {
    name: "Eleanor Pena",
    title: "Senior Developer",
    number: "03",
    image: expert3,
    facebookLink: "#",
    twitterLink: "#",
  },
  {
    name: "Robert Fox",
    title: "UI/UX Designer",
    number: "04",
    image: expert1,
    facebookLink: "#",
    twitterLink: "#",
  },
  {
    name: "Darlene Robertson",
    title: "Project Manager",
    number: "05",
    image: expert2,
    facebookLink: "#",
    twitterLink: "#",
  },
  {
    name: "Leslie Alexander",
    title: "Content Strategist",
    number: "06",
    image: expert3,
    facebookLink: "#",
    twitterLink: "#",
  },
];

const Experts = () => {
  return (
    <section className="services experts" id="experts">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">expert team</h2>
      </div>

      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Meet Our Solar Experts</h2>
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
          {expertCards.map((expert) => (
            <SwiperSlide key={expert.name}>
              <ExpertCard {...expert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Experts;
