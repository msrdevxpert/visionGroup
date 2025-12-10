"use client";
import client1 from "@/public/images/client-1.png";
import client2 from "@/public/images/client-2.png";
import quote from "@/public/images/quote.png";
import testimonial3 from "@/public/images/testimonial-bg-3.webp";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    id: 1,
    image: client1,
    name: "Kende Attila",
    title: "Software Tester",
    text: "Working with Solarox was an exceptional experience. Their expertise and dedication were evident in every step of the",
  },
  {
    id: 2,
    image: client2,
    name: "Kende Attila",
    title: "Software Tester",
    text: "The team at Solarox provided outstanding support and guidance, making a complex case seem manageable.",
  },
  {
    id: 3,
    image: client1,
    name: "Kende Attila",
    title: "Software Tester",
    text: "Solarox's innovative approach and meticulous attention to detail were key to our project's success.",
  },
  {
    id: 4,
    image: client2,
    name: "Kende Attila",
    title: "Software Tester",
    text: "I highly recommend Solarox for their professionalism and ability to deliver results beyond expectations.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-3 overflow-x-hidden">
      <div className="container-fluid px-xxl-0">
        <div className="row g-5 g-lg-0">
          <div className="col-lg-5 px-0 position-relative z-2 d-none d-lg-block">
            <div className="reveal reveal--right">
              <Image src={testimonial3} className="img-fluid testimonial-img" alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-xxl-6 offset-xxl-1 left-side px-3">
            <h2 className="mb-3 fade_up_anim">Trusted by Our Clients</h2>
            <p className="pb-2 pb-lg-4 mb-3 fade_up_anim" data-delay=".3">
              We take pride in the relationships we&apos;ve built with our clients and the success stories they&apos;ve shared. Our mission is to deliver high-quality renewable.
            </p>
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
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card bg2">
                    <div className="text-yellow fs-5 d-flex gap-2">
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-half-filled"></i>
                    </div>
                    <p className="text-white mt-3 pb-2 mb-2 mb-lg-4">{testimonial.text}</p>
                    <div className="d-flex gap-3 align-items-center">
                      <Image width="60" height="60" src={testimonial.image} alt="" />
                      <div>
                        <h5 className="text-white mb-1">{testimonial.name}</h5>
                        <span>{testimonial.title}</span>
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
