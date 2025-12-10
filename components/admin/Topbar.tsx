"use client";

import { useRouter } from "next/navigation";

export default function Topbar({ fullName }: { fullName: string }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");

      // Call logout API
      await fetch("https://visiongreen-production.up.railway.app/api/v1/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // send token in Authorization header
        },
      });

      // Clear localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("authLogin");

      // Redirect to login page
      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still clear localStorage and redirect even if API fails
      localStorage.removeItem("authToken");
      localStorage.removeItem("authLogin");
      router.push("/login");
    }
  };

  return (
    <header className="admin-topbar d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
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
