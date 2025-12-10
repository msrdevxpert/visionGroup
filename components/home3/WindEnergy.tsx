import Link from "next/link";

const WindEnergy = () => {
  return (
    <section className="empower overflow-x-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 offset-md-2 offset-lg-4">
            <div className="reveal reveal--right reveal--overlay overflow-hidden">
              <div className="empower-card">
                <h2 className="mb-3 fade_up_anim">Trusted Renewable Wind Energy Solutions Platform</h2>
                <p className="mb-4 pb-lg-5 fade_up_anim" data-delay=".3">
                  Welcome to your trusted platform for renewable wind energy solutions. Our mission is to provide innovative, reliable, and sustainable wind energy systems.
                </p>
                <Link href="/projects" className="read-more-three">
                  See Projects <i className="ti ti-arrow-up-right arrow-sm rounded-circle text-black bg-primary"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindEnergy;
