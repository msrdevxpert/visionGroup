"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import FaqItem from "../shared/FaqItem";
import img from "@/public/images/QuestionMarkForService.jpg";

/* ================= TYPES ================= */

type ServiceDetails = {
  id: string;
  serviceType: string;
  name: string;
  description: string;
  createdAt: string;
};

type DetailsProps = {
  id: string;
  type: string; // 🔥 comes from props only
};

type FaqType = {
  id: string;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  displayOrder: number;
};

/* ================= COMPONENT ================= */

const Details = ({ id, type }: DetailsProps) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [service, setService] = useState<ServiceDetails | null>(null);
  const [sidebarServices, setSidebarServices] = useState<ServiceDetails[]>([]);
  const [faqsData, setFaqsData] = useState<FaqType[]>([]);

  const [loading, setLoading] = useState(true);
  const [faqLoading, setFaqLoading] = useState(true);

  /* ================= SERVICE DETAILS ================= */
  useEffect(() => {
    if (!id) return;

   const fetchService = async () => {
  try {
    const res = await fetch(`${BASE_URL}/unified/services?id=${id}`);
    const json = await res.json();

    const serviceData = Array.isArray(json?.data)
      ? json.data[0]
      : null;

    setService(serviceData);
  } catch (err) {
    console.error("Service details error:", err);
  } finally {
    setLoading(false);
  }
};


    fetchService();
  }, [id, BASE_URL]);

  /* ================= SIDEBAR SERVICES ================= */
  useEffect(() => {
    const fetchSidebar = async () => {
      try {
        const url =
          type && type !== "main"
            ? `${BASE_URL}/unified/services?type=${type}`
            : `${BASE_URL}/unified/services`;

        const res = await fetch(url);
        const json = await res.json();

        setSidebarServices(
          (json?.data || []).filter(
            (item: ServiceDetails) => item.id !== id
          )
        );
      } catch (err) {
        console.error("Sidebar services error:", err);
      }
    };

    fetchSidebar();
  }, [type, id, BASE_URL]);

  /* ================= FAQ ================= */
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/faqs/public`
        );
        const json = await res.json();

        // const filtered = (json?.data || []).filter(
        //   (faq: FaqType) =>
        //     faq.category?.toLowerCase() === type?.toLowerCase()
        // );

        setFaqsData(json?.data || []);
      } catch (err) {
        console.error("FAQ error:", err);
      } finally {
        setFaqLoading(false);
      }
    };

    fetchFaqs();
  }, [type]);

  /* ================= CTA TEXT ================= */
  const getCtaText = () => {
    switch (type.toLowerCase()) {
      case "solar":
        return "Our mission is to provide Solar Consultation & Installation.";
      case "civil":
        return "Our mission is to deliver Civil Construction & Infrastructure Services.";
      case "agri":
      case "agriculture":
        return "Our mission is to empower Agriculture with Modern Farming Solutions.";
      default:
        return "Our mission is to deliver reliable and sustainable energy services.";
    }
  };

  /* ================= JSX ================= */
  return (
    <section className="service-details pt-80 pb-80">
      <div className="container">
        <div className="row g-3 g-xl-4">

          {/* ================= LEFT CONTENT ================= */}
          <div className="col-lg-8">

            {loading ? (
              <p className="text-center py-5">Loading service...</p>
            ) : service ? (
              <div className="details-left">
                <Image
                  src={img}
                  alt={service.name}
                  width={900}
                  height={600}
                  className="img-fluid w-100"
                />

                <div className="details-content pt-4">
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>

                  <ul>
                    <li>
                      <strong>Service Type:</strong> {service.serviceType}
                    </li>
                    <li>
                      <strong>Created:</strong>{" "}
                      {new Date(service.createdAt).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-danger py-5">Service not found</p>
            )}

            {/* ================= FAQ ================= */}
            <div className="details-faq mt-5">
              <h4 className="bb-dashed-24">Frequently Asked Questions</h4>

              <div className="accordion d-flex flex-column gap-3">
                {faqLoading ? (
                  <p>Loading FAQs...</p>
                ) : faqsData.length > 0 ? (
                  faqsData.map((faq) => (
                    <FaqItem
                      key={faq.id}
                      id={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                      databsParent="#serviceFaq"
                    />
                  ))
                ) : (
                  <p className="text-muted">
                    No FAQs available for this service
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="col-lg-4 position-sticky">

            {/* OTHER SERVICES */}
            <div className="white-box">
              <h4 className="bb-dashed-24">Other Services</h4>
              <ul className="category-list">
                {sidebarServices.map((item) => (
                  <li key={item.id}>
                    <Link href={`/agriculture/services/${item.id}`}>
                      <Image src={img} width={32} height={32} alt="" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}

                {sidebarServices.length === 0 && (
                  <p className="text-muted">No related services found</p>
                )}
              </ul>
            </div>

            {/* CTA */}
            <div className="white-box">
              <h4 className="bb-dashed-24">Call To Action</h4>
              <div className="cta">
                <div className="position-relative z-2">
                  <h3 className="mb-3 text-white">Get Started Today</h3>
                  <p className="mb-4 text-white">
                    {getCtaText()}
                  </p>
                  <Link href="/contact-us">
                    <i className="ti ti-phone-call"></i> Contact Us
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
