"use client";
import navbarData from "@/public/data/navbarData";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import AnimateHeight from "react-animate-height";
import { isActive } from "./Functions";
type Props = {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ mobileMenu, setMobileMenu }: Props) => {
  const [open, setOpen] = useState<null | number>(null);
  const path = usePathname();
  return (
    <>
      <header className={`mobile-menu d-lg-none mini-scrollbar ${mobileMenu ? "open" : ""}`}>
        <div className="container g-0 g-lg-1">
          <nav id="navbar-menu-mobile" className="px-2 px-lg-0">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link href="/">
                <Image src={logo} alt="" />
              </Link>
              <i className="ti ti-x text-white fs-2 close-menu" onClick={() => setMobileMenu(false)}></i>
            </div>
            <ul className="mb-0 menu">
              {navbarData.map(({ id, title, link, submenus }) =>
                submenus ? (
                  <li className="submenu" key={id}>
                    <span
                      onClick={() => {
                        setOpen((p) => (p == id ? null : id));
                      }}
                      className={`${isActive(path, submenus) ? "active" : ""}`}
                    >
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <AnimateHeight className="w-100" height={id == open ? "auto" : 0}>
                      <ul className={`submenu-dropdown`}>
                        {submenus.map(({ id, title, link }) => (
                          <li key={id}>
                            <Link className={`${link == path ? "active" : ""}`} onClick={() => setMobileMenu(false)} href={link}>
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  </li>
                ) : (
                  <li key={id}>
                    <Link href={link} onClick={() => setMobileMenu(false)} className={`d-flex align-items-center ${path == link ? "active" : ""}`}>
                      {title}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link href="/contact-us" className="primary-btn max-w-full w-100">
              Get a Quote <i className="ti ti-arrow-up-right"></i>
            </Link>
          </nav>
        </div>
      </header>
      <div className="mobile-menu-overlay d-lg-none" onClick={() => setMobileMenu(false)}></div>
    </>
  );
};

export default MobileMenu;
