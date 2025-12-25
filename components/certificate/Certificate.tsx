"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Certification = {
  id: string;
  title: string;
  description: string;
  issuedBy: string;
  createdAt: string;
};

const CertificationList = () => {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/certifications`)
      .then((res) => res.json())
      .then((data) => {
        setCerts(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="pt-120 pb-120 bg1">
      <div className="container">
        {/* Heading */}
        <div className="row g-4 mb-4 mb-lg-5">
          <div className="col-md-6 col-lg-8">
            <h2 className="fade_up_anim">Our Certifications</h2>
          </div>
          <div className="col-md-6 col-lg-4">
            <p>
              Explore our officially recognized certifications that reflect our
              commitment to quality, safety, and excellence.
            </p>
          </div>
        </div>

        {/* Certification Cards */}
        <div className="row g-3 g-md-4">
          {certs.map((cert) => (
            <div key={cert.id} className="col-xl-6">
              <div className="blog-list-card bg-white p-4 h-100">
                <span className="text-sm text-muted">
                  {new Date(cert.createdAt).toLocaleDateString("en-GB")}
                </span>

                <h4 className="mt-2 text-green">{cert.title}</h4>

                <p className="mb-2">{cert.description}</p>

                <p className="text-sm mb-4">
                  Issued by: <strong>{cert.issuedBy}</strong>
                </p>

                <Link
                  href={`/certificate/${cert.id}`}
                  className="btn btn-outline-success d-inline-flex align-items-center gap-2"
                >
                  View Details <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationList;
