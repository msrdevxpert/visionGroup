import CircularText from "../shared/CircleText";

const Banner = () => {
  return (
    <section id="banner" className="banner-two position-relative">
      <div className="container position-relative">
        <div className="col-12 col-lg-10 col-xxl-9">
          <div className="content">
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center gap-3">
              <h2 className="order-md-1 order-2 fade_up_anim">solar energy</h2>
              <CircularText />
            </div>
            <div className="d-flex flex-wrap flex-sm-nowrap align-items-center gap-3 gap-lg-4">
              <h2 className="primary fade_up_anim" data-delay=".3">
                solutions
              </h2>
              <p className="xl-text fade_up_anim" data-delay=".6">
                Explore how solar energy can revolutionize the way you power your life, sustainably
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
