"use client";
import about1 from "@/public/images/about-1.webp";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="vertical">About us</h2>
      <div className="counter-wrapper position-relative z-3">
        <div className="container counter">
          <div className="row g-3 text-center counter-inner">
            <div className="col-sm-6 col-lg-3 d-flex flex-column align-items-center z-1">
              <h2 className="display-3 mb-0">
                <CountUp end={25} enableScrollSpy className="odometer fw-semibold" />+
              </h2>
              <span>Years of experiences</span>
            </div>
            <div className="col-sm-6 col-lg-3 d-flex flex-column align-items-center z-1">
              <h2 className="display-3 mb-0">
                <CountUp end={3.7} enableScrollSpy decimals={1} className="odometer fw-semibold" />
                k+
              </h2>
              <span>Solar Installation</span>
            </div>
            <div className="col-sm-6 col-lg-3 d-flex flex-column align-items-center z-1">
              <h2 className="display-3 mb-0">
                <CountUp end={500} enableScrollSpy className="odometer fw-semibold" />+
              </h2>
              <span>Total Solar Technician</span>
            </div>
            <div className="col-sm-6 col-lg-3 d-flex flex-column align-items-center z-1 full-width">
              <h2 className="display-3 mb-0">
                <CountUp end={47} enableScrollSpy className="odometer fw-semibold" />+
              </h2>
              <span>Awards Achievement</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image src={about1} className="about-img" alt="" />
            </div>
            <div className="col-lg-6 z-2 position-relative">
              <div className="about-content">
                <h2 className="fade_up_anim fw-semibold mb-3">Renewable energy solutions, 
sustainable agricultural practices, and civil infrastructure development</h2>
                <p className="pb-lg-3 mb-3 fade_up_anim" data-delay=".3">
                  We build sustainable solutions that power energy, agriculture, and infrastructure. Our focus is innovation, quality, and a better future.
                </p>
                <ul className="team-feature">
                  <li>
                    <i className="ti ti-discount-check"></i> <span>9/10 Average Satisfaction Rate </span>
                  </li>
                  <li>
                    <i className="ti ti-discount-check"></i> <span>96% Completitation Rate </span>
                  </li>
                  <li>
                    <i className="ti ti-discount-check"></i> <span>Client-Centric Approach </span>
                  </li>
                </ul>
                <div className="d-flex align-items-center mt-3">
  <Link href="/services" className="primary-btn">
    Our Services <i className="ti ti-arrow-up-right"></i>
  </Link>

  <Link href="/about-us/" className="primary-btn ms-3">
    More...
  </Link>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
