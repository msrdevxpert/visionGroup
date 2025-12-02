import batteryDiscount from "@/public/images/battery-discount.webp";
import electricDrill from "@/public/images/electric-drill.webp";
import popularDrill from "@/public/images/popular-drill.webp";
import solarDiscount from "@/public/images/solar-discount.webp";
import toolsDiscount from "@/public/images/tools-discount.webp";
import Image from "next/image";
import Link from "next/link";

const Discounts = () => {
  return (
    <section className="discounts pt-3 pt-xxl-4">
      <div className="container-big">
        <div className="row g-3 g-xxl-4">
          <div className="col-md-5 col-lg-4 col-xl-3">
            <div className="discount-card pb-0 d-flex flex-column justify-content-between">
              <div>
                <h5 className="fade_up_anim">Sale Upto 15%</h5>
                <h2 className="fade_up_anim" data-delay=".3">
                  Popular Drilling Machine
                </h2>
                <Link href="/products" className="primary-btn mb-4">
                  Shop Now
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <Image src={popularDrill} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="row g-3 g-xxl-4">
              <div className="col-xxl-8">
                <div className="discount-card">
                  <div className="discount-percent d-none d-xl-flex">
                    <span className="text-white">Saving</span>
                    <h4 className="mb-0 text-white">25%</h4>
                  </div>
                  <h5 className="fade_up_anim">Exclusive Savings</h5>
                  <h2 className="fade_up_anim" data-delay=".3">
                    Monocrystalline silicon voltaics Solar energy
                  </h2>
                  <div className="pb-3 pb-xxl-5">
                    <Link href="/products" className="primary-btn mb-4">
                      Shop Now
                    </Link>
                  </div>
                  <Image src={solarDiscount} className="solar d-none d-3xl-block d img-fluid" alt="" />
                </div>
              </div>
              <div className="col-xxl-4">
                <div className="discount-card">
                  <h5 className="fade_up_anim">Seasonal Offer</h5>
                  <h2 className="fade_up_anim" data-delay=".3">
                    60 ah Solar Battery
                  </h2>
                  <Link href="/products" className="primary-btn mb-4">
                    Shop Now
                  </Link>
                  <Image src={batteryDiscount} className="battery d-none d-lg-block img-fluid" alt="" />
                </div>
              </div>
              <div className="col-xxl-4">
                <div className="discount-card">
                  <h5 className="fade_up_anim">Ultimate Deal</h5>
                  <h2 className="fade_up_anim" data-delay=".3">
                    Electric Wall Drill Machine
                  </h2>
                  <div className="pb-3 pb-xxl-5">
                    <Link href="/products" className="primary-btn mb-4">
                      Shop Now
                    </Link>
                  </div>
                  <Image src={electricDrill} className="battery d-none d-lg-block img-fluid" alt="" />
                </div>
              </div>
              <div className="col-xxl-8">
                <div className="discount-card">
                  <h5 className="fade_up_anim">Limited-Time Offer</h5>
                  <h2 className="fade_up_anim" data-delay=".3">
                    Modern Mechanical Best Tools
                  </h2>
                  <Link href="/products" className="primary-btn mb-4">
                    Shop Now
                  </Link>
                  <Image src={toolsDiscount} className="battery d-none d-lg-block img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
