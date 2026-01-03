"use client";

import logo from "@/public/images/AgriLogo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cart from "../shared/Cart";
import { isActive } from "../shared/Functions";
import MobileMenu from "../shared/MobileMenu";
import Search from "../shared/Search";
import Sidebar from "../shared/Sidebar";

import home1 from "@/public/images/visonGrp_1.png";
import home2 from "@/public/images/solar_1.png";
import home3 from "@/public/images/home-333.png";

import home6 from "@/public/images/civil_1.png";
import Modal from "../shared/Modal";
import QuoteForm from "../quote/quote";
const Navbar = () => {
const navbarData = [
  {
    id: 1,
    title: "Home",
    submenus: [
      {
        id: 1.1,
        title: "Vision Group",
        link: "/",
        img: home1,
      },
      {
        id: 1.2,
        title: "VISIONSMART PLUS ENERGY PRIVATE LIMITED",
        link: "/solar/",
        img: home2,
      },
      // {
      //   id: 1.3,
      //   title: "MSR DevXpert",
      //   link: "https://msrdevxpert.com/",
      //   img: home3,
      // },
    //   {
    //     id: 1.4,
    //     title: "Hydropower(Agri)",
    //     link: "/home-four/",
    //     img: home4,
    //   },
    //   {
    //     id: 1.5,
    //     title: "Online Shop",
    //     link: "/home-five/",
    //     img: home5,
    //   },
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
    link: "/agriculture/about-us/",
  },
  {
    id: 3,
    title: "Service",
    submenus: [
      {
        id: 3.1,
        title: "Services",
        link: "/agriculture/services/",
      },
      // {
      //   id: 3.2,
      //   title: "Service Details",
      //   link: "/agriculture/services/1/",
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
        link: "/agriculture/blogs/",
      },
      {
        id: 4.2,
        title: "Blog Grid",
        link: "/agriculture/blog-grid/",
      },
      // {
      //   id: 4.3,
      //   title: "Blog List",
      //   link: "/agriculture/blog-list/",
      // },
      // {
      //   id: 4.4,
      //   title: "Blog Details",
      //   link: "/agriculture/blogs/1/",
      // },
    ],
  },
  // {
  //   id: 5,
  //   title: "Shop",
  //   submenus: [
  //     {
  //       id: 5.1,
  //       title: "Products",
  //       link: "/products/",
  //     },
  //     {
  //       id: 5.2,
  //       title: "Product Details",
  //       link: "/products/1/",
  //     },
  //     {
  //       id: 5.3,
  //       title: "Cart",
  //       link: "/cart/",
  //     },
  //     {
  //       id: 5.4,
  //       title: "Billing",
  //       link: "/billing/",
  //     },
  //     {
  //       id: 5.5,
  //       title: "Payment",
  //       link: "/payment/",
  //     },
  //   ],
  // },
  {
    id: 6,
    title: "Pages",
    submenus: [
      {
        id: 6.1,
        title: "Projects",
        link: "/agriculture/projects/",
      },
      // {
      //   id: 6.2,
      //   title: "Project Details",
      //   link: "/agriculture/projects/1/",
      // },
        {
          id: 6.3,
          title: "Certification",
          link: "/agriculture/certificate",
        },
      {
        id: 6.4,
        title: "Contact",
        link: "/agriculture/contact/",
      },
      {
        id: 6.5,
        title: "Faq",
        link: "/agriculture/faq/",
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
    title: "Schemes",
    link: "/agriculture/agricultureScheme/",
  },
   {
    id: 8,
    title: "Careers",
    link: "/agriculture/careers/",
  },
];





  const [fixedHeader, setFixedHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState(false);

  // normalize current path so comparisons work for "/home-two" and "/home-two/"
  const rawPath = usePathname() || "/";
  const normalize = (p?: string) => {
    if (!p) return "";
    if (p === "/") return "/";
    return p.replace(/\/+$/, "");
  };
  const eq = (a?: string, b?: string) => normalize(a) === normalize(b);
  const path = normalize(rawPath);

  // helper that uses normalized comparison for submenu active-check
  const hasActiveSubmenu = (subs?: { link?: string }[]) => {
    return Boolean(subs?.some((s) => eq(s.link, path)));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    });
  }, []);
  return (
    <>
      <header id="header" className={`header4 index-2 w-100 mini-scrollbar ${fixedHeader ? "fixed" : ""}`}>
        <div className="container-big px-0 px-md-2">
          <nav id="navbar-menu" className="d-flex justify-content-between align-items-center position-relative">
            <ul className="mb-0 menu p-0 py-xxl-2 align-items-lg-center">
              <li className="d-none d-lg-block px-xxl-4">
                <a className="align-items-center gap-2 d-none d-xl-flex outline-btn primary" href="tel:3165550116">
                  <i className="ti ti-phone-call fs-4"></i>(+91) 7601955124
                </a>
              </li>
              {navbarData.slice(0, 3).map(({ id, title, link, submenus, type }) =>
                link ? (
                  <li key={id}>
                    <Link className="d-flex align-items-center" href={link}>
                      {title}
                    </Link>
                  </li>
                ) : type ? (
                  <li className="submenu mega-menu" key={id}>
                    <span className={`${(isActive(path, submenus) || hasActiveSubmenu(submenus)) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown mega-dropdown">
                      {submenus
                        .filter((s) => !eq(s.link, path)) // hide current page from mega-menu
                        .map(({ id, title, link, img }) => (
                          <li key={id}>
                            <Link href={link} target={id === 1.3 ?`_blank` : undefined}>
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
                    <span className={`${(isActive(path, submenus) || hasActiveSubmenu(submenus)) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown">
                      {submenus
                        ?.filter((s) => !eq(s.link, path)) // hide current page from normal submenu
                        .map(({ id, title, link }) => (
                          <li key={id}>
                            <Link href={link}>{title}</Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
            <div className="d-flex justify-content-center flex-grow-1">
  <Link href="/agriculture/" className="d-flex justify-content-center">
    <Image src={logo} alt="" style={{width:"125px", height:"100px"}} />
  </Link>
</div>

            <ul className="mb-0 menu p-0 py-xxl-2 align-items-lg-center">
              {navbarData.slice(3).map(({ id, title, link, submenus, type }) =>
                link ? (
                  <li key={id}>
                    <Link className={`d-flex align-items-center ${eq(path, link) ? "active" : ""}`} href={link}>
                      {title}
                    </Link>
                  </li>
                ) : type ? (
                  <li className="submenu mega-menu" key={id}>
                    <span className={`${(isActive(path, submenus) || hasActiveSubmenu(submenus)) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown mega-dropdown">
                      {submenus
                        .filter((s) => !eq(s.link, path))
                        .map(({ id, title, link, img }) => (
                          <li key={id}>
                            <Link href={link}>
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
                    <span className={`${(isActive(path, submenus) || hasActiveSubmenu(submenus)) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown">
                      {submenus
                        ?.filter((s) => !eq(s.link, path))
                        .map(({ id, title, link }) => (
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
              <div className="d-flex gap-2 gap-xxl-2 align-items-center">
                <button onClick={() => setSearch(true)} className="search-popup-btn text-white xl-text">
                  <i className="ti ti-search"></i>
                </button>
                {/* <Cart /> */}
                <button
  className="primary-btn d-none d-lg-block"
  data-bs-toggle="modal"
  data-bs-target="#quoteModal"
>
  Get a Quote <i className="ti ti-arrow-up-right"></i>
</button>
                <button onClick={() => setSidebarOpen(true)} className="show-offcanvas bg-transparent border-0 d-none d-xl-block fs-3">
                  <i className="ti ti-layout-grid"></i>
                </button>
              </div>
            </ul>
            <div onClick={() => setMobileMenu(true)} className="toggle-menu">
              <i className="ti ti-menu-2"></i>
            </div>
          </nav>
        </div>
      </header>
      <Search search={search} setSearch={setSearch} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  logo={logo} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} navbarData={navbarData} logo={logo} />
       <Modal id="quoteModal" title="Request a Quote">
  <QuoteForm isModal />
</Modal>
    </>
  );
};

export default Navbar;
