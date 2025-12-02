import comments from "@/public/data/comments";
import blogDetails1 from "@/public/images/blog-details-1.webp";
import blogDetails2 from "@/public/images/blog-details-2.webp";
import blogDetails3 from "@/public/images/blog-details-3.webp";
import moreProject1 from "@/public/images/more-project-1.png";
import moreProject2 from "@/public/images/more-project-2.png";
import moreProject3 from "@/public/images/more-project-3.png";
import Image from "next/image";
import Link from "next/link";
import CommentCard from "../cards/CommentCard";
import RSelect from "../shared/Select";
const options = [
  {
    value: "Default",
    label: "Default",
  },
  {
    value: "Name (A-Z)",
    label: "Name (A-Z)",
  },
  {
    value: "Name (Z-A)",
    label: "Name (Z-A)",
  },
  {
    value: "Newest",
    label: "Newest",
  },
];

const Details = () => {
  return (
    <section className="service-details pt-80 pb-80">
      <div className="container">
        <div className="row g-3 g-xl-4 position-relative">
          <div className="col-lg-8">
            <div className="details-left mb-4">
              <div className="reveal reveal--right reveal--overlay overflow-hidden">
                <Image src={blogDetails1} alt="" className="img-fluid w-100" />
              </div>
              <div className="details-content pt-3 pt-lg-4">
                <ul className="list-unstyled p-0 mt-3 mt-xl-4 d-flex flex-wrap align-items-center gap-3">
                  <li className="d-flex align-items-center gap-2 text-n500">
                    <i className="ti ti-user-circle fs-5 text-secondary2"></i> Author
                  </li>
                  <li className="text-sm">•</li>
                  <li className="d-flex align-items-center gap-2 text-n500">
                    <i className="ti ti-calendar-event fs-5 text-secondary2"></i> 23/09/23
                  </li>
                  <li className="text-sm">•</li>
                  <li className="d-flex align-items-center gap-2 text-n500">
                    <i className="ti ti-clock fs-5 text-secondary2"></i> 10:21 AM
                  </li>
                </ul>
                <h2 className="mb-3">How Hydropower Contributes to a Greener Future</h2>
                <p>
                  Hydropower plays a crucial role in the shift towards a greener and more sustainable future. By harnessing the energy of flowing or falling water, hydropower provides a renewable and clean source of electricity that significantly reduces our dependence on fossil fuels. Below are some key ways hydropower contributes to a greener
                  future:
                </p>
                <h3>Renewable and Reliable Energy Source</h3>
                <p>
                  Hydropower is a renewable resource, relying on the Earth&apos;s natural water cycle, which is constantly replenished by rainfall and snowfall. Unlike fossil fuels, which are finite and contribute to pollution, hydropower provides a sustainable energy source that can meet growing electricity demands without depleting resources.
                </p>
                <h4>Reduction in Greenhouse Gas Emissions</h4>
                <p>
                  Generating electricity through hydropower produces minimal greenhouse gas emissions compared to coal or natural gas plants. Hydropower plants do not burn fuel, meaning they do not release carbon dioxide or other pollutants into the atmosphere. This makes hydropower a vital part of efforts to mitigate climate change and reduce our
                  carbon footprint.
                </p>
                <div className="row g-3 align-items-center">
                  <div className="col-sm-6">
                    <div className="reveal reveal--right reveal--overlay overflow-hidden">
                      <Image src={blogDetails2} className="w-100 img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="reveal reveal--right reveal--overlay overflow-hidden">
                      <Image src={blogDetails3} className="w-100 img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <h5 className="mt-4">High Energy Efficiency</h5>
                <p>
                  Hydropower is one of the most efficient methods of electricity production, converting over 90% of the available energy in water into electricity. This efficiency far surpasses that of fossil fuel power plants, which typically convert less than 40% of their fuel&apos;s energy. As a result, hydropower maximizes energy output while
                  minimizing resource usage.
                </p>
                <h6>Support for Grid Stability and Energy Storage</h6>
                <p>
                  Hydropower plants can quickly adjust their output to match electricity demand, making them ideal for stabilizing the power grid. Additionally, many hydropower systems, such as pumped storage, act as energy storage facilities. They can store excess electricity during periods of low demand and release it during peak times, ensuring
                  a stable and reliable energy supply.
                </p>

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
            <div className="product-details-left mb-3 mb-xl-4">
              <div className="mb-3 mb-xl-4 pb-xl-2 d-flex justify-content-between gap-3 flex-wrap align-items-center">
                <h5 className="mb-0">17 Comments</h5>
                <div className="d-flex align-items-center gap-2 flex-shrink-0">
                  <p className="mb-0 flex-shrink-0">Sort by:</p>
                  <RSelect options={options} />
                </div>
              </div>
              <div className="d-flex flex-column gap-3 gap-lg-4">
                {comments.map((comment) => (
                  <CommentCard key={comment.id} {...comment} />
                ))}
                <div className="d-flex">
                  <a className="outline-btn" href="#">
                    View All Comment <i className="ti ti-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="product-details-left">
              <h4 className="bb-dashed-24">Write a Comment</h4>
              <form className="review-form">
                <label className="text-lg mb-2 pb-1 d-block fw-medium">Name</label>
                <input type="text" placeholder="Enter Name..." />
                <label className="text-lg mb-2 pb-1 d-block fw-medium">Email</label>
                <input type="email" placeholder="Enter Email..." />
                <label className="text-lg mb-2 pb-1 d-block fw-medium">Review</label>
                <textarea placeholder="Enter Comment..." rows={5}></textarea>
                <button className="outline-btn mt-3">
                  Submit Review <i className="ti ti-arrow-right"></i>
                </button>
              </form>
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
              <h4 className="bb-dashed-24">More News</h4>
              <ul className="more-projects">
                <li className="pt-0">
                  <a href="#">
                    <Image width="100" height="100" src={moreProject1} alt="" />
                    <div>
                      <span className="fw-medium text-lg text-black mb-2 d-block">Blended Families: Love Unites All </span>
                      <span className="text-secondary3 fs-6 fw-semibold">
                        Read News <i className="ti ti-arrow-up-right"></i>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width="100" height="100" src={moreProject2} alt="" />
                    <div>
                      <span className="fw-medium text-lg text-black mb-2 d-block">Surrogacy: Gift of Parenthood</span>
                      <span className="text-secondary3 fs-6 fw-semibold">
                        Read News <i className="ti ti-arrow-up-right"></i>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width="100" height="100" src={moreProject3} alt="" />
                    <div>
                      <span className="fw-medium text-lg text-black mb-2 d-block">Grandparents&apos; Rights: Cherishing Bonds </span>
                      <span className="text-secondary3 fs-6 fw-semibold">
                        Read News <i className="ti ti-arrow-up-right"></i>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width="100" height="100" src={moreProject2} alt="" />
                    <div>
                      <span className="fw-medium text-lg text-black mb-2 d-block">Domestic Violence: Seeking Safety </span>
                      <span className="text-secondary3 fs-6 fw-semibold">
                        Read News <i className="ti ti-arrow-up-right"></i>
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
                  <Link href="/">
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
