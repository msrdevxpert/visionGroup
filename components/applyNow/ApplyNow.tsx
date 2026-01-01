"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const ApplyNowForm = () => {
  const searchParams = useSearchParams();
  const positionId = searchParams.get("id"); // Get ?id=xxx

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resumeUrl: "",
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);

  if (!positionId) {
    return (
      <p className="text-center pt-120">
        Invalid job position ❌
      </p>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/job-applications`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ positionId, ...formData }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message);

      alert("Application submitted successfully ✅");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        resumeUrl: "",
        coverLetter: "",
      });
    } catch (err: any) {
      alert(err.message || "Submission failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="contact-form reveal reveal--top">
              <div className="contact-title">
                <h3>Apply for this position</h3>
                <p>Our HR team will contact you shortly</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 g-lg-4">
                  <div className="col-md-6">
                    <label>Full Name</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Phone</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Resume URL</label>
                    <input
                      type="url"
                      name="resumeUrl"
                      value={formData.resumeUrl}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label>Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="primary-btn" disabled={loading}>
                      {loading ? "Submitting..." : "Apply Now"}
                      <i className="ti ti-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowForm;
