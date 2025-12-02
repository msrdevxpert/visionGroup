import arrowDown from "@/public/images/arrow-down.png";
import home3Banner from "@/public/images/home-three-banner.webp";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <section id="banner" className="banner-3 position-relative space-header overflow-hidden">
      <a href="#legal-solution" className="scroll-banner">
        <h4 className="vertical-sm">Discover More...</h4>
        <div className="arrow-down">
          <Image src={arrowDown} alt="" />
        </div>
      </a>
      <div className="container">
        <div className="row banner-content">
          <div className="col-lg-8">
            <h2 className="display-2 fw-bold fade_up_anim">Wind Brings Smart Energy Solutions</h2>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-start gap-4">
            <p className="xl-text fade_up_anim" data-delay=".2">
              Experience the future of clean and sustainable energy
            </p>
            <Link href="/about-us" className="read-more-three text-black fw-medium">
              Read More <i className="ti ti-arrow-up-right arrow-sm rounded-circle text-black bg-primary text-dark"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 px-0 position-relative z-2">
          <div className="">
            <div className="reveal reveal--right position-static d-flex justify-content-end">
              <Image src={home3Banner} className="max-un" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
