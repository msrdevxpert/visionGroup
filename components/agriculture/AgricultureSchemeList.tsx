"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Scheme = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
};

const AgricultureSchemeList = () => {
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/agriculture/schemes`)
      .then((res) => res.json())
      .then((data) => {
        setSchemes(data?.data || []);
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
            <h2 className="fade_up_anim">Agriculture Schemes</h2>
          </div>
          <div className="col-md-6 col-lg-4">
            <p>
              Explore government and institutional agriculture schemes designed
              to support farmers and promote sustainable agriculture.
            </p>
          </div>
        </div>

        {/* Scheme Cards */}
        <div className="row g-3 g-md-4">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="col-xl-6">
              <div className="blog-list-card bg-white p-4 h-100">
                <span className="text-sm text-muted">
                  {new Date(scheme.createdAt).toLocaleDateString("en-GB")}
                </span>

                <h4 className="mt-2 text-green">{scheme.name}</h4>

                {/* LIMITED CONTENT */}
                <p className="mb-4">
                  {scheme.description.length > 120
                    ? scheme.description.slice(0, 120) + "..."
                    : scheme.description}
                </p>

                <Link
                  href={`/agriculture/agricultureScheme/${scheme.id}`}
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

export default AgricultureSchemeList;
