"use client";
import whyBg from "@/public/images/why-choose-bg-2.webp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import CommonModal from "../shared/CommonModal";
// import ModalVideo from "react-modal-video";
const WhyChoose = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="why-choose-2">
      <div className="container">
        <div className="row">
          <div className="col-12 player-container">
            <div className="reveal reveal--right reveal--overlay">
              <Image src={whyBg} className="video-img img-fluid" alt="" />
              <button onClick={() => setOpen(true)} className="play-btn popup-youtube">
                <i className="ti ti-player-play-filled"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="why-counter">
          <div className="row g-4 align-items-end counter-inner">
            <div className="col-lg-8">
              <div className="why-2-card">
                <h2 className="mb-3 fade_up_anim">The Solar Advantage with Us</h2>
                <p className="pb-lg-2 mb-3 mb-xl-4 fade_up_anim" data-delay=".2">
                  Choosing the right solar energy provider is essential for a successful transition to clean energy. At Solarox, we bring together expertise, innovation...
                </p>
                <ul className="why-list fade_up_anim" data-delay=".4">
                  <li>
                    <i className="ti ti-point-filled text-sm"></i> Customized Solar Solutions
                  </li>
                  <li>
                    <i className="ti ti-point-filled text-sm"></i> Affordable Cheap Pricing
                  </li>
                  <li>
                    <i className="ti ti-point-filled text-sm"></i> High-Quality Components
                  </li>
                  <li>
                    <i className="ti ti-point-filled text-sm"></i> Commitment to Sustainability
                  </li>
                </ul>
                <Link href="/about-us" className="black-btn">
                  About Us <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="counter-card">
                <h2 className="display-3 mb-0">
                  <CountUp end={500} enableScrollSpy className="odometer fw-semibold" />+
                </h2>
                <span>Total Technician</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="counter-card">
                <h2 className="display-3 mb-0">
                  <CountUp end={15} enableScrollSpy className="odometer fw-semibold" />+
                </h2>
                <span>Years of experiences</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="counter-card">
                <h2 className="display-3 mb-0">
                  <CountUp end={3.15} decimalPlaces={1} enableScrollSpy className="odometer fw-semibold" />k
                </h2>
                <span>Solar Installation</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="counter-card">
                <h2 className="display-3 mb-0">
                  <CountUp end={25} enableScrollSpy className="odometer fw-semibold" /> +
                </h2>
                <span>Total Awards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="pBFQdxA-apI" onClose={() => setOpen(false)} /> */}
      <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        videoId="LTsxOzNdbRQ"
      />
    </section>
  );
};

export default WhyChoose;
