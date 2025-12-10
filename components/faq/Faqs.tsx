import faqs from "@/public/data/faqData";
import FaqItem from "../shared/FaqItem";

const Faqs = () => {
  return (
    <section className="faqs-page pt-120 pb-120">
      <div className="container">
        <div className="row g-4 mb-4 mb-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6 text-center">
            <h2 className="mb-3 fade_up_anim">FAQs Simplified Guide</h2>
            <p className="mb-lg-2 fade_up_anim" data-delay=".3">
              We understand that navigating legal matters can raise various questions. Below, we&apos;ve compiled answers to some
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="accordion d-flex flex-column gap-3 gap-lg-4" id="faq1">
              {faqs.slice(0, 5).map((faq) => (
                <FaqItem key={faq.id} {...faq} databsParent="#faq1" />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion d-flex flex-column gap-3 gap-lg-4" id="faq2">
              {faqs.slice(5).map((faq) => (
                <FaqItem key={faq.id} {...faq} databsParent="#faq2" />
              ))}
            </div>
          </div>
        </div>
        <ul className="list-unstyled mb-0 mt-4 pt-lg-3 d-flex justify-content-center gap-2 gap-sm-3 pagination">
          <li>
            <a href="#">
              <i className="ti ti-chevron-left"></i>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">
              <i className="ti ti-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
