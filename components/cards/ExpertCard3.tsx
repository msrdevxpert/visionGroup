"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
type Props = {
  image: StaticImageData | string;
  name: string;
  position: string;
};
const ExpertCard3 = ({ image, name, position }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    setIsActive(true);
  };

  const handleMouseOut = () => {
    setIsActive(false);
  };
  return (
    <div className="expert-card">
      <div className="img-box">
        <Image src={image} className="w-100" alt="expert image" />
        <div className="social">
          <ul className={`links mb-0 list-unstyled ${isActive ? "active" : ""}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <li>
              <a href="#">
                <i className="ti ti-brand-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti ti-brand-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti ti-brand-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti ti-brand-linkedin"></i>
              </a>
            </li>
          </ul>
          <button className="social-btn z-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <i className="ti ti-plus"></i>
          </button>
        </div>
      </div>
      <div className="text-center mt-4 position-relative z-3">
        <h5 className="fw-semibold">{name}</h5>
        <p className="mb-3">{position}</p>
      </div>
    </div>
  );
};

export default ExpertCard3;
