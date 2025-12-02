import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  id: number;
  imgSrc: StaticImageData | string;
  date: {
    day: string;
    month: string;
  };
  title: string;
  description: string;
}

const BlogGridCard: React.FC<BlogCardProps> = ({ id, imgSrc, date, title, description }) => {
  return (
    <div className="blog-grid">
      <div className="blog-img">
        <div className="reveal reveal--right reveal--overlay overflow-hidden">
          <Image src={imgSrc} className="w-100" alt={title} />
        </div>
        <div className="date">
          <h3>{date.day}</h3>
          <p>{date.month}</p>
        </div>
      </div>
      <div className="blog-content">
        <h4 className="fade_up_anim">{title}</h4>
        <p className="mb-4 fade_up_anim">{description}</p>
        <Link href={`/blogs/${id}`} className="primary-btn">
          Read Blog <i className="ti ti-arrow-up-right fs-4"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogGridCard;
