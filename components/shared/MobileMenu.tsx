"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import AnimateHeight from "react-animate-height";
import { isActive } from "./Functions";
import Modal from "./Modal";
import QuoteForm from "../quote/quote";

type Props = {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
  navbarData: any[];
  logo?: string | StaticImageData;
};

const MobileMenu = ({ mobileMenu, setMobileMenu, navbarData, logo }: Props) => {
  // FIXED: Always start with an empty array
  const [mobMenu, setMobMenu] = useState<any[]>([]);

  // FIXED: Update state when navbarData arrives
 useEffect(() => {
    if (navbarData && Array.isArray(navbarData)) {
      setMobMenu(navbarData);
    }
    console.log(navbarData);
    
  }, [navbarData]);

  const [open, setOpen] = useState<null | number>(null);
  const path = usePathname();

  return (
    <>
      <header className={`mobile-menu d-lg-none mini-scrollbar ${mobileMenu ? "open" : ""}`}>
        <div className="container g-0 g-lg-1">
          <nav id="navbar-menu-mobile" className="px-2 px-lg-0">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link href="/">
               <Image src={logo || "Vision Group"} alt="Vision Group" style={{width:"100px", height:"80px"}} /> 
              </Link>
              <i className="ti ti-x text-white fs-2 close-menu" onClick={() => setMobileMenu(false)}></i>
            </div>

            <ul className="mb-0 menu">
              {mobMenu.map(({ id, title, link, submenus }) =>
                Array.isArray(submenus) && submenus.length > 0 ? (
                  <li className="submenu" key={id}>
                    <span
                      onClick={() => setOpen((p) => (p === id ? null : id))}
                      className={`${isActive(path, submenus) ? "active" : ""}`}
                    >
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>

                    <AnimateHeight className="w-100" height={id === open ? "auto" : 0}>
                      <ul className="submenu-dropdown">
                        {submenus?.map(({ id, title, link }) => (
                          <li key={id}>
                            <Link
                              className={`${link === path ? "active" : ""}`}
                              onClick={() => setMobileMenu(false)}
                              href={link}
                            >
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  </li>
                ) : (
                  <li key={id}>
                    <Link
                      href={link}
                      onClick={() => setMobileMenu(false)}
                      className={`d-flex align-items-center ${path === link ? "active" : ""}`}
                    >
                      {title}
                    </Link>
                  </li>
                )
              )}
            </ul>

           <button
  type="button"
  className="primary-btn max-w-full w-100"
  data-bs-toggle="modal"
  data-bs-target="#quoteModal"
>
  Get a Quote <i className="ti ti-arrow-up-right"></i>
</button>

          </nav>
        </div>
      </header>

      <div className="mobile-menu-overlay d-lg-none" onClick={() => setMobileMenu(false)}></div>
      <Modal id="quoteModal" title="Request a Quote">
  <QuoteForm />
</Modal>
    </>
  );
};

export default MobileMenu;
