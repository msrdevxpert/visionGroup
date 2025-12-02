import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface ExpertCardProps {
  name: string;
  title: string;
  number: string;
  image: StaticImageData | string;
  facebookLink?: string;
  twitterLink?: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ name, title, number, image, facebookLink = "#", twitterLink = "#" }) => {
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
        <Image src={image} className="img-fluid" alt="expert image" />
        <div className="social">
          <ul className={`links mb-0 ${isActive ? "active" : ""}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <li>
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <i className="ti ti-brand-facebook"></i>
              </a>
            </li>
            <li>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <i className="ti ti-brand-twitter"></i>
              </a>
            </li>
          </ul>
          <button className="social-btn z-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <i className={`ti ${isActive ? "ti-minus" : "ti-plus"}`}></i>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between card-footer align-items-end">
        <div>
          <h5 className="fw-semibold">{name}</h5>
          <p className="mb-0">{title}</p>
        </div>
        <div className="number">{number}</div>
      </div>
    </div>
  );
};

export default ExpertCard;
