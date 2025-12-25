"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FaqItem from "../shared/FaqItem";
import arrowDown from "@/public/images/arrow-down.png";
import client1 from "@/public/images/GroupSuurya.png";
import client2 from "@/public/images/evolve.png";
import client3 from "@/public/images/Asun.png";
import client4 from "@/public/images/KingSolar.jpeg";
import client5 from "@/public/images/ModiGroup.png";
import client6 from "@/public/images/MK.jpeg";
import faqBg2 from "@/public/images/solar-pane.jpg";

type FaqType = {
  id: string;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  displayOrder: number;
  createdAt?: string;
  updatedAt?: string;
};

type FaqProps = {
  type?: string; // optional, default to "main"
};

const Faq = ({ type = "main" }: FaqProps) => {
  const [faqsData, setFaqsData] = useState<FaqType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const url =
          type.toLowerCase() === "main"
            ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/public`
            : `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/public?category=${type}`;

        const res = await fetch(url);
        const json = await res.json();
        setFaqsData(json.data || []);
      } catch (err) {
        console.error("FAQs API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [type]);

  return (
    <section className="faq-2">
      <div className="container-fluid overflow-x-hidden">
        <div className="row overflow-hidden">
          <div className="d-none d-md-block col-md-5 col-xxl-6 px-0 position-relative">
            <div className="reveal reveal--right reveal--overlay">
              <Image src={faqBg2} className="testimonial-img" alt="" />
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
                {[client1, client2, client3, client4, client5, client6].map((imgSrc, idx) => (
                  <div className="swiper-slide brand-slide" key={idx}>
                    <Image src={imgSrc} className="img-fluid" alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-9">
                <div className="faq-content">
                  <h2 className="fade_up_anim">FAQs Simplified Guide</h2>
                  <p className="pb-lg-2 mb-3 mb-xl-4 fade_up_anim" data-delay=".3">
                    We understand that navigating legal matters can raise various questions. Below, we've compiled answers to some.
                  </p>
                  <div className="accordion d-flex flex-column gap-3 gap-xxl-4" id="home2Faq">
                    {loading ? (
                      <p>Loading FAQs...</p>
                    ) : faqsData.length > 0 ? (
                      faqsData.map((faq) => (
                        <FaqItem
                          key={faq.id}
                          id={faq.id}
                          question={faq.question}
                          answer={faq.answer}
                          cls="bg1"
                          databsParent="#home2Faq"
                        />
                      ))
                    ) : (
                      <p className="text-muted">No FAQs available for this category</p>
                    )}
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
