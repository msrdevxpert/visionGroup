import Link from "next/link";
import Lines from "../shared/Lines";

type BannerProps = {
  bgImage: string;
};

const Banner = ({ bgImage }: BannerProps) => {
  return (
    <section
      className="about-banner space-header"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Lines />

      <div className="container position-relative">
        <div className="row">
          <div className="col-12 z-2 banner-content">
            <h2 className="display-4 text-white mb-3 fade_up_anim">
              About Us
            </h2>

            <ul
              className="list-unstyled d-flex align-items-center gap-2 fade_up_anim"
              data-delay=".3"
            >
              <li>
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <i className="ti ti-chevron-right text-white"></i>
              </li>
              <li>
                <span className="text-white">About Us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
