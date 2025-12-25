"use client";

import audit from "@/public/images/audit.png";
import battery from "@/public/images/battery.png";
import consult from "@/public/images/consult.png";
import monitor from "@/public/images/monitor.png";
import service1 from "@/public/images/QuestionMarkForService.jpg";
import service2 from "@/public/images/service-2.png";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import BlogStandardCard from "../cards/BlogStandardCard";

/* ================= TYPES ================= */

type Blog = {
  blogId: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  isPublished: boolean;
  createdAt: string;
};

type Service = {
  id: number;
  name: string;
  iconUrl?: string;
};

/* ================= Constant ================= */
const ITEMS_PER_PAGE = 6;


/* ================= COMPONENT ================= */

const Standard = ({ type  }: { type?: string }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

   const baseUrl = type === "main" ? "/" : `/${type}`;

  /* ================= BLOG API ================= */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`)
      .then((res) => res.json())
      .then((res) => {
        setBlogs(res?.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  










  /* ================= SERVICE API ================= */
  useEffect(() => {
    let url =
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/services`;

    if (type !== "main") {
      url += `?type=${type}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => setServices(res?.data || []))
      .catch(() => setServices([]));
  }, [type]);

  /* ================= SEARCH FILTER ================= */
  const filteredBlogs = useMemo(() => {
    if (!search.trim()) return blogs;

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, blogs]);


  // =====================================
 const totalPages = Math.max(
    1,
    Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE)
  );

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // ===========================================

  /* ================= JSX ================= */

  return (
    <section className="service-details pt-80 pb-80">
      <div className="container">
        <div className="row g-4 position-relative">

          {/* ================= LEFT CONTENT ================= */}
          <div className="col-lg-8">
            <div className="details-left p-0 bg-transparent">

              {loading && <p className="text-center py-5">Loading blogs...</p>}

              {!loading && filteredBlogs.length === 0 && (
                <p className="text-center py-5">No blogs found</p>
              )}

              {!loading &&
                filteredBlogs.map((blog) => (
                  <BlogStandardCard
                    key={blog.blogId}
                    id={blog.blogId}
                    imageSrc={blog.imageUrl}
                    alt={blog.title}
                    author={blog.author}
                    date={new Date(blog.createdAt).toLocaleDateString()}
                    time={new Date(blog.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    title={blog.title}
                    description={blog.excerpt}
                    slug={blog.slug}
                  />
                ))}

              {/* ================= PAGINATION ================= */}
            <ul className="list-unstyled mt-4 d-flex justify-content-center gap-2 pagination">

              {/* PREV */}
              <li>
                <a
                  href={`${baseUrl}?page=${currentPage - 1}`}
                  className={currentPage === 1 ? "disabled" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(currentPage - 1);
                  }}
                >
                  <i className="ti ti-chevron-left"></i>
                </a>
              </li>

              {/* PAGE NUMBERS */}
              {Array.from({ length: totalPages }).map((_, i) => (
                <li key={i}>
                  <a
                    href={`${baseUrl}?page=${i + 1}`}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </a>
                </li>
              ))}

              {/* NEXT */}
              <li>
                <a
                  href={`${baseUrl}?page=${currentPage + 1}`}
                  className={currentPage === totalPages ? "disabled" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(currentPage + 1);
                  }}
                >
                  <i className="ti ti-chevron-right"></i>
                </a>
              </li>

            </ul>
          </div>


            
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="col-lg-4 position-sticky">

            {/* SEARCH */}
            <div className="white-box">
              <h4 className="bb-dashed-24">Search</h4>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <i className="ti ti-search fs-5"></i>
              </form>
            </div>

            {/* CATEGORY – SERVICE API */}
            <div className="white-box">
              <h4 className="bb-dashed-24">Category</h4>

              <ul className="category-list">
                {services.length === 0 && (
                  <li className="text-muted">No services found</li>
                )}

                {services.map((service) => (
                  <li key={service.id}>
                    <a href="#">
                      <div className="img-wrapper">
                        <Image
                          width={32}
                          src={service.iconUrl || service1}
                          alt={service.name}
                        />
                      </div>
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="white-box">
              <h4 className="bb-dashed-24">Call To Action</h4>
              <div className="cta">
                <div className="content">
                  <h3 className="mb-3 text-white">Get Started Today</h3>
                  <p className="mb-4 pb-lg-1 text-white">
                    Our mission is to provide Solar, Wind & Hydropower Installation.
                  </p>
                  <Link href="/contact-us">
                    <i className="ti ti-phone-call"></i> Contact Us
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Standard;
