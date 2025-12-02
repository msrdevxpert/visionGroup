"use client";

import faqs from "@/public/data/faqData";
import FaqItem from "../shared/FaqItem";
import RSelect from "../shared/Select";
const options = [
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "India", label: "India" },
  { value: "France", label: "France" },
  { value: "USA", label: "USA" },
];
const Faq = () => {
  return (
    <section className="faq faq-home">
      <div className="right-text d-none d-xl-block">
        <h2 className="vertical">Faqs</h2>
      </div>
      <div className="line-right"></div>
      <div className="container overflow-x-hidden">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 col-xxl-5">
            <div>
              <form id="contact-form">
                <h3 className="fade_up_anim">Get in touch with us.</h3>
                <p className="mb-3 mb-xl-4 fade_up_anim" data-delay=".3">
                  Fill up the form &amp; our team will get back to you within hours.
                </p>
                <div className="row g-3 g-lg-4">
                  <div className="col-md-6">
                    <label htmlFor="name">Name</label>
                    <input className="solarox-input" name="user_name" type="text" id="name" placeholder="Enter Your Name..." required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <input className="solarox-input" name="user_email" type="email" id="email" placeholder="Enter Your Email..." required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Phone</label>
                    <input className="solarox-input" name="contact_number" type="number" id="phone" placeholder="Enter Your Phone..." required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="country">Country</label>
                    <RSelect options={options} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Enter Your Message..." name="message" id="message" className="solarox-input" rows={5} required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="primary-btn" id="submit-btn">
                      Send Message <i className="ti ti-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 offset-xxl-1">
            <div className="about-line-2"></div>
            <h2 className="fade_up_anim">Frequently Asked Questions</h2>
            <p className="mb-3 mb-xl-4 pb-2 fade_up_anim" data-delay=".3">
              we understand that seeking legal representation can raise various questions. Below are some of the most frequently asked questions to help
            </p>
            <div className="accordion d-flex flex-column gap-3 gap-lg-4" id="home1Faq">
              {faqs.slice(0, 5).map((faq) => (
                <FaqItem key={faq.id} {...faq} databsParent="#home1Faq" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
