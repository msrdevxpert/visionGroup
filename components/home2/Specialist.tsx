"use client";

import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExpertCard2 from "../cards/ExpertCard2";

const Specialist = ({ cls }: { cls?: string }) => {
  const [experts, setExperts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/team`
        );
        const json = await res.json();
const team = json.data || [];
        // Filter only SOLAR department
        // const solarExperts = json.data?.filter(
        //   (item: any) => item.department?.toUpperCase() === "SOLAR"
        // );

        setExperts(team);
      } catch (err) {
        console.error("Error fetching team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, []);

  return (
    <section className={`services experts ${cls}`} id="experts">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Meet the Solar Specialists</h2>
            <p className="fade_up_anim" data-delay=".3">
              Our team is made up of dedicated professionals who share a passion
              for clean energy and a commitment to excellence.
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

        {/* Loading state */}
        {loading && <p>Loading specialists...</p>}

        {/* No data found */}
        {!loading && experts.length === 0 && (
          <p>No specialists found for SOLAR department.</p>
        )}

        {/* Slider */}
        {!loading && experts.length > 0 && (
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
              <SwiperSlide key={expert.memberId} style={{maxWidth:"350px"}}>
                <ExpertCard2
                  id={expert.memberId}
                  name={expert.fullName}
                  position={expert.designation}
                  image={expert.photoUrl} // photoUrl is URL from API
                  socialLinks={[
                    {
                      platform: "facebook",
                      link: expert.facebookUrl || "#",
                      iconClass: "ti ti-brand-facebook",
                    },
                    {
                      platform: "twitter",
                      link: expert.twitterUrl || "#",
                      iconClass: "ti ti-brand-twitter",
                    },
                    {
                      platform: "linkedin",
                      link: expert.linkedinUrl || "#",
                      iconClass: "ti ti-brand-linkedin",
                    },
                  ]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Specialist;
