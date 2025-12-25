"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FaqItem from "../shared/FaqItem";
import client1 from "@/public/images/GroupSuurya.png";
import client2 from "@/public/images/evolve.png";
import client3 from "@/public/images/Asun.png";
import client5 from "@/public/images/ModiGroup.png";
import client6 from "@/public/images/MK.jpeg";

type FaqType = {
  id: string;
  question: string;
  answer: string;
  isActive: boolean;
  displayOrder: number;
};

type FaqProps = {
  faqImg?: StaticImageData | string; // dynamic image
  type?: "agri" | "civil";
};

const Faq = ({ faqImg, type = "agri" }: FaqProps) => {
  const [faqs, setFaqs] = useState<FaqType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs/public`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === "success") {
          const activeFaqs = res.data
            .filter((f: FaqType) => f.isActive)
            .sort((a: FaqType, b: FaqType) => a.displayOrder - b.displayOrder);

          setFaqs(activeFaqs);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="faq-2">
      <div className="container-fluid overflow-x-hidden">
        <div className="row overflow-hidden">

          {/* IMAGE LEFT */}
          {faqImg && (
            <div
              className="d-none d-lg-block col-lg-5 px-0 position-relative"
              style={{ height: "610px" }} // parent height for fill
            >
              {typeof faqImg === "string" ? (
                <Image
                  src={faqImg}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <Image
                  src={faqImg}
                  alt=""
                  className="w-100 h-100 object-fit-cover"
                />
              )}
            </div>
          )}

          <div className="col-lg-7 px-0 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col-xxl-9">
                <div className="faq-content no-cta">
                  {/* Dynamic heading */}
                  <h2 className="fade_up_anim">
                    FAQs For {type === "agri" ? "Agricultural" : "Civil"} Solutions
                  </h2>

                  {/* Dynamic text */}
                  <p className="pb-lg-2 mb-4 fade_up_anim" data-delay=".3">
                    {type === "agri"
                      ? "Find answers to common questions about our agriculture-focused services, including modern farming techniques, crop management, and farm operations support."
                      : "Find answers to common questions about our civil engineering solutions, including sustainable building solutions, water infrastructure, and urban projects."}
                  </p>

                  {/* FAQ items */}
                  <div className="accordion d-flex flex-column gap-3 gap-xxl-4" id="home4Faq">
                    {faqs.map((faq) => (
                      <FaqItem
                        key={faq.id}
                        id={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        cls="bg1"
                        databsParent="#home4Faq"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Brand slider */}
            <div className="w-100">
              <Swiper
                autoplay={{ delay: 1 }}
                speed={5000}
                loop
                slidesPerView={"auto"}
                modules={[Autoplay]}
                className="swiper logo-slider-4"
              >
                {[client1, client2, client3, client5, client6].map((client, idx) => (
                  <SwiperSlide key={idx} className="brand-slide" style={{ paddingInline: "100px" }}>
                    <Image src={client} className="img-fluid" alt="" style={{ width: "150px" }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
