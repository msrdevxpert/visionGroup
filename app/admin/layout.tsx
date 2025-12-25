"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import "@/public/admin/styles.css";
import Footer from "@/components/admin/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const authData = localStorage.getItem("authLogin");

    if (authData) {
      try {
       const user = JSON.parse(localStorage.getItem("authLogin") || "{}");
         setFullName(user.fullName || "");
      } catch (error) {
        console.error("Invalid authLogin JSON");
      }
    }
  }, []);

  return (
    <div className="admin-container">
      <Sidebar />

      <main className="admin-main">
        <Topbar fullName={fullName} />
        <div className="admin-content">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
