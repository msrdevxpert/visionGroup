const MoreHelp = () => {
  return (
    <section className="more-help">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xl-6">
            <h2 className="fade_up_anim">Need more help?</h2>
            <p className="fade_up_anim" data-delay=".3">
              Queries, complaints and feedback. We will be happy to serve you
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="help-card fade_up_anim">
              <i className="ti ti-phone-call"></i>
              <h4 className="mb-3">Call Now</h4>
              <div className="d-flex flex-column gap-1">
                <a href="tel:7601955124">(+91) 7601955124</a>
                {/* <a href="tel:9075550101">(907) 555-0101</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card fade_up_anim" data-delay=".2">
              <i className="ti ti-mail-opened"></i>
              <h4 className="mb-3">Email Address</h4>
              <div className="d-flex flex-column gap-1">
                <a href="mailto:info@groupvision.co.in">http://www.info@groupvision.co.in</a>
                {/* <a href="mailto:info@example.com">info@example.com</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card fade_up_anim" data-delay=".4">
              <i className="ti ti-map-pin-pin"></i>
              <h4 className="mb-3">Location</h4>
              <div className="d-flex flex-column gap-1">
                <span>Plot No.676/3326, 4th Floor, South Side,mouza-lingipur</span>
                <span>Sisupalgarh, Khorda, Lingaraj, Orissa, India, 751 002</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreHelp;
