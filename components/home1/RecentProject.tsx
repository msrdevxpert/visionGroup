"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectType {
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

const RecentProject = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/all-projects`);
      const json = await res.json();
      setProjects(json.data || []);
    } catch (err) {
      console.error("Failed to load projects:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="recent position-relative" id="recent">
      <div className="right-text d-none d-xl-block">
        <h2 className="vertical">Projects</h2>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-2 col-xl-9 offset-xl-3 col-xxl-8 offset-xxl-4">
            <div className="reveal reveal--left">
              <div className="recent-projects">
                <h2 className="pb-1 fade_up_anim">Our Recent Projects</h2>
                <p className="pb-2 pb-lg-4 fade_up_anim" data-delay=".3">
                  Proudly showcasing our latest solar, civil, IT & agriculture projects delivered with excellence and innovation.
                </p>

                {/* ===== Loader ===== */}
                {loading && <p className="text-white">Loading projects...</p>}

                <div className="d-flex flex-column gap-4 mt-3 mb-4 pb-lg-3">
                  {projects.slice(0, 2).map((project) => (
                    <Link
                      key={project.id}
                      href={`/project-details/${project.id}`}
                      className="project-box flex-wrap flex-sm-nowrap"
                    >
                      <Image
                        width={120}
                        height={120}
                        src={project.imageUrl}
                        className="img-fluid"
                        alt={project.title}
                      />

                      <div className="d-flex gap-2 gap-lg-3 gap-xl-4 align-items-center pe-3 flex-wrap flex-md-nowrap">
                        <h5>{project.title}</h5>
                        <p>{project.description?.slice(0, 80)}...</p>

                        <div className="arrow-sm">
                          <i className="ti ti-arrow-up-right"></i>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link href="/projects" className="primary-btn">
                  See All Projects <i className="ti ti-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProject;
