"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import home2 from "@/public/images/solar_1.png";


import home3 from "@/public/images/home-333.png";
import home4 from "@/public/images/agri_1.png";

import home6 from "@/public/images/civil_1.png";
// ============================
//  Dummy Data
// ============================
const companyProfileData = [
  {
    id: 1,
    image: home2,
    description: "Solar installation, maintenance, and optimization.",
    link: "/solar/",   // 🔥 Solar = Home 1
  },
  {
    id: 2,
    image: home6,
    title: "Civil Engineering",
    description: "Construction and structural engineering services.",
    link: "/civil/",   // 🔥 Civil = Home 2
  },
   {
    id: 3,
    image: home4,
    title: "Agriculture",
    description: "Smart farming & agri-consultancy services.",
    link: "/agriculture/",  // 🔥 Agriculture = Home 3
  },
  {
    id: 4,
    image: home3,
    title: "IT Services",
    description: "Software, cloud, automation & digital transformation.",
    link: "https://msrdevxpert.com/", // 🔥 IT = Home 4
  },
 
];


const CompanyProfile = () => {
  return (
    <section className="services" id="company-profile">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">Company</h2>
      </div>

      <div className="container">
        <div className="row align-items-end g-3 gx-xl-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Our Company Expertise</h2>
            <p className="fade_up_anim" data-delay=".3">
              We provide complete multi-sector services with excellence and
              commitment to innovation.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="profile-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="profile-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <Swiper
          navigation={{
            nextEl: ".profile-next",
            prevEl: ".profile-prev",
          }}
          loop={true}
          autoplay={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="swiper ProfileSwiper"
        >
          {companyProfileData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="service-card">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                />

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <span className="hr-line"></span>

                <div className="d-flex align-items-center gap-3">
                  <div className="readmore">
                    <Link href={item.link} className="fw-semibold">

                      Read More
                    </Link>
                    <span className="hr-black"></span>
                  </div>

                  <Link href={item.link} className="arrow-sm secondary">

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

export default CompanyProfile;
