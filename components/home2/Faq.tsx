import faqs from "@/public/data/faqData";
import arrowDown from "@/public/images/arrow-down.png";
import company1 from "@/public/images/company-1.png";
import company2 from "@/public/images/company-2.png";
import company3 from "@/public/images/company-3.png";
import company4 from "@/public/images/company-4.png";
import faqBg2 from "@/public/images/faq-bg-2.webp";
import Image from "next/image";
import FaqItem from "../shared/FaqItem";
const Faq = () => {
  return (
    <section className="faq-2">
      <div className="container-fluid overflow-x-hidden">
        <div className="row overflow-hidden">
          <div className="d-none d-md-block col-md-5 col-xxl-6 px-0 position-relative">
            <div className="reveal reveal--right reveal--overlay">
              <Image src={faqBg2} className="img-fluid testimonial-img" alt="" />
            </div>
            <div className="scroll-card-2 px-5">
              <h3 className="vertical-sm">Scroll</h3>
              <div className="arrow-down">
                <Image src={arrowDown} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-xxl-6 px-0">
            <div className="swiper logo-slider-2 mb-3 mb-md-0">
              <div className="swiper-wrapper">
                <div className="swiper-slide brand-slide">
                  <Image src={company1} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide brand-slide">
                  <Image src={company2} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide brand-slide">
                  <Image src={company3} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide brand-slide">
                  <Image src={company4} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide brand-slide">
                  <Image src={company1} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide brand-slide">
                  <Image src={company2} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide brand-slide">
                  <Image src={company3} className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide brand-slide">
                  <Image src={company4} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-9">
                <div className="faq-content">
                  <h2 className="fade_up_anim">FAQs Simplified Guide</h2>
                  <p className="pb-lg-2 mb-3 mb-xl-4 fade_up_anim" data-delay=".3">
                    We understand that navigating legal matters can raise various questions. Below, we&apos;ve compiled answers to some
                  </p>
                  <div className="accordion d-flex flex-column gap-3 gap-xxl-4" id="home2Faq">
                    {faqs.slice(0, 6).map((faq) => (
                      <FaqItem key={faq.id} {...faq} cls="bg1" databsParent="#home2Faq" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
