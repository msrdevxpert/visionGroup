import arrowDown from "@/public/images/arrow-down.png";
import audit from "@/public/images/audit.png";
import battery from "@/public/images/battery.png";
import consult from "@/public/images/consult.png";
import monitor from "@/public/images/monitor.png";
import service from "@/public/images/service-2.png";
import install from "@/public/images/windmill.png";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  const data = [
    {
      id: 1,
      image: consult,
      title: "Wind Consultation",
      description: "Consulting",
    },
    {
      id: 2,
      image: install,
      title: "Wind Installation",
      description: "Installation",
    },
    {
      id: 3,
      image: battery,
      title: "Energy Storage",
      description: "Storage",
    },
    {
      id: 4,
      image: audit,
      title: "Efficiency Audit",
      description: "Audit",
    },
    {
      id: 5,
      image: service,
      title: "Wind Maintenance",
      description: "Maintenance",
    },
    {
      id: 6,
      image: monitor,
      title: "Monitoring Systems",
      description: "Monitoring",
    },
  ];

  return (
    <section className="legal-solution-3 overflow-x-hidden position-relative">
      <a href="#counter" className="scroll-banner d-none d-xl-flex">
        <h4 className="vertical-sm">Scroll Down...</h4>
        <div className="arrow-down">
          <Image src={arrowDown} alt="" />
        </div>
      </a>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-7 col-xxl-6">
            <div className="row g-4">
              {data.map((item) => (
                <div className="col-sm-6 fade_up_anim" key={item.id}>
                  <Link href={`/services/${item.id}`} className="legal-card">
                    <Image src={item.image} width="68" height="68" className="mb-5" alt="" />
                    <p className="mb-2 pt-2">{item.description}</p>
                    <h4>{item.title}</h4>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-5 offset-xxl-1">
            <h2 className="mb-3 fade_up_anim">Innovative Services to Meet Your Needs</h2>
            <p className="mb-4 pb-lg-5 fade_up_anim" data-delay=".3">
              We provide a wide range of renewable energy services, with a special focus on wind energy solutions.
            </p>
            <Link href="/services/1" className="read-more-vertical d-inline-flex">
              See All <i className="ti ti-arrow-up-right arrow-sm bg-primary text-black rounded-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
