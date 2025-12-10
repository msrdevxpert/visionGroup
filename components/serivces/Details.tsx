import faqs from "@/public/data/faqData";
import audit from "@/public/images/audit.png";
import battery from "@/public/images/battery.png";
import consult from "@/public/images/consult.png";
import monitor from "@/public/images/monitor.png";
import service1 from "@/public/images/service-1.png";
import service2 from "@/public/images/service-2.png";
import serviceDetails1 from "@/public/images/service-details-1.webp";
import serviceDetails2 from "@/public/images/service-details-2.webp";
import Image from "next/image";
import Link from "next/link";
import FaqItem from "../shared/FaqItem";
const Details = () => {
  return (
    <section className="service-details pt-80 pb-80">
      <div className="container">
        <div className="row g-3 g-xl-4 position-relative">
          <div className="col-lg-8">
            <div className="details-left">
              <div className="reveal reveal--right reveal--overlay overflow-hidden">
                <Image src={serviceDetails1} alt="" className="img-fluid w-100" />
              </div>
              <div className="details-content pt-3 mt-xl-4">
                <h2>Solar Panel Installation</h2>
                <p>Installed a 6 kW solar panel system on a residential rooftop. This project included 20 high-efficiency photovoltaic panels with a compact inverter setup, optimized for suburban homes. The system provides enough energy to meet 90% of the household&apos;s electricity needs, significantly lowering energy bills.</p>
                <h3>Details:</h3>
                <ul>
                  <li>System Size: 6 kW</li>
                  <li>Number of Panels: 20 high-efficiency photovoltaic panels</li>
                  <li>Inverter: Compact string inverter setup to convert DC to usable AC power for household consumption.</li>
                  <li>Location: Suburban neighborhood with excellent sun exposure.</li>
                  <li>Installation Duration: 3 days from start to finish, including site preparation, panel mounting, and system setup.</li>
                  <li>Cost: Mid-range installation with long-term savings on energy bills. The investment is expected to break even in about 5-7 years.</li>
                </ul>
                <div className="row g-3 align-items-center">
                  <div className="col-md-7">
                    <h4>Service Highlights:</h4>
                    <p>
                      Monitoring and Maintenance: A smart monitoring system was installed, allowing the homeowner to track energy production and consumption in real-time through a mobile app. This provides detailed insights and helps identify maintenance needs. Maintenance includes periodic cleaning of the panels to ensure they operate at peak
                      efficiency.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className="reveal reveal--right reveal--overlay overflow-hidden">
                      <Image src={serviceDetails2} className="w-100 img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <h5 className="mt-3">More Details</h5>
                <p>
                  Energy Savings: The system is designed to meet approximately 90% of the household’s electricity needs, drastically lowering utility bills. Within the first year, the homeowner experienced a 30% reduction in electricity costs. <br />
                  <br />
                  Environmental Impact: The installation reduces the household’s carbon footprint, avoiding an estimated 4.5 metric tons of CO₂ emissions per year. This contributes to the broader goal of reducing reliance on non-renewable energy sources.
                </p>
                <h6>Benefits to the Homeowner:</h6>
                <p className="bb-dashed-24">
                  Reduced Energy Bills: Immediate cost savings with a significant decrease in monthly electricity bills. Increased Property Value: Homes with solar installations typically have higher property values due to their lower operating costs. <br />
                  <br />
                  Sustainability: The household now operates on clean, renewable energy, contributing to a healthier environment. Energy Independence: Increased protection against rising energy costs, with less dependence on the traditional power grid.
                </p>
                <div className="row g-4 gx-lg-0 align-items-center">
                  <div className="col-lg-6 d-flex flex-wrap flex-xxl-nowrap gap-2 gap-lg-3">
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
                  <div className="col-lg-6 d-flex flex-wrap align-items-center gap-2 justify-content-end">
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
            <div className="details-faq">
              <h4 className="bb-dashed-24">Frequently Asked Questions</h4>
              <div className="accordion d-flex flex-column gap-3 gap-xl-4" id="serviceFaq">
                {faqs.slice(0, 5).map((faq) => (
                  <FaqItem key={faq.id} {...faq} databsParent="#serviceFaq" />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 position-sticky">
            <div className="white-box">
              <h4 className="bb-dashed-24">Search</h4>
              <form>
                <input type="text" placeholder="Search" />
                <i className="ti ti-search fs-5"></i>
              </form>
            </div>
            <div className="white-box">
              <h4 className="bb-dashed-24">Category</h4>
              <ul className="category-list">
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={consult} alt="" />
                    </div>
                    <span>Wind Consultation</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={consult} alt="" />
                    </div>
                    <span>Wind Installation</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={battery} alt="" />
                    </div>
                    <span>Energy Storage</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={audit} alt="" />
                    </div>
                    <span>Efficiency Audit</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={service2} alt="" />
                    </div>
                    <span>Renewable Energy</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={audit} alt="" />
                    </div>
                    <span>Energy Audit</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={monitor} alt="" />
                    </div>
                    <span>Energy Monitoring</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={service1} alt="" />
                    </div>
                    <span>Maintenance &amp; Repairs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="img-wrapper">
                      <Image width="32" src={monitor} alt="" />
                    </div>
                    <span>Residential Solar</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="white-box">
              <h4 className="bb-dashed-24">Call To Action</h4>
              <div className="cta">
                <div className="content">
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
    </section>
  );
};

export default Details;
