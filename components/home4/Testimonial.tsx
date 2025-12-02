"use client";
import client1 from "@/public/images/client-1.png";
import client2 from "@/public/images/client-2.png";
import quote from "@/public/images/quote.png";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const clients = [
    {
      id: 1,
      image: client1,
      name: "Kende Attila",
      title: "Software Tester",
      text: "I had the privilege of working with Solarox from Solarox on a complex business litigation case. Their professionalism, attention to detail, and strategic approach.",
    },
    {
      id: 2,
      image: client2,
      name: "Kende Attila",
      title: "Software Tester",
      text: "I had the privilege of working with Solarox from Solarox on a complex business litigation case. Their professionalism, attention to detail, and strategic approach.",
    },
    {
      id: 3,
      image: client1,
      name: "Kende Attila",
      title: "Software Tester",
      text: "I had the privilege of working with Solarox from Solarox on a complex business litigation case. Their professionalism, attention to detail, and strategic approach.",
    },
    {
      id: 4,
      image: client2,
      name: "Kende Attila",
      title: "Software Tester",
      text: "I had the privilege of working with Solarox from Solarox on a complex business litigation case. Their professionalism, attention to detail, and strategic approach.",
    },
  ];

  return (
    <section className="testimonial-4 overflow-x-hidden">
      <div className="container-fluid pt-120 pb-120">
        <div className="row g-5 align-items-center">
          <div className="col-xl-9 col-xxl-7 offset-3xl-5 offset-xl-3 pt-120 pb-120 content">
            <h2 className="mb-3 fade_up_anim">What Our Customers Think</h2>
            <p className="pb-2 pb-lg-4 mb-3 fade_up_anim" data-delay=".3">
              Our clients are at the heart of everything we do, and their feedback drives us to continue delivering high-quality water energy solutions.
            </p>
            <Swiper
              loop
              autoplay
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".client-next",
                prevEl: ".client-prev",
              }}
              breakpoints={{
                580: {
                  slidesPerView: 1.3,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                992: {
                  slidesPerView: 1.4,
                  spaceBetween: 24,
                },
                1200: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
              }}
              className="swiper clientSwiper3"
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="testimonial-card bg1">
                    <div className="text-yellow fs-5 d-flex gap-2">
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-half-filled"></i>
                    </div>
                    <p className="mt-3 pb-2 mb-2 mb-lg-4">{client.text}</p>
                    <div className="d-flex gap-3 align-items-center">
                      <Image width="60" height="60" src={client.image} alt="" />
                      <div>
                        <h5 className="mb-1">{client.name}</h5>
                        <span>{client.title}</span>
                      </div>
                    </div>
                    <Image className="quote" src={quote} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
