import logoBlack from "@/public/images/logo-black.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer footer-two position-relative pt-120">
      <div className="position-relative overflow-x-hidden">
        <div className="footer-two-inner content">
          <div className="row g-3 g-lg-0">
            <div className="col-md-4 col-xl-3">
              <div className="footer-card px-2 pe-xl-5 fade_up_anim">
                <a href="#">
                  <Image src={logoBlack} className="img-fluid mb-4" alt="" />
                </a>
                <p className="mb-4 pb-lg-3">Welcome to Solarox, where legal expertise meets personalized service. We are a team of highly skilled attorneys dedicated to providing</p>
                <ul className="social-link two">
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
            <div className="col-md-8 col-xl-9">
              <div className="navigate-part">
                <div className="top">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="fw-normal fade_up_anim">Subscribe to our newsletter for the latest updates</h3>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex justify-content-end w-100">
                        <form className="two">
                          <input type="email" className="ps-2" placeholder="Your Email..." required />
                          <button>
                            <i className="ti ti-send"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-3 g-lg-0">
                  <div className="col-sm-6 col-xl-3 fade_up_anim">
                    <h4 className="mb-4">Quick Link</h4>
                    <ul className="navigation-links">
                      <li>
                        <Link href="/"> Home</Link>
                      </li>
                      <li>
                        <Link href="/about-us"> About Us</Link>
                      </li>
                      <li>
                        <Link href="/services"> Service</Link>
                      </li>
                      <li>
                        <Link href="/blog-standard"> Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact-us"> Contact us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-xl-3 fade_up_anim" data-delay=".2">
                    <h4 className="mb-4">Pages</h4>
                    <ul className="navigation-links">
                      <li>
                        <Link href="/"> Projects</Link>
                      </li>
                      <li>
                        <Link href="/about-us"> Project Details</Link>
                      </li>
                      <li>
                        <Link href="/services"> Blog</Link>
                      </li>
                      <li>
                        <Link href="/blog-standard"> Faqs</Link>
                      </li>
                      <li>
                        <Link href="/contact-us"> Contact us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-xl-3 fade_up_anim" data-delay=".4">
                    <h4 className="mb-4">Shop</h4>
                    <ul className="navigation-links">
                      <li>
                        <Link href="/"> Products</Link>
                      </li>
                      <li>
                        <Link href="/about-us"> Product Details</Link>
                      </li>
                      <li>
                        <Link href="/services"> Cart</Link>
                      </li>
                      <li>
                        <Link href="/blog-standard"> Billing &amp; Address</Link>
                      </li>
                      <li>
                        <Link href="/contact-us"> Payment</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-xl-3 fade_up_anim" data-delay=".6">
                    <div className="flex-grow-1">
                      <h4 className="pb-3">Contact</h4>
                      <ul className="contact-two mb-0">
                        <li className="contact-item">
                          <div className="contact-icon">
                            <i className="ti ti-phone-call"></i>
                          </div>
                          <div className="d-flex flex-column gap-1">
                            <a href="tel:(808)555-0111">(808) 555-0111,</a>
                            <a href="tel:(808)555-0111">(302) 555-0107</a>
                          </div>
                        </li>
                        <li className="contact-item">
                          <div className="contact-icon">
                            <i className="ti ti-mail"></i>
                          </div>
                          <div className="d-flex flex-column gap-1">
                            <a href="mailto:info@example.com">info@example.com,</a>
                            <a href="mailto:info@example.com">info@example.com</a>
                          </div>
                        </li>
                        <li className="contact-item">
                          <div className="contact-icon">
                            <i className="ti ti-map-pin-search"></i>
                          </div>
                          <div className="d-flex flex-column gap-1">
                            <p>3605 Parker Rd.</p>
                            <p>3890 Poplar Dr.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-two d-flex flex-wrap gap-3 align-items-center justify-content-between px-3">
            <p>
              Copyright ©
              <a href="#" className="text-secondary3">
                Solarox
              </a>
              All rights reserved.
            </p>
            <ul className="list-unstyled d-flex flex-wrap align-items-center mb-0 ps-0 gap-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-sm d-none d-sm-block">
                <i className="ti ti-point-filled"></i>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
