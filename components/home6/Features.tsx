"use client";

import { useEffect, useState } from "react";
import home6experience from "@/public/images/person-doing-their-construction-job.jpg";
import installation from "@/public/images/installation.png";
import support2 from "@/public/images/support-2.png";
import Image from "next/image";
import CountUp from "react-countup";

const Features = () => {
  const [stats, setStats] = useState({
    yearsOfExperience: 0,
    totalCivilProjects: 0,
    totalTechnicians: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/statistics/company`
        );
        const result = await res.json();
        setStats(result?.data);
      } catch (error) {
        console.error("Failed to fetch statistics", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="features-6 pt-120 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center position-relative">
          <div className="col-lg-5 col-xl-6">
            <div className="fade_up_anim">
              <div className="exp-img">
                <Image
                  src={home6experience}
                  className="img-fluid f6"
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt=""
                />

                {/* ===== CountUp Section ===== */}
                {stats && (
                  <div className="exp-info d-flex justify-content-center gap-5">
                    <div className="counter-box">
                      <h2 className="display-6 mb-0">
                        <CountUp
                          end={stats?.yearsOfExperience}
                          duration={4}
                          enableScrollSpy
                        />
                        +
                      </h2>
                      <p>Years Experience</p>
                    </div>

                    <div className="counter-box">
                      <h2 className="display-6 mb-0">
                        <CountUp
                          end={stats?.totalCivilProjects}
                          duration={4}
                          enableScrollSpy
                        />
                        +
                      </h2>
                      <p>Civil Projects</p>
                    </div>

                    <div className="counter-box">
                      <h2 className="display-6 mb-0">
                        <CountUp
                          end={stats?.totalTechnicians}
                          duration={4}
                          enableScrollSpy
                        />
                        +
                      </h2>
                      <p>Expert Technicians</p>
                    </div>
                  </div>
                )}
                {/* ===== End CountUp ===== */}
              </div>
            </div>
          </div>

          {/* ===== Right Content (unchanged) ===== */}
          <div className="col-lg-7 col-xl-6">
            <h2 className="mb-3 mb-xl-4 fade_up_anim">
              Building Stronger, Smarter, and Sustainable Infrastructure
            </h2>

            <p className="mb-4 pb-xl-3 fade_up_anim" data-delay=".3">
              We specialize in delivering end-to-end infrastructure solutions,
              including Roads, Bridges, Buildings, and Water Treatment facilities.
            </p>

            <div className="row mb-4 g-3 g-md-4 pb-xl-3 fade_up_anim">
              <div className="col-md-6 about-info-1">
                <div className="d-flex gap-3 align-items-start">
                  <Image src={support2} width={40} height={40} alt="" />
                  <div>
                    <h5 className="fw-semibold">Complete Project Support</h5>
                    <p>Technical assistance throughout construction.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex gap-3 align-items-start ps-md-3">
                  <Image src={installation} width={40} height={40} alt="" />
                  <div>
                    <h5 className="fw-semibold">
                      Efficient & Cost-Effective Execution
                    </h5>
                    <p>Optimized methods for timely delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===== End Right Content ===== */}
        </div>
      </div>
    </section>
  );
};

export default Features;
