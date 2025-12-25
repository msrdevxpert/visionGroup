"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonModal from "../shared/CommonModal";

import quote from "@/public/images/quote-2.png";
import testimonialBg6 from "@/public/images/AgriTestimo.png";
import testimonialBg6forCivil from "@/public/images/CivilTestimon.png";


type TestimonialType = {
  testimonialId: number;
  customerName: string;
  designation: string;
  message: string;
  rating: number;
  photoUrl: string;
  isActive: boolean;
};
type TestimonialProps = {
  type?: string;
  url?: string;
  bgImage?: string;
};


const Testimonial = ({ type, url, bgImage }: TestimonialProps) => {


  const [open, setOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonials`)
      .then((res) => res.json())
      .then((res) => {
        const activeTestimonials = (res?.data || []).filter(
          (t: TestimonialType) => t.isActive
        );
        setTestimonials(activeTestimonials);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="ti ti-star-filled"></i>
        ))}
        {halfStar && <i className="ti ti-star-half-filled"></i>}
      </>
    );
  };

  return (
    <section
  className="testimonial-6 pt-120 pb-120"
  style={
    bgImage
      ? ({
          "--testimonial-bg": `url(${bgImage})`,
        } as React.CSSProperties)
      : undefined
  }
>
      <div className="container">
        <div className="row g-3 gx-lg-4 align-items-center">
          {/* LEFT */}
          <div className="col-lg-6">
            <div className="title">
              <h2 className="mb-3 fade_up_anim">Success Stories</h2>
              <p className="fade_up_anim" data-delay=".3">
                Hear directly from our clients about how our solutions have
                helped them achieve sustainable growth and real-world results.
              </p>
            </div>

            {loading && <p>Loading testimonials...</p>}

            {!loading && testimonials.length > 0 && (
              <div className="slider">
                <Swiper
                  autoplay
                  loop={testimonials.length > 1}
                  navigation={{
                    prevEl: ".testi6-prev",
                    nextEl: ".testi6-next",
                  }}
                  modules={[Navigation, Autoplay]}
                  className="swiper testimonialSlider6"
                >
                  {testimonials.map((item) => (
                    <SwiperSlide key={item.testimonialId}>
                      <div className="testimonial-card-6">
                        <Image
                          src={quote}
                          className="mb-3 mb-xl-4 pb-2 opacity-25"
                          alt=""
                        />

                        <div className="d-flex gap-2 stars mb-3 pb-lg-1 fs-5">
                          {renderStars(item.rating)}
                        </div>

                        <p className="mb-3 mb-xl-4 pb-2">
                          “{item.message}”
                        </p>

                        <Image
                          src={item.photoUrl || "/images/avatar-placeholder.png"}
                          className="mb-3 pb-1 rounded-circle"
                          width={72}
                          height={72}
                          alt={item.customerName}
                        />

                        <h5 className="mb-1">{item.customerName}</h5>
                        <p>{item.designation}</p>
                      </div>
                    </SwiperSlide>
                  ))}
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
            )}
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="image">
              <button
                onClick={() => setOpen(true)}
                className="play-btn popup-youtube"
              >
                <i className="ti ti-player-play-filled"></i>
              </button>
              <Image src={type==="agri"?testimonialBg6: testimonialBg6forCivil} className="w-100 h-100" alt="" />
            </div>
          </div>
        </div>
      </div>

      <CommonModal
  open={open}
  onClose={() => setOpen(false)}
  videoId="LTsxOzNdbRQ"
  local={type !== "main" ? "Y" : "N"}
  url={type !== "main" ? url : ""}
/>

    </section>
  );
};

export default Testimonial;
