"use client";

import { useEffect, useState } from "react";

type AgricultureScheme = {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  subsidyDetails: string;
  createdAt: string;
};

const AgricultureSchemeDetails = ({ id }: { id: string }) => {
  const [scheme, setScheme] = useState<AgricultureScheme | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/agriculture/schemes/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setScheme(res?.data || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center pt-120">Loading...</p>;

  if (!scheme)
    return <p className="text-center pt-120">No scheme found</p>;

  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="bg-white p-4 p-lg-5 rounded shadow-sm">

          <span className="text-sm text-muted">
            Published on{" "}
            {new Date(scheme.createdAt).toLocaleDateString("en-GB")}
          </span>

          <h2 className="mt-2">{scheme.name}</h2>

          <p className="mt-3">{scheme.description}</p>

          <div className="mt-4">
            <h5>Eligibility</h5>
            <p>{scheme.eligibility}</p>
          </div>

          <div className="mt-4">
            <h5>Subsidy Details</h5>
            <p>{scheme.subsidyDetails}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgricultureSchemeDetails;
