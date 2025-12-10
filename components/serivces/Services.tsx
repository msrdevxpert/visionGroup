import services from "@/public/data/services";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  return (
    <section className="all-services">
      <div className="container">
        <div className="row g-3 gx-lg-4 mb-4 mb-lg-5">
          <div className="col-md-7 col-lg-8">
            <h2 className="mb-0 fade_up_anim">Innovative Services to Meet Your Needs</h2>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="fade_up_anim" data-delay=".3">
              We provide a wide range of renewable energy services, with a special focus on wind energy solutions.
            </p>
          </div>
        </div>
        <div className="row g-3 g-4">
          {services.map((service) => (
            <div className="col-sm-6 col-lg-4 col-xl-3 fade_up_anim" data-delay={service.delay} key={service.id}>
              <ServiceCard key={service.id} {...service} />
            </div>
          ))}
        </div>
        <ul className="list-unstyled mt-4 pt-lg-3 d-flex justify-content-center gap-3 pagination">
          <li>
            <a href="#">
              <i className="ti ti-chevron-left"></i>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">
              <i className="ti ti-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
