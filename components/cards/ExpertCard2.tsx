"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type SocialLink = {
  platform: string;
  link: string;
  iconClass: string;
};

type Props = {
  id: number;
  name: string;
  position: string;
  image: StaticImageData | string;
  socialLinks: SocialLink[];
};

const ExpertCard2 = ({ image, name, position, socialLinks }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="expert-card-2">
      <div className="img-box">
        <Image
          src={image}
          className=""
          alt="expert image"
          width={100}
          height={100}
        />
      </div>

      <div className="d-flex card-footer position-relative align-items-center gap-3">
        <ul
          className={`links mb-0 ${isActive ? "active" : ""}`}
          onMouseOver={() => setIsActive(true)}
          onMouseOut={() => setIsActive(false)}
        >
          {socialLinks?.map((s, index) => (
            <li key={index}>
              <a href={s.link} target="_blank" rel="noopener noreferrer">
                <i className={s.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>

        <button
          className="social-btn z-2 mt-2"
          onMouseOver={() => setIsActive(true)}
          onMouseOut={() => setIsActive(false)}
        >
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
