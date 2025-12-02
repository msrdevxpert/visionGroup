"use client";
import client1 from "@/public/images/client-1.png";
import client2 from "@/public/images/client-2.png";
import client3 from "@/public/images/client-3.png";
import quote from "@/public/images/quote.png";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    image: client3,
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
  {
    id: 5,
    image: client1,
    name: "Kende Attila",
    title: "Software Tester",
    text: "I had the privilege of working with Solarox from Solarox on a complex business litigation case. Their professionalism, attention to detail, and strategic approach.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial pt-120 pb-120">
      <div className="left-text">
        <h2 className="vertical">testimonial</h2>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 col-xxl-8">
            <div className="reveal reveal--right reveal--overlay">
              <div className="testimonial-inner">
                <h2 className="fade_up_anim">Client Testimonials</h2>
                <p className="mb-4 mb-lg-5 pb-lg-2 fade_up_anim" data-delay=".3">
                  Our clients satisfaction is at the heart of everything we do. We are proud to have had the opportunity to represent and assist numerous individuals
                </p>
                <Swiper
                  navigation={{
                    nextEl: ".client-next",
                    prevEl: ".client-prev",
                  }}
                  modules={[Navigation, Autoplay]}
                  loop
                  autoplay
                  className="swiper clientSwiper"
                >
                  {clients.map((client) => (
                    <SwiperSlide key={client.id}>
                      <div className="testimonial-card">
                        <div className="text-yellow d-flex gap-2 stars">
                          <i className="ti ti-star-filled"></i>
                          <i className="ti ti-star-filled"></i>
                          <i className="ti ti-star-filled"></i>
                          <i className="ti ti-star-filled"></i>
                          <i className="ti ti-star-half-filled"></i>
                        </div>
                        <p className="mt-3 pb-2 mb-3 mb-lg-4">{client.text}</p>
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
                <div className="btns-client mt-4 pt-lg-2">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
