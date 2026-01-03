"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  careerId?: any;
};

const CareerDetails = ({ careerId }: CareerDetailsProps) => {
  const router = useRouter();

  const [career, setCareer] = useState<Career | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔥 DEBUG — see what Netlify receives
  console.log("Career ID from page =>", careerId);

  useEffect(() => {
    if (!careerId) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/careers/${careerId}`
        );
        const json = await res.json();
        setCareer(json.data || null);
      } catch (e) {
        setCareer(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [careerId]);

  const handleApplyNow = () => {
    if (!careerId) return;
    router.push(`/applyNow?id=${careerId}`);
  };

  if (loading) return <p className="text-center pt-120">Loading...</p>;
  if (!careerId) return <p className="text-center pt-120">Invalid URL</p>;
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
              {career.jobType?.replace("_", " ")}
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
