"use client";

import { useState } from "react";

const QuoteForm = ({ isModal = false }: { isModal?: boolean }) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "SOLAR",
    location: "",
    budgetRange: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      location: formData.location,
      budgetRange: formData.budgetRange,
      requirements: formData.requirements,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/enquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Something went wrong");

      alert("Quote request submitted successfully ✅");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "SOLAR",
        location: "",
        budgetRange: "",
        requirements: "",
      });
    } catch (err: any) {
      alert(err.message || "Failed to submit quote ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={isModal ? "" : "contact-page "} style={{paddingBottom:"20px", paddingTop:"20px"}}>

      <div className="">
        <div className="row justify-content-center">
          <div className="">
            <div className="contact-form ">
              <div className="contact-title">
                <h3 className="fade_up_anim">Request a Quote</h3>
                <p className="mb-3 pb-lg-3 fade_up_anim" data-delay=".3">
                  Share your project details and our team will contact you shortly
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 g-lg-4">

                  {/* FIRST NAME */}
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      required
                    />
                  </div>

                  {/* LAST NAME */}
                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div className="col-md-6">
                    <label>Phone</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>

                  {/* PROJECT TYPE */}
                  <div className="col-md-6">
                    <label>Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="SOLAR">Solar</option>
                      <option value="CIVIL">Civil</option>
                      <option value="AGRICULTURE">Agriculture</option>
                      <option value="SOFTWARE">Software</option>
                    </select>
                  </div>

                  {/* LOCATION */}
                  <div className="col-md-6">
                    <label>Location</label>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Project Location"
                      required
                    />
                  </div>

                  {/* BUDGET */}
                  <div className="col-12">
                    <label>Budget Range</label>
                    <input
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      placeholder="e.g. ₹5L – ₹10L"
                      required
                    />
                  </div>

                  {/* REQUIREMENTS */}
                  <div className="col-12">
                    <label>Project Requirements</label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your project requirements..."
                      required
                    />
                  </div>

                  {/* BUTTON */}
                  <div className="col-12 d-flex justify-content-center pt-lg-3">
                    <button
                      type="submit"
                      className="primary-btn"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Request Quote"}
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

export default QuoteForm;
