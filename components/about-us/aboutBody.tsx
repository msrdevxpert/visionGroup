"use client";
import Image from "next/image";
import img1 from "@/public/images/aboutBody1.png";
import img2 from "@/public/images/aboutBody2.png";
import mission from "@/public/images/OurMission.jpg";
import goal from "@/public/images/ourGoal.jpg";

export default function VisionGroup() {
  return (
    <section className="py-5 vision-section">
      <div className="container">

        {/* -------------------- BLOCK 1 -------------------- */}
        <div className="row align-items-center g-4 mb-5">
          {/* TEXT LEFT */}
          <div className="col-lg-7">
            <p className="mb-3">
              The Vision Group is a leading provider of renewable energy solutions,
              sustainable agricultural practices, and civil infrastructure development,
              committed to delivering innovative and efficient services across the 
              energy, agritech, and construction sectors. With a focus on quality, 
              environmental responsibility, and meeting the growing demands of modern 
              infrastructure and green energy initiatives, the group strives to create 
              a sustainable and well-built future through its specialized companies: 
              <strong> VISIONSMART PLUS ENERGY, VISION AGRIFUTURE,</strong> and 
              <strong> VISIONPLUS INFRATEC</strong>.
            </p>
          </div>

          {/* IMAGE RIGHT */}
          <div className="col-lg-5">
            <Image
              src={img1}
              alt="About Vision Group"
              className="w-100 rounded shadow-sm"
            />
          </div>
        </div>

        {/* -------------------- BLOCK 2 -------------------- */}
        <div className="row align-items-center g-4 mb-4">

          {/* IMAGE LEFT */}
          <div className="col-lg-5">
            <Image
              src={img2}
              alt="Vision Group Work"
              className="w-100 rounded shadow-sm"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="col-lg-7">
            <p>
              GROUP VISION is 100% Indian-owned and has years of experience in 
              developing solar solutions, civil project management, innovation in 
              renewable energy, and helping the development of local industries. 
              We have the capability to manage any kind of system and installation 
              and lead all our projects to fruition through the highest standards 
              of performance and service quality.
            </p>
          </div>
        </div>

         {/* -------------------- BLOCK 3 — OUR MISSION -------------------- */}
        <div className="text-center mb-4">
          <h4 className="fw-bold text-uppercase">Our Mission</h4>
        </div>

        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-5">
            <Image src={mission} alt="Our Mission" className="w-100 h-50 rounded shadow-sm" />
          </div>

          <div className="col-lg-7">
            <div className="p-4  ">
              <p>
                Our mission is to provide <strong>eco-friendly, cost-effective,
                and high-quality solutions</strong> that contribute to a sustainable
                future. We aim to revolutionize the construction and energy sectors
                by integrating cutting-edge technologies and best industry practices.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------- BLOCK 4 — OUR GOAL -------------------- */}
        <div className="text-center mb-4">
          <h4 className="fw-bold text-uppercase">Our Goal</h4>
        </div>

        <div className="row align-items-center g-4 mb-3">
          <div className="col-lg-7">
            <div className="p-4 ">
              <p>
                Our aim is to build strong and valued relationships with our customers
                while providing dedication and customized solutions across all projects.
              </p>
              <p>
                Superior customer service, reliable components, and transparent
                project execution help us reduce effort for customers while
                taking full responsibility from consultation to installation — and beyond.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <Image src={goal} alt="Our Goal" className="w-100 h-50 rounded shadow-sm" />
          </div>
        </div>


      </div>

      <style jsx>{`
        .vision-section p {
          font-size: 16px;
          line-height: 1.65;
          color: #333;
        }
      `}</style>
    </section>
  );
}
