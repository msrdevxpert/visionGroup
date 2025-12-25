"use client";
import { useEffect, useState } from "react";
import ServiceCard from "../cards/ServiceCard";

type ServiceItem = {
  id: string;
  serviceType: string;
  name: string;
  description: string;
};

const Services = ({ type = "" }) => {
  const [serviceList, setServiceList] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 8; // Change this number as needed

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        let url = `${BASE_URL}/unified/services`;

        if (type && type !== "main") {
          url += `?type=${type}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        if (data?.status === "success") {
          setServiceList(data.data);
        }
      } catch (err) {
        console.error("Service fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [type]);

  // Calculate pagination
  const indexOfLast = currentPage * servicesPerPage;
  const indexOfFirst = indexOfLast - servicesPerPage;
  const currentServices = serviceList.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(serviceList.length / servicesPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top when page changes
  };

  return (
    <section className="all-services">
      <div className="container">

        <div className="row g-3 gx-lg-4 mb-4 mb-lg-5">
          <div className="col-md-7 col-lg-8">
            <h2 className="mb-0 fade_up_anim">Innovative Services to Meet Your Needs</h2>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="fade_up_anim" data-delay=".3">
              We provide a wide range of renewable energy services.
            </p>
          </div>
        </div>

        {loading ? (
          <p>Loading services...</p>
        ) : (
          <>
            <div className="row g-3 g-4">
              {currentServices.map(service => (
                <div className="col-sm-6 col-lg-4 col-xl-3 fade_up_anim" key={service.id}>
                  <ServiceCard
                    id={service.id}
                    serviceType={service.serviceType}
                    name={service.name}
                    description={service.description}
                    imgSrc=""
                  />
                </div>
              ))}
            </div>

            {/* Pagination */}

<ul className="list-unstyled mt-4 pt-lg-3 d-flex justify-content-center gap-3 pagination">
  <li>
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
      className={currentPage === 1 ? "disabled" : ""}
    >
      <i className="ti ti-chevron-left"></i>
    </a>
  </li>

  {Array.from({ length: Math.max(totalPages, 1) }, (_, i) => i + 1).map(page => (
    <li key={page}>
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
        className={page === currentPage ? "active" : ""}
      >
        {page}
      </a>
    </li>
  ))}

  <li>
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
      className={currentPage === totalPages ? "disabled" : ""}
    >
      <i className="ti ti-chevron-right"></i>
    </a>
  </li>
</ul>


          </>
        )}

      </div>
    </section>
  );
};

export default Services;
