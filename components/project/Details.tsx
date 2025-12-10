"use client";
import moreProject1 from "@/public/images/more-project-1.png";
import moreProject2 from "@/public/images/more-project-2.png";
import moreProject3 from "@/public/images/more-project-3.png";
import moreProject4 from "@/public/images/more-project-4.png";
import projectDetails1 from "@/public/images/project-details-1.webp";
import projectDetailsVideo from "@/public/images/project-details-video.webp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommonModal from "../shared/CommonModal";
// import ModalVideo from "react-modal-video";
const Details = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="project-details pt-80 pb-80 z-3 position-relative">
      <div className="container">
        <div className="row g-3 g-xl-4 position-relative">
          <div className="col-lg-8 z-3">
            <div className="details-left">
              <div className="reveal reveal--right reveal--overlay overflow-hidden">
                <Image src={projectDetails1} alt="" className="img-fluid w-100" />
              </div>
              <div className="details-content">
                <h2 className="mb-3">GreenHydro Municipal Project</h2>
                <p>
                  The GreenHydro Municipal Project is a large-scale hydropower initiative designed to provide clean and sustainable energy to a mid-sized city. This project utilizes the natural flow of water in a nearby river to generate renewable energy, supplying electricity to local residents and public facilities while significantly reducing
                  the city&apos;s carbon footprint.
                </p>
                <h3 className="mb-2">Details:</h3>
                <p>
                  Location: The project is situated at a river site near the city&apos;s main water source, chosen for its reliable flow rate and minimal environmental impact. Capacity: 5 MW hydropower station, capable of generating enough electricity to power approximately 4,000 homes. Technology Used:
                  <br />
                  <br />
                  The project employs advanced Kaplan turbines, known for their efficiency in low-flow conditions. <br />
                  <br />
                  These turbines are connected to a high-capacity generator that converts kinetic water energy into electricity. Installation Duration: 12 months, including planning, construction, and testing phases. The project was completed on schedule and within budget. Cost: A mid-tier investment funded through a combination of municipal bonds,
                  state incentives, and private partnerships. <br />
                  Projected to pay for itself in about 10-15 years through energy savings and revenue generation.
                </p>
                <h4>Child-Centered Approach</h4>
                <p>Throughout the mediation process, the well-being of the children remains at the forefront of discussions. The mediator encourages open communication and ensures that the children&apos;s voices are heard, allowing them to express their preferences and concerns in a supportive environment.</p>
                <h4>Project Highlights:</h4>
                <p>
                  Sustainable Energy Source: The hydropower system uses the natural flow of water without significant alterations to the river&apos;s ecosystem. This ensures a minimal environmental footprint while harnessing a reliable and renewable energy source. Community Benefits: The GreenHydro project provides the local community with clean
                  and affordable energy. By generating electricity locally, the city reduces its dependence on external energy sources and stabilizes electricity costs for residents. <br />
                  <br />
                  Environmental Impact: This project contributes to a reduction of approximately 15,000 metric tons of CO₂ emissions annually, helping the city meet its sustainability and climate goals. Additionally, the project includes measures to protect local aquatic wildlife, including fish ladders and monitoring systems. <br />
                  <br />
                  Energy Storage Ready: The project has been designed with the future in mind, featuring provisions for integrating battery storage systems. This will allow the city to store excess energy during periods of low demand and utilize it during peak consumption, maximizing efficiency and reliability. <br />
                  <br />
                  Education and Tourism: The project includes an educational center and a viewing platform, allowing schools and visitors to learn about renewable energy. The initiative has also boosted local tourism by highlighting the city’s commitment to sustainability. <br />
                  <br />
                  Smart Monitoring System: A state-of-the-art monitoring system was installed to provide real-time data on energy production, water levels, and turbine efficiency. This system enables city engineers to optimize performance and ensure the long-term stability of the installation.
                </p>
                <div className="project-video mb-4">
                  <div className="reveal reveal--right reveal--overlay overflow-hidden">
                    <Image src={projectDetailsVideo} className="img-fluid" alt="" />
                  </div>
                  <button onClick={() => setOpen(true)} className="play-btn bg-primary popup-youtube">
                    <i className="ti ti-player-play-filled text-bg2 fs-4"></i>
                  </button>
                </div>
                <h5 className="mb-3">Benefits to the Community:</h5>
                <p>
                  Lower Energy Costs: By generating electricity locally, the project helps stabilize and lower electricity costs for residents, making energy more affordable. <br />
                  <br />
                  Job Creation: The project created over 100 construction jobs during the building phase and continues to support local employment through ongoing maintenance and operational roles. Environmental Stewardship: The GreenHydro project sets a precedent for sustainable energy practices, encouraging other cities to explore renewable
                  solutions. <br />
                  <br />
                  Energy Independence: The local grid is less vulnerable to disruptions or price fluctuations in fossil fuel markets, ensuring a more reliable energy supply for the city.
                </p>
                <h6>Ensuring Stability and Consistency</h6>
                <p>The custody resolution emphasizes the importance of maintaining stability and consistency for the children during the transition. Both parents commit to creating a supportive and loving atmosphere in their respective homes, fostering a sense of security for the children.</p>
                <div className="row g-4 details-bottom d-flex flex-wrap align-items-center border-top">
                  <div className="col-xxl-6 d-flex flex-wrap justify-content-center justify-content-xxl-start flex-xl-nowrap gap-2 gap-lg-3">
                    <h6 className="d-flex align-items-center gap-2 mb-0">
                      Popular Tag <i className="fs-4 text-primary ti ti-arrow-move-right"></i>
                    </h6>
                    <div className="d-flex gap-2">
                      <a className="tag" href="#">
                        Solar
                      </a>
                      <a className="tag" href="#">
                        Energy
                      </a>
                    </div>
                  </div>
                  <div className="col-xxl-6 d-flex flex-wrap align-items-center gap-2 justify-content-center justify-content-xxl-end">
                    <h6 className="d-flex align-items-center gap-2 mb-0">
                      Follow <i className="fs-4 text-primary ti ti-arrow-move-right"></i>
                    </h6>
                    <ul className="social-links gap-3 p-0">
                      <li>
                        <a href="#">
                          <i className="ti ti-brand-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti ti-brand-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti ti-brand-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti ti-brand-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti ti-brand-twitch"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 details-right z-3">
            <div className="white-box">
              <h4 className="bb-dashed-24">Project Info</h4>
              <table className="w-100">
                <tbody>
                  <tr>
                    <td>Projects Name</td>
                    <td>:</td>
                    <td>GreenHydro Municipal</td>
                  </tr>
                  <tr>
                    <td>Completed Date</td>
                    <td>:</td>
                    <td>25 Jan, 2023</td>
                  </tr>
                  <tr>
                    <td>Opposite</td>
                    <td>:</td>
                    <td>Lois Lane</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>:</td>
                    <td>Dhaka, Bangladesh</td>
                  </tr>
                  <tr>
                    <td>Architect</td>
                    <td>:</td>
                    <td>Esther Howard</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="white-box">
              <h4 className="bb-dashed-24">More Projects</h4>
              <ul className="more-projects">
                <li className="pt-0">
                  <a href="#">
                    <Image width="100" height="100" src={moreProject1} alt="" />
                    <div>
                      <h5 className="fw-medium mb-2 d-block">Harnessing Clean Energy from Water</h5>
                      <span className="text-secondary3 fw-semibold">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width="100" height="100" src={moreProject2} alt="" />
                    <div>
                      <h5 className="fw-medium mb-2 d-block">Sustainable Power for Future Generations</h5>
                      <span className="text-secondary3 fw-semibold">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width="100" height="100" src={moreProject3} alt="" />
                    <div>
                      <h5 className="fw-medium mb-2 d-block">Renewable Energy Through Flowing Rivers</h5>
                      <span className="text-secondary3 fw-semibold">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width="100" height="100" src={moreProject4} alt="" />
                    <div>
                      <h5 className="fw-medium mb-2 d-block">Transforming Rivers into Power Sources</h5>
                      <span className="text-secondary3 fw-semibold">
                        Read More <i className="ti ti-arrow-up-right"></i>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="white-box">
              <h4 className="bb-dashed-24">Call To Action</h4>
              <div className="cta">
                <div className="position-relative z-2">
                  <h3 className="mb-3 text-white">Get Started Today</h3>
                  <p className="mb-4 pb-lg-1 text-white">Our mission is to provide Solar, Wind &amp; Hydropower Installation.</p>
                  <Link href="/contact-us">
                    <i className="ti ti-phone-call"></i>Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="pBFQdxA-apI" onClose={() => setOpen(false)} /> */}
      <CommonModal
        open={open}
        onClose={() => setOpen(false)}
        videoId="LTsxOzNdbRQ"
      />
    </section>
  );
};

export default Details;
