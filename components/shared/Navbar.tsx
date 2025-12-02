"use client";
import navbarData from "@/public/data/navbarData";
import logoWhite from "@/public/images/visionGroupLogo.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cart from "./Cart";

import MobileMenu from "./MobileMenu";
import Search from "./Search";
import Sidebar from "./Sidebar";

const Navbar = ({ cls }: { cls?: string; logo?: StaticImageData | string }) => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  // Use this helper to check active submenu with normalized comparison
  const hasActiveSubmenu = (subs?: { link?: string }[]) => {
    return Boolean(subs?.some((s) => eq(s.link, path)));
  };
const joinPath = (link?: string, path?: string) => {
  if (!link) return "";
  const cleanLink = link.replace(/\/+$/, ""); // remove trailing slash
  const cleanPath = (path || "").replace(/\//g, ""); // remove all slashes
  return cleanLink + cleanPath;
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
      <header id="header" className={`header w-100 ${cls} ${fixedHeader ? "fixed" : ""}`}>
        <div className="container g-0 g-lg-1">
          <nav id="navbar-menu" className="d-flex justify-content-between align-items-center position-relative">
            <Link href="/">
              <Image className="imglogo" src={ logoWhite} alt="" />
              {/* <b>Vision Group</b> */}
            </Link>
            <ul className="mb-0 menu d-none d-lg-flex mini-scrollbar">
              {navbarData.map(({ id, title, link, submenus, type }) =>
                link ? (
                  <li key={id}>
                    <Link className={`d-flex align-items-center ${eq(path, link) ? "active" : ""}`} href={joinPath(link, cleanedPath)}>
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
                            <Link className={`${eq(path, link) ? "active" : ""}`} href={joinPath(link, cleanedPath)}>
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
              <Cart />
              <Link href="/contact-us" className="primary-btn d-none d-lg-block">
                Get a Quote <i className="ti ti-arrow-up-right"></i>
              </Link>
              <button onClick={() => setSidebarOpen(true)} className="show-offcanvas bg-transparent border-0 d-none d-xl-block fs-3">
                <i className="ti ti-layout-grid"></i>
              </button>
              <button onClick={() => setMobileMenu(true)} className="toggle-menu">
                <i className="ti ti-menu-2"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Search search={search} setSearch={setSearch} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  );
};

export default Navbar;