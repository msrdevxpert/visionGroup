"use client";

import Footer from "@/components/home2/Footer";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {children}
      <Footer />
    </>
  );
}
