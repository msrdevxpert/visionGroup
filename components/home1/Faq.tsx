"use client";

import { useEffect, useState } from "react";
import FaqItem from "../shared/FaqItem";
import RSelect from "../shared/Select";
import Image, { StaticImageData } from "next/image";

const options = [
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "India", label: "India" },
  { value: "France", label: "France" },
  { value: "USA", label: "USA" },
];

type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  displayOrder: number;
};
type FaqProps = {
  faqImg?: StaticImageData | string; // dynamic image
  type?: string;
};

const Faq = ({ faqImg, type  }: FaqProps) => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/public`
        );

        const json = await res.json();
        setFaqs(json?.data || []);
      } catch (err) {
        console.error("FAQ Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="faq faq-home"   style={
    faqImg
      ? ({
          "--faq-bg": `url(${typeof faqImg === "string" ? faqImg : faqImg.src})`,
        } as React.CSSProperties)
      : undefined
  }>
      <div className="right-text d-none d-xl-block">
        <h2 className="vertical">Faqs</h2>
      </div>
      <div className="line-right"></div>

      <div className="container overflow-x-hidden">
        <div className="row g-5 align-items-center">

          {/* LEFT FORM */}
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

          {/* RIGHT SIDE FAQ */}
          <div className="col-lg-6 offset-xxl-1">
            <div className="about-line-2"></div>

            <h2 className="fade_up_anim">Frequently Asked Questions</h2>
            <p className="mb-3 mb-xl-4 pb-2 fade_up_anim" data-delay=".3">
              We are here to answer the most common questions our customers ask.
            </p>

            {loading ? (
              <p className="py-4">Loading FAQs...</p>
            ) : faqs.length === 0 ? (
              <p className="text-danger py-4">No FAQs found!</p>
            ) : (
              <div className="accordion d-flex flex-column gap-3 gap-lg-4" id="home1Faq">
                {faqs.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    id={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    databsParent="#home1Faq"
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
