import CircleText from "../shared/CircleText";
import Lines from "../shared/Lines";

const Banner = () => {
  return (
    <section id="banner" className="banner space-header">
      <video muted loop autoPlay>
        <source src="/images/visinGrouphome_.mp4" />
      </video>
      <div className="side-text d-none d-xl-flex flex-column align-items-center gap-5">
        <h2 className="vertical" >Synergy. Innovation. Future</h2>
      </div>
      <Lines />
      <div className="container">
        <div className="row banner-content z-2">
          <div className="col-12">
            <h6 className="hero-text fade_up_anim" style={{marginLeft:"15%"}}>Turning Vision</h6>
          </div>
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-md-8 offset-xl-1">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2 gap-sm-4 gap-xxl-5">
                  <CircleText />
                  <h6 className="hero-text order-1 order-md-2 fade_up_anim" data-delay=".4">
                    into Reality
                  </h6>
                </div>
              </div>
              <div className="col-md-4 col-xl-3">
                <p className="mt-3 mt-md-0 fade_up_anim" data-delay=".6">
                  Our cutting-edge solar solutions are designed to save you money, reduce your carbon footprint
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
