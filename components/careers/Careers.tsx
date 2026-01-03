"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface CareerItem {
  id: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  description: string;
  createdAt: string;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/careers`;

const Careers = () => {
  const [careers, setCareers] = useState<CareerItem[]>([]);
  const [filteredCareers, setFilteredCareers] = useState<CareerItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Filters (JS only)
  const [filters, setFilters] = useState({
    department: "",
    jobType: "",
  });

const pathname = usePathname();

const buildCareerLink = (id: any) => {
  console.log("35",id);
  
  const segments = pathname.split("/").filter(Boolean);
  const cleaned = segments.filter(seg => seg !== "careers");
  const base = cleaned.length > 0 ? `/${cleaned[0]}` : "";
  return `${base}/careers/${id}`;
};




  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  /* ================= FETCH ================= */
  const fetchCareers = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const json = await res.json();

      const data = json?.data || [];
      setCareers(data);
      setFilteredCareers(data);
      setLoading(false);
    } catch (err) {
      console.error("Career API Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  /* ================= FILTER LOGIC (JS) ================= */
  useEffect(() => {
    let data = [...careers];

    if (filters.department) {
      data = data.filter(
        (c) => c.department.toLowerCase() === filters.department.toLowerCase()
      );
    }

    if (filters.jobType) {
      data = data.filter(
        (c) => c.jobType === filters.jobType
      );
    }

    setFilteredCareers(data);
    setCurrentPage(1);
  }, [filters, careers]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* ================= PAGINATION ================= */
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredCareers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredCareers.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="impactful-project pt-120 pb-120">
      <div className="container">

        {/* ================= FILTER BAR ================= */}
        <div className="filter-bar d-flex gap-3 mb-5 flex-wrap">
          <select
            name="department"
            className="form-select"
            style={{ width: "18%" }}
            onChange={handleChange}
          >
            <option value="">Department</option>
            <option value="Technology">Technology</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
          </select>

          <select
            name="jobType"
            className="form-select"
            style={{ width: "18%" }}
            onChange={handleChange}
          >
            <option value="">Job Type</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="INTERNSHIP">Internship</option>
          </select>
        </div>

        {/* ================= CAREER CARDS ================= */}
        <div className="row g-4">
          {loading ? (
            <p>Loading...</p>
          ) : currentItems.length === 0 ? (
            <p>No openings found.</p>
          ) : (
            currentItems.map((job) => (
              <div className="col-lg-6" key={job.id}>
  <Link
  href={buildCareerLink(job.id)}
  className="impactful-card mb-4 p-4 d-block"
>
      {/* JOB TYPE BADGE */}
      <span className="status-badge ongoing">
        {job.jobType.replace("_", " ")}
      </span>

      <h3>{job.title}</h3>
      <p>{job.description}</p>

      <p className="small text-muted mb-1">
        <strong>Department:</strong> {job.department}
      </p>

      <p className="small text-muted">
        <strong>Location:</strong> {job.location}
      </p>
    </Link>
  </div>
            ))
          )}
        </div>

        {/* ================= PAGINATION ================= */}
        {filteredCareers.length > itemsPerPage && (
          <ul className="list-unstyled mt-4 pt-lg-3 d-flex justify-content-center gap-3 pagination">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                className={currentPage === 1 ? "disabled" : ""}
              >
                <i className="ti ti-chevron-left"></i>
              </a>
            </li>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  className={page === currentPage ? "active" : ""}
                >
                  {page}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className={currentPage === totalPages ? "disabled" : ""}
              >
                <i className="ti ti-chevron-right"></i>
              </a>
            </li>
          </ul>
        )}

      </div>
    </section>
  );
};

export default Careers;
