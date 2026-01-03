"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type Career = {
  id: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  description: string;
  createdAt: string;
};

type CareerDetailsProps = {
  careerId: string;
};

const CareerDetails = ({ careerId }: CareerDetailsProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [career, setCareer] = useState<Career | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!careerId) return;

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/careers/${careerId}`)
      .then((res) => res.json())
      .then((res) => {
        setCareer(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [careerId]);

  const handleApplyNow = () => {
    const segments = pathname.split("/").filter(Boolean);
    const filtered = segments.filter((seg) => seg !== "careers");
    const base = filtered.length > 1 ? `/${filtered[0]}` : "";

    router.push(`${base}/applyNow?id=${careerId}`);
  };

  if (loading) return <p className="text-center pt-120">Loading...</p>;
  if (!career) return <p className="text-center pt-120">No job found</p>;

  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="bg-white p-4 p-lg-5 rounded shadow-sm">
          <span className="text-sm text-muted">
            Posted on{" "}
            {new Date(career.createdAt).toLocaleDateString("en-GB")}
          </span>

          <h2 className="mt-2">{career.title}</h2>

          <p className="mt-3">{career.description}</p>

          <div className="mt-3">
            <p className="mb-1">
              <strong>Department:</strong> {career.department}
            </p>
            <p className="mb-1">
              <strong>Location:</strong> {career.location}
            </p>
            <p className="mb-0">
              <strong>Job Type:</strong>{" "}
              {career.jobType.replace("_", " ")}
            </p>
          </div>

          <button
            onClick={handleApplyNow}
            className="primary-btn mt-4 d-inline-flex align-items-center gap-2"
          >
            Apply Now <i className="ti ti-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerDetails;
