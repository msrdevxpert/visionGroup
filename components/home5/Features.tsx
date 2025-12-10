import freeShipping from "@/public/images/free-shipping.png";
import payment from "@/public/images/payment.png";
import returnPolicy from "@/public/images/return.png";
import support from "@/public/images/support.png";
import Image from "next/image";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row g-3">
          <div className="col-sm-6 col-xl-3 feature-card">
            <div className="d-flex align-items-center gap-3">
              <Image src={freeShipping} alt="" />
              <div>
                <p className="xl-text fw-medium mb-2">Free Shipping</p>
                <span className="text-sm">Free shipping on all US order or order above $200</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 feature-card">
            <div className="d-flex align-items-center gap-3">
              <Image src={support} alt="" />
              <div>
                <p className="xl-text fw-medium mb-2">24/7 Support</p>
                <span className="text-sm">Contact us 24 hours a day, 7 days a week</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 feature-card">
            <div className="d-flex align-items-center gap-3">
              <Image src={returnPolicy} alt="" />
              <div>
                <p className="xl-text fw-medium mb-2">30Days Return</p>
                <span className="text-sm">Simply return it within 30 days for an exchange</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 feature-card">
            <div className="d-flex align-items-center gap-3">
              <Image src={payment} alt="" />
              <div>
                <p className="xl-text fw-medium mb-2">Payment Secure</p>
                <span className="text-sm">Enjoy Secure payment with us, no complexity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
