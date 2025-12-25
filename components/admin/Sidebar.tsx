"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
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
    <aside className="admin-sidebar">
      <h2 className="logo">Admin</h2>

      <nav>
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`admin-link ${
              path === item.path ? "active" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
