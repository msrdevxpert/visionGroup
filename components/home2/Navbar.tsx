"use client";
// import navbarData from "@/public/data/navbarData";
import logo from "@/public/images/Solr-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cart from "../shared/Cart";
import MobileMenu from "../shared/MobileMenu";
import Search from "../shared/Search";


import home1 from "@/public/images/visonGrp_1.png";

import home3 from "@/public/images/home-333.png";
import home4 from "@/public/images/agri_1.png";

import home6 from "@/public/images/civil_1.png";

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
      // {
      //   id: 1.2,
      //   title: "Solar Company(Solar)",
      //   link: "/solar/",
      //   img: home2,
      // },
      {
        id: 1.3,
        title: "MSR DevXpert",
        link: "https://msrdevxpert.com/",
        img: home3,
      },
      {
        id: 1.4,
        title: "VISION AGRIFUTUREPRIVATE LIMITED",
        link: "/agriculture/",
        img: home4,
      },
      // {
      //   id: 1.5,
      //   title: "Online Shop",
      //   link: "/home-five/",
      //   img: home5,
      // },
      {
        id: 1.6,
        title: "VISIONPLUS INFRATEC PRIVATE LIMITED",
        link: "/civil/",
        img: home6,
      },
    ],
    type: "megamenu",
  },
  {
    id: 2,
    title: "About",
    link: "/about-us2/",
  },
  {
    id: 3,
    title: "Service",
    submenus: [
      {
        id: 3.1,
        title: "Services",
        link: "/solar/servicessolar/",
      },
      {
        id: 3.2,
        title: "Service Details",
        link: "/solar/servicessolar/1/",
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    submenus: [
      {
        id: 4.1,
        title: "Blog Standard",
        link: "/solar/blogssolar/",
      },
      {
        id: 4.2,
        title: "Blog Grid",
        link: "/solar/blog-gridsolar/",
      },
      {
        id: 4.3,
        title: "Blog List",
        link: "/solar/blog-listsolar/",
      },
      {
        id: 4.4,
        title: "Blog Details",
        link: "/solar/blogssolar/1/",
      },
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
        link: "/solar/projectssolar/",
      },
      {
        id: 6.2,
        title: "Project Details",
        link: "/solar/projectssolar/1/",
      },
      {
        id: 6.3,
        title: "Contact",
        link: "/solar/contactsolar/",
      },
      {
        id: 6.4,
        title: "Faq",
        link: "/solar/faqsolar/",
      },
      {
        id: 6.5,
        title: "Sign Up",
        link: "/sign-up/",
      },
      {
        id: 6.6,
        title: "Sign In",
        link: "/sign-in/",
      },
      {
        id: 6.7,
        title: "404",
        link: "/404/",
      },
    ],
  },
];




  const [fixedHeader, setFixedHeader] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const rawPath = usePathname() || "/";
  const normalize = (p?: string) => {
    if (!p) return "";
    if (p === "/") return "/";
    return p.replace(/\/+$/, "");
  };
  const eq = (a?: string, b?: string) => normalize(a) === normalize(b);
  const path = normalize(rawPath);
  const cleanedPath = path.replace(/\//g, "");
console.log("path",cleanedPath);
  const hasActiveSubmenu = (subs?: { link?: string }[]) => {
    return Boolean(subs?.some((s) => eq(s.link, path)));
  };


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="header" className={`header index-2 w-100 ${fixedHeader ? "fixed" : ""}`}>
        <div className="container g-0 g-lg-1">
          <nav id="navbar-menu" className="d-flex justify-content-between align-items-center position-relative">
            <Link className="d-lg-none mx-auto" href="/solar/">
              <Image src={logo} alt="" className="imglogo" />
              {/* VISIONSMART PLUS ENERGY PRIVATE LIMITED */}
            </Link>
            <a className="align-items-center gap-2 d-none d-xl-flex outline-btn primary" href="tel:3165550116">
              <i className="ti ti-phone-call fs-4"></i>(316) 555-0116
            </a>
            <ul className="mb-0 menu align-items-lg-center">
              {navbarData.slice(0, 3).map(
                ({ id, title, submenus, type }) =>
                  submenus &&
                  (type ? (
                    <li className="submenu mega-menu" key={id}>
                      <span className={`${hasActiveSubmenu(submenus) ? "active" : ""}`}>
                        {title} <i className="ti ti-chevron-down"></i>
                      </span>
                      <ul className="submenu-dropdown mega-dropdown">
                        {submenus
                          .filter((s) => !eq(s.link, path))
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
                      <span className={`${hasActiveSubmenu(submenus) ? "active" : ""}`}>
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
                  ))
              )}
              <li className="d-none d-lg-block px-xxl-5">
                <Link href="/solar/">
                  <Image src={logo} alt="" style={{width:"100px", height:"100px"}} />
                  {/* VISIONSMART PLUS ENERGY PRIVATE LIMITED */}
                </Link>
              </li>
              {navbarData.slice(3).map(({ id, title, link, submenus, type }) =>
                link ? (
                  <li key={id}>
                    <Link className={`d-flex align-items-center ${eq(path, link) ? "active" : ""}`} href={link}>
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
                    <span className={`${hasActiveSubmenu(submenus) ? "active" : ""}`}>
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
              <li>
                <Link href="/contact-us" className="primary-btn d-lg-none">
                  Get a Quote <i className="ti ti-arrow-up-right"></i>
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2 gap-sm-3 gap-xxl-4">
              <button onClick={() => setSearch(true)} className="search-popup-btn text-white xl-text">
                <i className="ti ti-search"></i>
              </button>
              <Cart />
              <Link href="/contact-us" className="primary-btn d-none d-lg-block">
                Get a Quote <i className="ti ti-arrow-up-right"></i>
              </Link>
              <div className="toggle-menu" onClick={() => setMobileMenu(true)}>
                <i className="ti ti-menu-2"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Search search={search} setSearch={setSearch} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} navbarData={navbarData} logo={logo} />
    </>
  );
};

export default Navbar;