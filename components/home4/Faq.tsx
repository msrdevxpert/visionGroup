"use client";
import faqs from "@/public/data/faqData";
import company1 from "@/public/images/company-1.png";
import company2 from "@/public/images/company-2.png";
import company3 from "@/public/images/company-3.png";
import company4 from "@/public/images/company-4.png";
import faqBg4 from "@/public/images/faq-bg-4.webp";
import Image, { StaticImageData } from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FaqItem from "../shared/FaqItem";
const Faq = ({ faqImg = faqBg4 }: { faqImg?: StaticImageData | string }) => {
  return (
    <section className="faq-2">
      <div className="container-fluid overflow-x-hidden">
        <div className="row overflow-hidden">
          <div className="d-none d-lg-block col-lg-5 px-0 position-relative">
            <div className="reveal reveal--right">
              <Image src={faqImg} className="img-fluid testimonial-img" alt="" />
            </div>
          </div>
          <div className="col-lg-7 px-0 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col-xxl-9">
                <div className="faq-content no-cta">
                  <h2 className="fade_up_anim">FAQs For Water Energy</h2>
                  <p className="pb-lg-2 mb-4 fade_up_anim" data-delay=".3">
                    Have questions about our water energy solutions? We&apos;ve gathered the most frequently asked questions to help.
                  </p>
                  <div className="accordion d-flex flex-column gap-3 gap-xxl-4" id="home4Faq">
                    {faqs.slice(0, 5).map((faq) => (
                      <FaqItem key={faq.id} {...faq} cls="bg1" databsParent="#home4Faq" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100">
              <Swiper
                autoplay={{
                  delay: 1,
                }}
                speed={5000}
                loop
                slidesPerView={"auto"}
                modules={[Autoplay]}
                className="swiper logo-slider-2"
              >
                <SwiperSlide className="brand-slide">
                  <Image src={company1} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-slide">
                  <Image src={company2} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-slide">
                  <Image src={company3} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-slide">
                  <Image src={company4} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-slide">
                  <Image src={company1} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-slide">
                  <Image src={company2} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-slide">
                  <Image src={company3} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-slide">
                  <Image src={company4} className="img-fluid" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
