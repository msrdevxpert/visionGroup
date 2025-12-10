import RSelect from "../shared/Select";
const options = [
  {
    label: "Afghanistan",
    value: "Afghanistan",
  },
  {
    label: "Albania",
    value: "Albania",
  },
  {
    label: "Algeria",
    value: "Algeria",
  },
  {
    label: "Andorra",
    value: "Andorra",
  },
  {
    label: "Angola",
    value: "Angola",
  },
];
const ContactForm = () => {
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
              <form id="contact-form">
                <div className="row g-3 g-lg-4">
                  <div className="col-md-6">
                    <label htmlFor="name">Name</label>
                    <input name="user_name" type="text" id="name" placeholder="Enter Your Name..." required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <input name="user_email" type="email" id="email" placeholder="Enter Your Email..." required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Phone</label>
                    <input name="contact_number" type="number" id="phone" placeholder="Enter Your Phone..." required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="country">Country</label>
                    <RSelect options={options} cls="n0" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Enter Your Message..." name="message" id="message" className="w-100" rows={5} required></textarea>
                  </div>
                  <div className="col-12 d-flex justify-content-center pt-lg-3">
                    <button type="submit" className="primary-btn" id="submit-btn">
                      Send Message <i className="ti ti-arrow-up-right"></i>
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
