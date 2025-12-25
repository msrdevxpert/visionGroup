"use client";
import client1 from "@/public/images/GroupSuurya.png";
import client2 from "@/public/images/evolve.png";
import client3 from "@/public/images/Asun.png";
import client4 from "@/public/images/KingSolar.jpeg";
import client5 from "@/public/images/ModiGroup.png";
import client6 from "@/public/images/MK.jpeg";
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
            <Swiper loop autoplay spaceBetween={6} slidesPerView={"auto"} modules={[Autoplay]} className="swiper brand-swiper">
              <SwiperSlide style={{paddingInline:"100px"}}>
                <Image src={client1} className="" alt="" style={{width:"150px", height:"100px"}} />
              </SwiperSlide>
              <SwiperSlide style={{paddingInline:"100px"}}>
                <Image src={client2} className="" alt="" style={{width:"150px", height:"100px"}}/>
              </SwiperSlide>
              <SwiperSlide style={{paddingInline:"100px"}}>
                <Image src={client3} className="" alt="" style={{width:"150px", height:"100px"}}/>
              </SwiperSlide>
              <SwiperSlide style={{paddingInline:"100px"}}>
                <Image src={client4} className="" alt="" style={{width:"150px", height:"100px"}}/>
              </SwiperSlide>
              <SwiperSlide style={{paddingInline:"100px"}}>
                <Image src={client5} className="" alt="" style={{width:"150px", height:"100px"}}/>
              </SwiperSlide>
              <SwiperSlide style={{paddingInline:"100px"}}>
                <Image src={client6} className="" alt="" style={{width:"150px", height:"100px"}} />
              </SwiperSlide>
             
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
