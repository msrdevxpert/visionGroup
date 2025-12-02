import home6experience from "@/public/images/person-doing-their-construction-job.jpg";
import installation from "@/public/images/installation.png";
import support2 from "@/public/images/support-2.png";
import Image from "next/image";
const Features = () => {
  return (
    <section className="features-6 pt-120 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center position-relative">
          <div className="col-lg-5 col-xl-6">
            <div className="fade_up_anim">
              <div className="exp-img" >
                <Image src={home6experience} style={{maxWidth:"121%"}} className="img-fluid" alt="" />
                <div className="exp-info">
                  <h2 className="display-4 mb-1">25+</h2>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6">
            <h2 className="mb-3 mb-xl-4 fade_up_anim">Building Stronger, Smarter, and Sustainable Infrastructure</h2>
            <p className="mb-4 pb-xl-3 fade_up_anim" data-delay=".3">
              We specialize in delivering end-to-end infrastructure solutions, including Roads, Bridges, Buildings, and Water Treatment facilities. With a strong focus on quality, engineering excellence, and timely execution, we develop structures that enhance connectivity, strengthen communities, and support sustainable growth.</p>
            <div className="row mb-4 g-3 g-md-4 pb-xl-3 fade_up_anim" data-delay=".4">
              <div className="col-md-6 about-info-1">
                <div className="d-flex gap-3 align-items-start">
                  <Image src={support2} width="40" height="40" alt="" />
                  <div>
                    <h5 className="fw-semibold">Complete Project Support</h5>
                    <p>We provide full technical assistance and on-site support throughout every phase of construction.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 align-items-start ps-md-3">
                  <Image src={installation} width="40" height="40" alt="" />
                  <div>
                    <h5 className="fw-semibold">Efficient & Cost-Effective Execution</h5>
                    <p>Our optimized construction methods ensure timely delivery with maximum cost efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row fade_up_anim" data-delay=".5">
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 mb-sm-3">
                  <i className="ti ti-checkbox text-secondary3 xl-text"></i>
                  <p>Commitment to Quality & Safety</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-checkbox text-secondary3 xl-text"></i>
                  <p>End-to-End Civil Solutions</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 mb-sm-3">
                  <i className="ti ti-checkbox text-secondary3 xl-text"></i>
                  <p>Experienced Engineering Team</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-checkbox text-secondary3 xl-text"></i>
                  <p>Reliable Maintenance & Lifecycle Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
