import CircularText from "../shared/CircleText";

const Banner = () => {
  return (
    <section className="banner-six banner-6 overflow-hidden">
      <video muted loop autoPlay>
        <source src="/images/agriHome.mp4" />
      </video>
      <div className="container">
        <div className="row banner-content z-2">
          <div className="col-md-8 align-items-center d-flex">
            <h4 className="hero-6-text fade_up_anim" style={{fontSize:"65px"}}>Sustainable Agriculture & Renewable Energy Solutions</h4>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column gap-3 gap-xxl-5 align-items-md-end">
              <CircularText />
              <p className="text-lg fade_up_anim" data-delay=".3">
               An integrated provider of sustainable agriculture and renewable energy, focusing on biomass pellets, biogas, global agri-trade, and animal farming.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
