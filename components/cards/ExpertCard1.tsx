import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface ExpertCardProps {
  name: string;
  title: string;
  number: string;
  image: StaticImageData | string;
  facebookLink?: string;
  twitterLink?: string;
  linkedinLink?: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
  name,
  title,
  number,
  image,
  facebookLink = "#",
  twitterLink,
  linkedinLink,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="expert-card">
      <div
        className="img-box"
        style={{ position: "relative", width: "100%", height: "280px" }}
      >
        <Image
          src={image}
          alt="expert image"
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          style={{ objectFit: "cover" }}
        />

        <div className="social">
          <ul
            className={`links mb-0 ${isActive ? "active" : ""}`}
            onMouseOver={() => setIsActive(true)}
            onMouseOut={() => setIsActive(false)}
          >
            <li>
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <i className="ti ti-brand-facebook"></i>
              </a>
            </li>

            {twitterLink && (
              <li>
                <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                  <i className="ti ti-brand-twitter"></i>
                </a>
              </li>
            )}
          </ul>

          <button
            className="social-btn z-2"
            onMouseOver={() => setIsActive(true)}
            onMouseOut={() => setIsActive(false)}
          >
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
