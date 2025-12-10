"use client";
import client1 from "@/public/images/client-1.png";
import client2 from "@/public/images/client-2.png";
import client3 from "@/public/images/client-3.png";
import quote from "@/public/images/quote-2.png";
import testimonialBg6 from "@/public/images/testimonial-bg-6.webp";
import Image from "next/image";
import { useState } from "react";
// import ModalVideo from "react-modal-video";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonModal from "../shared/CommonModal";
const Testimonial = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="testimonial-6 pt-120 pb-120">
      <div className="container">
        <div className="row g-3 gx-lg-4 align-items-center">
          <div className="col-lg-6">
            <div className="title">
              <h2 className="mb-3 fade_up_anim">Success Stories</h2>
              <p className="fade_up_anim" data-delay=".3">
                Our customers are at the heart of everything we do. We are proud to share the experiences of our clients who have trusted.
              </p>
            </div>
            <div className="slider">
              <Swiper
                autoplay
                loop
                navigation={{
                  prevEl: ".testi6-prev",
                  nextEl: ".testi6-next",
                }}
                modules={[Navigation, Autoplay]}
                className="swiper testimonialSlider6"
              >
                <SwiperSlide>
                  <div className="testimonial-card-6">
                    <Image src={quote} className="mb-3 mb-xl-4 pb-2 opacity-25" alt="" />
                    <div className="d-flex gap-2 stars mb-3 pb-lg-1 fs-5">
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-half-filled"></i>
                    </div>
                    <p className="mb-3 mb-xl-4 pb-2">“They took the time to understand our energy needs and designed a system that perfectly suits our home. Our energy bills have dropped significantly, and we feel great knowing”</p>
                    <Image src={client1} className="mb-3 pb-1 rounded-circle" width="72" height="72" alt="" />
                    <h5 className="mb-1">Mark Toen</h5>
                    <p>Software Tester</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-card-6">
                    <Image src={quote} className="mb-3 mb-xl-4 pb-2 opacity-25" alt="" />
                    <div className="d-flex gap-2 stars mb-3 pb-lg-1 fs-5">
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-half-filled"></i>
                    </div>
                    <p className="mb-3 mb-xl-4 pb-2">“They took the time to understand our energy needs and designed a system that perfectly suits our home. Our energy bills have dropped significantly, and we feel great knowing”</p>
                    <Image src={client3} className="mb-3 pb-1 rounded-circle" width="72" height="72" alt="" />
                    <h5 className="mb-1">Albert Frank</h5>
                    <p>Software Tester</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-card-6">
                    <Image src={quote} className="mb-3 mb-xl-4 pb-2 opacity-25" alt="" />
                    <div className="d-flex gap-2 stars mb-3 pb-lg-1 fs-5">
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-filled"></i>
                      <i className="ti ti-star-half-filled"></i>
                    </div>
                    <p className="mb-3 mb-xl-4 pb-2">“They took the time to understand our energy needs and designed a system that perfectly suits our home. Our energy bills have dropped significantly, and we feel great knowing”</p>
                    <Image src={client2} className="mb-3 pb-1 rounded-circle" width="72" height="72" alt="" />
                    <h5 className="mb-1">John Doe</h5>
                    <p>Software Tester</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="btns">
                <button className="testi6-prev">
                  <i className="ti ti-arrow-narrow-left"></i>
                </button>
                <button className="testi6-next">
                  <i className="ti ti-arrow-narrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image">
              <button onClick={()=> setOpen(true)}  className="play-btn popup-youtube">
                <i className="ti ti-player-play-filled"></i>
              </button>
              <Image src={testimonialBg6} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        videoId="LTsxOzNdbRQ"
      />
    </section>
  );
};

export default Testimonial;
