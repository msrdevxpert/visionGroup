"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const path = usePathname();

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/users" },
    // { name: "Settings", path: "/admin/settings" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Services", path: "/admin/services" },
    { name: "Team", path: "/admin/team" },
    { name: "Partners", path: "/admin/partners" },
    { name: "Testimonials", path: "/admin/testimonials" },
    { name: "Agriculture Schemes", path: "/admin/agricultureScheme" },
    { name: "Careers", path: "/admin/careers" },
    { name: "Certifications", path: "/admin/certifications" },
    { name: "Blog", path: "/admin/blog" },
    { name: "Gallery", path: "/admin/gallery" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <aside className={`admin-sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="logo">Admin</h2>

        <nav>
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`admin-link ${path === item.path ? "active" : ""}`}
              onClick={() => toggleSidebar()} // close sidebar on link click (mobile)
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
