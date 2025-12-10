import Link from "next/link";
import Lines from "../shared/Lines";

const Banner = () => {
  return (
    <section className="about-banner space-header">
      <Lines />
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 z-2 banner-content">
            <h2 className="display-4 text-white mb-3 fade_up_anim">About Us</h2>
            <ul className="list-unstyled d-flex align-items-center gap-2 fade_up_anim" data-delay=".3">
              <li>
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <i className="ti ti-chevron-right text-white"></i>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
