import projects from "@/public/data/projects";
import Image from "next/image";
import Link from "next/link";

const pagination = [1, 2, 3, "..."];
const Projects = () => {
  return (
    <section className="impactful-project pb-120 pt-120 position-relative z-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="fade_up_anim">Our Impactful Energy Projects</h2>
            <p className="mb-4 pb-lg-3 fade_up_anim" data-delay=".3">
              We take immense pride in our portfolio of successful legal projects that have made a positive impact on our clients lives and the community.
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 mt-lg-5 pt-lg-5">
            {projects.slice(0, 2).map((project) => (
              <div className="impactful-card mb-4" key={project.id}>
                <div className="reveal reveal--right reveal--overlay overflow-hidden">
                  <Image className="img-fluid" src={project.image} alt={project.title} />
                </div>
                <Link href={`/projects/${project.id}`} className="content">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="mb-0">{project.description}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {projects.slice(2).map((project) => (
              <div className="impactful-card mb-4" key={project.id}>
                <div className="reveal reveal--right reveal--overlay overflow-hidden">
                  <Image className="img-fluid" src={project.image} alt={project.title} />
                </div>
                <Link href={`/projects/${project.id}`} className="content">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="mb-0">{project.description}</p>
                </Link>
              </div>
            ))}
            <div className="d-flex justify-content-center">
              <ul className="list-unstyled mt-4 pt-lg-3 d-flex justify-content-center gap-3 pagination">
                <li>
                  <a href="#">
                    <i className="ti ti-chevron-left"></i>
                  </a>
                </li>
                {pagination.map((item, index) => (
                  <li key={index}>
                    <a href="#" className={item === 1 ? "active" : ""}>
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#">
                    <i className="ti ti-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
