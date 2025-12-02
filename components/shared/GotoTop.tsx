"use client";

import { useEffect, useState } from "react";

const GotoTop = () => {
  const [scrolled, setScrolled] = useState(false);
  const gotTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <button onClick={gotTop} className={`back-to-top ${scrolled ? "show" : ""}`}>
      <i className="ti ti-arrow-up"></i>
    </button>
  );
};

export default GotoTop;
