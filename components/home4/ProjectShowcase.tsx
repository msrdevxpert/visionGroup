"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectShowcaseProps {
  type: string; // 👈 dynamic type
}

const ProjectShowcase = ({ type }: ProjectShowcaseProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!type) return;

    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/projects?type=${type}`
        );
        const data = await res.json();

        if (data.status === "success") {
          setProjects(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [type]); // 👈 type change hole re-fetch

  if (loading)
    return <p className="text-center py-5">Loading projects...</p>;

  if (!projects.length)
    return <p className="text-center py-5">No projects found.</p>;

  return (
    <section className="success-story two z-3">
      <div className="container">
        <div className="row align-items-end g-4 section-title">
          <div className="col-lg-6">
            <h2 className="mb-3 fade_up_anim">Showcasing Our Projects</h2>
            <p className="fade_up_anim" data-delay=".3">
              We take pride in our ability to deliver exceptional projects that
              meet the highest standards of quality and sustainability.
            </p>
          </div>

          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="success-story-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="success-story-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0">
        <Swiper
          navigation={{
            prevEl: ".success-story-prev",
            nextEl: ".success-story-next",
          }}
          loop
          autoplay
          centeredSlides
          modules={[Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 1.4, spaceBetween: 16 },
            1200: { slidesPerView: 1.6, spaceBetween: 24 },
            1350: { slidesPerView: 2, spaceBetween: 24 },
            1500: { slidesPerView: 2.2, spaceBetween: 24 },
          }}
          className="swiper success-story-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="story-slide-box two">
                <Image
                  src={project.imageUrl}
                  className="img-fluidd"
                  alt={project.title}
                  width={600}
                  height={400}
                />

                <div className="success-info">
                  <h3 className="mb-3 mb-xl-4">{project.title}</h3>
                  <p className="mb-4 d-none d-sm-block pb-xl-3">
                    {project.description}
                  </p>

                  <Link
                    href={`/${type}/projects/${project.id}`}
                    className="bg-primary d-inline-block text-n500 p-2 fs-5"
                  >
                    <i className="ti ti-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectShowcase;
