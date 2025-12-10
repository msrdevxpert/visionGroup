import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer position-relative pt-120">
      <div className="position-relative overflow-x-hidden">
        <div className="container footer-up">
          <div className="row g-3 g-lg-4">
            <div className="col-md-6 col-xl-3">
              <div className="footer-card">
                <Link href="/">
                  <Image src={logo} className="img-fluid mb-4" alt="" />
                </Link>
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
              <div className="footer-card">
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
              <div className="footer-card">
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
              <div className="footer-card">
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
