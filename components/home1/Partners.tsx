"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface PartnerItem {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

const Partners = () => {
  const [partners, setPartners] = useState<PartnerItem[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/partners`
        );
        const json = await res.json();
        setPartners(json?.data || []);
      } catch (err) {
        console.error("Partners fetch failed:", err);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className="services experts" style={{marginBottom:"0% !important", marginTop:"2% !important" }} id="partners">
      <div className="left-text d-none d-xl-block">
        <h4 className="vertical-white" style={{fontSize:"40px !important"}}>our partners</h4>
      </div>

      <div className="container" style={{marginBottom:"5%"}}>
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Meet Our Partners</h2>
            <p className="fade_up_anim" data-delay=".3">
              We collaborate with industry-leading partners to deliver reliable
              and future-ready solutions.
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
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1200: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className="swiper clientSwiper"
        >
          {partners.map((p) => (
            <SwiperSlide key={p.id}>
              <a
                href={p.websiteUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p.logoUrl}
                  alt={p.name}
                  className="client-logo"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
