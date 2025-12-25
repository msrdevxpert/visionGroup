"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Blog = {
  blogId: number;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  createdAt: string;
};

const Details = ({ type = "main" }: { type?: string }) => {
  const { id } = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [moreBlogs, setMoreBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= SINGLE BLOG ================= */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`)
      .then((res) => res.json())
      .then((res) => {
        const blogs: Blog[] = res?.data || [];

        const current = blogs.find(
          (b) => b.blogId === Number(id)
        );

        setBlog(current || null);
        setLoading(false);
      });
  }, [id]);

  /* ================= MORE NEWS ================= */
  useEffect(() => {
    fetch(`https://visiongreen-production.up.railway.app/api/v1/blog`)
      .then((res) => res.json())
      .then((res) => {
        const blogs: Blog[] = res?.data || [];

        setMoreBlogs(
          blogs
            .filter((b) => b.blogId !== Number(id))
            .slice(0, 4)
        );
      });
  }, [id]);

  return (
    <section className="service-details pt-80 pb-80">
      <div className="container">
        <div className="row g-4">

          {/* ================= LEFT ================= */}
          <div className="col-lg-8">
            {loading && <p className="text-center py-5">Loading...</p>}

            {!loading && !blog && (
              <p className="text-center py-5">Blog not found</p>
            )}

            {!loading && blog && (
              <div className="details-left">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={800}
                  height={450}
                  className="img-fluid w-100"
                />

                <div className="details-content pt-4">
                  <ul className="list-unstyled d-flex gap-3">
                    <li>
                      <i className="ti ti-user-circle"></i> {blog.author}
                    </li>
                    <li>•</li>
                    <li>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </li>
                  </ul>

                  <h2 className="mb-3">{blog.title}</h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.content,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* ================= RIGHT (ALWAYS) ================= */}
          <div className="col-lg-4 position-sticky">

            {/* MORE NEWS */}
            <div className="white-box">
              <h4 className="bb-dashed-24">More News</h4>

              <ul className="more-projects">
                {moreBlogs.map((item) => (
                  <li key={item.blogId}>
                    <Link href={`/blog/${item.blogId}`}>
                      <Image
                        src={item.imageUrl}
                        width={100}
                        height={100}
                        alt={item.title}
                      />
                      <div>
                        <span className="fw-medium d-block">
                          {item.title}
                        </span>
                        <span className="text-secondary3">
                          Read News <i className="ti ti-arrow-up-right"></i>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="white-box">
              <h4 className="bb-dashed-24">Call To Action</h4>
              <div className="cta">
                <div className="position-relative z-2">
                  <h3 className="mb-3 text-white">Get Started Today</h3>
                  <p className="mb-4 text-white">
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

export default Details;
