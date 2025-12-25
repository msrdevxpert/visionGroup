"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpertCard from "../cards/ExpertCard1";
import { useEffect, useState } from "react";

interface TeamMember {
  memberId: number;
  fullName: string;
  designation: string;
  department: string;
  bio: string;
  photoUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  email: string;
  displayOrder: number;
  isActive: boolean;
}

const Experts = () => {
  const [experts, setExperts] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/team`);
      const json = await res.json();
      setExperts(json.data || []);
    } catch (err) {
      console.error("Failed to load team:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="services experts" id="experts">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">expert team</h2>
      </div>

      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Meet Our Experts</h2>
            <p className="fade_up_anim" data-delay=".3">
              Our skilled and experienced team works with passion and innovation to deliver excellence.
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

        {loading && <p className="text-white">Loading Experts...</p>}

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
          {experts.map((expert, index) => (
            <SwiperSlide key={expert.memberId}>
              <ExpertCard
                name={expert.fullName}
                title={expert.designation}
                number={String(index + 1).padStart(2, "0")}
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
