"use client";
import { useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/images/AgricultureAbout1.png";
import img2 from "@/public/images/agricultureAbout2.jpg";
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
              We are committed to promoting sustainable and modern agricultural practices that help farmers increase productivity while protecting natural resources. By combining traditional farming wisdom with smart, efficient methods, we support healthier soil, better crop growth, and long-term food security. Our approach focuses on improving farm efficiency, reducing waste, and ensuring that every farmer has access to reliable, technology-supported solutions.

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
              Our work spans across soil management, crop care, irrigation planning, and advanced cultivation techniques tailored for different agricultural needs. We help farmers adopt eco-friendly solutions such as organic farming, drip irrigation, greenhouse systems, and precision monitoring. With a focus on quality, safety, and sustainable results, we aim to empower agriculture with modern tools that increase yield, reduce effort, and support long-term growth.

            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
