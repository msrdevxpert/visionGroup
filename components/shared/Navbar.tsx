"use client";
import logoWhite from "@/public/images/visionGroupLogo.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import MobileMenu from "./MobileMenu";
import Search from "./Search";
import Sidebar from "./Sidebar";
import home2 from "../../public/images/solar_1.png";
import home3 from "../../public/images/home-333.png";
import home4 from "../../public/images/agri_1.png";
import home6 from "../../public/images/civil_1.png";
import QuoteForm from "../quote/quote";
import Modal from "./Modal";
const Navbar = ({ cls }: { cls?: string; logo?: StaticImageData | string }) => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navbarData = [
    {
      id: 1,
      title: "Home",
      submenus: [
        {
          id: 1.2,
          title: "VISIONSMART PLUS ENERGY PRIVATE LIMITED",
          link: "/solar/",
          img: home2,
        },
        
        {
          id: 1.4,
          title: "VISION AGRIFUTURE PRIVATE LIMITED",
          link: "/agriculture/",
          img: home4,
        },
        {
          id: 1.6,
          title: "VISIONPLUS INFRATEC PRIVATE LIMITED",
          link: "/civil/",
          img: home6,
        },
        {
          id: 1.3,
          title: "MSR DevXpert",
          link: "https://msrdevxpert.com/",
          img: home3,
        },
      ],
      type: "megamenu",
    },
    {
      id: 2,
      title: "About",
      link: "/about-us/",
    },
    {
      id: 3,
      title: "Service",
      submenus: [
        {
          id: 3.1,
          title: "Services",
          link: "/services/",
        },
        // {
        //   id: 3.2,
        //   title: "Service Details",
        //   link: "/services/1/",
        // },
      ],
    },
    {
      id: 4,
      title: "Blog",
      submenus: [
        {
          id: 4.1,
          title: "Blog Standard",
          link: "/blogs/",
        },
        {
          id: 4.2,
          title: "Blog Grid",
          link: "/blog-grid/",
        },
        // {
        //   id: 4.3,
        //   title: "Blog List",
        //   link: "/blog-list/",
        // },
        // {
        //   id: 4.4,
        //   title: "Blog Details",
        //   link: "/blogs/1/",
        // },
      ],
    },
    {
      id: 6,
      title: "Pages",
      submenus: [
        {
          id: 6.1,
          title: "Projects",
          link: "/projects/",
        },
        // {
        //   id: 6.2,
        //   title: "Project Details",
        //   link: "/projects/1/",
        // },
        {
          id: 6.3,
          title: "Certification",
          link: "/certificate",
        },
        {
          id: 6.4,
          title: "Contact",
          link: "/contact/",
        },
        {
          id: 6.5,
          title: "Faq",
          link: "/faq/",
        },
        // {
        //   id: 6.6,
        //   title: "Sign Up",
        //   link: "/sign-up/",
        // },
        {
          id: 6.7,
          title: "Sign In",
          link: "/sign-in/",
        },
        // {
        //   id: 6.8,
        //   title: "404",
        //   link: "/404/",
        // },
      ],
    },
     {
      id: 7,
      title: "Careers",
      link: "/careers/",
    },

  ];

  const rawPath = usePathname() || "/";

  const normalize = (p?: string) => {
    if (!p) return "";
    if (p === "/") return "/";
    return p.replace(/\/+$/, "");
  };

  const eq = (a?: string, b?: string) => normalize(a) === normalize(b);
  const path = normalize(rawPath);

  const hasActiveSubmenu = (subs?: { link?: string }[]) => {
    return Boolean(subs?.some((s) => eq(s.link, path)));
  };

  useEffect(() => {
    const onScroll = () => {
      setFixedHeader(window.scrollY > 150);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="header" className={`header w-100 ${cls} ${fixedHeader ? "fixed" : ""}`}>
        <div className="container g-0 g-lg-1">
          <nav id="navbar-menu" className="d-flex justify-content-between align-items-center position-relative">
            <Link href="/">
              <Image className="imglogo" src={logoWhite} alt="" />
            </Link>

            <ul className="mb-0 menu d-none d-lg-flex mini-scrollbar">
              {navbarData.map(({ id, title, link, submenus, type }) =>
                link ? (
                  <li key={id}>
                    <Link
                      className={`d-flex align-items-center ${eq(path, link) ? "active" : ""}`}
                      href={link}
                    >
                      {title}
                    </Link>
                  </li>
                ) : type ? (
                  <li className="submenu mega-menu" key={id}>
                    <span className={`${hasActiveSubmenu(submenus) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown mega-dropdown">
                      {submenus
                        .filter((s) => !eq(s.link, path))
                        .map(({ id, title, link, img }) => (
                          <li key={id}>
                            <Link href={link} target={id === 1.3 ? "_blank" : undefined}>
                              <div className="home-img">
                                <Image src={img} alt="" />
                              </div>
                              <span>{title}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ) : (
                  <li className="submenu" key={id}>
                    <span className={`${hasActiveSubmenu(submenus) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown">
                      {submenus?.map(({ id, title, link }) => (
                        <li key={id}>
                          <Link className={`${eq(path, link) ? "active" : ""}`} href={link}>
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}

              <Link href="/contact-us" className="primary-btn d-lg-none">
                Get a Quote <i className="ti ti-arrow-up-right"></i>
              </Link>
            </ul>

            <div className="d-flex align-items-center gap-1 gap-sm-2 gap-md-3">
              <button onClick={() => setSearch(true)} className="search-popup-btn xl-text">
                <i className="ti ti-search"></i>
              </button>

                 <button
  className="primary-btn d-none d-lg-block"
  data-bs-toggle="modal"
  data-bs-target="#quoteModal"
>
  Get a Quote <i className="ti ti-arrow-up-right"></i>
</button>

              <button
                onClick={() => setSidebarOpen(true)}
                className="show-offcanvas bg-transparent border-0 d-none d-xl-block fs-3"
              >
                <i className="ti ti-layout-grid"></i>
              </button>

              <button onClick={() => setMobileMenu(true)} className="toggle-menu">
                <i className="ti ti-menu-2"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} logo={logoWhite} />
      <Search search={search} setSearch={setSearch} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} navbarData={navbarData} logo={logoWhite} />
      <Modal id="quoteModal" title="Request a Quote">
  <QuoteForm isModal />
</Modal>
    </>
  );
};

export default Navbar;
