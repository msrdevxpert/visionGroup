import recent1 from "@/public/images/recent-1.png";
import recent2 from "@/public/images/recent-2.png";
import recent3 from "@/public/images/recent-3.png";
import Image from "next/image";
import Link from "next/link";
const RecentProject = () => {
  return (
    <section className="recent position-relative" id="recent">
      <div className="right-text d-none d-xl-block">
        <h2 className="vertical">Projects</h2>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-2 col-xl-9 offset-xl-3 col-xxl-8 offset-xxl-4">
            <div className="reveal reveal--left">
              <div className="recent-projects">
                <h2 className="pb-1 fade_up_anim">Our Recent Projects</h2>
                <p className="pb-2 pb-lg-4 fade_up_anim" data-delay=".3">
                  We take immense pride in the diverse range of cases and projects we have successfully handled. Our dedication to excellence and unwavering commitment to our
                </p>
                <div className="d-flex flex-column gap-4 mt-3 mb-4 pb-lg-3">
                  <Link href="/project-details" className="project-box flex-wrap flex-sm-nowrap">
                    <Image width="120" height="120" src={recent1} className="img-fluid" alt="" />
                    <div className="d-flex gap-2 gap-lg-3 gap-xl-4 align-items-center pe-3 flex-wrap flex-md-nowrap">
                      <h5>Landmark Criminal Defense Case</h5>
                      <p>In this high-profile criminal defense case, our experienced...</p>
                      <div className="arrow-sm">
                        <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>
                  <Link href="/project-details" className="project-box flex-wrap flex-sm-nowrap">
                    <Image width="120" height="120" src={recent2} className="img-fluid" alt="" />
                    <div className="d-flex gap-2 gap-lg-3 gap-xl-4 align-items-center pe-3 flex-wrap flex-md-nowrap">
                      <h5>Multi-Million Dollar Business Litigation</h5>
                      <p>Representing ABC Corporation in a complex business...</p>
                      <div className="arrow-sm">
                        <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>
                  <Link href="/project-details" className="project-box flex-wrap flex-sm-nowrap">
                    <Image width="120" height="120" src={recent3} className="img-fluid" alt="" />
                    <div className="d-flex gap-2 gap-lg-3 gap-xl-4 align-items-center pe-3 flex-wrap flex-md-nowrap">
                      <h5>High-Stakes Family Law</h5>
                      <p>Our dedication to pursuing the best interests of the...</p>
                      <div className="arrow-sm">
                        <i className="ti ti-arrow-up-right"></i>
                      </div>
                    </div>
                  </Link>
                </div>
                <Link href="/projects" className="primary-btn">
                  See All Projects <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProject;
