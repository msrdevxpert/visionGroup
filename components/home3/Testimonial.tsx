"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "@/public/images/quote.png";
import testimonial3 from "@/public/images/imageTestomonials.png";

type TestimonialType = {
  testimonialId: number;
  customerName: string;
  designation: string;
  message: string;
  rating: number;
  photoUrl: string;
  isActive: boolean;
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonials`);
        const data = await res.json();
        // Filter only active testimonials
        const activeTestimonials = data.data.filter((t: TestimonialType) => t.isActive);
        setTestimonials(activeTestimonials);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonial-3 overflow-x-hidden">
      <div className="container-fluid px-xxl-0">
        <div className="row g-5 g-lg-0">
          <div className="col-lg-5 px-0 position-relative z-2 d-none d-lg-block">
            <div className="reveal reveal--right">
              <Image src={testimonial3} className="img-fluidd testimonial-img" alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-xxl-6 offset-xxl-1 left-side px-3">
            <h2 className="mb-3 fade_up_anim">Trusted by Our Clients</h2>
            <p className="pb-2 pb-lg-4 mb-3 fade_up_anim" data-delay=".3">
              We take pride in the relationships we've built with our clients and the success stories they've shared. Our mission is to deliver high-quality renewable.
            </p>

            {testimonials.length > 0 && (
              <Swiper
                navigation={{
                  nextEl: ".client-next",
                  prevEl: ".client-prev",
                }}
                loop
                autoplay
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  580: { slidesPerView: 1.3, spaceBetween: 24 },
                  768: { slidesPerView: 2, spaceBetween: 24 },
                  992: { slidesPerView: 1.4, spaceBetween: 24 },
                  1200: { slidesPerView: 1.5, spaceBetween: 24 },
                }}
                className="swiper clientSwiper3"
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t.testimonialId}>
                    <div className="testimonial-card bg2">
                      <div className="text-yellow fs-5 d-flex gap-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <i
                            key={i}
                            className={`ti ti-star${i < Math.floor(t.rating) ? "-filled" : i < t.rating ? "-half-filled" : ""}`}
                          ></i>
                        ))}
                      </div>
                      <p className="text-white mt-3 pb-2 mb-2 mb-lg-4">{t.message}</p>
                      <div className="d-flex gap-3 align-items-center">
                        <Image width={60} height={60} src={t.photoUrl || "/images/client-placeholder.png"} alt="" />
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
            )}

            <div className="btns-client-3 mt-4 pt-lg-3">
              <button className="client-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="client-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
