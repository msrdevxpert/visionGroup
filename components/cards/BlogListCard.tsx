import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type BlogType = {
  id: number;
  imgSrc: StaticImageData;
  date: {
    day: string;
    month: string;
  };
  title: string;
  description: string;
};
const BlogListCard = ({ id, date, description, imgSrc, title }: BlogType) => {
  return (
    <div className="blog-list">
      <div className="blog-img">
        <div className="reveal reveal--right reveal--overlay">
          <Image src={imgSrc} alt="" />
        </div>
        <div className="date">
          <h3>{date.day}</h3>
          <p>{date.month}</p>
        </div>
      </div>
      <div className="blog-content">
        <h4 className="mb-2">{title}</h4>
        <p className="mb-4">{description}</p>
        <Link href={`/blogs/${id}`} className="primary-btn">
          Read Blog <i className="ti ti-arrow-up-right fs-4"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogListCard;
