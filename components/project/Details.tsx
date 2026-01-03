"use client";
import { useParams } from "next/navigation";
import projectDetailsVideo from "@/public/images/project-details-video.webp";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommonModal from "../shared/CommonModal";

type Project = {
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
};

const Details = ({ type, url }: { type: string; url: string }) => {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [moreProjects, setMoreProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
console.log(type);
 const params = useParams<{ id: string }>();

  const id = params?.id;
  // 🔹 Main project
  useEffect(() => {
    if (!id) return;

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/project?id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProject(res?.data || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // 🔹 More projects
  useEffect(() => {
    let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/unified/projects`;

    if (type && type !== "main") {
      url += `?type=${type}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setMoreProjects(res?.data || []);
      })
      .catch(() => {});
  }, [type]);

  // if (loading) {
  //   return <p className="text-center py-5">Loading project details...</p>;
  // }

  // if (!project) {
  //   return <p className="text-center py-5">Project not found</p>;
  // }
    const getCtaText = () => {
    switch (type.toLowerCase()) {
      case "solar":
        return "Our mission is to provide Solar Consultation & Installation.";
      case "civil":
        return "Our mission is to deliver Civil Construction & Infrastructure Services.";
      case "agri":
      case "agriculture":
        return "Our mission is to empower Agriculture with Modern Farming Solutions.";
      default:
        return "Our mission is to deliver reliable and sustainable energy services.";
    }
  };

  return (
    <section className="project-details pt-80 pb-80 z-3 position-relative">
      <div className="container">
        <div className="row g-3 g-xl-4 position-relative">
          <div className="col-lg-8 z-3">
            <div className="details-left">
              {project ? <><div className="reveal reveal--right reveal--overlay overflow-hidden">
                <Image
                  src={project? project.imageUrl :""}
                  alt={project ? project.title:""}
                  width={900}
                  height={500}
                  className="img-fluid w-100"
                />
              </div>

              <div className="details-content">
                <h2 className="mb-3">{project ? project.title:""}</h2>
                <p>{project?.description}</p>

                <div className="project-video mb-4">
                  <div className="reveal reveal--right reveal--overlay overflow-hidden">
                    <Image src={projectDetailsVideo} className="img-fluid" alt="" />
                  </div>
                  <button onClick={() => setOpen(true)} className="play-btn bg-primary popup-youtube">
                    <i className="ti ti-player-play-filled text-bg2 fs-4"></i>
                  </button>
                </div>
              </div></>: <p className="text-center py-5">Loading project details...</p>}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4 details-right z-3">
            <div className="white-box">
              <h4 className="bb-dashed-24">Project Info</h4>
             {project ? <table className="w-100">
                <tbody>
                  <tr>
                    <td>Project Name</td>
                    <td>:</td>
                    <td>{project?.title}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>:</td>
                    <td>{project?.location}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>:</td>
                    <td>{project?.category}</td>
                  </tr>
                </tbody>
              </table>: <p className="text-center py-5">Loading project info...</p>}
            </div>

            {/* 🔹 More Projects from API */}
            <div className="white-box">
              <h4 className="bb-dashed-24">More Projects</h4>
              <ul className="more-projects">
                {moreProjects
                  .filter((p) => p.id !== project?.id)
                  .slice(0, 4)
                  .map((item) => (
                    <li key={item.id}>
                      <Link href={`/project/${item.id}`}>
                        <Image
                          width={100}
                          height={100}
                          src={item.imageUrl}
                          alt={item.title}
                        />
                        <div>
                          <h5 className="fw-medium mb-2 d-block">
                            {item.title}
                          </h5>
                          <span className="text-secondary3 fw-semibold">
                            Read More <i className="ti ti-arrow-up-right"></i>
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="white-box">
              <h4 className="bb-dashed-24">Call To Action</h4>
              <div className="cta">
                <div className="position-relative z-2">
                  <h3 className="mb-3 text-white">Get Started Today</h3>
                  <p className="mb-4 text-white">
                    {getCtaText()}
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

      <CommonModal
  open={open}
  onClose={() => setOpen(false)}
  videoId="LTsxOzNdbRQ"
  local={type === "agri" ? "Y" : "N"}
  url={type !== "main" ? url : ""} // ✅ pass string directly
/>

    </section>
  );
};

export default Details;
