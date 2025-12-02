"use client";
import { useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/images/solarHeroBg.png";
import img2 from "@/public/images/solarAbout2.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionSmart() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-5 vision-section">
      <div className="container">

        {/* -------------------- BLOCK 1 -------------------- */}
        <div className="row align-items-center g-4 mb-5">

          {/* TEXT LEFT */}
          <div className="col-lg-7" data-aos="fade-right">
            <p className="mb-3 animated-text" style={{fontSize:"20px"}}>
              VISIONSMART PLUS ENERGY PRIVATE LIMITED is a trusted provider of advanced solar power solutions, offering end-to-end services across residential, commercial, and industrial sectors. With a strong commitment to clean energy, innovation, and long-term sustainability, the company delivers high-quality solar installations, engineering expertise, and energy-efficient technologies designed to meet modern power demands. Focused on reliability and performance, VISIONSMART PLUS ENERGY aims to build a greener future through smart, efficient, and scalable renewable energy systems.
            </p>
          </div>

          {/* IMAGE RIGHT */}
          <div className="col-lg-5" data-aos="fade-left">
            <Image
              style={{ height: "280px" }}
              src={img1}
              alt="About Vision Group"
              className="w-100 rounded shadow-sm"
            />
          </div>
        </div>

        {/* -------------------- BLOCK 2 -------------------- */}
        <div className="row align-items-center g-4">

          {/* IMAGE LEFT */}
          <div className="col-lg-5" data-aos="fade-right">
            <Image
              style={{ height: "280px" }}
              src={img2}
              alt="Vision Group Work"
              className="w-100 rounded shadow-sm"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="col-lg-7" data-aos="fade-left">
            <p className="animated-text" style={{fontSize:"20px"}}>
              As a 100% Indian-owned company, VISIONSMART PLUS ENERGY brings years of experience in solar project development, system design, installation, and energy management. The company ensures seamless execution of every project with strict adherence to quality, safety, and industry standards. With the capability to handle projects of any scale, VISIONSMART PLUS ENERGY continues to support sustainable growth by empowering communities, businesses, and industries with clean, dependable, and cost-effective solar energy solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
