"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
  id: string;
  projectType: string;
  title: string;
  description: string;
  location: string;
  category: string;
  capacityKw: number;
  budget: number;
  imageUrl: string;
  status: string;
  createdAt: string;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/projects`;
const VALID_TYPES = ["solar", "civil", "agri"];

const Projects = ({ type = "" }: { type?: string }) => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(false);
console.log(type);

  const [filters, setFilters] = useState({
    type: VALID_TYPES.includes(type) ? type : "",
    location: "",
    status: "",
    category: "",
    minBudget: "",
    maxBudget: "",
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

const buildUrl = () => {
  const params: Record<string, string> = {};

  // Remove using type in the path, only use as query param
  if (VALID_TYPES.includes(type)) params.type = type;

  if (filters.location) params.location = filters.location;
  if (filters.status) params.status = filters.status;
  if (filters.category) params.category = filters.category;
  if (filters.minBudget) params.minBudget = filters.minBudget;
  if (filters.maxBudget) params.maxBudget = filters.maxBudget;

  const query = new URLSearchParams(params).toString();
  return query ? `${API_URL}?${query}` : API_URL; // API_URL already includes base domain
};


  const fetchProjects = async () => {
    try {
      setLoading(true);
      const url = buildUrl();
      const res = await fetch(url);
      const json = await res.json();
      // setProjects(json?.data || []);
      const sortedProjects = (json?.data || []).sort(
  (a: ProjectItem, b: ProjectItem) => {
    if (a.status === "completed" && b.status !== "completed") return -1;
    if (a.status !== "completed" && b.status === "completed") return 1;
    return 0;
  }
);

setProjects(sortedProjects);

      setCurrentPage(1); // Reset to first page when filters change
      setLoading(false);
    } catch (err) {
      console.error("API Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [filters, type]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Pagination calculations
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="impactful-project pb-120 pt-120">
      <div className="container">

        {/* Filters */}
        <div className="filter-bar d-flex gap-3 mb-5 flex-wrap">
          <select name="location" onChange={handleChange} className="form-select" style={{ width: "18%" }}>
            <option value="">Location</option>
            {/* Add all your location options here */}
          </select>

          <select name="status" onChange={handleChange} className="form-select" style={{ width: "18%" }}>
            <option value="">Status</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>

          <select name="category" onChange={handleChange} className="form-select" style={{ width: "18%" }}>
            <option value="">Category</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>

          <input
            style={{ width: "18%" }}
            type="number"
            name="minBudget"
            placeholder="Min Budget"
            className="form-control"
            onChange={handleChange}
          />

          <input
            style={{ width: "18%" }}
            type="number"
            name="maxBudget"
            placeholder="Max Budget"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        {/* Project Cards */}
        <div className="row g-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentProjects.map((project) => (
              <div className="col-lg-6" key={project.id}>
                <div className="impactful-card mb-4">
  <Image
    src={project.imageUrl}
    width={600}
    height={400}
    className="img-fluid"
    alt={project.title}
  />

  <Link
    href={
      type === "main"
        ? `/projects/${project.id}`
        : `/${type}/projects/${project.id}`
    }
    className="content"
  >
    {/* STATUS BADGE */}
    <span
      className={`status-badge ${
        project.status === "completed" ? "completed" : "ongoing"
      }`}
    >
      {project.status}
    </span>

    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <p className="small text-muted">{project.location}</p>
  </Link>
</div>

              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {projects.length > 0 && (
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
        )}

      </div>
    </section>
  );
};

export default Projects;
