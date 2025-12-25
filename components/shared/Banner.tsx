"use client"
import { StaticImageData } from "next/image";
import Link from "next/link";
import Lines from "./Lines";
import { usePathname } from "next/navigation";

type Props = {
  bgImage: StaticImageData | string;
  title: string;
};
const Banner = ({ bgImage, title }: Props) => {
     const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // removes empty items

  let homeUrl = "/";

  // If URL has 2 or more segments → /solar/contact or /it/services
  if (segments.length >= 2) {
    homeUrl = `/${segments[0]}`; // solar, it, etc.
  }
  console.log(homeUrl);
  
  return (
    <section className="page-banner" style={{ backgroundImage: `url(/images/${bgImage})` }}>
      <Lines />
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xxl-7 col-3xl-6 z-2 banner-content px-3">
            <h2 className="display-4 text-white mb-3 fade_up_anim">{title}</h2>
            <ul className="list-unstyled d-flex justify-content-center align-items-center gap-2 fade_up_anim mb-0" data-delay=".3">
              <li>
                <Link href={homeUrl} className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <i className="ti ti-chevron-right text-white"></i>
              </li>
              <li>
                <span className="text-primary">{title}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
