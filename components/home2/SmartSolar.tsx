"use client";

import arrowDown from "@/public/images/arrow-down.png";
import solutionBg from "@/public/images/SolarWhyBg.jpg";
import questionMark from "@/public/images/QuestionMarkForService.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Service = {
  id: string;
  serviceType: string;
  name: string;
  description: string;
};

const SmartSolar = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/services?type=SOLAR`
    )
      .then((res) => res.json())
      .then((result) => {
        setServices(result?.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="legal-solution">
      <div className="container-fluid px-xl-0">
        <div className="row">
          {/* LEFT IMAGE */}
          <div className="col-md-5 px-xxl-0 position-relative">
            <Image src={solutionBg} className="smart-solution-img" alt="" />
            <div className="d-none d-lg-flex pe-0 d-flex justify-content-end">
              <a href="#experts" className="scroll-card">
                <h3 className="vertical-sm">Scroll</h3>
                <div className="arrow-down">
                  <Image src={arrowDown} alt="" />
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7 px-0">
            <div className="solution-content">
              <h2 className="pb-1 fade_up_anim">
                Smart Solar Solutions for All
              </h2>
              <p
                className="pb-lg-3 mb-3 mb-xl-4 fade_up_anim"
                data-delay=".3"
              >
                Discover a comprehensive range of solar energy services designed
                to meet your unique needs. From initial consultations to
                installation
              </p>

              {loading ? (
                <p className="text-center py-4">Loading services...</p>
              ) : (
                <Swiper
                  loop
                  autoplay
                  navigation={{
                    prevEl: ".solution-prev",
                    nextEl: ".solution-next",
                  }}
                  modules={[Navigation, Autoplay]}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 16 },
                    480: { slidesPerView: 1.4, spaceBetween: 16 },
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    992: { slidesPerView: 1.4, spaceBetween: 24 },
                    1200: { slidesPerView: 2, spaceBetween: 24 },
                    1600: { slidesPerView: 2.3, spaceBetween: 24 },
                  }}
                  className="swiper solution-swiper"
                >
                  {services.map((service) => (
                    <SwiperSlide key={service.id}>
                      <div className="service-card">
                        {/* 🔹 keeping image static as before */}
                        <Image
                        className="img-fluid"
                          src={questionMark}
                          alt={service.name}
                        />
                        <h4>{service.name}</h4>
                        <p className="mb-3 mb-xl-4">
                          {service.description}
                        </p>
                        <span className="hr-line"></span>
                        <div className="d-flex align-items-center gap-3">
                          <div className="readmore">
                            <Link
                              href={`/solar/servicessolar/${service.id}`}
                              className="fw-semibold"
                            >
                              Read More{" "}
                              <i className="ti ti-arrow-narrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <div className="btns-client mt-3 mt-lg-4 pt-lg-4">
                <button className="solution-prev">
                  <i className="ti ti-arrow-narrow-left"></i>
                </button>
                <button className="solution-next">
                  <i className="ti ti-arrow-narrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolar;
