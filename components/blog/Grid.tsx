"use client";

import { useEffect, useMemo, useState } from "react";
import BlogGridCard from "../cards/BlogGridCard";

type Blog = {
  blogId: number;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  createdAt: string;
};

const ITEMS_PER_PAGE = 6;

const Grid = ({ type }: { type?: string }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`)
      .then((res) => res.json())
      .then((res) => {
        const data: Blog[] = res?.data || [];

        /* ===== LAST PREVIOUS MONTH FILTER ===== */
        const now = new Date();

        const prevMonthStart = new Date(
          now.getFullYear(),
          now.getMonth() - 1,
          1
        );

        const prevMonthEnd = new Date(
          now.getFullYear(),
          now.getMonth(),
          0,
          23,
          59,
          59
        );

        const filteredBlogs = data.filter((blog) => {
          const created = new Date(blog.createdAt);
          return created >= prevMonthStart && created <= prevMonthEnd;
        });

        setBlogs(filteredBlogs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  /* ================= DATE FORMAT ================= */
  const getDateParts = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString(),
      month: date.toLocaleString("en-US", { month: "short" }),
    };
  };

  /* ================= BASE URL ================= */
  const baseUrl = type === "main" ? "/" : `/${type}`;

  /* ================= PAGINATION ================= */
  const totalPages = Math.max(1, Math.ceil(blogs.length / ITEMS_PER_PAGE));


  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return blogs.slice(start, end);
  }, [blogs, currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="pt-120 pb-120 bg1">
      <div className="container">

        {/* HEADER */}
        <div className="row g-4 gx-lg-0 mb-4 mb-lg-5">
          <div className="col-md-6 col-lg-8">
            <h2 className="fade_up_anim">Our Latest News</h2>
          </div>
          <div className="col-md-6 col-lg-4">
            <p className="fade_up_anim" data-delay=".3">
              Welcome to our blog, where we aim to provide valuable insights,
              expert advice, and informative articles.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="row g-3 g-xxl-4">
          {loading && (
            <p className="text-center py-5">Loading blogs...</p>
          )}

          {!loading && paginatedBlogs.length === 0 && (
            <p className="text-center py-5">
              No blogs found from last month
            </p>
          )}

          {!loading &&
            paginatedBlogs.map((post) => (
              <div key={post.blogId} className="col-md-6 col-xl-4">
                <BlogGridCard
                  id={post.blogId}
                  imgSrc={post.imageUrl}
                  title={post.title}
                  description={post.excerpt}
                  date={getDateParts(post.createdAt)}
                />
              </div>
            ))}
        </div>

        {/* PAGINATION */}
      <ul className="list-unstyled mb-0 mt-4 pt-lg-3 d-flex justify-content-center gap-2 gap-sm-3 pagination">

  {/* PREV */}
  <li>
    <a
      href="#"
      className={currentPage === 1 ? "disabled" : ""}
      onClick={(e) => {
        e.preventDefault();
        if (currentPage > 1) {
          goToPage(currentPage - 1);
        }
      }}
    >
      <i className="ti ti-chevron-left"></i>
    </a>
  </li>

  {/* PAGE NUMBERS */}
  {Array.from({ length: totalPages }).map((_, i) => (
    <li key={i}>
      <a
        href="#"
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
      href="#"
      className={currentPage === totalPages ? "disabled" : ""}
      onClick={(e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
          goToPage(currentPage + 1);
        }
      }}
    >
      <i className="ti ti-chevron-right"></i>
    </a>
  </li>

</ul>



      </div>
    </section>
  );
};

export default Grid;
