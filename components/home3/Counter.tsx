"use client";
import counterImg from "@/public/images/home-3-counter-1.webp";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <section id="counter" className="counter-3 overflow-x-hidden">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-7 col-lg-8">
            <div className="position-relative overflow-x-visible">
              <div className="swiper-wrapper">
                <div className="swiper-slide dir-rtl">
                  <div className="reveal reveal--left reveal--overlay">
                    <Image src={counterImg} className="max-un" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="counter-content">
              <h2 className="mb-3 fade_up_anim">Choosing Excellence for Your Legal Needs</h2>
              <p className="pb-lg-1 mb-4 fade_up_anim" data-delay=".3">
                We understand that choosing the right legal representation is crucial. Our firm stands apart, and we are confident that we are the right choice for your legal needs.
              </p>
              <ul className="why-list fade_up_anim" data-delay=".5">
                <li>
                  <i className="ti ti-point-filled text-sm"></i> Experience and Expertise
                </li>
                <li>
                  <i className="ti ti-point-filled text-sm"></i> Client-Centered Approach
                </li>
                <li>
                  <i className="ti ti-point-filled text-sm"></i> Personalized Attention
                </li>
                <li>
                  <i className="ti ti-point-filled text-sm"></i> Results-Driven Advocacy
                </li>
              </ul>
              <Link href="/about-us" className="read-more-three d-inline-flex flex-row">
                Read More <i className="ti ti-arrow-up-right arrow-sm bg-primary rounded-circle text-black"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 counter-inner d-flex flex-column gap-4">
            <div className="counter-card bg1">
              <h2 className="display-3 mb-0">
                <CountUp end={3.7} decimals={1} duration={5} className="odometer fw-semibold" enableScrollSpy />k
              </h2>
              <span>Successfully Projects</span>
            </div>
            <div className="counter-card bg1">
              <h2 className="display-3 mb-0">
                <CountUp end={500} duration={5} className="odometer fw-semibold" enableScrollSpy />+
              </h2>
              <span>Total Wind Energy Specialists</span>
            </div>
            <div className="counter-card bg1">
              <h2 className="display-3 mb-0">
                <CountUp end={25} duration={5} className="odometer fw-semibold" enableScrollSpy />+
              </h2>
              <span>Years of experiences</span>
            </div>
            <div className="counter-card bg1">
              <h2 className="display-3 mb-0">
                <CountUp end={47} duration={5} className="odometer fw-semibold" enableScrollSpy />+
              </h2>
              <span>Successfully Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
