import aboutImg1 from "@/public/images/about-img-1.webp";
import aboutImg2 from "@/public/images/about-img-2.webp";
import rating from "@/public/images/rating.png";
import Image from "next/image";
const About = () => {
  return (
    <section className="about-five">
      <div className="container-big">
        <div className="about-five-content pt-120 pb-120">
          <div className="container position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7 col-xl-6">
                <h2 className="mb-3 mb-xxl-4 fade_up_anim">We Believe Solar, Wind, Hydro Power should be Accessible</h2>
                <p className="mb-4 pb-xl-3 fade_up_anim" data-delay=".2">
                  We are passionate about transforming the way we power our world. As a leading provider of renewable energy solutions.
                </p>
                <div className="quote fade_up_anim" data-delay=".4">
                  <i className="ti ti-quote"></i>
                  “Switching to wind energy was a game-changer for my business. The team provided excellent customer service and designed a system”
                </div>
                <div className="row g-4">
                  <div className="col-md-6 feature one fade_up_anim">
                    <div className="mb-2 d-flex align-items-center gap-2">
                      <button>
                        <i className="ti ti-arrow-right"></i>
                      </button>
                      <h5>Provide Best Discount</h5>
                    </div>
                    <p>We collaborate with top brands to provide you with an extensive.</p>
                  </div>
                  <div className="col-md-6 feature two fade_up_anim" data-delay=".3">
                    <div className="mb-2 d-flex align-items-center gap-2">
                      <button>
                        <i className="ti ti-arrow-right"></i>
                      </button>
                      <h5>User-Friendly Experience</h5>
                    </div>
                    <p>Our platform is designed with you in mind, offering a simple and intuitive.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-6">
                <div className="about-img d-flex justify-content-end">
                  <Image src={aboutImg1} className="about-img-1 d-none d-sm-block img-fluid" alt="" />
                  <div className="about-img-2">
                    <div className="about-line"></div>
                    <Image src={aboutImg2} className="img-fluid" alt="" />
                  </div>
                  <div className="rating">
                    <div className="icon">
                      <Image src={rating} alt="" />
                    </div>
                    <div>
                      <h2 className="mb-1 display-4">25+</h2>
                      <p>Years Experience</p>
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

export default About;
