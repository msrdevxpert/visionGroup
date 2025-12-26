"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Certification = {
  id: string;
  title: string;
  description: string;
  certificateUrl: string;
  issuedBy: string;
  createdAt: string;
};

export default function CertificationDetails({
  certificateId,
}: {
  certificateId: string;
}) {
  const params = useParams();
  const id = params?.id as string;
  const [cert, setCert] = useState<Certification | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/certifications/${certificateId}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCert(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center pt-120">Loading...</p>;
  if (!cert) return <p className="text-center pt-120">No certification found</p>;

  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="bg-white p-4 p-lg-5 rounded shadow-sm">

          <span className="text-sm text-muted">
            Issued on{" "}
            {new Date(cert.createdAt).toLocaleDateString("en-GB")}
          </span>

          <h2 className="mt-2">{cert.title}</h2>

          <p className="mt-3">{cert.description}</p>

          <p className="mt-3">
            Issued by: <strong>{cert.issuedBy}</strong>
          </p>

          {cert.certificateUrl && (
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn mt-4 d-inline-flex align-items-center gap-2"
            >
              View Certificate <i className="ti ti-arrow-up-right"></i>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};


