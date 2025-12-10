"use client";
import Link from "next/link";
import React, { useEffect } from "react";

type CircularTextProps = {
  dataText?: string;
};

const defaultText = "explore more . explore more . ";

const CircularText: React.FC<CircularTextProps> = ({ dataText }) => {
  useEffect(() => {
    const texts = document.querySelectorAll<HTMLParagraphElement>(".text");

    texts.forEach((text) => {
      const str = dataText || defaultText;
      text.innerHTML = ""; // Clear existing content

      for (let i = 0; i < str.length; i++) {
        const span = document.createElement("span");
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${12 * i}deg)`;
      }
    });
  }, [dataText]);

  return (
    <Link href="/services" className="circular-text-big order-2 order-md-1">
      <p className="text" data-text={dataText}></p>
      <div className="inner">
        <button>
          <i className="ti ti-arrow-up-right"></i>
        </button>
      </div>
    </Link>
  );
};

export default CircularText;
