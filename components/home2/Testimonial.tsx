"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "@/public/images/quote.png";
import testimonialBg2 from "@/public/images/testimonial-bg-2.webp";

type TestimonialItem = {
  testimonialId: number;
  customerName: string;
  designation: string;
  message: string;
  rating: number;
  photoUrl: string;
  isActive: boolean;
};

const Testimonial = () => {
  const [testimonialList, setTestimonialList] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonials`)
      .then((res) => res.json())
      .then((data) => {
        setTestimonialList(data?.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Loader
  if (loading) {
    return (
      <section className="testimonial-2 py-5 text-center">
        <p>Loading testimonials...</p>
      </section>
    );
  }

  // Empty data
  if (!testimonialList.length) {
    return (
      <section className="testimonial-2 py-5 text-center">
        <p>No testimonials found.</p>
      </section>
    );
  }

  // ⭐ Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;

    for (let i = 0; i < full; i++) {
      stars.push(<i key={`full-${i}`} className="ti ti-star-filled text-yellow"></i>);
    }

    if (half) {
      stars.push(<i key="half" className="ti ti-star-half-filled text-yellow"></i>);
    }

    return stars;
  };

  return (
    <section className="testimonial-2 overflow-hidden">
      <div className="container-fluid px-lg-0 overflow-x-hidden">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-lg-7 left-side">
            <div className="row">
              <div className="col-12 col-lg-10 col-xl-9 offset-lg-2 offset-xl-3">
                <div className="testimonial-title">
                  <h2 className="fade_up_anim">Happy Client Testimonials</h2>
                  <p className="fade_up_anim" data-delay=".3">
                    We value our customers’ feedback to continuously improve our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Swiper */}
            <Swiper
              navigation={{
                nextEl: ".client-next",
                prevEl: ".client-prev",
              }}
              loop
              autoplay
              modules={[Navigation, Autoplay]}
              breakpoints={{
                580: { slidesPerView: 1.5, spaceBetween: 24 },
                800: { slidesPerView: 2, spaceBetween: 24 },
                992: { slidesPerView: 1.4, spaceBetween: 24 },
                1200: { slidesPerView: 1.4, spaceBetween: 24 },
                1400: { slidesPerView: 1.8, spaceBetween: 24 },
                1600: { slidesPerView: 2.2, spaceBetween: 24 },
              }}
              dir="rtl"
              className="swiper clientSwiper2"
            >
              {testimonialList.map((t) => (
                <SwiperSlide key={t.testimonialId} dir="ltr">
                  <div className="testimonial-card-2">
                    <div className="d-flex gap-2">{renderStars(t.rating)}</div>

                    <p className="text-white mt-3 pb-2 mb-2 mb-xl-3">
                      {t.message}
                    </p>

                    <div className="d-flex gap-3 align-items-center">
                      <Image
                        width={60}
                        height={60}
                        src={t.photoUrl}
                        alt={t.customerName}
                        className="rounded-circle"
                      />
                      <div>
                        <h5 className="text-white mb-1">{t.customerName}</h5>
                        <span>{t.designation}</span>
                      </div>
                    </div>

                    <Image className="quote" src={quote} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Buttons */}
            <div className="btns-client-2 mt-4 pt-lg-3">
              <button className="client-next">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="client-prev">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-5 px-0 d-none d-lg-block right-side">
            <div className="reveal reveal--left">
              <Image src={testimonialBg2} className="img-fluid testimonial-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
