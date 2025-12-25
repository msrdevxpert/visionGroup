"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "@/public/images/quote.png";

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
  const [clients, setClients] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonials`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === "success") {
          // only active testimonials
          setClients(res.data.filter((t: TestimonialItem) => t.isActive));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="testimonial-4 overflow-x-hidden">
      <div className="container-fluid pt-120 pb-120">
        <div className="row g-5 align-items-center">
          <div className="col-xl-9 col-xxl-7 offset-3xl-5 offset-xl-3 pt-120 pb-120 content">
            <h2 className="mb-3 fade_up_anim">What Our Customers Think</h2>
           <p className="pb-2 pb-lg-4 mb-3 fade_up_anim" data-delay=".3">
  Our farmers and agricultural partners are at the core of everything we do, and their feedback inspires us to deliver reliable, sustainable, and innovative agri-energy solutions.
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
                580: { slidesPerView: 1.3, spaceBetween: 24 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                992: { slidesPerView: 1.4, spaceBetween: 24 },
                1200: { slidesPerView: 1.5, spaceBetween: 24 },
              }}
              className="swiper clientSwiper3"
            >
              {clients.map((client) => (
                <SwiperSlide key={client.testimonialId}>
                  <div className="testimonial-card bg1">
                    
                    {/* ⭐ Rating */}
                    <div className="text-yellow fs-5 d-flex gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={`ti ${
                            i < client.rating
                              ? "ti-star-filled"
                              : "ti-star"
                          }`}
                        ></i>
                      ))}
                    </div>

                    <p className="mt-3 pb-2 mb-2 mb-lg-4">
                      {client.message}
                    </p>

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
