import projectShowcase1 from "@/public/images/project-showcase-1.webp";
import projectShowcase2 from "@/public/images/project-showcase-2.webp";
import projectShowcase3 from "@/public/images/project-showcase-3.webp";
import projectShowcase4 from "@/public/images/project-showcase-4.webp";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <section className="recent-projects6 pt-120 pb-120">
      <div className="container">
        <div className="section-title">
          <h2 className="mb-2 mb-xl-3 fade_up_anim">Recent Projects Showcase</h2>
          <p className="fade_up_anim" data-delay=".3">
            We take pride in our diverse portfolio of renewable energy projects. Our team has successfully completed numerous wind energy installations.
          </p>
        </div>
        <div className="row g-3 g-xl-4">
          <div className="col-md-5 col-lg-4">
            <div className="project-card">
              <Image src={projectShowcase1} alt="" />
              <div className="info">
                <div className="d-flex justify-content-end">
                  <a href="#">
                    <i className="ti ti-arrow-up-right"></i>
                  </a>
                </div>
                <div>
                  <p className="fw-semibold mb-2">Energy Maintenance</p>
                  <h4>Retail Solar Integration</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="row g-3 g-xl-4">
              <div className="col-12">
                <div className="project-card">
                  <Image src={projectShowcase2} alt="" />
                  <div className="info">
                    <div className="d-flex justify-content-end">
                      <a href="#">
                        <i className="ti ti-arrow-up-right"></i>
                      </a>
                    </div>
                    <div>
                      <p className="fw-semibold mb-2">Wind Installation</p>
                      <h4>Green Horizon Wind Farm</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="project-card">
                  <Image src={projectShowcase3} alt="" />
                  <div className="info">
                    <div className="d-flex justify-content-end">
                      <a href="#">
                        <i className="ti ti-arrow-up-right"></i>
                      </a>
                    </div>
                    <div>
                      <p className="fw-semibold mb-2">Solar Installation</p>
                      <h4>Residential Solar Installation</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="project-card">
                  <Image src={projectShowcase4} alt="" />
                  <div className="info">
                    <div className="d-flex justify-content-end">
                      <a href="#">
                        <i className="ti ti-arrow-up-right"></i>
                      </a>
                    </div>
                    <div>
                      <p className="fw-semibold mb-2">Hydro Power Installation</p>
                      <h4>BlueWave Community Power</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
