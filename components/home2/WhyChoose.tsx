"use client";

import whyBg from "../../public/images/SolarWhyBg.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import CommonModal from "../shared/CommonModal";
import { usePathname } from "next/navigation";

type Stats = {
  yearsOfExperience: number;
  totalSolarProjects: number;
  totalCivilProjects?: number;
  totalAgriProjects?: number;
  totalTechnicians: number;
  totalAwardsAchievements: number;
};

const WhyChoose = ({ type  }: { type?: string }) => {
  const [open, setOpen] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);

  // ✅ Prevent multiple API calls in React 18 StrictMode
  const fetchedRef = useRef(false);

  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  let projectUrl = "/projects";
  if (segments.length >= 2) {
    projectUrl = `/${segments[0]}/projects`;
  }

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/statistics/company`;

    // ✅ main হলে param যাবে না
    if (type && type !== "main") {
      url += `?type=${type}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setStats(res?.data || null);
      })
      .catch(() => setStats(null));
  }, [type]);

  // Optional: loading guard
  if (!stats) return null;

  return (
    <section className="why-choose-2" >
      <div className="container">
        {/* VIDEO SECTION */}
        <div className="row">
          <div className="col-12 player-container">
            <div className="reveal reveal--right reveal--overlay" style={{opacity:"1", visibility:"inherit", clipPath:"none"}}>
              <Image src={whyBg} className="" alt="" style={{maxWidth:"110%"}} />
              <button onClick={() => setOpen(true)} className="play-btn popup-youtube">
                <i className="ti ti-player-play-filled"></i>
              </button>
            </div>
          </div>
        </div>

        {/* COUNTER SECTION */}
        <div className="why-counter">
          <div className="row g-4 align-items-end counter-inner">
            <div className="col-lg-8">
              <div className="why-2-card">
                <h2 className="mb-3 fade_up_anim">The Solar Advantage with Us</h2>
                <p className="pb-lg-2 mb-3 mb-xl-4 fade_up_anim" data-delay=".2">
                  Choosing the right energy provider is essential for a successful transition to
                  sustainable solutions.
                </p>

                <ul className="why-list fade_up_anim" data-delay=".4">
                  <li><i className="ti ti-point-filled text-sm"></i> Customized Energy Solutions</li>
                  <li><i className="ti ti-point-filled text-sm"></i> Affordable Pricing</li>
                  <li><i className="ti ti-point-filled text-sm"></i> High-Quality Components</li>
                  <li><i className="ti ti-point-filled text-sm"></i> Commitment to Sustainability</li>
                </ul>

                <Link href="/about-us2" className="black-btn">
                  About Us <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>

            {/* TOTAL TECHNICIAN */}
            <div className="col-md-6 col-lg-4">
              <div className="counter-card">
                <h2 className="display-3 mb-0">
                  <CountUp
                    key={stats.totalTechnicians}
                    end={stats.totalTechnicians}
                    enableScrollSpy
                    className="odometer fw-semibold"
                  />+
                </h2>
                <span>Total Technician</span>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="col-md-6 col-lg-4">
              <div className="counter-card">
                <h2 className="display-3 mb-0">
                  <CountUp
                    key={stats.yearsOfExperience}
                    end={stats.yearsOfExperience}
                    enableScrollSpy
                    className="odometer fw-semibold"
                  />+
                </h2>
                <span>Years of experiences</span>
              </div>
            </div>

            {/* SOLAR PROJECTS */}
            <div className="col-md-6 col-lg-4">
              <div className="counter-card">
                <h2 className="display-3 mb-0">
                  <CountUp
                    key={stats.totalSolarProjects}
                    end={stats.totalSolarProjects}
                    enableScrollSpy
                    className="odometer fw-semibold"
                  />+
                </h2>
                <span>Solar Projects</span>
              </div>
            </div>

            {/* AWARDS */}
            <div className="col-md-6 col-lg-4">
              <div className="counter-card">
                <h2 className="display-3 mb-0">
                  <CountUp
                    key={stats.totalAwardsAchievements}
                    end={stats.totalAwardsAchievements}
                    enableScrollSpy
                    className="odometer fw-semibold"
                  />+
                </h2>
                <span>Awards Achievement</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        videoId="LTsxOzNdbRQ"
        local="Y"
        url="/images/SolarWhyBgVdo.mp4"
      />
    </section>
  );
};

export default WhyChoose;
