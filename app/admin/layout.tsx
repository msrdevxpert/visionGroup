"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import "@/public/admin/styles.css";
import Footer from "@/components/admin/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    // 🚨 No token → redirect
    if (!token) {
      router.replace("/sign-in");
      return;
    }

    // ✅ read user name safely
    try {
      const authData = JSON.parse(localStorage.getItem("authLogin") || "{}");
      setFullName(authData.fullName || "");
    } catch {
      console.error("Invalid authLogin JSON");
    }

    setLoading(false);

    // 🚫 Prevent going back to protected pages after logout
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, [router]);

  // ⏳ prevent flash before redirect
  if (loading) return null;

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="admin-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="admin-main">
        <Topbar fullName={fullName} toggleSidebar={toggleSidebar} />

        <div className="admin-content">{children}</div>

        <Footer />
      </main>
    </div>
  );
}
