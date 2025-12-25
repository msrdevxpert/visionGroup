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
    { name: "Settings", path: "/admin/settings" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Services", path: "/admin/services" },
    { name: "Team", path: "/admin/team" },
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
