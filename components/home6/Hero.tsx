import CircularText from "../shared/CircleText";

const Hero = () => {
  return (
    <section className="banner-six banner-6 overflow-hidden">
      <video muted loop autoPlay>
        <source src="/images/civilhome.mp4" />
      </video>
      <div className="container">
        <div className="row banner-content z-2">
          <div className="col-md-8 align-items-end d-flex">
            <h4 className="hero-6-text fade_up_anim">Building Future Foundations</h4>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column gap-3 gap-xxl-5 align-items-md-end">
              <CircularText />
              <p className="text-lg fade_up_anim" data-delay=".3">
                From innovative construction solutions to durable infrastructure development, we deliver precision, reliability, and engineering excellence that stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
