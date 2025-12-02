"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
type Props = {
  id: number;
  name: string;
  position: string;
  image: StaticImageData | string;
};
const ExpertCard2 = ({ image, name, position }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    setIsActive(true);
  };

  const handleMouseOut = () => {
    setIsActive(false);
  };
  return (
    <div className="expert-card-2">
      <div className="img-box">
        <Image src={image} className="img-fluid" alt="expert image" />
      </div>
      <div className="d-flex card-footer position-relative align-items-center gap-3">
        <ul className={`links mb-0 ${isActive ? "active" : ""}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
        </ul>
        <button className="social-btn z-2 mt-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <i className={`ti ${isActive ? "ti-minus" : "ti-plus"}`}></i>
        </button>
        <div>
          <h5 className="fw-semibold">{name}</h5>
          <p className="mb-0">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard2;
