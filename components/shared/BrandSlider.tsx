"use client";
import company1 from "@/public/images/company-1.png";
import company2 from "@/public/images/company-2.png";
import company3 from "@/public/images/company-3.png";
import company4 from "@/public/images/company-4.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const BrandSlider = () => {
  return (
    <div className="brand-slider overflow-x-hidden">
      <div className="container-fluid">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5 left-col">
            <p className="mb-0 ms-lg-2 px-3">We have worked with major brands worldwide___</p>
          </div>
          <div className="col-lg-7">
            <Swiper loop autoplay spaceBetween={16} slidesPerView={"auto"} modules={[Autoplay]} className="swiper brand-swiper">
              <SwiperSlide>
                <Image src={company1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={company4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
