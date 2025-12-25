"use client";

import { useState } from "react";
import RSelect from "../shared/Select";

const options = [
  { label: "Afghanistan", value: "Afghanistan" },
  { label: "Albania", value: "Albania" },
  { label: "Algeria", value: "Algeria" },
  { label: "Andorra", value: "Andorra" },
  { label: "Angola", value: "Angola" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Something went wrong");

      alert("Message sent successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      alert(err.message || "Failed to send message ❌");
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
                <h3 className="fade_up_anim">Get in touch with us.</h3>
                <p className="mb-3 pb-lg-3 fade_up_anim" data-delay=".3">
                  Fill up the form &amp; our team will get back to you within hours
                </p>
              </div>

            <form onSubmit={handleSubmit}>
  <div className="row g-3 g-lg-4">

    {/* FIRST NAME */}
    <div className="col-md-6">
      <label>First Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Your First Name..."
        required
      />
    </div>

    {/* LAST NAME */}
    <div className="col-md-6">
      <label>Last Name</label>
      <input
        name="lastName"
        onChange={handleChange}
        placeholder="Enter Your Last Name..."
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
        placeholder="Enter Your Email..."
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
        placeholder="Enter Your Phone..."
        required
      />
    </div>

    {/* SUBJECT */}
    <div className="col-12">
      <label>Subject</label>
      <input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter Your Subject..."
        required
      />
    </div>

    {/* MESSAGE */}
    <div className="col-12">
      <label>Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        placeholder="Enter Your Message..."
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
        {loading ? "Sending..." : "Send Message"}
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

export default ContactForm;
