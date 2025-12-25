"use client";
import { useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/images/CivilAboutBody1.jpg";
import img2 from "@/public/images/CivilAboutBody2.jpg";
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
          We are committed to delivering innovative and sustainable civil engineering solutions that enhance infrastructure while protecting the environment. By combining advanced engineering techniques with industry best practices, we support safer structures, efficient urban development, and long-term community growth. Our approach focuses on improving project efficiency, minimizing waste, and ensuring that every client benefits from reliable, technology-driven construction solutions.
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
          Our expertise spans across building construction, infrastructure development, urban planning, and sustainable project management. We help clients adopt eco-friendly practices such as energy-efficient buildings, smart water and waste management systems, and resilient structural designs. With a focus on quality, safety, and long-term impact, we aim to empower communities with modern civil engineering solutions that enhance living standards and support sustainable growth.
        </p>
          </div>

        </div>
      </div>
    </section>
  );
}
