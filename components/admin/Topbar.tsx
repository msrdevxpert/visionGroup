"use client";

import { useRouter } from "next/navigation";
import { Menu } from "react-feather";

interface TopbarProps {
  fullName: string;
  toggleSidebar: () => void; // new prop for mobile sidebar
}

export default function Topbar({ fullName, toggleSidebar }: TopbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");

      // Call logout API
      await fetch(
        "https://visiongreen-production.up.railway.app/api/v1/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("authToken");
      localStorage.removeItem("authLogin");

      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
      localStorage.removeItem("authToken");
      localStorage.removeItem("authLogin");
      router.push("/login");
    }
  };

  return (
    <header className="admin-topbar d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
      {/* Hamburger for mobile */}
      <button
        className="d-md-none btn btn-outline-secondary me-2"
        onClick={toggleSidebar}
      >
        <Menu size={20} />
      </button>

      <span className="fs-5">Welcome, {fullName}</span>

      <button
        onClick={handleLogout}
        className="btn btn-outline-danger btn-sm"
      >
        Logout
      </button>
    </header>
  );
}
