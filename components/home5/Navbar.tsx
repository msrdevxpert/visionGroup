"use client";
import navbarData from "@/public/data/navbarData";
import logoBlack from "@/public/images/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cart from "../shared/Cart";
import MobileMenu from "../shared/MobileMenu";
import Search from "../shared/Search";
import Sidebar from "../shared/Sidebar";

const Navbar = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState(false);

  // get and normalize current path so "/home-two" and "/home-two/" match
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
    const onScroll = () => setFixedHeader(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="header" className={`header w-100 shop mini-scrollbar ${fixedHeader ? "fixed" : ""}`}>
        <div className="container-big px-0">
          <nav id="navbar-menu" className="d-flex px-lg-0 justify-content-between align-items-center position-relative">
            <div className="d-flex align-items-center gap-3">
              <Link href="/">
                <Image src={logoBlack} alt="" />
              </Link>

              <ul className="mb-0 menu d-none d-lg-flex mini-scrollbar">
                {navbarData.map(({ id, title, link, submenus, type }) =>
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
                          .filter((s) => !eq(s.link, path)) // hide current page from mega-menu
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
                          ?.filter((s) => !eq(s.link, path)) // hide current page from normal submenu
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
              </ul>
            </div>

            <div className="d-flex align-items-center gap-2 gap-md-3">
              <button onClick={() => setSearch(true)} className="xl-text search-popup-btn">
                <i className="ti ti-search"></i>
              </button>
              <Cart />
              <Link href="/contact-us" className="primary-btn d-none d-lg-block">
                Get Quote <i className="ti ti-arrow-up-right"></i>
              </Link>
              <button onClick={() => setSidebarOpen(true)} className="show-offcanvas bg-transparent border-0 d-none d-xl-block fs-3 ">
                <i className="ti ti-layout-grid"></i>
              </button>
              <button onClick={() => setMobileMenu(true)} className="toggle-menu">
                <i className="ti ti-menu-2"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <Search search={search} setSearch={setSearch} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  );
};

export default Navbar;