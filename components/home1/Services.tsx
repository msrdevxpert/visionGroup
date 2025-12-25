"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// API Response Type
type ServiceItem = {
  id: string;
  name: string;
  type: string;
  title: string;
  description: string;
  mediaUrl: string;
};

const Services = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        // You can dynamically change type + name
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/all-services`
        );

        const json = await res.json();

        if (json?.data?.length) {
          setServices(json.data);
        } else {
          setServices([]);
        }
      } catch (err) {
        console.error("Service API error:", err);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <section className="services" id="services">
      <div className="left-text d-none d-xl-block">
        <h2 className="vertical-white">services</h2>
      </div>

      <div className="container">

        {/* SECTION TITLE */}
        <div className="row align-items-end g-3 gx-xl-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Solar Expertise You Can Trust</h2>
            <p className="fade_up_anim" data-delay=".3">
              Discover a comprehensive range of solar energy services designed to meet your needs.
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

        {/* LOADING */}
        {loading && <p className="text-center text-white">Loading services...</p>}

        {/* EMPTY */}
        {!loading && services.length === 0 && (
          <p className="text-center text-white">No services available</p>
        )}

        {/* SWIPER */}
        {!loading && services.length > 0 && (
          <Swiper
            navigation={{
              nextEl: ".service-next",
              prevEl: ".service-prev",
            }}
            loop={true}
            autoplay={true}
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
                <div className="service-card">
                  <Image
                    src={service.mediaUrl}
                    alt={service.title}
                    width={300}
                    height={200}
                  />

                  <h4>{service.title}</h4>
                  <p>{service.description}</p>

                  <span className="hr-line"></span>

                  <div className="d-flex align-items-center gap-3">
                    <div className="readmore">
                      <Link
                        href={`/services/${service.id}`}
                        className="fw-semibold"
                      >
                        Read More
                      </Link>
                      <span className="hr-black"></span>
                    </div>

                    <Link
                      href={`/services/${service.id}`}
                      className="arrow-sm secondary"
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
