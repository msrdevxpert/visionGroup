"use client";

import counterBg4 from "@/public/images/CountAgri1.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import CommonModal from "../shared/CommonModal";

/* ================= TYPES ================= */

type StatsType = {
  yearsOfExperience: number;
  totalSolarProjects: number;
  totalCivilProjects: number;
  totalAgriProjects: number;
  totalTechnicians: number;
  totalAwardsAchievements: number;
};

/* ================= COMPONENT ================= */

const Counter = () => {
  const [open, setOpen] = useState(false);
  const [stats, setStats] = useState<StatsType | null>(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH STATS ================= */
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/statistics/company?type=agri`
        );
        const json = await res.json();
        setStats(json?.data || null);
      } catch (err) {
        console.error("Stats API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section
      className="why-choose-2"
      // style={{ paddingTop: "250px", marginTop: "50px" }}
    >
      <div className="container">

        {/* ================= VIDEO ================= */}
        <div className="row">
          <div className="col-12 player-container">
            <div className="reveal reveal--right reveal--overlay" >
              <Image
                src={counterBg4}
                className="video-bg-image"
                alt=""
                style={{maxWidth:"110%"}}
              />
              <button
                onClick={() => setOpen(true)}
                className="play-btn popup-youtube"
              >
                <i className="ti ti-player-play-filled"></i>
              </button>
            </div>
          </div>
        </div>

        {/* ================= CONTENT + COUNTERS ================= */}
        <div className="why-counter">
          <div className="row g-3 g-xl-4 align-items-end counter-inner">

            {/* ================= LEFT CONTENT ================= */}
            <div className="col-lg-8">
              <div className="why-2-card">
                <h2 className="mb-3 fade_up_anim">
                  Our Commitment to Agricultural Excellence
                </h2>

                <p
                  className="pb-lg-2 mb-3 mb-xl-4 fade_up_anim"
                  data-delay=".3"
                >
                  We are committed to empowering modern agriculture through
                  sustainable energy solutions, smart irrigation systems, and
                  innovative farming technologies that enhance productivity and
                  long-term growth.
                </p>

              <ul className="why-list">
  <li>
    <i className="ti ti-point-filled text-sm fs-5"></i>
    Smart irrigation & efficient water management
  </li>
  <li>
    <i className="ti ti-point-filled text-sm fs-5"></i>
    Renewable energy solutions for farming
  </li>
  <li>
    <i className="ti ti-point-filled text-sm fs-5"></i>
    Cost-effective, farmer-friendly technologies
  </li>
  <li>
    <i className="ti ti-point-filled text-sm fs-5"></i>
    Sustainable and eco-friendly agriculture support
  </li>
</ul>


                <Link href="/agriculture/about-us" className="primary-btn">
                  About Us <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>

            {/* ================= COUNTERS ================= */}
            {loading || !stats ? (
              <p className="text-center py-5">Loading statistics...</p>
            ) : (
              <>
                {/* Technicians */}
                <div className="col-md-6 col-lg-4">
                  <div className="counter-card">
                    <h2 className="display-3 mb-0">
                      <CountUp
                        end={stats.totalTechnicians}
                        duration={3}
                        enableScrollSpy
                        className="odometer fw-semibold"
                      />
                      +
                    </h2>
                    <span>Total Technicians</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="col-md-6 col-lg-4">
                  <div className="counter-card">
                    <h2 className="display-3 mb-0">
                      <CountUp
                        end={stats.yearsOfExperience}
                        duration={3}
                        enableScrollSpy
                        className="odometer fw-semibold"
                      />
                      +
                    </h2>
                    <span>Years of Experience</span>
                  </div>
                </div>

                {/* Agriculture Projects */}
                <div className="col-md-6 col-lg-4">
                  <div className="counter-card">
                    <h2 className="display-3 mb-0">
                      <CountUp
                        end={stats.totalAgriProjects}
                        duration={3}
                        enableScrollSpy
                        className="odometer fw-semibold"
                      />
                      +
                    </h2>
                    <span>Agriculture Projects</span>
                  </div>
                </div>

                {/* Awards */}
                <div className="col-md-6 col-lg-4">
                  <div className="counter-card">
                    <h2 className="display-3 mb-0">
                      <CountUp
                        end={stats.totalAwardsAchievements}
                        duration={3}
                        enableScrollSpy
                        className="odometer fw-semibold"
                      />
                      +
                    </h2>
                    <span>Awards & Achievements</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ================= VIDEO MODAL ================= */}
      <CommonModal

        open={open}
        onClose={() => setOpen(false)}
        videoId="LTsxOzNdbRQ"
        local="Y"
        url="/images/CountAgriVdo.mp4"
      />
    </section>
  );
};

export default Counter;
