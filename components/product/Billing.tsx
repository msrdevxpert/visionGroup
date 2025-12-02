import Link from "next/link";

const Billing = () => {
  return (
    <section className="pt-80 pb-80 bg1 z-3 position-relative">
      <div className="container">
        <div className="row g-4 position-relative">
          <div className="col-lg-8 z-3">
            <div className="product-details-left">
              <div className="bb-dashed-24">
                <h4 className="mb-0">Shipping Address</h4>
              </div>
              <div className="d-flex flex-column gap-3 gap-xl-4">
                <div className="address-card">
                  <div>
                    <div className="d-flex gap-3 align-items-center mb-3">
                      <div className="d-flex align-items-center gap-1">
                        <h5 className="mb-0">Jayvion Simon</h5>
                        <p className="xl-text text-n100">(Home)</p>
                      </div>
                      <button className="white-btn">Default</button>
                    </div>
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                  </div>
                  <div className="d-flex gap-3 gap-xl-4 align-items-center flex-wrap flex-md-nowrap">
                    <button className="text-secondary3 fw-semibold">Delete</button>
                    <button className="outline-btn">Deliver to this Address</button>
                  </div>
                </div>
                <div className="address-card">
                  <div>
                    <div className="d-flex gap-3 align-items-center mb-3">
                      <div className="d-flex align-items-center gap-1">
                        <h5 className="mb-0">Jayvion Simon</h5>
                        <p className="xl-text text-n100">(Office)</p>
                      </div>
                    </div>
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                  </div>
                  <div className="d-flex gap-3 gap-xl-4 align-items-center flex-wrap flex-md-nowrap">
                    <button className="text-secondary3 fw-semibold">Delete</button>
                    <button className="outline-btn">Deliver to this Address</button>
                  </div>
                </div>
                <div className="address-card">
                  <div>
                    <div className="d-flex gap-3 align-items-center mb-3">
                      <div className="d-flex align-items-center gap-1">
                        <h5 className="mb-0">Jayvion Simon</h5>
                        <p className="xl-text text-n100">(Office)</p>
                      </div>
                    </div>
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                  </div>
                  <div className="d-flex gap-3 gap-xl-4 align-items-center flex-wrap flex-md-nowrap">
                    <button className="text-secondary3 fw-semibold">Delete</button>
                    <button className="outline-btn">Deliver to this Address</button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <Link href="/products" className="d-flex align-items-center gap-2">
                  <i className="ti ti-arrow-left text-black"></i>
                  <h6 className="fw-semibold mb-0">Back</h6>
                </Link>
                <button className="d-flex align-items-center gap-2">
                  <i className="ti ti-circle-plus text-black"></i>
                  <h6 className="fw-semibold mb-0">New Address</h6>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 details-right z-3">
            <div className="white-box">
              <p className="text-lg fw-medium mb-3">Price</p>
              <div className="bb-dashed-24 d-flex gap-2 align-items-center">
                <i className="ti ti-tag fs-3"></i>
                <p>From</p>
                <h3 className="mb-0">$39.99</h3>
                <i className="ti ti-info-circle align-self-start"></i>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-n500">Base Price</span>
                  <p className="fw-medium">$39.99</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-n500">State Tax</span>
                  <p className="fw-medium">$5</p>
                </div>
                <div className="d-flex justify-content-between align-items-center bb-dashed-24">
                  <span className="text-n500">Shipping</span>
                  <p className="fw-medium">Free</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-n500">Discount</span>
                  <span className="fw-medium text-secondary3">$5.99</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-n500">Total</span>
                  <p className="fw-medium">$39.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
