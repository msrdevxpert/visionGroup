"use client";
import arrow from "@/public/images/arrow-down.png";
import bestSolar from "@/public/images/SolarDiscoverThumbnail.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommonModal from "../shared/CommonModal"


const BestSolar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="legal-partner">
      <a href="#services" className="scroll-banner d-none d-xxl-flex">
        <h3 className="vertical-sm-black">Discover</h3>
        <div className="arrow-down">
          <Image src={arrow} alt="" />
        </div>
      </a>
      <div className="container px-0 position-relative">
        <div className="legal-content px-3">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fade_up_anim">Best Solar Panels Industry</h2>
            </div>
            <div className="col-md-6">
              <div className="mb-5 pb-lg-4 pb-xl-5">
                <p className="pb-2 mb-3 mb-lg-4 fade_up_anim" data-delay=".3">
                  We deliver integrated renewable energy solutions, from solar and wind systems to efficient storage and end-to-end power management.
                </p>
                <Link href="/about-us2" className="black-btn mb-3 mb-sm-0">
                  About Us <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="solar-video">
        <div className="container z-3">
          <div className="row">
            <div className="col-12 px-0">
              <div className="reveal reveal--right reveal--overlay">
                <div className="text-center position-relative">
                  <Image src={bestSolar} className="max-un" alt="" />
                  <button onClick={() => setOpen(true)} className="play-btn unset popup-youtube">
                    <i className="ti ti-player-play-filled"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        videoId="LTsxOzNdbRQ"
        local="Y"
        url="/images/SolarDiscover.mp4"
      />

    </section>
  );
};

export default BestSolar;
