"use client";
import project1 from "@/public/images/project-1.webp";
import project2 from "@/public/images/project-2.webp";
import project3 from "@/public/images/project-3.webp";
import project4 from "@/public/images/project-4.webp";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    id: 1,
    image: project1,
    title: "Green Horizon Wind Farm",
    description: "A large-scale wind farm providing clean energy to over 50,000 homes in the region. This project is a shining example.",
  },
  {
    id: 2,
    image: project2,
    title: "Coastal Breeze Residential Wind Power",
    description: "A large-scale wind farm providing clean energy to over 50,000 homes in the region. This project is a shining example.",
  },
  {
    id: 3,
    image: project3,
    title: "City Wind Power Conversion Project",
    description: "In a challenging custody battle, our family law attorneys achieved a favorable resolution for our client, ensuring the well-being...",
  },
  {
    id: 4,
    image: project4,
    title: "Wind Energy for Rural Communities",
    description: "In a challenging custody battle, our family law attorneys achieved a favorable resolution for our client, ensuring the well-being...",
  },
];

const Empower = () => {
  return (
    <section className="empower-home-three overflow-x-hidden" id="services">
      <div className="container">
        <div className="row align-items-end g-4 mb-4 mb-xl-5 pb-xl-2">
          <div className="col-lg-6 px-xl-0">
            <h2 className="mb-3 fade_up_anim">Empowering with Wind Energy</h2>
            <p className="fade_up_anim" data-delay=".3">
              We take pride in our diverse portfolio of renewable energy projects. Our team has successfully completed numerous wind energy installations.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="btns">
              <button className="service-prev">
                <i className="ti ti-arrow-narrow-left"></i>
              </button>
              <button className="service-next">
                <i className="ti ti-arrow-narrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 left-col">
            <Swiper
              loop
              autoplay
              navigation={{
                nextEl: ".service-next",
                prevEl: ".service-prev",
              }}
              pagination={{
                el: ".empower-pagination",
                clickable: true,
              }}
              modules={[Navigation, Autoplay, Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 1.4,
                  spaceBetween: 24,
                },
                1400: {
                  slidesPerView: 1.8,
                  spaceBetween: 24,
                },
              }}
              className="swiper empower-swiper"
            >
              {projectData.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="triumph-card">
                    <Image src={project.image} className="w-100 h-100" alt={project.title} />
                    <div className="card-content">
                      <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                      <Link href={`/projects/${project.id}`} className="arrow-sm">
                        <i className="ti ti-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="empower-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empower;
