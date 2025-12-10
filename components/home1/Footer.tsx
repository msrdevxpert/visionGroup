import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 left-col pe-0">
            <div>
              <div className="cta reveal reveal--left reveal--overlay">
                <div className="cta-content">
                  <h2 className="mb-2 fade_up_anim">Start Your Solar Journey Today</h2>
                  <p className="mb-3 mb-xl-4 fade_up_anim" data-delay=".3">
                    Ready to embrace the power of the sun? Take the first step towards a sustainable future by switching to solar energy. Here is it start now!
                  </p>
                  <Link href="/contact-us" className="black-btn">
                    Contact Us <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative overflow-x-hidden">
        <div className="container footer-up">
          <div className="row g-3 g-lg-4">
            <div className="col-md-6 col-xl-3">
              <div className="footer-card fade_up_anim">
                <a href="#">
                  <Image src={logo} className="img-fluid mb-4" alt="" />
                </a>
                <p className="mb-4 pb-lg-3 text-white">Welcome to Solarox, where legal expertise meets personalized service. We are a team of highly skilled attorneys dedicated to providing</p>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="ti ti-brand-facebook"></i>
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
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="footer-card fade_up_anim" data-delay=".2">
                <h3 className="text-white pb-3">Quik Link</h3>
                <ul className="contact list-unstyled quick-link">
                  <li>
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="footer-card fade_up_anim" data-delay=".4">
                <h3 className="text-white pb-3">Contact</h3>
                <ul className="contact">
                  <li className="contact-item">
                    <div className="contact-icon">
                      <i className="ti ti-phone-call"></i>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <a href="tel:(808)555-0111" className="text-white">
                        (808) 555-0111,
                      </a>
                      <a href="tel:(808)555-0111" className="text-white">
                        (302) 555-0107
                      </a>
                    </div>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <i className="ti ti-mail"></i>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <a href="mailto:info@example.com" className="text-white">
                        info@example.com,
                      </a>
                      <a href="mailto:info@example.com" className="text-white">
                        info@example.com
                      </a>
                    </div>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <i className="ti ti-map-pin-search"></i>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="text-white">2118 Thornridge Cir. Syracuse, Connecticut</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="footer-card fade_up_anim" data-delay=".6">
                <h3 className="text-white mb-4">Subscribe</h3>
                <form>
                  <input type="email" className="ps-2" placeholder="Your Email..." required />
                  <button>
                    <i className="ti ti-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <div className="col-12">
              <div className="footer-card d-flex flex-wrap gap-3 align-items-center justify-content-between px-3">
                <p className="text-white">
                  Copyright © <a href="#">Solarox</a> All rights reserved.
                </p>
                <ul className="list-unstyled d-flex flex-wrap align-items-center mb-0 ps-0 gap-2">
                  <li>
                    <a href="#" className="text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="text-primary text-sm d-none d-sm-block">
                    <i className="ti ti-point-filled"></i>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
