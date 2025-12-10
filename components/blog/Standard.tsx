import audit from "@/public/images/audit.png";
import battery from "@/public/images/battery.png";
import blogStandard3 from "@/public/images/blog-standard-3.webp";
import blogStandard4 from "@/public/images/blog-standard-4.webp";
import consult from "@/public/images/consult.png";
import monitor from "@/public/images/monitor.png";
import projectDetails1 from "@/public/images/project-details-1.webp";
import service1 from "@/public/images/service-1.png";
import service2 from "@/public/images/service-2.png";
import serviceDetails1 from "@/public/images/service-details-1.webp";
import Image from "next/image";
import Link from "next/link";
import BlogStandardCard from "../cards/BlogStandardCard";
const blogs = [
  {
    id: 1,
    imageSrc: projectDetails1, // Replace with the actual imported image variable
    alt: "",
    author: "Author",
    date: "23/09/23",
    time: "10:21 AM",
    title: "10 Benefits of Hydropower for Sustainable",
    description: "In this blog post, we discuss practical tips and legal considerations for parents going through a divorce and seeking a fair child custody arrangement that prioritizes the well-being of their children.",
  },
  {
    id: 2,
    imageSrc: serviceDetails1, // Replace with the actual imported image variable
    alt: "",
    author: "Author",
    date: "23/09/23",
    time: "10:21 AM",
    title: "How Hydropower Contributes to Future",
    description: "This blog post delves into the importance of estate planning, including wills, trusts, and other essential documents, to ensure that your assets are protected and your loved ones are taken care.",
  },
  {
    id: 3,
    imageSrc: blogStandard3, // Replace with the actual imported image variable
    alt: "",
    author: "Author",
    date: "23/09/23",
    time: "10:21 AM",
    title: "Hydropower vs. Solar: Which is Right for You?",
    description: "Explore the benefits and effectiveness of mediation as a constructive approach to resolving family disputes, whether related to divorce, child custody, or other family matters.",
  },
  {
    id: 4,
    imageSrc: blogStandard4, // Replace with the actual imported image variable
    alt: "",
    author: "Author",
    date: "23/09/23",
    time: "10:21 AM",
    title: "The Future of Hydropower in Renewable",
    description: "In this blog post, we break down the concept of alimony or spousal support, discussing its purpose, factors considered in its determination, and how it impacts divorcing couples.",
  },
];

const Standard = () => {
  return (
    <section className="service-details pt-80 pb-80">
      <div className="container">
        <div className="row g-4 position-relative">
          <div className="col-lg-8">
            <div className="details-left p-0 bg-transparent">
              {blogs.map((blog) => (
                <BlogStandardCard key={blog.id} {...blog} />
              ))}

              <ul className="list-unstyled mb-0 mt-4 pt-lg-3 d-flex justify-content-center gap-2 gap-sm-3 pagination">
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

export default Standard;
