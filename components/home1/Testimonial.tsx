"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "@/public/images/quote.png";
import testimonial3 from "@/public/images/image (2).png"; // optional background image

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
  const [clients, setClients] = useState<TestimonialType[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonials`
        );
        const data = await res.json();
        // Filter active testimonials only
        const activeTestimonials = data.data.filter((t: TestimonialType) => t.isActive);
        setClients(activeTestimonials);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonial pt-120 pb-120"  style={
    bgImage
      ? ({
          "--testimonial-bg": `url(${bgImage})`,
        } as React.CSSProperties)
      : undefined
  }>
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

                {clients.length > 0 && (
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
                      <SwiperSlide key={client.testimonialId}>
                        <div className="testimonial-card">
                          <div className="text-yellow d-flex gap-2 stars">
                            {Array.from({ length: 5 }, (_, i) => (
                              <i
                                key={i}
                                className={`ti ti-star${
                                  i < Math.floor(client.rating)
                                    ? "-filled"
                                    : i < client.rating
                                    ? "-half-filled"
                                    : ""
                                }`}
                              ></i>
                            ))}
                          </div>
                          <p className="mt-3 pb-2 mb-3 mb-lg-4">{client.message}</p>
                          <div className="d-flex gap-3 align-items-center">
                            <Image
                              width={60}
                              height={60}
                              src={client.photoUrl || "/images/client-placeholder.png"}
                              alt={client.customerName}
                            />
                            <div>
                              <h5 className="mb-1">{client.customerName}</h5>
                              <span>{client.designation}</span>
                            </div>
                          </div>
                          <Image className="quote" src={quote} alt="" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

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
