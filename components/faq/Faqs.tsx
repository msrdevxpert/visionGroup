"use client";

import { useEffect, useState } from "react";
import FaqItem from "../shared/FaqItem";

type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  displayOrder: number;
};

const Faqs = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFaqs = async () => {
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

    getFaqs();
  }, []);

  const firstColumn = faqs.slice(0, 5);
  const secondColumn = faqs.slice(5);

  return (
    <section className="faqs-page pt-120 pb-120">
      <div className="container">

        {/* TITLE */}
        <div className="row g-4 mb-4 mb-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6 text-center">
            <h2 className="mb-3 fade_up_anim">FAQs Simplified Guide</h2>
            <p className="mb-lg-2 fade_up_anim" data-delay=".3">
              We understand that navigating legal matters can raise various questions.
            </p>
          </div>
        </div>

        {/* LOADING */}
        {loading && <p className="text-center py-4">Loading FAQs...</p>}

        {/* EMPTY STATE */}
        {!loading && faqs.length === 0 && (
          <p className="text-center text-danger py-4">No FAQs found!</p>
        )}

        {/* FAQ CONTENT */}
        {!loading && faqs.length > 0 && (
          <div className="row g-4">

            {/* LEFT COLUMN */}
            <div className="col-lg-6">
              <div className="accordion d-flex flex-column gap-3 gap-lg-4" id="faq1">
                {firstColumn.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    id={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    databsParent="#faq1"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <div className="accordion d-flex flex-column gap-3 gap-lg-4" id="faq2">
                {secondColumn.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    id={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    databsParent="#faq2"
                  />
                ))}
              </div>
            </div>

          </div>
        )}

        {/* PAGINATION (STATIC) */}
        <ul className="list-unstyled mb-0 mt-4 pt-lg-3 d-flex justify-content-center gap-2 gap-sm-3 pagination">
          <li>
            <a href="#"><i className="ti ti-chevron-left"></i></a>
          </li>
          <li><a href="#" className="active">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">...</a></li>
          <li>
            <a href="#"><i className="ti ti-chevron-right"></i></a>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default Faqs;
