"use client";
import client1 from "@/public/images/client-1.png";
import client2 from "@/public/images/client-2.png";
import client3 from "@/public/images/client-3.png";
import quote from "@/public/images/quote.png";
import testimonialBg2 from "@/public/images/testimonial-bg-2.webp";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonial = () => {
  const [testimonialList] = useState([
    {
      id: 1,
      image: client1,
      name: "Kende Attila",
      designation: "Software Tester",
      review: "I had the privilege of working with Solarox from Solarox on a complex business litigation case.",
    },
    {
      id: 2,
      image: client2,
      name: "Kende Attila",
      designation: "Software Tester",
      review: "I had the privilege of working with Solarox from Solarox on a complex business litigation case.",
    },
    {
      id: 3,
      image: client3,
      name: "Kende Attila",
      designation: "Software Tester",
      review: "I had the privilege of working with Solarox from Solarox on a complex business litigation case.",
    },
    {
      id: 4,
      image: client2,
      name: "Kende Attila",
      designation: "Software Tester",
      review: "I had the privilege of working with Solarox from Solarox on a complex business litigation case.",
    },
    {
      id: 5,
      image: client3,
      name: "Kende Attila",
      designation: "Software Tester",
      review: "I had the privilege of working with Solarox from Solarox on a complex business litigation case.",
    },
  ]);
  return (
    <section className="testimonial-2 overflow-hidden">
      <div className="container-fluid px-lg-0 overflow-x-hidden">
        <div className="row">
          <div className="col-lg-7 left-side">
            <div className="row">
              <div className="col-12 col-lg-10 col-xl-9 offset-lg-2 offset-xl-3">
                <div className="testimonial-title">
                  <h2 className="fade_up_anim">Happy Client Testimonials</h2>
                  <p className="fade_up_anim" data-delay=".3">
                    we believe in continuous improvement and ensuring the best possible experience for our clients. Your is essential to us
                  </p>
                </div>
              </div>
            </div>
            <Swiper
              navigation={{
                nextEl: ".client-next",
                prevEl: ".client-prev",
              }}
              loop
              autoplay
              modules={[Navigation, Autoplay]}
              breakpoints={{
                580: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
                800: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                992: {
                  slidesPerView: 1.4,
                  spaceBetween: 24,
                },
                1200: {
                  slidesPerView: 1.4,
                  spaceBetween: 24,
                },
                1400: {
                  slidesPerView: 1.8,
                  spaceBetween: 24,
                },
                1600: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
              }}
              dir="rtl"
              className="swiper clientSwiper2"
            >
              {testimonialList.map((testimonial) => (
                <SwiperSlide key={testimonial.id} dir="ltr">
                  <div className="testimonial-card-2">
                    <div className="text-yellow d-flex gap-2">
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-half-filled"></i>
                    </div>
                    <p className="text-white mt-3 pb-2 mb-2 mb-xl-3">{testimonial.review}</p>
                    <div className="d-flex gap-3 align-items-center">
                      <Image width="60" height="60" src={testimonial.image} alt="" />
                      <div>
                        <h5 className="text-white mb-1">{testimonial.name}</h5>
                        <span>{testimonial.designation}</span>
                      </div>
                    </div>
                    <Image className="quote" src={quote} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="btns-client-2 mt-4 pt-lg-3">
              <button className="client-next">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="client-prev">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
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
