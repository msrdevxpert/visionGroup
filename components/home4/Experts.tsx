"use client";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpertCard from "../cards/ExpertCard1";

type TeamMember = {
  memberId: number;
  fullName: string;
  designation: string;
  department: string;
  bio: string;
  photoUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  displayOrder: number;
  isActive: boolean;
};

const Experts = () => {
  const [experts, setExperts] = useState<TeamMember[]>([]);

  useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/team`)
    .then((res) => res.json())
    .then((res) => {
      if (res?.status === "success") {
        const agricultureExperts = res.data
          .filter(
            (m: TeamMember) =>
              m.isActive &&
              m.department?.toLowerCase().includes("agri")
          )
          .sort(
            (a: TeamMember, b: TeamMember) =>
              a.displayOrder - b.displayOrder
          );

        setExperts(agricultureExperts);
      }
    })
    .catch(() => {});
}, []);


  return (
    <section className="services experts" id="experts">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">expert team</h2>
      </div>

      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Meet Our Agriculture Experts</h2>
            <p className="fade_up_anim" data-delay=".3">
              Our team brings together technology specialists, agribusiness
              professionals, and energy experts dedicated to empowering
              sustainable agriculture.
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
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="swiper expertSwiper"
        >
          {experts.map((expert) => (
            <SwiperSlide key={expert.memberId}>
              <ExpertCard
                name={expert.fullName}
                title={expert.designation}
                number={String(expert.displayOrder).padStart(2, "0")}
                image={expert.photoUrl}
                facebookLink={expert.facebookUrl}
                twitterLink={expert.twitterUrl}
                linkedinLink={expert.linkedinUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Experts;
