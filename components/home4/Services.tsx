"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/* ================= TYPES ================= */
type Service = {
  id: string;
  serviceType: string;
  name: string;
  description: string;
  createdAt: string;
};

/* ================= COMPONENT ================= */
const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH SERVICES ================= */
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/services?type=agri`
    )
      .then((res) => res.json())
      .then((res) => {
        setServices(res?.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="services white pb-0">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">services</h2>
      </div>

      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">
              Our Water Energy Service
            </h2>
            <p className="fade_up_anim" data-delay=".3">
              We specialize in delivering a wide range of water-based energy
              solutions designed to meet the demands of a sustainable future.
            </p>
          </div>

          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="service-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="service-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <p className="text-center py-5">Loading services...</p>
        ) : (
          <Swiper
            navigation={{
              nextEl: ".service-next",
              prevEl: ".service-prev",
            }}
            loop={services.length > 3}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1200: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="swiper ServiceSwiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="service-card two">
                  {/* 🔹 Static icon kept (API image নেই) */}
                  <Image
                    src="/images/QuestionMarkForService.jpg"
                    alt={service.name}
                    width={80}
                    height={80}
                  />

                  <h4>{service.name}</h4>
                  <p>{service.description}</p>

                  <span className="hr-line"></span>

                  <div className="d-flex align-items-center gap-3">
                    <Link
                      href={`/agriculture/services/${service.id}`}
                      className="arrow-sm"
                    >
                      <i className="ti ti-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Services;
